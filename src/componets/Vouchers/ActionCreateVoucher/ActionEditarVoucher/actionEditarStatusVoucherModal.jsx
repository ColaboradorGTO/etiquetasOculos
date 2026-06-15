import { Fragment, useEffect } from "react"
import Modal from 'react-bootstrap/Modal';
import { HeaderModal } from "../../../Modais/HeaderModal/HeaderModal";
import { ButtonTypeModal } from "../../../Buttons/ButtonTypeModal";
import { FooterModal } from "../../../Modais/FooterModal/footerModal";
import { formatMoeda } from "../../../../utils/formatMoeda";
import Select from 'react-select';
import { InputFieldModal } from "../../../Buttons/InputFieldModal";
import { useEditarStatusVoucher } from "../hooks/useEditarStatusVoucher";
import { ActionListaVendaOrigem } from "./actionListaVendaOrigem";
import { ActionListaVendaDestino } from "./actionListaVendaDestino";
import { ocultaParteDosDadosVoucher } from "../../../../utils/ocultarParte";
import { retornaDiasEntreDatas } from "../../../../utils/retornoEntreDias";
import { Message } from "primereact/message";
import { mascaraCNPJ } from "../../../../utils/mascaraCNPJ";
import { mascaraCPF } from "../../../../utils/formatCPF";
import { toFloat } from "../../../../utils/toFloat";



