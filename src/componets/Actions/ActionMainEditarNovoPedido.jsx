import { Fragment } from "react";
import { HeadTitleComponent } from "../HeadTitle";
import { ButtonType } from "../Buttons/ButtonType";


export const ActionMainEditarNovoPedido = ({
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


  InputMarcasComponent,
  InputFornecedorComponent,
  InputFiscalComponent,
  InputEnviarComponent,
  InputCondicoesPagamentos,
  InputTipoPedido,
  InputTransportadora,
  InputFreteComponent,


  labelMarcas,
  labelFornecedor,
  labelFiscal,
  labelEnviar,
  labelCondicoesPagamentos,
  labelTipoPedido,
  labelTransportadora,
  labelFrete,


  valueMarca,
  valueFornecedor,
  valueFiscal,
  valueEnviar,
  valueCondicoesPagamentos,
  valueTipoPedido,
  valueTransportadora,
  valueFrete,


  onChangeMarcas,
  onChangeFornecedor,
  onChangeFiscal,
  onChangeEnviar,
  onChangeCondicoesPagamentos,
  onChangeTipoPedido,
  onChangeTransportadora,
  onChangeFrete,



  ButtonSearchComponent,
  ButtonTypeCadastro,
  ButtonTypeCancelar,
  ButtonTypePedido,
  ButtonTypeTXT,

  linkNomeSearch,
  linkNome,
  linkCancelar,
  linkPedido,
  linkTXT,

  onButtonClickSearch,
  onButtonClickCadastro,
  onButtonClickCancelar,
  onButtonClickPedido,
  onButtonClickTXT,

  corSearch,
  corCadastro,
  corCancelar,
  corPedido,
  corTXT,

  IconSearch,
  IconCadastro,
  IconCancelar,
  IconPedido,
  IconTXT,

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
        <div className="row">
          <div className="col-xl-12">
            <div id="panel-1" className="panel">
              <div className="panel-container show">


                <div className="panel-tag">


                  <div className="row">
                    <div className="col-sm-6 col-xl-3 mt-2">

                      {InputFieldDTInicioComponent && (
                        <InputFieldDTInicioComponent
                          label={labelInputDTInicio}
                          type="date"
                          nome="dtInicio"
                          id={id}
                          readOnly={readOnlyDTInicio}
                          value={valueInputFieldDTInicio}
                          onChange={onChangeInputFieldDTInicio}

                        />
                      )}
                    </div>
                    <div className="col-sm-6 col-xl-3 mt-2">
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
                   
                    <div class="col-sm-6 col-xl-3 mt-3">

                      {InputFieldComprador && (
                        <InputFieldComprador
                          label={labelInputFieldComprador}
                          type="text"
                          id={id}
                          value={valueInputFieldComprador}
                          onChange={onChangeInputFieldComprador}
                          readOnly={readOnlyComprador}
                        />
                      )}
                    </div>
                    <div className="col-sm-6 col-xl-3 mt-2">
                      {InputMarcasComponent && (
                        <InputMarcasComponent
                          label={labelMarcas}
                          onChange={onChangeMarcas}
                          value={valueMarca}
                          defaultValue={valueMarca}
                          type="text"
                          readOnly={readOnlyMarcas}
                        />
                      )}
                    </div>
                  </div>
                  <hr />

                  <div className="row">
                    <div class="col-sm-6 col-xl-8 mt-2">

                      {InputFornecedorComponent && (
                        <InputFornecedorComponent
                          label={labelFornecedor}
                          nome="Fornecedor"
                          onChange={onChangeFornecedor}
                          value={valueFornecedor}
                          type="text"
                          readOnly={readOnlyFornecedor}
                        />

                      )}
                    </div>
                    <div class="col-sm-6 col-xl-2 mt-2">

                      {InputFiscalComponent && (
                        <InputFiscalComponent
                          label={labelFiscal}
                          type="text"
                          onChange={onChangeFiscal}
                          value={valueFiscal}
                          readOnly={readOnlyFiscal}
                        />

                      )}
                    </div>

                    <div class="col-sm-6 col-xl-2 mt-2">

                      {InputEnviarComponent && (
                        <InputEnviarComponent
                          label={labelEnviar}
                          type="text"
                          value={valueEnviar}
                          onChange={onChangeEnviar}
                          readOnly={readOnlyEnviar}
                        />
                      )}
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div class="col-sm-6 col-xl-4 mt-3">

                      {InputCondicoesPagamentos && (
                        <InputCondicoesPagamentos
                          label={labelCondicoesPagamentos}
                          type="text"
                          value={valueCondicoesPagamentos}
                          onChange={onChangeCondicoesPagamentos}
                          readOnly={readOnlyCondicoesPagamentos}
                        />
                      )}
                    </div>

                    <div class="col-sm-6 col-xl-4 mt-3">

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

                    <div class="col-sm-6 col-xl-4 mt-3">

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
                    <div class="col-sm-6 col-xl-3 mt-3">

                      {InputTipoPedido && (
                        <InputTipoPedido
                          label={labelTipoPedido}
                          type="text"
                          value={valueTipoPedido}
                          onChange={onChangeTipoPedido}
                          readOnly={readOnlyTipoPedido}
                        />
                      )}
                    </div>
                    <div class="col-sm-6 col-xl-3 mt-3">

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
                    <div class="col-sm-6 col-xl-6 mt-3">

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
                  <div className="row">
                    <div class="col-sm-6 col-xl-2 mt-2">

                      {InputFieldDescontoComponent1 && (
                        <InputFieldDescontoComponent1
                          label={labelInputFieldDesconto1}
                          type="text"
                          id={id}

                          value={valueInputFieldDesconto1}
                          onChange={onChangeInputFieldDesconto1}
                          readOnly={readOnlyDesconto1}
                        />
                      )}
                    </div>
                    <div class="col-sm-6 col-xl-2 mt-2">

                      {InputFieldDescontoComponent2 && (
                        <InputFieldDescontoComponent2
                          label={labelInputFieldDesconto2}
                          type="text"
                          id={id}

                          value={valueInputFieldDesconto2}
                          onChange={onChangeInputFieldDesconto2}
                          readOnly={readOnlyDesconto2}
                        />
                      )}
                    </div>

                    <div class="col-sm-6 col-xl-2 mt-2">

                      {InputFieldDescontoComponent3 && (
                        <InputFieldDescontoComponent3
                          label={labelInputFieldDesconto3}
                          type="text"
                          id={id}

                          value={valueInputFieldDesconto3}
                          onChange={onChangeInputFieldDesconto3}
                          readOnly={readOnlyDesconto3}
                        />
                      )}
                    </div>

                    <div class="col-sm-6 col-xl-4 mt-2">

                      {InputFieldTotalLiq && (
                        <InputFieldTotalLiq
                          label={labelInputFieldTotalLiq}
                          type="text"
                          id={id}

                          value={valueInputFieldTotalLiq}
                          onChange={onChangeInputFieldTotalLiq}
                          readOnly={readOnlyTotalLiq}
                        />
                      )}
                    </div>
                    <div class="col-sm-6 col-xl-2 mt-2">

                      {InputFieldComissao && (
                        <InputFieldComissao
                          label={labelInputFieldComissao}
                          type="text"
                          id={id}

                          value={valueInputFieldComissao}
                          onChange={onChangeInputFieldComissao}
                          readOnly={readOnlyComissao}
                        />
                      )}
                    </div>
                  </div>

                  <div className="row">
                    <div class="col-sm-6 col-xl-8 mt-2">
                      {InputTransportadora && (
                        <InputTransportadora
                          label={labelTransportadora}
                          nome="idloja"
                          value={valueTransportadora}
                          onChange={onChangeTransportadora}
                          readOnly={readOnlyTransportadora}
                        />
                      )}

                    </div>

                    <div class="col-sm-6 col-xl-4 mt-2">

                      {InputFreteComponent && (

                        <InputFreteComponent
                          label={labelFrete}
                          nome="idloja"
                          value={valueFrete}
                          onChange={onChangeFrete}
                          readOnly={readOnlyFrete}
                        />
                      )}
                    </div>

                  </div>

                  <div className="row">
                    
                  {ButtonSearchComponent && (
                      <ButtonType
                        textButton={linkNomeSearch}
                        onClickButtonType={onButtonClickSearch}
                        cor={corSearch}
                        tipo="button"
                        Icon={IconSearch}
                        iconColor="#fff"
                        iconSize={16}
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
                        style={{color: 'white'}}
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