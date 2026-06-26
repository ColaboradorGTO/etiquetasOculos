import { Fragment, useRef } from "react";
import Modal from "react-bootstrap/Modal";
import "./styles.css";
import { formatMoeda } from "../../../../utils/formatMoeda";
import { ReactBarcode } from "react-jsbarcode";
import { ButtonTypeModal } from "../../../Buttons/ButtonTypeModal";
import { MdOutlineLocalPrintshop } from "react-icons/md";
import { isValidEAN13 } from "../../../../utils/isValidEAN13";
import { enviarZPLParaImpressora } from "../../../../utils/labelPrinterService";
import Swal from "sweetalert2";
import { HeaderModal } from "../../../Modais/HeaderModal/HeaderModal";
import { FooterModal } from "../../../Modais/FooterModal/footerModal";

const chunkArray = (array, size) => {
  const chunks = [];
  for (let i = 0; i < array.length; i += size) {
    chunks.push(array.slice(i, i + size));
  }
  return chunks;
};

const sanitizeText = (value) =>
  (value || "")
    .toString()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[\^~]/g, "")
    .trim();

const getConfigLote = () => ({
  largura: 850,
  altura: 320,
  escuridao: 10,
  orientacao: "N",
  linguagem: "28",
});

const gerarPaginaSetupLoteZPL = (config) => {
  return [
    "^XA",
    `^MD${config.escuridao}`,
    `^FW${config.orientacao}`,
    `^PW${config.largura}`,
    `^LL${config.altura}`,
    `^CI${config.linguagem}`,
    "^FO20,20^A0N,24,24^FDSETUP LOTE ETIQUETAS^FS",
    `^FO20,55^A0N,22,22^FDLargura: ${config.largura}  Altura: ${config.altura}^FS`,
    `^FO20,88^A0N,22,22^FDEscuridao: ${config.escuridao}  Orientacao: ${config.orientacao}^FS`,
    "^FO20,121^A0N,22,22^FDInicio do lote apos esta pagina^FS",
    "^XZ",
  ].join("\n");
};

const gerarZPLEtiqueta = (etiqueta, posicaoPagina) => {
  const descricaoProd = sanitizeText(etiqueta.DSNOME);
  const estiloProd = sanitizeText(etiqueta.DSESTILO);
  const localExpProd = sanitizeText(etiqueta.DSLOCALEXPOSICAO);
  const tamanhoProd = sanitizeText(etiqueta.TAMANHO).toUpperCase();
  const precoVenda = formatMoeda(etiqueta.PRECOVENDA || 0);
  const codBarras = (etiqueta.NUCODBARRAS || "").toString();

  const priceLength = precoVenda.length;
  const ajustePositionPrice = priceLength > 7 ? (priceLength - 7) * 15 : 0;
  const ajusteFontSizePrice = priceLength <= 11 ? 0 : 5;
  const positionDefault = posicaoPagina * 280;
  const positionPrice = 135 + posicaoPagina * 280 - ajustePositionPrice;
  const positionTamanho = 10 + posicaoPagina * 280;
  const positionCodBars = 30 + posicaoPagina * 280;
  const fontSizePrice = 35 - ajusteFontSizePrice;
  const widthBorder = tamanhoProd.length > 3 ? "75" : "50";

  return [
    `^FO${positionDefault},120^A0N,20,30^FB255,4,2,L,0^FD${descricaoProd}^FS`,
    `^FO${positionDefault},205^A0N,20,25^FB255,3,2,L,0^FD${estiloProd}^FS`,
    `^FO${positionDefault},245^A0N,20,25^FB255,3,2,L,0^FD${localExpProd}^FS`,
    `^FO${positionDefault},285^GB${widthBorder},50,3^FS`,
    `^FO${positionDefault},265^A0N,22^FDTAM^FS`,
    `^FO${positionPrice},300^A0,${fontSizePrice}^FD${precoVenda}^FS`,
    `^FO${positionTamanho},300^A0N,22^FD${tamanhoProd}^FS`,
    "^BY1.6,3,500",
    `^FO${positionCodBars},340`,
    "^BEN,55,Y,N",
    `^FD${codBarras}^FS`,
  ].join("");
};

