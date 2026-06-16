import { Fragment, useRef } from "react";
import Modal from 'react-bootstrap/Modal';
import './styles.css';
import { formatMoeda } from "../../../../../utils/formatMoeda";
import { ReactBarcode } from 'react-jsbarcode';
import { ButtonTypeModal } from "../../../../Buttons/ButtonTypeModal";
import { MdOutlineLocalPrintshop } from "react-icons/md";
import { isValidEAN13 } from "../../../../../utils/isValidEAN13";
import { enviarZPLParaImpressora } from "../../../../../utils/labelPrinterService";
import Swal from "sweetalert2";
import { HeaderModal } from "../../../../Modais/HeaderModal/HeaderModal";
import { FooterModal } from "../../../../Modais/FooterModal/footerModal";

const calcularEstiloPreco = (precoFormatado) => {
  const length = precoFormatado.length;
  let fontSize = 1.2;
  let jsContent = length <= 11 ? 'center' : 'flex-start';
  let vrDiferencaLength = 0;

  if (length > 12) vrDiferencaLength = length - 12;
  if (length >= 15) vrDiferencaLength = length - 14;

  const vrCompensacao = vrDiferencaLength / 10;
  fontSize = length <= 12 ? 2 : Number(fontSize - vrCompensacao).toFixed(3);

  return { fontSize: fontSize + 'em', justifyContent: jsContent };
};

export const ActionEtiquetaOculosModal = ({
  show,
  handleClose,
  produtosSelecionados,
  dadosAcumuladorEtiquetas,
  copia
}) => {


  const dataTableRef = useRef();
  const handlePrintZPL = async () => {
    try {
      let startPageLabel = `
        ^XA
        ^PR2
        ^MD15
        ^FWN
        ^PW800
        ^LL80
        ^CI28
      `;
      let endPageLabel = '^XZ';
      let dataLabelsZPL = '';

      for (let i = 0; i < etiquetas.length; i++) {
        let {
          DSNOME: descricaoProd,
          NUCODBARRAS: codBarras,
          PRECOVENDA: precoVenda,
          quantidade: qtdEtiqueta,
        } = etiquetas[i];

        codBarras = codBarras?.toString() || '';
        qtdEtiqueta = parseInt(qtdEtiqueta || 1);

        if (!isValidEAN13(`${codBarras}`)) {
          throw new Error(`O código de barras(${codBarras}) do produto(${descricaoProd}) da linha: ${i + 1} está em formato inválido, entre em contato com o departamento de cadastro de produtos`);
        }

        precoVenda = formatMoeda(precoVenda || 0);

        for (let j = 0; j < qtdEtiqueta; j++) {
          let widthFontPrecoVenda = precoVenda.length > 12 ? 35 : 40;

          dataLabelsZPL += `
            ${startPageLabel}
            ^FO5,25^A0,40,${widthFontPrecoVenda}^FB268,1,1,C,0^FD${precoVenda}^FS
            ^BY1.6,3,500
            ^FO290,5
            ^BEN,55,Y,N
            ^FD${codBarras}^FS
            ${endPageLabel}
          `;
        }
      }

      const comandosZPLFinais = dataLabelsZPL
        .replace(/^[ \t]+/gm, '')
        .replace(/^\s*$/gm, '');

      await enviarZPLParaImpressora(comandosZPLFinais);

    } catch (error) {
      console.error('❌ Erro ao gerar/imprimir comandos ZPL:', error);

      Swal.fire({
        icon: 'error',
        title: 'Erro na Impressão ZPL',
        text: error.message || 'Erro desconhecido ao processar etiquetas',
        confirmButtonText: 'OK',
        customClass: {
          container: 'custom-swal',
        }
      });
    }
  }

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
      quantidade: 1
    }));
  });

  const totalPaginas = etiquetas.length;

  return (
    <Fragment>
      <Modal
        show={show}
        onHide={handleClose}
        size="xl"
        className="modal fade"
        role="dialog"
      >
        <HeaderModal
          title={"Etiquetas"}
          subTitle={"Etiquetas"}
          handleClose={handleClose}
        />
        <Modal.Body>
          <Fragment>
            <header className="row" style={{ justifyContent: "space-between" }}>
              <div className="ml-3">
                <p style={{ margin: '0px' }}>Qtd: Páginas <b>{totalPaginas + ' ' + 'Páginas'}</b></p>
                <p>Qtd Etiquetas: <b>{etiquetas.length} unidades</b></p>
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
              {etiquetas.map((etiqueta, index) => {
                const precoFormatado = formatMoeda(etiqueta?.PRECOVENDA);
                const { fontSize, justifyContent } = calcularEstiloPreco(precoFormatado);

                return (
                  <div className="etiqueta-oculos-page rounded" key={index}>

                    <div className="etiqueta-oculos-page-number hidden-print">{index + 1}</div>

                    <div className="etiqueta-oculos-card-preco border-dark rounded">
                      <div className="preco-oculos" style={{ fontSize, justifyContent }}>
                        <h2 style={{ margin: '1px', fontSize: '40px' }}>
                          {precoFormatado}
                        </h2>
                      </div>
                    </div>

                    <div className="etiqueta-oculos-card border-dark rounded">
                      <div className="codbarras-oculos">
                        {isValidEAN13(`${etiqueta?.NUCODBARRAS}`) ? (
                          <ReactBarcode
                            value={etiqueta?.NUCODBARRAS}
                            options={{
                              format: "EAN13",
                              textAlign: "center",
                              margin: 0,
                              height: 65,
                              width: 3,
                              fontSize: 10,
                            }}
                            renderer="svg"
                            className="svgEtiqueta"
                          />
                        ) : (
                          <p style={{ color: 'red', fontWeight: 'bold' }}>
                            Código de barras inválido: {etiqueta?.NUCODBARRAS}
                          </p>
                        )}
                      </div>
                    </div>

                  </div>
                );
              })}
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