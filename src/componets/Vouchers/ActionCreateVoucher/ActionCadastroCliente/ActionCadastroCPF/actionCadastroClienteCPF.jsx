import React, { Fragment } from "react";
import Modal from 'react-bootstrap/Modal';
import { HeaderModal } from "../../../../Modais/HeaderModal/HeaderModal";
import { FormularioCadastro } from "./formularioCadastro";


export const ActionCadastroClienteCPF = ({ show, handleClose, usuarioLogado, optionsModulos, optionsCPF }) => {

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
          title={"Cadastro do Cliente"}
          subTitle={"Cadastro e atualização de dados do Cliente"}
          handleClose={handleClose}
        />

        <Modal.Body>

          <FormularioCadastro
            handleClose={handleClose}
            usuarioLogado={usuarioLogado}
            optionsModulos={optionsModulos}
            optionsCPF={optionsCPF}
          />

        </Modal.Body>

      </Modal>
    </Fragment>
  )
}