const gerarPaginasEtiquetasZPL = (etiquetas, config) => {
  const startPageLabel = [
    "^XA",
    `^MD${config.escuridao}`,
    `^FW${config.orientacao}`,
    `^PW${config.largura}`,
    `^LL${config.altura}`,
    `^CI${config.linguagem}`,
  ].join("\n");

  const endPageLabel = "^XZ";

  let zpl = startPageLabel;
  let contadorNaPagina = 0;

  for (let i = 0; i < etiquetas.length; i++) {
    const codBarras = (etiquetas[i].NUCODBARRAS || "").toString();

    if (!isValidEAN13(codBarras)) {
      throw new Error(
        `Codigo de barras invalido (${codBarras}) no produto ${sanitizeText(etiquetas[i].DSNOME)}.`
      );
    }

    zpl += gerarZPLEtiqueta(etiquetas[i], contadorNaPagina);
    contadorNaPagina += 1;

    const temMaisEtiquetas = i + 1 < etiquetas.length;

    if (contadorNaPagina === 3) {
      zpl += endPageLabel;
      if (temMaisEtiquetas) {
        zpl += startPageLabel;
      }
      contadorNaPagina = 0;
    }
  }

  if (contadorNaPagina !== 0) {
    zpl += endPageLabel;
  }

  return zpl;
};

const gerarResetZPL = (config) => {
  return [
    "^XA",
    `^MD${config.escuridao}`,
    `^FW${config.orientacao}`,
    `^PW${config.largura}`,
    `^LL${config.altura}`,
    `^CI${config.linguagem}`,
    "^XZ",
  ].join("\n");
};

const montarLoteZPLCompleto = (etiquetas) => {
  const config = getConfigLote();

  const paginaSetup = gerarPaginaSetupLoteZPL(config);
  const paginasEtiquetas = gerarPaginasEtiquetasZPL(etiquetas, config);
  const resetFinal = gerarResetZPL(config);

  const comandosZPLFinais = `${paginaSetup}\n${paginasEtiquetas}\n${resetFinal}`
    .replace(/^[ \t]+/gm, "")
    .replace(/^\s*$/gm, "")
    .replace(/\n+/g, "\n")
    .trim();

  if (comandosZPLFinais.length < 10) {
    throw new Error("Comandos ZPL muito curtos - possivel erro na geracao");
  }

  if (!comandosZPLFinais.includes("^XA") || !comandosZPLFinais.includes("^XZ")) {
    throw new Error("Estrutura ZPL invalida - faltam comandos de inicio/fim");
  }

  return comandosZPLFinais;
};

