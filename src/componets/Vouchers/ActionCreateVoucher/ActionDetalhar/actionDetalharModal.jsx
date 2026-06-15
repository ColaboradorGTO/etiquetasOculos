import { Fragment } from "react"
import Modal from 'react-bootstrap/Modal';
import { HeaderModal } from "../../../Modais/HeaderModal/HeaderModal";
import { ButtonTypeModal } from "../../../Buttons/ButtonTypeModal";
import { FooterModal } from "../../../Modais/FooterModal/footerModal";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { formatMoeda } from "../../../../utils/formatMoeda";
import { ActionListaVendaOrigem } from "./actionListaVendaOrigem";
import { ActionListaVendaDestino } from "./actionListaVendaDestino";

export const ActionDetalharModal = ({ show, handleClose, dadosDetalheVoucher, usuarioLogado, optionsModulos }) => {


  return (
    <Fragment>
      <Modal
        show={show}
        // onHide={handleClose}
        size="xl"
        className="modal fade"
        tabIndex={-1}
        role="dialog"
        aria-hidden="true"

      >

        <div style={{ padding: "10px" }}>

          <HeaderModal
            title={"Produtos Vendas"}
            subTitle={"Produtos Vendas de Origem e Destino"}
            handleClose={handleClose}
          />

          <Modal.Body>

            <ActionListaVendaOrigem dadosDetalheVoucher={dadosDetalheVoucher} usuarioLogado={usuarioLogado} optionsModulos={optionsModulos} />
            <ActionListaVendaDestino dadosDetalheVoucher={dadosDetalheVoucher} usuarioLogado={usuarioLogado} optionsModulos={optionsModulos} />
          </Modal.Body>


          <FooterModal

            ButtonTypeFechar={ButtonTypeModal}
            textButtonFechar={"Fechar"}
            onClickButtonFechar={handleClose}
            corFechar="secondary"
          />
        </div>
      </Modal>
    </Fragment>
  )
}