import { Fragment, useRef } from "react";
import Modal from 'react-bootstrap/Modal';
import './styles.css';
import { formatMoeda } from "../../../../utils/formatMoeda";
import { ReactBarcode } from 'react-jsbarcode';
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

export const ActionImprimirEtiquetaModal = ({
  show,
  handleClose,
  produtosSelecionados,
  dadosAcumuladorEtiquetas,
  copia
}) => {

  
  const dataTableRef = useRef();
  const handlePrintZPL = async () => {
    try {
      // Início da página ZPL
      let startPageLabel = `
        ^XA
        ^FWN
        ^PW850
        ^LL320
        ^CI28
        ^BY2,3,55
      `;
      const zplResetConfiguracao = `
        ^XA
        ^MD10
        ^FWN
        ^PW850
        ^LL320
        ^CI28
        ^XZ
      `;
      let endPageLabel = '^XZ';
      let dataLabelsZPLToPrint = startPageLabel;
      let contador = 0;

      // Processa cada etiqueta do acumulador
      for (let i = 0; i < etiquetas.length; i++) {
        let {
          DSNOME: descricaoProd,
          DSESTILO: estiloProd,
          TAMANHO: tamanhoProd,
          PRECOVENDA: precoVenda,
          NUCODBARRAS: codBarras,
          quantidade: qtdEtiqueta,
          DSLOCALEXPOSICAO: localExpProd,
          DSLISTAPRECO: listaPreco,
          MARCA: marcaProd
        } = etiquetas[i];

        // Limpa e converte dados para ZPL (remove acentos e caracteres especiais)
        descricaoProd = descricaoProd?.toString().normalize("NFD").replace(/[\u0300-\u036f]/g, "") || '';
        estiloProd = estiloProd?.toString().normalize("NFD").replace(/[\u0300-\u036f]/g, "") || '';
        localExpProd = localExpProd?.toString().normalize("NFD").replace(/[\u0300-\u036f]/g, "") || '';
        tamanhoProd = tamanhoProd?.toString().toUpperCase() || '';
        precoVenda = formatMoeda(precoVenda || 0);
        codBarras = codBarras?.toString() || '';
        qtdEtiqueta = parseInt(qtdEtiqueta || 1);

        // Valida código de barras EAN13
        if (!isValidEAN13(`${codBarras}`)) {
          console.error(`❌ Código de barras inválido: ${codBarras}`);
          throw new Error(`O código de barras(${codBarras}) do produto(${descricaoProd}) da linha: ${i + 1} está em formato inválido, entre em contato com o departamento de cadastro de produtos`);
        }

        // Para cada quantidade de etiqueta solicitada
        for (let j = 0; j < qtdEtiqueta; j++) {
          let priceLength = precoVenda.length;
          let ajustePositionPrice = priceLength > 7 ? (priceLength - 7) * 15 : 0;
          let ajusteFontSizePrice = priceLength <= 11 ? 0 : 5;
          let positionDefault = (contador * 280) + 5;
          let positionPrice = 135 + positionDefault - ajustePositionPrice;
          let positionTamanho = positionDefault + (tamanhoProd.length == 1 ? 15 : tamanhoProd.length == 2 ? 10 : 5 );
          let positionCodBars = 40 + positionDefault;
          let fontSizePrice = 35 - ajusteFontSizePrice;
          let widthBorder = 50 + ( tamanhoProd.length > 2 ? 10 : 0 );
          let abrirMaisUmaPagina = (j + 1) < qtdEtiqueta || (i + 1) < etiquetas.length;

          dataLabelsZPLToPrint += `
             ^FO${positionDefault},110^A0N,22,28^FB265,4,1,L,0^FD${descricaoProd}^FS
          ^FO${positionDefault},210^A0N,22,20^FB265,2,0,L,0^FD${estiloProd}^FS
          ^FO${positionDefault},260^A0N,22,20^FB265,2,0,L,0^FD${localExpProd}^FS
          ^FO${positionDefault},285^A0N,22,28^FDTAM^FS
          ^FO${positionDefault},302^GB${widthBorder},30,3^FS
          ^FO${positionTamanho},309^A0N,22,28^FD${tamanhoProd}^FS
          ^FO${positionPrice},300^A0,${fontSizePrice}^FD${precoVenda}^FS
          ^FO${positionCodBars},335^BEN,55,Y,N^FD${codBarras}^FS
          `;


          // dataLabelsZPLToPrint += `^FO${positionDefault},120^A0N,20,30^FB255,4,2,L,0^FD${descricaoProd}^FS`;
          // dataLabelsZPLToPrint += `^FO${positionDefault},205^A0N,20,25^FB255,3,2,L,0^FD${estiloProd}^FS`;
          // dataLabelsZPLToPrint += `^FO${positionDefault},245^A0N,20,25^FB255,3,2,L,0^FD${localExpProd}^FS`;
          // dataLabelsZPLToPrint += `^FO${positionDefault},285^GB${widthBorder},50,3^FS`;
          // dataLabelsZPLToPrint += `^FO${positionDefault},265^A0N,22^FDTAM^FS`;
          // dataLabelsZPLToPrint += `^FO${positionPrice},300^A0,${fontSizePrice}^FD${precoVenda}^FS`;
          // dataLabelsZPLToPrint += `^FO${positionTamanho},300^A0N,22^FD${tamanhoProd}^FS`;
          // dataLabelsZPLToPrint += `^FO${positionCodBars},340^BEN,55,Y,N^FD${codBarras}^FS`;
          contador++;

          
          if (contador === 3) {
            dataLabelsZPLToPrint += endPageLabel;

            if (abrirMaisUmaPagina) {
              dataLabelsZPLToPrint += startPageLabel;
            }

            contador = 0;
          }
        }
      }
  
     
      if (contador !== 0) {
        dataLabelsZPLToPrint += endPageLabel;
      }

      
      const comandosZPLFinais = dataLabelsZPLToPrint
        .replace(/^[ \t]+/gm, '')
        .replace(/^\s*$/gm, '')
        .replace(/\n+/g, '\n')  
        .trim();

   
      if (comandosZPLFinais.length < 10) {
        throw new Error('Comandos ZPL muito curtos - possível erro na geração');
      }

      if (!comandosZPLFinais.includes('^XA') || !comandosZPLFinais.includes('^XZ')) {
        throw new Error('Estrutura ZPL inválida - faltam comandos de início/fim');
      }

      // Envia para impressora via WebSocket
      await enviarZPLParaImpressora(`${comandosZPLFinais}${zplResetConfiguracao}`);

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

  const etiquetasPorPagina = chunkArray(etiquetas, 3);
  const totalPaginas = etiquetasPorPagina.length;

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
              {etiquetasPorPagina.map((pagina, pageIndex) => (
                <div key={pageIndex} className="etiqueta-page" style={{}}>
                  {pagina.map((etiqueta, etiquetaIndex) => (
                    <div className="etiqueta-card" key={etiquetaIndex} style={{ padding: "15px 0 0", }}>
                      <div className="dsProd" style={{ justifyContent: 'center', maxWidth: '100%' }}>
                        <h2
                          style={{ lineHeight: '1.2em', fontWeight: 400, fontSize: '1.200rem' }}
                        >
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
                          <h2
                            style={{ lineHeight: '1.3em', fontWeight: 400, fontSize: '1.375rem' }}
                          >
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
                          <p style={{ color: 'red', fontWeight: 'bold' }}>
                            Código de barras inválido: {etiqueta?.NUCODBARRAS}
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