export const ActionEditarStatusVoucherModal = ({ show, handleClose, dadosEditarVoucher, usuarioLogado, optionsModulos, refetchListaVouchers }) => {
  const {
    onSubmit,
    handleChangeTroca,
    handleChangeStatus,
    optionsTroca,
    optionsStatus,
    customStyles,
    trocaSelecionado,
    statusSelecionado,
    motivoTroca,
    numeroVoucher,
    setNumeroVoucher,
    setMotivoTroca,
    statusFoiTrocado,
    setStatusFoiTrocado
  } = useEditarStatusVoucher({ dadosEditarVoucher, optionsModulos, usuarioLogado, handleClose, refetchListaVouchers })

  let diasEmAposCompra = retornaDiasEntreDatas(dadosEditarVoucher[0]?.voucher.DTHORAFECHAMENTOVENDAORIGEM);
  let stEdicao = true;
  let msgUser = '';

  if (usuarioLogado?.DSFUNCAO !== 'TI' && usuarioLogado?.DSFUNCAO !== 'SUPERVISOR') {
    if (usuarioLogado?.DSFUNCAO.includes('OPERADOR')) {
      if (usuarioLogado?.IDGRUPOEMPRESARIAL == 4 || diasEmAposCompra > 32) {
        stEdicao = false;
        msgUser = 'Usuário Com Permissão Apenas de Visualização, Solicite a Autorização ao Seu Gerente ou Lider para Mudança de Status do Voucher';
      }
    }

    if (trocaSelecionado !== 'DEFEITO') {

      if (statusSelecionado !== 'EM ANALISE' || diasEmAposCompra > 180) {
        stEdicao = false;
        msgUser = 'Usuário Com Permissão Apenas de Visualização, Solicite a Autorização Do Suporte de Vendas Para Mudança de Status do Voucher';
      }

      if (diasEmAposCompra > 60 && diasEmAposCompra < 180) {
        stEdicao = false;
        msgUser = 'Usuário Com Permissão Apenas de Visualização, Solicite a Autorização Da Supervisão para Mudança de Status do Voucher';
      }
    }
  }

  const cpfCnpjCliente = dadosEditarVoucher[0]?.voucher.NUCPFCNPJ?.length
    ? dadosEditarVoucher[0]?.voucher.NUCPFCNPJ?.length <= 11
      ? mascaraCPF(dadosEditarVoucher[0]?.voucher.NUCPFCNPJ)
      : mascaraCNPJ(dadosEditarVoucher[0]?.voucher.NUCPFCNPJ)
    : '';

  useEffect(() => {
    let statusVoucher = dadosEditarVoucher[0]?.voucher.STSTATUS;
    let nuVoucher = dadosEditarVoucher[0]?.voucher.NUVOUCHER;
    let stAtivo = dadosEditarVoucher[0]?.voucher.STATIVO;
    let stCancelado = dadosEditarVoucher[0]?.voucher.STCANCELADO;

    if (stAtivo == 'True' && (statusVoucher == 'NOVO' || !statusVoucher)) {
      statusVoucher = 'NOVO';
    } else if (stAtivo == 'False' && statusVoucher == 'EM ANALISE') {
      nuVoucher = ocultaParteDosDadosVoucher(nuVoucher);
    } else if (stAtivo == 'True' && statusVoucher == 'LIBERADO PARA O CLIENTE') {
      statusVoucher = 'LIBERADO PARA O CLIENTE';
    } else if (stAtivo == 'False' && stCancelado == 'False' && (!statusVoucher || statusVoucher == 'FINALIZADO')) {
      statusVoucher = 'FINALIZADO';
    } else if (stCancelado == 'True' && stAtivo == 'False' && (!statusVoucher || statusVoucher == 'CANCELADO')) {
      statusVoucher = 'CANCELADO';
    } else {
      statusVoucher = 'FINALIZADO';
    }

    if (dadosEditarVoucher[0] && dadosEditarVoucher[0].voucher) {
      dadosEditarVoucher[0].voucher.STSTATUS = statusVoucher;
    }

    setNumeroVoucher(nuVoucher);
  }, [dadosEditarVoucher, numeroVoucher]);

  const showTipoTrocaRow = usuarioLogado?.DSFUNCAO === 'TI' || usuarioLogado?.DSFUNCAO === 'SUPERVISOR' || 'disabled';



  return (
    <Fragment>
      <Modal
        show={show}
        onHide={handleClose}
        size="xl"
        className="modal fade"
        tabIndex={-1}
        role="dialog"
        aria-hidden="true"
      >

        <HeaderModal
          title={"Detalhes do Voucher"}
          subTitle={"Detalhes e Atualização de Status"}
          handleClose={handleClose}
        />

        <Modal.Body>
          <div className="mb-3">

            <Message
              severity="error"
              text={msgUser}
            >

            </Message>
          </div>
          <form onSubmit={onSubmit}>

            <div>
              <div>
                <p>Cliente: {dadosEditarVoucher[0]?.voucher.DSNOMERAZAOSOCIAL || dadosEditarVoucher[0]?.voucher.DSAPELIDONOMEFANTASIA || ""} </p>
              </div>
              <div>
                <p>CPF/CNPJ: {cpfCnpjCliente}</p>
              </div>
              <div>
                <p>Voucher: {numeroVoucher} </p>
                <p>Valor Voucher: {formatMoeda(toFloat(dadosEditarVoucher[0]?.voucher.VRVOUCHER))} </p>
                <p>Venda Origem: {dadosEditarVoucher[0]?.voucher.IDRESUMOVENDAWEB ? dadosEditarVoucher[0]?.voucher.IDRESUMOVENDAWEB : 'Não Disponível'} </p>
                <p>{`Motivo Troca: ${dadosEditarVoucher[0]?.voucher.STCANCELADO == 'True' ? 'Motivo do Cancelamento/Negação' : dadosEditarVoucher[0]?.voucher.DSMOTIVOCANCELAMENTO || ''}`}  {dadosEditarVoucher[0]?.voucher.MOTIVOTROCA || ''} </p>

              </div>
              {showTipoTrocaRow && (
                <div className="row">
                  <div className="col-sm-6 mb-4">
                    <label>
                      Tipo Troca
                    </label>

                    <Select
                      value={optionsTroca.find(option => option.value === trocaSelecionado)}
                      options={optionsTroca}
                      onChange={handleChangeTroca}
                      isDisabled={!stEdicao}
                      styles={customStyles}
                    />
                  </div>
                </div>
              )}
              <div className="row">

                <div className="col-sm-6 mb-4">
                  <label>
                    Status do Voucher:
                  </label>
                  <Select
                    value={optionsStatus.find(option => option.value === statusSelecionado)}
                    options={optionsStatus}
                    onChange={handleChangeStatus}
                    styles={customStyles}
                    isDisabled={!stEdicao}
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-sm-12 mb-4">
                  {statusFoiTrocado && (

                    <InputFieldModal
                      type="text"
                      label={"Motivo Troca"}
                      value={motivoTroca}
                      onChangeModal={(e) => setMotivoTroca(e.target.value)}
                      placeholder={"MOTIVO DA TROCA DE STATUS"}
                      readOnly={!stEdicao}
                    />
                  )}
                </div>
              </div>
            </div>
          </form>


          <div style={{ marginTop: '2rem' }}>

            <ActionListaVendaOrigem
              dadosEditarVoucher={dadosEditarVoucher}
              usuarioLogado={usuarioLogado}
            />

            <ActionListaVendaDestino
              dadosEditarVoucher={dadosEditarVoucher}
              usuarioLogado={usuarioLogado}
            />
          </div>
        </Modal.Body>
        {stEdicao && (

          <FooterModal
            ButtonTypeConfirmar={ButtonTypeModal}
            textButtonConfirmar={"Atualizar"}
            onClickButtonConfirmar={onSubmit}
            corConfirmar="success"

            ButtonTypeFechar={ButtonTypeModal}
            onClickButtonFechar={handleClose}
            textButtonFechar={"Fechar"}
            corFechar="secondary"
          />
        )}

      </Modal>
    </Fragment>
  )
}