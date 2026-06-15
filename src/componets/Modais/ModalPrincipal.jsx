import React, { Fragment, useState } from "react"
import { AiOutlineCloseCircle } from "react-icons/ai"
import Modal from 'react-bootstrap/Modal';

import { InputSelect } from "../Buttons/InputSelect";
import { ButtonType } from "../Buttons/ButtonType";
import { ButtonCadastrar } from "../Buttons/ButtonCadastrar";
import { InputFieldModal } from "../Buttons/InputFieldModal";
import { HeaderModal } from "./HeaderModal/HeaderModal";


export const ModalPrincipal = ({
  show,
  handleClose,
  ButtonCloseModal,
  ButtonCadastrarModal,
  ButtonSearchModal,
  ButtonEditModal,
  ButtonFecharModal,
  InputEmpresaModal,
  InputFuncionarioModal,
  InputDataDepositoModal,
  InputHoraDepositoModal,
  InputDataLancamentoModal,
  InputDescricaoMotivoModal,
  InputDescontoModal,
  SelectContaModal,
  ButtonTypeCadastrar,
  labelEmpresaModal,
  labelFuncionarioModal,
  labelDataDepositoModal,
  labelDataLancamentoModal,
  labelHoraDepositoModal,
  labelDescricaoMotivoModal,
  labelDescontoModal,
  labelSelectModal,
  linkNome,
  linkNomeFechar,
  headerModal,
  tituloModal,
  subTituloModal,
  descricaoTituloModal,
  options,
  id
}) => {
  // const options = [
  //   { value: "Funcionario 1", label: "Funcionario 1" },
  //   { value: "Funcionario 2", label: "Funcionario 2" },
  // ]

  return (

    <Fragment>
      <Modal
        show={show}
        onHide={handleClose}
        size="lg"
        className="modal fade"
        id="CadadiantamentoSalario"
        tabIndex={-1}
        role="dialog"
        aria-hidden="true"
      >

        <div className="" role="document">
          <div className="">
            <Modal.Header >
              {headerModal && (
                <HeaderModal 
                  title={tituloModal}
                  subTitle={subTituloModal}
                />

              )}
          
              {ButtonFecharModal &&
                <ButtonType
                  nome=""
                  onClickButtonType={handleClose}
                  cor=""
                  tipo="button"
                  Icon={AiOutlineCloseCircle}
                  iconColor="#ff0000"
                  iconSize={30}
                />
              }

            </Modal.Header>
            {/* <form id="formAdiantamentoSalario" name="formAdiantamentoSalario" method="post" encType="multipart/form-data" onsubmit="return false;"> */}
            <form id="formAdiantamentoSalario" name="formAdiantamentoSalario" method="post" encType="multipart/form-data">
              <Modal.Body>

                <div class="modal-body" id="resulmodaladiantamentosalario">
                  <div id="resultadoadiantamentosalario"></div>

                  <div class="form-group">
                    <div class="row">

                      <div class="col-sm-6 col-xl-10">
                        {InputEmpresaModal && (
                          <InputFieldModal
                            id="nomeempAdiantamento"
                            className="form-control input"
                            readOnly={true}
                            label={labelEmpresaModal}
                          />

                        )}

                      </div>
                    </div>
                  </div>

                  <div class="form-group">
                    <div class="row">

                      <div class="col-sm-6 col-xl-10">
                        {SelectContaModal && (
                          <SelectContaModal
                            id={id}
                            className="form-control input"
                            options={options}
                           
                            label={labelSelectModal}
                          />

                        )}

                      </div>
                    </div>
                  </div>

                  <div className="form-grupo">
                    <div className="row">

                      <div class="col-sm-6 col-xl-8">
                        {InputFuncionarioModal && (
                          <InputSelect
                            id="IDFuncionario"
                            options={options}
                            label={labelFuncionarioModal}

                          />

                        )}S

                      </div>
                    </div>
                  </div>
            

                  <div class="form-group">
                    <div class="row">

                      <div class="col-sm-6 col-xl-4">
                        {(InputDataDepositoModal) && (

                          <InputFieldModal
                            id="IDLancamento"
                            type="date"
                            className="form-control input"
                            readOnly={true}
                            label={labelDataDepositoModal}
                          />
                        )}
                      </div>
                      <div class="col-sm-6 col-xl-4">
                        {(InputDataLancamentoModal) && (

                          <InputFieldModal
                            id="IDLancamento"
                            type="date"
                            className="form-control input"
                            readOnly={true}
                            label={labelDataLancamentoModal}
                          />
                        )}
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="row">

                      <div class="col-sm-6 col-xl-12">
                        {InputDescricaoMotivoModal && (

                          <InputFieldModal
                            id="TXTMotivo"
                            type="text"
                            className="form-control input"
                            readOnly={false}
                            label={labelDescricaoMotivoModal}
                          />

                        )}

                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="row">
                      <div class="col-sm-6 col-xl-4">
                        {InputDescontoModal && (
                          <InputFieldModal
                            id="VrValorDesconto"
                            type="text"
                            className="form-control input"
                            readOnly={false}
                            label={labelDescontoModal}
                            placeholder="R$ 0,00"
                          />

                        )}

                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <span
                      style={{ fontWeight: 600, color: "#ff0000", fontSize: "16px" }}
                    >* Campos Obrigatórios *</span>

                  </div>


                </div>
                <div className="modal-footer" id="footeradiantamentosalario">
                  {ButtonCadastrarModal && (
                    <ButtonType
                      textButton={linkNome}
                      onClickButtonType
                      cor="success"
                      tipo="button"
                    />
                  )}

                  {ButtonFecharModal && (
                    <ButtonType
                      textButton={linkNomeFechar}
                      onClickButtonType={handleClose}
                      cor="secondary"
                      tipo="button"
                    />

                  )}

                </div>
              </Modal.Body>
            </form>
          </div>
        </div>
      </Modal>
    </Fragment>
  )

}
