import { Fragment } from "react";
import { HeadTitleComponent } from "../HeadTitle";
import { ButtonType } from "../Buttons/ButtonType";

import { AiOutlineUser } from "react-icons/ai";
import { BsGem, BsGlobe } from "react-icons/bs";
import { FaCashRegister, FaRegLightbulb } from "react-icons/fa";
import { MdOutlinePayment } from "react-icons/md";
import { FaRegMoneyBillAlt } from "react-icons/fa";

export const ActionMainNovoPedido = ({
  cardVoucher,
  cardVendas,
  cardCliente,
  cardTicketMedio,
  cardDespesas,
  cardEcommerce,
  cardCartao,


  valorVendas,
  nomeVendas,
  valorTicketMedio,
  nomeTicketMedio,
  valorDespesas,
  nomeDespesas,
  valorEcommerce,
  nomeEcommerce,
  valorCartao,
  nomeCartao,
  nomeCliente,
  numeroCliente,
  valorVoucher,
  nomeVoucher,
  
  Icon,
  IconVendas,
  IconNumeroCliente,
  IconTicketMedio,
  IconValorDespesas,
  IconValorEcommerce,
  IconCartao,
  IconVoucher,


  iconSize,
  iconColor,

  title,
  subTitle,
  linkComponentAnterior,
  linkComponent,
  id,


  InputFieldDTInicioComponent,
  InputFieldDTFimComponent,
  InputFieldObsFornecedor,
  InputFieldObsInterna,
  InputFieldVendedor,
  InputFieldEmailVendedor,
  InputFieldDescontoComponent1,
  InputFieldDescontoComponent2,
  InputFieldDescontoComponent3,
  InputFieldTotalLiq,
  InputFieldComissao,
  InputFieldComprador,
                          
                       


  labelInputDTInicio,
  labelInputDTFim,
  labelInputFieldObsFornecedor,
  labelInputFieldObsInterna,
  labelInputFieldVendedor,
  labelInputFieldEmailVendedor,
  labelInputFieldDesconto1,
  labelInputFieldDesconto2,
  labelInputFieldDesconto3,
  labelInputFieldTotalLiq,
  labelInputFieldComissao,
  labelInputFieldComprador,  
                          

  valueInputFieldDTInicio,
  valueInputFieldDTFim,
  valueInputFieldObsFornecedor,
  valueInputFieldObsInterna,
  valueInputFieldVendedor,
  valueInputFieldEmailVendedor,
  valueInputFieldDesconto1,
  valueInputFieldDesconto2,
  valueInputFieldDesconto3,
  valueInputFieldTotalLiq,
  valueInputFieldComissao,
  valueInputFieldComprador,
                          

  onChangeInputFieldDTInicio,
  onChangeInputFieldDTFim,
  onChangeInputFieldObsFornecedor,
  onChangeInputFieldObsInterna,
  onChangeInputFieldVendedor,
  onChangeInputFieldEmailVendedor,
  onChangeInputFieldDesconto1,
  onChangeInputFieldDesconto2,
  onChangeInputFieldDesconto3,
  onChangeInputFieldTotalLiq,
  onChangeInputFieldComissao,
  onChangeInputFieldComprador,


  InputSelectCompradorComponent,
  InputSelectMarcasComponent,
  InputSelectFornecedorComponent,
  InputSelectFiscalComponent,
  InputSelectEnviarComponent,
  InputSelectCondicoesPagamentos,
  InputSelectTipoPedido,
  InputSelectTransportadora,
  InputSelectFreteComponent,


  labelSelectComprador,
  labelSelectMarcas,
  labelSelectFornecedor,
  labelSelectFiscal,
  labelSelectEnviar,
  labelSelectCondicoesPagamentos,
  labelSelectTipoPedido,
  labelSelectTransportadora,
  labelSelectFrete,


  optionsCompradores,
  optionsMarcas,
  optionsFornecedores,
  optionsFiscal,
  optionsSelectEnviar,
  optionsCondicoesPagamentos,
  optionsTipoPedido,
  optionsSelectTransportadora,
  optionsFrete,


  valueSelectComprador,
  valueSelectMarca,
  valueSelectFornecedor,
  valueSelectFiscal,
  valueSelectEnviar,
  valueSelectCondicoesPagamentos,
  valueSelectTipoPedido,
  valueSelectTransportadora,
  valueSelectFrete,


  onChangeSelectComprador,
  onChangeSelectMarcas,
  onChangeSelectFornecedor,
  onChangeSelectFiscal,
  onChangeSelectEnviar,
  onChangeSelectCondicoesPagamentos,
  onChangeSelectTipoPedido,
  onChangeSelectTransportadora,
  onChangeSelectFrete,

  InputCheckBoxPedido, 
  labelCheckBoxPedido,
  checkedCheckBoxPedido,
  valueCheckBoxPedido,
  onChangeCheckBoxPedido,
  readOnlyCheckBoxTipoPedido,
  disabledCheckBoxTipoPedido,

  ButtonSearchComponent,
  ButtonTypeCadastro,
  ButtonTypeCancelar,
  ButtonTypePedido,
  ButtonTypeTXT,
  ButtonTypeClonar,
  ButtonTypeRetornar,

  linkNomeSearch,
  linkNome,
  linkCancelar,
  linkPedido,
  linkTXT,
  linkClonar,
  linkRetornar,

  onButtonClickSearch,
  onButtonClickCadastro,
  onButtonClickCancelar,
  onButtonClickPedido,
  onButtonClickTXT,
  onButtonClickClonar,
  onButtonClickRetornar,

  corSearch,
  corCadastro,
  corCancelar,
  corPedido,
  corTXT,
  corClonar,
  corRetornar,

  IconSearch,
  IconCadastro,
  IconCancelar,
  IconPedido,
  IconTXT,
  IconClonar,
  IconRetornar,

  readOnlyDTInicio,
  readOnlyDTFim,
  readOnlyMarcas,
  readOnlyFornecedor,
  readOnlyFiscal,
  readOnlyEnviar,
  readOnlyCondicoesPagamentos,
  readOnlyObsFornecedor,
  readOnlyObsInterna,
  readOnlyTipoPedido,
  readOnlyVendedor,
  readOnlyEmailVendedor,
  readOnlyDesconto1,
  readOnlyDesconto2,
  readOnlyDesconto3,
  readOnlyTotalLiq,
  readOnlyComissao,
  readOnlyTransportadora,
  readOnlyFrete,
  readOnlyComprador,

  defaultValueSelectComprador,
  defaultValueSelectMarca,
  defaultValueSelectFornecedor,
  defaultValueSelectFiscal,
  defaultValueSelectEnviar,
  defaultValueSelectCondicoesPagamentos,
  defaultValueSelectTipoPedido,
  defaultValueSelectTransportadora,
  defaultValueSelectFrete,
  Alerta,
  typeAlerta,
  messageAlerta,
  indiceAlerta,
  styleSearch,
  styleCadastro,
  styleCancelar,
  stylePedido,
  styleTXT,
  styleClonar,
  styleRetornar,

}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <Fragment>
      <form action="#" onSubmit={handleSubmit}>
        <HeadTitleComponent
          tittuloComponent={title}
          nomeLoja={subTitle}
          linkComponentAnterior={linkComponentAnterior}
          linkComponent={linkComponent}
        />

        <Fragment>
      <div className="row">
        <div className="col-sm-6 col-lg-4 col-xl-4 col-xxl-3" >
          {cardVendas && (
            <div className="p-3 bg-primary-300 rounded overflow-hidden position-relative text-white mb-g">
              <div className="vendaLoja">
                <h3 className="display-4 d-block l-h-n m-0 fw-500">
                  {valorVendas}
                  <small className="m-0 l-h-n"> {nomeVendas}</small>
                </h3>
              </div>
              {/* <AiOutlineUser size={100} style={{ fontSize: "8rem" }} class="fa position-absolute pos-right pos-bottom opacity-15 mb-n1 mr-n1" /> */}
              { IconVendas && 
                <IconVendas 
                  className="position-absolute pos-right pos-bottom opacity-15 mb-n1 mr-n1"
                  size={iconSize}  
                  color={iconColor} 
                />
              }
            </div>

          )}
        </div>

        <div className="col-sm-6 col-lg-4 col-xl-4 col-xxl-3 " >
          {cardTicketMedio && (
            <div className="p-3 bg-success-200 rounded overflow-hidden position-relative text-white mb-g">
              <div className="ticketMedioVenda">
                <h3 className="display-4 d-block l-h-n m-0 fw-500">
                  {valorTicketMedio}
                  <small className="m-0 l-h-n">{nomeTicketMedio}</small>
                </h3>
              </div>
              {/* <FaRegLightbulb className="fal fa-lightbulb position-absolute pos-right pos-bottom opacity-15 mb-n1 mr-n1" size={100} style={{ fontSize: "6rem" }} /> */}
              { IconTicketMedio && 
                <IconTicketMedio 
                  className="position-absolute pos-right pos-bottom opacity-15 mb-n1 mr-n1"
                  size={iconSize}  
                  color={iconColor} 
                />
              }
            </div>

          )}
        </div>

        <div className="col-sm-6 col-lg-4 col-xl-4 col-xxl-3 " >
          {cardCliente && (
            <div className="p-3 bg-warning-400 rounded overflow-hidden position-relative text-white mb-g">
              <div className="quantidadeClienteVenda">
                <h3 className="display-4 d-block l-h-n m-0 fw-500">
                  {numeroCliente}
                  <small className="m-0 l-h-n"> {nomeCliente}</small>
                </h3>
              </div>
              {/* <BsGem className="fal  position-absolute pos-right pos-bottom opacity-15 mb-n1 mr-n1" size={100} style={{ fontSize: "8rem" }} /> */}
              { IconNumeroCliente && 
                <IconNumeroCliente 
                  className="position-absolute pos-right pos-bottom opacity-15 mb-n1 mr-n1"
                  size={iconSize}  
                  color={iconColor} 
                />
              }
            </div>

          )}
        </div>

        <div className="col-sm-6 col-lg-4 col-xl-4 col-xxl-3 " >
          {cardDespesas && (
            <div className="p-3 bg-info-200 rounded overflow-hidden position-relative text-white mb-g">
              <div className="despesaLoja">
                <h3 className="display-4 d-block l-h-n m-0 fw-500">
                    {valorDespesas}
                  <small className="m-0 l-h-n"> {nomeDespesas} </small>
                </h3>
              </div>
              {/* <FaCashRegister className="fal fa-lightbulb position-absolute pos-right pos-bottom opacity-15 mb-n1 mr-n1" size={100} style={{ fontSize: "6rem" }} /> */}
              { IconValorDespesas && 
                <IconValorDespesas 
                  className="position-absolute pos-right pos-bottom opacity-15 mb-n1 mr-n1"
                  size={iconSize}  
                  color={iconColor} 
                />
              }
            </div>

          )}
        </div>

        <div className="col-sm-6 col-lg-4 col-xl-4 col-xxl-3 " >
          {cardEcommerce && ( 
            <div className="p-3 bg-danger-200 rounded overflow-hidden position-relative text-white mb-g">
              <div className="ecommerce">
                <h3 className="display-4 d-block l-h-n m-0 fw-500">
                  {valorEcommerce}
                  <small className="m-0 l-h-n">  {nomeEcommerce}</small>
                </h3>
              </div>
              {/* <BsGlobe className="fal fa-lightbulb position-absolute pos-right pos-bottom opacity-15 mb-n1 mr-n1" size={100} style={{ fontSize: "6rem" }}  /> */}
              { IconValorEcommerce && 
                <IconValorEcommerce 
                  className="position-absolute pos-right pos-bottom opacity-15 mb-n1 mr-n1"
                  size={iconSize}  
                  color={iconColor} 
                />
              }
            </div>

          )}
        </div>

        <div className="col-sm-6 col-lg-4 col-xl-4 col-xxl-3 " >
          {cardCartao && (
            <div className="p-3 bg-warning-400 rounded overflow-hidden position-relative text-white mb-g">
              <div className="ecommerce">
                <h3 className="display-4 d-block l-h-n m-0 fw-500">
                  {valorCartao}
                  <small className="m-0 l-h-n">  {nomeCartao}</small>
                </h3>
              </div>
              {/* <MdOutlinePayment className="fal fa-lightbulb position-absolute pos-right pos-bottom opacity-15 mb-n1 mr-n1" size={100} style={{ fontSize: "6rem" }}  /> */}
              { IconCartao && 
                <IconCartao 
                  className="position-absolute pos-right pos-bottom opacity-15 mb-n1 mr-n1"
                  size={iconSize}  
                  color={iconColor} 
                />
              }
            </div>

          )}
        </div>
        <div className="col-sm-6 col-lg-4 col-xl-4 col-xxl-3">
          {cardVoucher && (
            <div className="p-3 bg-info-200 rounded overflow-hidden position-relative text-white mb-g">
              <div className="ecommerce">
                <h3 className="display-4 d-block l-h-n m-0 fw-500">
                  {valorVoucher}
                  <small className="m-0 l-h-n">  {nomeVoucher}</small>
                </h3>
              </div>
              {/* <MdOutlinePayment className="fal fa-lightbulb position-absolute pos-right pos-bottom opacity-15 mb-n1 mr-n1" size={100} style={{ fontSize: "6rem" }}  /> */}


              { IconVoucher && 
                <IconVoucher 
                  className="position-absolute pos-right pos-bottom opacity-15 mb-n1 mr-n1"
                  size={iconSize}  
                  color={iconColor} 
                />
              }
            </div>

          )}
        </div>
      </div> 
    </Fragment>

        <div className="row">
          <div className="col-xl-12">
            <div id="panel-1" className="panel">
              <div className="panel-container show">


                <div className="panel-tag">
                  <div className="row">
                    {InputCheckBoxPedido && (

                      <InputCheckBoxPedido 
                        label={labelCheckBoxPedido}
                        readOnly={readOnlyCheckBoxTipoPedido}
                        disabledChecked={disabledCheckBoxTipoPedido}
                        checkedCheckBoxPedido={checkedCheckBoxPedido}
                        valueCheckBoxPedido={valueCheckBoxPedido}
                        onChangeCheckBoxPedido={onChangeCheckBoxPedido}
                      />
                    )}
                  </div>
                  <div className="row mt-3" >

                    <div class="col-sm-6 col-md-8 col-xl-6 mt-2">
                      <label htmlFor="">{labelSelectFornecedor}</label>
                      {InputSelectFornecedorComponent && (
                        <InputSelectFornecedorComponent
                          label={labelSelectFornecedor}
                          isDisabled={readOnlyFornecedor}
                          id={id}
                          options={optionsFornecedores}
                          onChange={onChangeSelectFornecedor}
                          value={valueSelectFornecedor}
                          defaultValue={defaultValueSelectFornecedor}

                        />
                      )}
                    </div>

                    <div className="col-sm-4 col-md-4 col-xl-3 mt-2">
                      <label htmlFor="">{labelInputDTFim}</label>
                      {InputFieldDTInicioComponent && (
                        <InputFieldDTInicioComponent
                          label={labelInputDTInicio}
                          type="date"
                          id={id}
                          name="dtconsultainicio"
                          value={valueInputFieldDTInicio}
                          onChange={onChangeInputFieldDTInicio}
                          readOnly={readOnlyDTInicio}
                        />
                      )}
                    </div>

                    <div className="col-sm-4 col-md-4 col-xl-3 mt-2">
                      <label htmlFor="">{labelInputDTFim}</label>
                      {InputFieldDTFimComponent && (
                        <InputFieldDTFimComponent
                          label={labelInputDTFim}
                          type="date"
                          id={id}
                          readOnly={readOnlyDTFim}
                          value={valueInputFieldDTFim}
                          onChange={onChangeInputFieldDTFim}
                        />
                      )}
                    </div>

                  </div>


                  <div className="row mt-3">
               
                    <div class="col-sm-6 col-xl-6 ">
                      <label htmlFor="">{labelSelectFiscal}</label>
                      {InputSelectFiscalComponent && (
                        <InputSelectFiscalComponent
                          label={labelSelectFiscal}
                          type="select"
                          id={id}
                          options={optionsFiscal}
                          onChange={onChangeSelectFiscal}
                          value={valueSelectFiscal}
                          defaultValue={defaultValueSelectFiscal}
                          isDisabled={readOnlyFiscal}
                        />

                      )}
                    </div>

                    <div class="col-sm-6 col-xl-6 ">
                      <label htmlFor="">{labelSelectEnviar}</label>
                      {InputSelectEnviarComponent && (
                        <InputSelectEnviarComponent
                          label={labelSelectEnviar}
                          type="select"
                          id={id}
                          isDisabled={readOnlyEnviar}
                          options={optionsSelectEnviar}
                          value={valueSelectEnviar}
                          onChange={onChangeSelectEnviar}
                          defaultValue={defaultValueSelectEnviar}
                        />
                      )}
                    </div>
                  </div>

                  <hr />

                  <div className="row mt-3">

                    <div className="col-sm-6 col-xl-6 ">
                      <label htmlFor="">{labelSelectComprador}</label>
                      {InputSelectCompradorComponent && (
                        <InputSelectCompradorComponent
                          label={labelSelectComprador}
                          isDisabled={readOnlyComprador}
                          id={id}
                          options={optionsCompradores}
                          defaultValue={defaultValueSelectComprador}
                          value={valueSelectComprador}
                          onChange={onChangeSelectComprador}
                        />
                      )}

                      {/* {InputFieldComprador && (
                        <InputFieldComprador
                          label={labelInputFieldComprador}
                          type="text"
                          id={id}
                          value={valueInputFieldComprador}
                          onChange={onChangeInputFieldComprador}
                          readOnly={readOnlyComprador}
                        />
                      )} */}
                    </div>
                
                    <div className="col-sm-6 col-xl-6 ">
                      <label htmlFor="">{labelSelectMarcas}</label>
                      {InputSelectMarcasComponent && (
                        <InputSelectMarcasComponent
                          label={labelSelectMarcas}
                          isDisabled={readOnlyMarcas}
                          id={id}
                          options={optionsMarcas}
                          onChange={onChangeSelectMarcas}
                          value={valueSelectMarca}
                          defaultValue={defaultValueSelectMarca}
                          type="select"
                        />
                      )}
                    </div>
                  </div>

                  <hr />

                  <div className="row mt-3">
                    <div class="col-sm-6 col-xl-4 ">
                      <label htmlFor="">{labelSelectCondicoesPagamentos}</label>
                      {InputSelectCondicoesPagamentos && (
                        <InputSelectCondicoesPagamentos
                          label={labelSelectCondicoesPagamentos}
                          type="select"
                          id={id}
                          options={optionsCondicoesPagamentos}
                          value={valueSelectCondicoesPagamentos}
                          onChange={onChangeSelectCondicoesPagamentos}
                          isDisabled={readOnlyCondicoesPagamentos}
                          defaultValue={defaultValueSelectCondicoesPagamentos}
                        />
                      )}
                    </div>

                    <div class="col-sm-6 col-xl-4 ">
                      <label htmlFor="">{labelInputFieldObsFornecedor}</label>
                      {InputFieldObsFornecedor && (
                        <InputFieldObsFornecedor
                          label={labelInputFieldObsFornecedor}
                          type="text"
                          id={id}
                          value={valueInputFieldObsFornecedor}
                          onChange={onChangeInputFieldObsFornecedor}
                          readOnly={readOnlyObsFornecedor}

                        />

                      )}
                    </div>

                    <div class="col-sm-6 col-xl-4 ">
                      <label htmlFor="">{labelInputFieldObsInterna}</label>
                      {InputFieldObsInterna && (
                        <InputFieldObsInterna
                          label={labelInputFieldObsInterna}
                          type="text"
                          id={id}
                          value={valueInputFieldObsInterna}
                          onChange={onChangeInputFieldObsInterna}
                          readOnly={readOnlyObsInterna}
                        />
                      )}
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div class="col-sm-6 col-xl-4 ">
                      <label htmlFor="">{labelSelectTipoPedido}</label>
                      {InputSelectTipoPedido && (
                        <InputSelectTipoPedido
                          label={labelSelectTipoPedido}
                          type="select"
                          id={id}
                          options={optionsTipoPedido}
                          value={valueSelectTipoPedido}
                          onChange={onChangeSelectTipoPedido}
                          isDisabled={readOnlyTipoPedido}
                          defaultValue={defaultValueSelectTipoPedido}
                        />
                      )}
                    </div>
                    <div class="col-sm-6 col-xl-4">
                      <label htmlFor="">{labelInputFieldVendedor}</label>
                      {InputFieldVendedor && (
                        <InputFieldVendedor
                          label={labelInputFieldVendedor}
                          type="text"
                          id={id}
                          value={valueInputFieldVendedor}
                          onChange={onChangeInputFieldVendedor}
                          readOnly={readOnlyVendedor}
                        />
                      )}
                    </div>
                    <div class="col-sm-6 col-xl-4 ">
                      <label htmlFor="">{labelInputFieldEmailVendedor}</label>
                      {InputFieldEmailVendedor && (
                        <InputFieldEmailVendedor
                          label={labelInputFieldEmailVendedor}
                          type="text"
                          id={id}
                          value={valueInputFieldEmailVendedor}
                          onChange={onChangeInputFieldEmailVendedor}
                          readOnly={readOnlyEmailVendedor}
                        />
                      )}
                    </div>
                  </div>
                  <hr style={{}} />
                  <div className="row mt-3">
                    <div class="col-sm-6 col-xl-2">
                      <label htmlFor="">{labelInputFieldDesconto1}</label>
                      {InputFieldDescontoComponent1 && (
                        <InputFieldDescontoComponent1
                          label={labelInputFieldDesconto1}
                          type="text"
                          id={id}
                          readOnly={readOnlyDesconto1}
                          value={valueInputFieldDesconto1}
                          onChange={onChangeInputFieldDesconto1}
                        />
                      )}
                    </div>
                    <div class="col-sm-6 col-xl-2">
                      <label htmlFor="">{labelInputFieldDesconto2}</label>
                      {InputFieldDescontoComponent2 && (
                        <InputFieldDescontoComponent2
                          label={labelInputFieldDesconto2}
                          type="text"
                          id={id}
                          readOnly={readOnlyDesconto2}
                          value={valueInputFieldDesconto2}
                          onChange={onChangeInputFieldDesconto2}
                        />
                      )}
                    </div>

                    <div class="col-sm-6 col-xl-2 ">
                      <label htmlFor="">{labelInputFieldDesconto3}</label>
                      {InputFieldDescontoComponent3 && (
                        <InputFieldDescontoComponent3
                          label={labelInputFieldDesconto3}
                          type="text"
                          id={id}
                          readOnly={readOnlyDesconto3}
                          value={valueInputFieldDesconto3}
                          onChange={onChangeInputFieldDesconto3}
                        />
                      )}
                    </div>

                    <div class="col-sm-6 col-xl-4 ">
                      <label htmlFor="">{labelInputFieldTotalLiq}</label>
                      {InputFieldTotalLiq && (
                        <InputFieldTotalLiq
                          label={labelInputFieldTotalLiq}
                          type="text"
                          id={id}
                          readOnly={readOnlyTotalLiq}
                          value={valueInputFieldTotalLiq}
                          onChange={onChangeInputFieldTotalLiq}
                        />
                      )}
                    </div>
                    <div class="col-sm-6 col-xl-2 ">
                      <label htmlFor="">{labelInputFieldComissao}</label>
                      {InputFieldComissao && (
                        <InputFieldComissao
                          label={labelInputFieldComissao}
                          type="text"
                          id={id}
                          readOnly={readOnlyComissao}
                          value={valueInputFieldComissao}
                          onChange={onChangeInputFieldComissao}
                        />
                      )}
                    </div>
                  </div>

                  <div className="row mt-4">
                    <div class="col-sm-6 col-xl-6 ">
                      <label htmlFor="">{labelSelectTransportadora}</label>
                      {InputSelectTransportadora && (
                        <InputSelectTransportadora
                          label={labelSelectTransportadora}
                          nome="idloja"
                          id={id}
                          isDisabled={readOnlyTransportadora}
                          options={optionsSelectTransportadora}
                          value={valueSelectTransportadora}
                          onChange={onChangeSelectTransportadora}
                          defaultValue={defaultValueSelectTransportadora}
                        />
                      )}

                    </div>

                    <div class="col-sm-6 col-xl-6 ">
                      <label htmlFor="">{labelSelectFrete}</label>
                      {InputSelectFreteComponent && (

                        <InputSelectFreteComponent
                          label={labelSelectFrete}
                          nome="idloja"
                          id={id}
                          isDisabled={readOnlyFrete}
                          options={optionsFrete}
                          value={valueSelectFrete}
                          onChange={onChangeSelectFrete}
                          defaultValue={defaultValueSelectFrete}
                        />
                      )}
                    </div>

                  </div>
                  <div className="row">
                    {Alerta && (
                      <Alerta
                        messageAlerta={messageAlerta}
                        type={typeAlerta}
                        text={typeAlerta}
                      />
                    )}
                  </div>

                  <div className="row " style={{marginTop: '5rem'}}>
                    
                  {ButtonSearchComponent && (
                      <ButtonType
                        textButton={linkNomeSearch}
                        onClickButtonType={onButtonClickSearch}
                        cor={corSearch}
                        tipo="button"
                        Icon={IconSearch}
                        iconColor="#fff"
                        iconSize={16}
                        // style={styleSearch}
                        visibilityBTN={styleSearch}
                      />
                    )}

                
                    {ButtonTypeCadastro && (
                      <ButtonType
                        textButton={linkNome}
                        onClickButtonType={onButtonClickCadastro}
                        cor={corCadastro}
                        tipo="button"
                        Icon={IconCadastro}
                        iconColor="#fff"
                        iconSize={16}
                        // style={styleCadastro}
                        visibilityBTN={styleCadastro}
                      />
                    )}

                    {ButtonTypeCancelar && (
                      <ButtonType
                        textButton={linkCancelar}
                        onClickButtonType={onButtonClickCancelar}
                        // cor="danger"
                        cor={corCancelar}
                        tipo="button"
                        Icon={IconCancelar}
                        iconColor="#fff"
                        iconSize={16}
                        // style={styleCancelar}
                        visibilityBTN={styleCancelar}
                      />
                    )}
                     {ButtonTypePedido && (
                      <ButtonType
                        textButton={linkPedido}
                        onClickButtonType={onButtonClickPedido}
                        // cor="danger"
                        cor={corPedido}
                        tipo="button"
                        Icon={IconPedido}
                        iconColor="#fff"
                        iconSize={16}
                        // style={stylePedido}
                        visibilityBTN={stylePedido}
                      />
                    )}
                  
                    {ButtonTypeTXT && (
                      <ButtonType
                        textButton={linkTXT}
                        onClickButtonType={onButtonClickTXT}
                        // cor="danger"
                        cor={corTXT}
                        tipo="button"
                        Icon={IconTXT}
                        iconColor="#000"
                        iconSize={16}
                        // style={styleTXT}
                        visibilityBTN={styleTXT}

                      />
                    )}

                    {ButtonTypeClonar && (
                      <ButtonTypeClonar
                        textButton={linkClonar}
                        onClickButtonType={onButtonClickClonar}
                        // cor="danger"
                        cor={corClonar}
                        tipo="button"
                        Icon={IconClonar}
                        iconColor="#000"
                        iconSize={16}
                        visibilityBTN={styleClonar}
                      />
                    )}

                    {ButtonTypeRetornar && (
                      <ButtonTypeRetornar
                        textButton={linkRetornar}
                        onClickButtonType={onButtonClickRetornar}
                        // cor="danger"
                        cor={corRetornar}
                        tipo="button"
                        Icon={IconRetornar}
                        iconColor="#000"
                        iconSize={16}
                        // style={styleRetornar}
                        visibilityBTN={styleRetornar}

                      />
                    )}

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </form>
    </Fragment>
  )
}