export const ActionImprimirEtiquetaModalCopia = ({
  show,
  handleClose,
  produtosSelecionados,
  dadosAcumuladorEtiquetas,
  copia,
}) => {
  const dataTableRef = useRef();

  const listaBase =
    dadosAcumuladorEtiquetas?.length
      ? dadosAcumuladorEtiquetas
      : produtosSelecionados?.length
      ? produtosSelecionados
      : [];

  const etiquetas = listaBase.flatMap((item) => {
    const total = (item.quantidade || 1) * (copia || 1);

    return Array.from({ length: total }, (_, index) => ({
      contador: index + 1,
      NUCODBARRAS: item.NUCODBARRAS,
      DSNOME: item.DSNOME,
      TAMANHO: item.TAMANHO,
      PRECOVENDA: item.PRECOVENDA,
      DSESTILO: item.DSESTILO,
      DSLISTAPRECO: item.DSLISTAPRECO,
      IDPRODUTO: item.IDPRODUTO,
      MARCA: item.MARCA,
      DSLOCALEXPOSICAO: item.DSLOCALEXPOSICAO,
      quantidade: 1,
    }));
  });

  const etiquetasPorPagina = chunkArray(etiquetas, 3);
  const totalPaginas = etiquetasPorPagina.length;

  const handlePrintZPL = async () => {
    try {
      if (!etiquetas.length) {
        Swal.fire({
          icon: "warning",
          title: "Sem etiquetas",
          text: "Selecione pelo menos um produto para imprimir.",
          customClass: {
            container: "custom-swal",
          },
        });
        return;
      }

      const zplLoteCompleto = montarLoteZPLCompleto(etiquetas);
      await enviarZPLParaImpressora(zplLoteCompleto);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Erro na Impressao ZPL",
        text: error.message || "Erro desconhecido ao processar etiquetas",
        confirmButtonText: "OK",
        customClass: {
          container: "custom-swal",
        },
      });
    }
  };

  return (
    <Fragment>
      <Modal
        show={show}
        onHide={handleClose}
        size="xl"
        className="modal fade"
        role="dialog"
      >
        <HeaderModal title={"Etiquetas (Copia)"} subTitle={"Etiquetas"} handleClose={handleClose} />

        <Modal.Body>
          <Fragment>
            <header className="row" style={{ justifyContent: "space-between" }}>
              <div className="ml-3">
                <p style={{ margin: "0px" }}>
                  Qtd: Paginas <b>{totalPaginas + " Paginas"}</b>
                </p>
                <p>
                  Qtd Etiquetas: <b>{etiquetas.length} unidades</b>
                </p>
                <p style={{ marginBottom: 0 }}>
                  Primeira pagina: <b>Setup ZPL do lote</b>
                </p>
              </div>

              <div className="d-flex gap-2">
                <ButtonTypeModal
                  textButton={"Imprimir"}
                  onClickButtonType={handlePrintZPL}
                  cor={"info"}
                  Icon={MdOutlineLocalPrintshop}
                  iconSize={20}
                />
              </div>
            </header>

            <div ref={dataTableRef}>
              {etiquetasPorPagina.map((pagina, pageIndex) => (
                <div key={pageIndex} className="etiqueta-page">
                  {pagina.map((etiqueta, etiquetaIndex) => (
                    <div className="etiqueta-card" key={etiquetaIndex} style={{ padding: "15px 0 0" }}>
                      <div className="dsProd" style={{ justifyContent: "center", maxWidth: "100%" }}>
                        <h2 style={{ lineHeight: "1.2em", fontWeight: 400, fontSize: "1.200rem" }}>
                          {etiqueta?.DSNOME}
                        </h2>
                        <p>{etiqueta?.DSESTILO}</p>
                        <p>{etiqueta?.DSLOCALEXPOSICAO}</p>
                      </div>

                      <div className="divTamanho" style={{ display: "flex", justifyContent: "space-between" }}>
                        <div className="tamanhoDesc">
                          <label>TAM</label>
                          <div className="tamanho">
                            <h2>{etiqueta?.TAMANHO}</h2>
                          </div>
                        </div>

                        <div className="preco">
                          <h2 style={{ lineHeight: "1.3em", fontWeight: 400, fontSize: "1.375rem" }}>
                            {formatMoeda(etiqueta?.PRECOVENDA)}
                          </h2>
                        </div>
                      </div>

                      <div id="codBarrasEtiqueta">
                        {isValidEAN13(`${etiqueta?.NUCODBARRAS}`) ? (
                          <ReactBarcode
                            value={etiqueta?.NUCODBARRAS}
                            options={{
                              format: "EAN13",
                              textAlign: "center",
                              margin: 0,
                            }}
                            renderer="svg"
                            className="svgEtiqueta"
                            format="EAN13"
                            width={3}
                            height={80}
                          />
                        ) : (
                          <p style={{ color: "red", fontWeight: "bold" }}>
                            Codigo de barras invalido: {etiqueta?.NUCODBARRAS}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>

            <FooterModal
              ButtonTypeFechar={ButtonTypeModal}
              textButtonFechar={"Fechar"}
              onClickButtonFechar={handleClose}
              corFechar="secondary"
            />
          </Fragment>
        </Modal.Body>
      </Modal>
    </Fragment>
  );
};
