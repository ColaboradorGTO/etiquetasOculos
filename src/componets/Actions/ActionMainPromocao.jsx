import { Fragment } from "react";
import { HeadTitleComponent } from "../HeadTitle";
import { ButtonType } from "../Buttons/ButtonType";


export const ActionMainPromocao = ({
  title,
  subTitle,
  linkComponentAnterior,
  linkComponent,
  id,


  InputFieldDTInicioComponent,
  InputFieldDTFimComponent,
  InputFieldDescontoComponent1,
  InputFieldDescontoComponent2,
  InputFieldQTDInicioComponent,
  InputFieldQTDFimComponent,
  InputFieldProdutoOigem,
  InputFieldProdutoDestino,
  InputFileProdutoOigem,
  InputFileProdutoDestino,
  InputFieldVrInicio,
  InputFieldVrFim,
  InputFieldDescription,
  InputFieldPrecoComponent,

  labelInputDTInicio,
  labelInputDTFim,
  labelInputFieldDesconto1,
  labelInputFieldDesconto2,
  labelInputQTDInicio,
  labelInputQTDFim,
  labelInputFieldProdutoOigem,
  labelInputFieldProdutoDestino,
  labelInputFileProdutoOigem,
  labelInputFileProdutoDestino,
  labelInputFieldVrInicio,
  labelInputFieldVrFim,
  labelInputFieldDescription,
  labelInputPreco,

  valueInputFieldDTInicio,
  valueInputFieldDTFim,
  valueInputFieldDesconto1,
  valueInputFieldDesconto2,
  valueInputFieldQTDInicio,
  valueInputFieldQTDFim,
  valueInputFieldProdutoOigem,
  valueInputFieldProdutoDestino,
  valueInputFileProdutoOigem,
  valueInputFileProdutoDestino,
  valueInputFieldVrInicio,
  valueInputFieldVrFim,
  valueInputFielDescription,
  valueInputFieldPreco,

  onChangeInputFieldDTInicio,
  onChangeInputFieldDTFim,
  onChangeInputFieldDesconto1,
  onChangeInputFieldDesconto2,
  onChangeInputFieldQTDInicio,
  onChangeInputFieldQTDFim,
  onChangeInputFieldProdutoOigem,
  onChangeInputFieldProdutoDestino,
  onChangeInputFileProdutoOigem,
  onChangeInputFileProdutoDestino,
  onChangeInputFieldVrInicio,
  onChangeInputFieldVrFim,
  onChangeInputFieldDescription,
  onChangeInputFieldPreco,

  InputSelectCategoriaComponent,
  InputSelectMarcasComponent,
  InputSelectFornecedorComponent,
  InputSelectEmpresaComponent,
  InputSelectMecanicaComponent,
  InputSelectAplicacaoDestino,
  InputSelectTipoDesconto,
  InputSelectEmpresaComponentAync,
  InputSelectSubGrupoOrigemComponentAync,
  InputSelectSubGrupoDestinoComponentAync,
  InputSelectStatus,
  InputGrupoEstrutura,
  InputGrupoEstruturaProduto,
  InputProduto,
  

  labelSelectCategoria,
  labelSelectMarcas,
  labelSelectFornecedor,
  labelSelectEmpresa,
  labelSelectMecanica,
  labelSelectAplicacaoDestino,
  labelSelectTipoDesconto,
  labelSelectEmpresaAsync,
  labelSelectSubGrupoOrigemAsync,
  labelSelectSubGrupoDestinoAsync,
  labelSelectStatus,
  labelInputGrupoEstrutura,
  labelInputGrupoEstruturaProduto,
  labelInputProduto,
  optionsCategorias,
  optionsMarcas,
  optionsFornecedores,
  optionsSelectEmpresa,
  optionsMecanica,
  optionsAplicacaoDestino,
  optionsTipoDesconto,
  optionsEmpresasAsync,
  optionsSubGrupoOrigemAsync,
  optionsSubGrupoDestinoAsync,
  optionsStatus,

  valueSelectMarca,
  valueSelectFornecedor,
  valueSelectEmpresa,
  valueSelectMecanica,
  valueSelectAplicacaoDestino,
  valueSelectTipoDesconto,
  valueSelectEmpresaAsync,
  valueSelectSubGrupoOrigemAsync,
  valueSelectSubGrupoDestinoAsync,
  valueSelectCategoria,
  valueSelectStatus,
  valueInputGrupoEstrutura,
  valueInputGrupoEstruturaProduto,
  valueInputProduto,

  onChangeSelectCategoria,
  onChangeSelectMarcas,
  onChangeSelectFornecedor,
  onChangeSelectEmpresa,
  onChangeSelectMecanica,
  onChangeSelectAplicacaoDestino,
  onChangeSelectTipoDesconto,
  onChangeSelectEmpresaAsync,
  onChangeSelectSubGrupoOrigemAsync,
  onChangeSelectSubGrupoDestinoAsync,
  onChangeSelectStatus, 
  onChangeInputGrupoEstrutura,
  onChangeInputGrupoEstruturaProduto,
  onChangeInputProduto,

  acceptFileProdutoOigem,
  acceptFileProdutoDestino,

  ButtonSearchComponent,
  ButtonTypeCadastro,
  ButtonTypeCancelar,
  ButtonTypePedido,
  ButtonTypeEstruturaProduto,
  ButtonTypeTXT,
  ButtonTypeSalvarMecanica,
  ButtonTypeEditarMecanica,
  ButtonTypeEmpresa,
  ButtonTypeVisualizarProduto,
  ButtonTypeProdutoPesquisadoOrigem,
  ButtonTypeProdutoEstruturaOrigem,
  ButtonTypeProdutoPesquisadoDestino,
  ButtonTypeProdutoEstruturaDestino,
  ButtonTypeRetornar,
  ButtonTypeDownload,

  linkNomeSearch,
  linkNome,
  linkCancelar,
  linkPedido,
  linkEstruturaProduto,
  linkTXT,
  linkNomeSalvarMecanica,
  linkNomeEditarMecanica,
  linkNomeEmpresa,
  linkNomeVisualizarProduto,
  linkNomeProdutoPesquisadoOrigem,
  linkNomeProdutoEstruturaOrigem,
  linkNomeProdutoPesquisadoDestino,
  linkNomeProdutoEstruturaDestino,
  linkRetornar,
  linkDownload,

  onButtonClickSearch,
  onButtonClickCadastro,
  onButtonClickCancelar,
  onButtonClickPedido,
  onButtonClickEstruturaProduto,
  onButtonClickTXT,
  onButtonClickSalvarMecanica,
  onButtonClickEditarMecanica,
  onButtonClickEmpresa,
  onButtonClickVisualizarProduto,
  onButtonClickProdutoPesquisadoOrigem,
  onButtonClickProdutoEstruturaOrigem,
  onButtonClickProdutoPesquisadoDestino,
  onButtonClickProdutoEstruturaDestino,
  onButtonClickRetornar,
  onButtonClickDownload,

  corSearch,
  corCadastro,
  corCancelar,
  corPedido,
  corEstruturaProduto,
  corTXT,
  corEditarMecanica,
  corSalvarMecanica,
  corEmpresa,
  corVisualizarProduto,
  corProdutoPesquisadoOrigem,
  corProdutoPesquisadoDestino,
  corProdutoEstruturaOrigem,
  corProdutoEstruturaDestino,
  corRetornar,
  corDownload,

  IconSearch,
  IconCadastro,
  IconCancelar,
  IconPedido,
  IconEstruturaProduto,
  IconTXT,
  IconSalvarMecanica,
  IconEditarMecanica,
  IconEmpresa,
  IconVisualizarProduto,
  IconProdutoPesquisadoOrigem,
  IconProdutoPesquisadoDestino,
  IconProdutoEstruturaOrigem,
  IconProdutoEstruturaDestino,
  IconRetornar,
  IconDownload,

  readOnlyDTInicio,
  readOnlyDTFim,
  readOnlyMarcas,
  readOnlyFornecedor,
  readOnlyEmpresa,
  readOnlyDesconto1,
  readOnlyDesconto2,
  readOnlyComprador,
  readOnlyQTDInicio,
  readOnlyQTDFim,
  readOnlyMecanica,
  readOnlyProdutoOigem,
  readOnlyProdutoDestino,
  readOnlyFileProdutoOigem,
  readOnlyFileProdutoDestino,
  readOnlyVrInicio,
  readOnlyVrFim,
  readOnlyDescription,
  readOnlyAplicacaoDestino,
  readOnlyPreco,
  readOnlyTipoDesconto,
  readOnlySalvarMecanica,
  readOnlyEditarMecanica,
  readOnlyStatus,
  readOnlyGrupoEstrutura,
  readOnlyGrupoEstruturaProduto,
  readOnlyProduto,
  readOnlyButtonProdutoPesquisadoDestino,
  readOnlyVisualizarProduto,

  defaultValueSelectCategoria,
  defaultValueSelectMarca,
  defaultValueSelectFornecedor,
  defaultValueSelectEmpresa,
  defaultValueSelectMecanica,
  defaultValueSelectAplicacaoDestino,
  defaultValueSelectTipoDesconto,
  defaultOptionsEmpresasAsync,
  defaultValueSelectStatus,

  MenuTreeSelectOrigemComponent,
  valueTreeSelectOrigem,
  onChangeTreeSelectOrigem,
  optionsTreeSelectOrigem,
  placeholderTreeSelectOrigem,
  onNodeTreeSelectOrigem,
  onNodeTreeUnselectOrigem,

  MenuTreeSelectOrigemComponentEstProd,
  valueTreeSelectOrigemEstProd,
  onChangeTreeSelectOrigemEstProd,
  optionsTreeSelectOrigemEstProd,
  placeholderTreeSelectOrigemEstProd,
  onNodeTreeSelectOrigemEstProd,
  onNodeTreeUnselectOrigemEstProd,
  labelSelectSubGrupoOrigemAsyncEstProd,

  MenuTreeSelectDestinoComponent,
  valueTreeSelectDestino,
  onChangeTreeSelectDestino,
  optionsTreeSelectDestino,
  placeholderTreeSelectDestino,
  onNodeTreeSelectDestino,
  onNodeTreeUnselectDestino,

  MenuTreeSelectDestinoComponentEstProd,
  valueTreeSelectDestinoEstProd,
  onChangeTreeSelectDestinoEstProd,
  optionsTreeSelectDestinoEstProd,
  placeholderTreeSelectDestinoEstProd,
  onNodeTreeSelectDestinoEstProd,
  onNodeTreeUnselectDestinoEstProd,
  labelSelectSubGrupoDestinoAsyncEstProd,

  styleQTDInicio,
  styleQTDFim,
  styleDesconto1,
  styleDesconto2,
  styleVrInicio,
  styleVrFim,
  tituloPromocao,
  styleMecanica,
  styleDescription,
  styleEstrutura,
  styleEstruturaProduto,
  styleProduto,
  styleButtonSearch,
  disabledBTBPedido,
  disabledBTEstruturaProduto
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
                  <h2>{tituloPromocao}</h2>
                  {/* INICIO MECANICA */}
                  <div className="row mt-3 mb-5">
                      {InputSelectMecanicaComponent && (
                        <InputSelectMecanicaComponent
                          label={labelSelectMecanica}
                          readOnly={readOnlyMecanica}
                          id={id}
                          options={optionsMecanica}
                          onChange={onChangeSelectMecanica}
                          value={valueSelectMecanica}
                          defaultValue={defaultValueSelectMecanica}
                          styles={styleMecanica}
                          isDisabled={readOnlyMecanica}

                        />

                      )}

                      {InputFieldPrecoComponent && (
                        <InputFieldPrecoComponent
                          label={labelInputPreco}
                          type="text"
                          value={valueInputFieldPreco}
                          onChange={onChangeInputFieldPreco}
                          readOnly={readOnlyPreco}
                          style={{width: '90%', padding: '10px'}}
                        />
                      )}

                     
                    {/* <div className="col-sm-6 col-md-6 col-lg-6 col-xl-4">
                      {InputSelectMecanicaComponent && (
                        <InputSelectMecanicaComponent
                          label={labelSelectMecanica}
                          readOnly={readOnlyMecanica}
                          id={id}
                          options={optionsMecanica}
                          onChange={onChangeSelectMecanica}
                          value={valueSelectMecanica}
                          defaultValue={defaultValueSelectMecanica}

                        />

                      )}

                    </div> */}
                  </div>

                  <div className="row mt-3 mb-5">
                       {ButtonTypeSalvarMecanica && (
                        <ButtonTypeSalvarMecanica
                          textButton={linkNomeSalvarMecanica}
                          onClickButtonType={onButtonClickSalvarMecanica}
                          cor={corSalvarMecanica}
                          tipo="button"
                          Icon={IconSalvarMecanica}
                          iconColor="#fff"
                          iconSize={16}
                          disabledBTN={readOnlySalvarMecanica}
                        />
                      )}

                      {ButtonTypeEditarMecanica && (
                        <ButtonTypeEditarMecanica
                        textButton={linkNomeEditarMecanica}
                        onClickButtonType={onButtonClickEditarMecanica}
                        cor={corEditarMecanica}
                        tipo="button"
                        Icon={IconEditarMecanica}
                        iconColor="#fff"
                        iconSize={16}
                        disabledBTN={readOnlyEditarMecanica}
                        />
                      )}
                  </div>

                   <div className="row mt-5">
                    <div className="col-sm-6 col-md-12 col-xl-12 ">
                      {InputFieldDescription && (
                        <InputFieldProdutoDestino
                          label={labelInputFieldDescription}
                          type="text"
                          value={valueInputFielDescription}
                          onChange={onChangeInputFieldDescription}
                          readOnly={readOnlyDescription}
                          style={styleDescription}
                        />
                      )}

                    </div>
                  </div>
                  
                  <div className="row mt-3">
                    <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6">
                      {InputSelectAplicacaoDestino && (
                        <InputSelectAplicacaoDestino
                          label={labelSelectAplicacaoDestino}
                          readOnly={readOnlyAplicacaoDestino}
                          options={optionsAplicacaoDestino}
                          onChange={onChangeSelectAplicacaoDestino}
                          value={valueSelectAplicacaoDestino}
                          defaultValue={defaultValueSelectAplicacaoDestino}

                        />

                      )}
                    </div>

                    <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6">
                      {InputSelectTipoDesconto && (
                        <InputSelectTipoDesconto
                          label={labelSelectTipoDesconto}
                          readOnly={readOnlyTipoDesconto}
                          options={optionsTipoDesconto}
                          onChange={onChangeSelectTipoDesconto}
                          value={valueSelectTipoDesconto}
                          defaultValue={defaultValueSelectTipoDesconto}

                        />

                      )}
                    </div>

                  </div>
                  <div className="row mt-3">
                    <div class="col-sm-6 co-md-6 col-xl-6">

                      {InputFieldQTDInicioComponent && (
                        <InputFieldQTDInicioComponent
                          label={labelInputQTDInicio}
                          type="text"
                          id={id}
                          value={valueInputFieldQTDInicio}
                          onChange={onChangeInputFieldQTDInicio}
                          readOnly={readOnlyQTDInicio}
                          style={styleQTDInicio}
                        />
                      )}
                    </div>
                    <div class="col-sm-6 col-md-6 col-xl-6">

                      {InputFieldQTDFimComponent && (
                        <InputFieldQTDFimComponent
                          label={labelInputQTDFim}
                          type="text"
                          id={id}
                          value={valueInputFieldQTDFim}
                          onChange={onChangeInputFieldQTDFim}
                          readOnly={readOnlyQTDFim}
                          style={styleQTDFim}
                        />
                      )}
                    </div>
                  </div>

                  <div className="row mt-3">

                    <div className="col-sm-6 col-md-4 col-xl-4 ">

                      {InputFieldDescontoComponent1 && (
                        <InputFieldDescontoComponent1
                          label={labelInputFieldDesconto1}
                          type="text"
                          value={valueInputFieldDesconto1}
                          onChange={onChangeInputFieldDesconto1}
                          readOnly={readOnlyDesconto1}
                          style={styleDesconto1}
                        />
                      )}
                    </div>

                    <div className="col-sm-6 col-md-4 col-xl-4 ">
                      {InputFieldDescontoComponent2 && (
                        <InputFieldDescontoComponent2
                          label={labelInputFieldDesconto2}
                          type="text"
                          value={valueInputFieldDesconto2}
                          onChange={onChangeInputFieldDesconto2}
                          readOnly={readOnlyDesconto2}
                          style={styleDesconto2}
                        />
                      )}
                    </div>

                    <div className="col-sm-6 col-md-4 col-xl-4 ">
                      {InputFieldVrInicio && (
                        <InputFieldVrInicio
                          label={labelInputFieldVrInicio}
                          type="text"
                          value={valueInputFieldVrInicio}
                          onChange={onChangeInputFieldVrInicio}
                          readOnly={readOnlyVrInicio}
                          style={styleVrInicio}
                        />
                      )}
                    </div>
                  </div>

                  <div className="row mt-3">
                    <div className="col-sm-6 col-md-6 col-xl-4 ">
                      {InputFieldVrFim && (
                        <InputFieldVrFim
                          label={labelInputFieldVrFim}
                          type="text"
                          value={valueInputFieldVrFim}
                          onChange={onChangeInputFieldVrFim}
                          readOnly={readOnlyVrFim}
                          style={styleVrFim}
                          // disabled={readOnlyVrFim}
                        />
                      )}
                    </div>


                   
                    
                  </div>    
                  <div className="row mt-3">
                    <div className="col-sm-6 col-md-6 col-xl-6 ">
                      {InputFieldDTInicioComponent && (
                        <InputFieldDTInicioComponent
                          label={labelInputDTInicio}
                          type="date"
                          id={id}
                          value={valueInputFieldDTInicio}
                          onChange={onChangeInputFieldDTInicio}
                          readOnly={readOnlyDTInicio}
                        />
                      )}
                    </div>

                    <div className="col-sm-6 col-md-6 col-xl-6 ">
                      {InputFieldDTFimComponent && (
                        <InputFieldDTFimComponent
                          label={labelInputDTFim}
                          type="date"
                          id={id}
                          value={valueInputFieldDTFim}
                          onChange={onChangeInputFieldDTFim}
                          readOnly={readOnlyDTFim}
                        />
                      )}
                    </div>
                  </div>

                 

                  {/* <hr style={{ borderColor: 'black', width: '100%', height: '10px' }} /> */}
                  {/* FIM MECANICA */}
                  
                  {/* <h2>Fonecedor</h2> */}

                  {/* INICIO FORNECEDOR */}
                  <div className="row mt-3">
                      {InputSelectFornecedorComponent && (
                        <InputSelectFornecedorComponent
                          label={labelSelectFornecedor}
                          readOnly={readOnlyFornecedor}
                          id={id}
                          options={optionsFornecedores}
                          onChange={onChangeSelectFornecedor}
                          value={valueSelectFornecedor}
                          defaultValue={defaultValueSelectFornecedor}

                        />

                      )}
                    
                  </div>

                  {/* FIM FORNECEDOR */}
                  <hr style={{ borderColor: 'black', width: '100%', height: '10px' }} />
                  
                  <div className="row mt-3" >

                    <div className="col-sm-6 col-md-6 col-xl-6 ">

                      {InputSelectMarcasComponent && (
                        <InputSelectMarcasComponent
                          label={labelSelectMarcas}
                          readOnly={readOnlyMarcas}
                          id={id}
                          options={optionsMarcas}
                          onChange={onChangeSelectMarcas}
                          value={valueSelectMarca}
                          defaultValue={defaultValueSelectMarca}
                          type="select"
                        />
                      )}

                
                    </div>

                    {InputSelectEmpresaComponentAync && (
                      <InputSelectEmpresaComponentAync
                      label={labelSelectEmpresaAsync}
                      // defaultValue={defaultOptionsEmpresasAsync}
                      value={valueSelectEmpresaAsync}
                      optionsMultSelect={optionsEmpresasAsync}
                      onChange={onChangeSelectEmpresaAsync}
               
                      isMulti={true}
                      />
                    )}
                     
                  </div>
                  <div className="row mt-3" >

                    <div className="col-sm-6 col-md-6 col-xl-6 ">

                      {InputSelectStatus && (
                        <InputSelectStatus
                          label={labelSelectStatus} 
                          readOnly={readOnlyStatus}
                          options={optionsStatus}
                          onChange={onChangeSelectStatus}
                          value={valueSelectStatus}
                          defaultValue={defaultValueSelectStatus}
                            
                        />
                      )}

                    </div>
                    <div className="col-sm-6 col-md-6 col-xl-6 ">
                      {ButtonTypeEmpresa && (
                        <ButtonTypeEmpresa
                          textButton={linkNomeEmpresa}
                          onClickButtonType={onButtonClickEmpresa}
                          cor={corEmpresa}
                          tipo="button"
                          Icon={IconEmpresa}
                          iconColor="#fff"
                          iconSize={16}
                        />
                      )}
                      
                    </div>
                     
                  </div>
                    
                  <div>
                    <hr style={{ borderColor: 'black', width: '100%', height: '10px' }} />

                  
                    <h2 style={{paddingLeft: '1rem'}} >Criar Promoção Por </h2>
                    <div className="row">
                        <div className="col-sm-6 col-md-4 col-xl-4">
                          {InputProduto && (
                            <InputProduto
                              label={labelInputProduto}
                              // type="radio"
                              className="form-check-input"
                              checked={valueInputProduto}
                              onChange={onChangeInputProduto}
                              readOnly={readOnlyProduto}
                            
                            />
                          )}

                        </div>
                        
                        <div className="col-sm-6 col-md-4 col-xl-4">

                          {InputGrupoEstrutura && (
                            <InputGrupoEstrutura 
                              label={labelInputGrupoEstrutura}
                              type="checkbox"
                              className="form-check-input"
                              checked={valueInputGrupoEstrutura}
                              onChange={onChangeInputGrupoEstrutura}
                              readOnly={readOnlyGrupoEstrutura}
                            
                            />
                          )}

                        </div>
                        
                        <div className="col-sm-6 col-md-4 col-xl-4">

                          {InputGrupoEstruturaProduto && (
                            <InputGrupoEstruturaProduto 
                              label={labelInputGrupoEstruturaProduto}
                              type="checkbox"
                              className="form-check-input"
                              checked={valueInputGrupoEstruturaProduto}
                              onChange={onChangeInputGrupoEstruturaProduto}
                              readOnly={readOnlyGrupoEstruturaProduto}
                            
                            />
                          )}

                        </div>
                        
                    </div>
                  </div>
                  <div style={styleEstrutura}>

                    <hr style={{ borderColor: 'black', width: '100%', height: '10px' }} />

                    <h2 style={{paddingLeft: '1rem'}} >Promoção Por Estrutura Mercadológica</h2>
                    
                    <div className="row mt-3 "  >

                      <div className="col-sm-6 col-md-6 col-xl-6">
                        {MenuTreeSelectOrigemComponent && (
                          <MenuTreeSelectOrigemComponent
                            valueMenuSelect={valueTreeSelectOrigem}
                            onChangeMenuSelect={onChangeTreeSelectOrigem}
                            optionsMenuSelect={optionsTreeSelectOrigem}
                            placeholderMenuSelect={placeholderTreeSelectOrigem}
                            onNodeMenuSelect={onNodeTreeSelectOrigem}
                            onNodeMenuUnselect={onNodeTreeUnselectOrigem}
                            label={labelSelectSubGrupoOrigemAsync}
                          />
                        )}

                      </div>

                      <div className="col-sm-6 col-md-6 col-xl-6">
                        {MenuTreeSelectDestinoComponent && (
                          <MenuTreeSelectDestinoComponent
                            valueMenuSelect={valueTreeSelectDestino}
                            onChangeMenuSelect={onChangeTreeSelectDestino}
                            optionsMenuSelect={optionsTreeSelectDestino}
                            placeholderMenuSelect={placeholderTreeSelectDestino}
                            onNodeMenuSelect={onNodeTreeSelectDestino}
                            onNodeMenuUnselect={onNodeTreeUnselectDestino}
                            label={labelSelectSubGrupoDestinoAsync}
                          />
                        )}
                      </div>
                    </div>
                  </div>

                  <div style={styleEstruturaProduto}>

                    <hr style={{ borderColor: 'black', width: '100%', height: '10px' }} />

                    <h2 style={{paddingLeft: '1rem'}} >Promoção Por Estrutura Mercadológica E Produtos</h2>
                    
                    <div className="row mt-3 "  >

                      <div className="col-sm-6 col-md-6 col-xl-6">
                        {MenuTreeSelectOrigemComponentEstProd && (
                          <MenuTreeSelectOrigemComponentEstProd
                            valueMenuSelect={valueTreeSelectOrigemEstProd}
                            onChangeMenuSelect={onChangeTreeSelectOrigemEstProd}
                            optionsMenuSelect={optionsTreeSelectOrigemEstProd}
                            placeholderMenuSelect={placeholderTreeSelectOrigemEstProd}
                            onNodeMenuSelect={onNodeTreeSelectOrigemEstProd}
                            onNodeMenuUnselect={onNodeTreeUnselectOrigemEstProd}
                            label={labelSelectSubGrupoOrigemAsyncEstProd}
                          />
                        )}

                        {ButtonTypeProdutoEstruturaOrigem && (
                          <ButtonTypeProdutoEstruturaOrigem
                            textButton={linkNomeProdutoEstruturaOrigem}
                            onClickButtonType={onButtonClickProdutoEstruturaOrigem}
                            cor={corProdutoEstruturaOrigem}
                            tipo="button"
                            Icon={IconProdutoEstruturaOrigem}
                            iconColor="#fff"
                            iconSize={16}
                          />
                        )}
                      </div>

                      <div className="col-sm-6 col-md-6 col-xl-6">
                          
             
                        {MenuTreeSelectDestinoComponentEstProd && (
                          <MenuTreeSelectDestinoComponentEstProd
                            valueMenuSelect={valueTreeSelectDestinoEstProd}
                            onChangeMenuSelect={onChangeTreeSelectDestinoEstProd}
                            optionsMenuSelect={optionsTreeSelectDestinoEstProd}
                            placeholderMenuSelect={placeholderTreeSelectDestinoEstProd}
                            onNodeMenuSelect={onNodeTreeSelectDestinoEstProd}
                            onNodeMenuUnselect={onNodeTreeUnselectDestinoEstProd}
                            label={labelSelectSubGrupoDestinoAsyncEstProd}
                          />
                        )}

                        {ButtonTypeProdutoEstruturaDestino && (
                          <ButtonTypeProdutoEstruturaDestino
                            textButton={linkNomeProdutoEstruturaDestino}
                            onClickButtonType={onButtonClickProdutoEstruturaDestino}
                            cor={corProdutoEstruturaDestino}
                            tipo="button"
                            Icon={IconProdutoEstruturaDestino}
                            iconColor="#fff"
                            iconSize={16}
                          />
                        )}
                      </div>
                    </div>
                  </div>

                  <div style={styleProduto}>

                    <hr style={{ borderColor: 'black', width: '100%', height: '10px' }} />

                    {/* INICIO PRODUTO ORIGEM */}
                      <h2>Produto Origem</h2>
                    <div className="row mt-3">

                      <div className="col-sm-6 col-md-6 col-xl-6 ">
                        {InputFieldProdutoOigem && (
                          <InputFieldProdutoOigem
                            label={labelInputFieldProdutoOigem}
                            type="text"
                            value={valueInputFieldProdutoOigem}
                            onChange={onChangeInputFieldProdutoOigem}
                            readOnly={readOnlyProdutoOigem}
                          />
                        )}

                        {ButtonTypeProdutoPesquisadoOrigem && (
                          <ButtonTypeProdutoPesquisadoOrigem
                            textButton={linkNomeProdutoPesquisadoOrigem}
                            onClickButtonType={onButtonClickProdutoPesquisadoOrigem}
                            cor={corProdutoPesquisadoOrigem}
                            tipo="button"
                            Icon={IconProdutoPesquisadoOrigem}
                            iconColor="#fff"
                            iconSize={16}
                          />

                        )}

                      
                      </div>
                      <div className="col-sm-6 col-md-6 col-xl-6">
                        {InputFileProdutoOigem && (
                          <InputFileProdutoOigem
                            label={labelInputFileProdutoOigem}
                            type="file"
                            accpet={acceptFileProdutoOigem}
                            value={valueInputFileProdutoOigem}
                            onChange={onChangeInputFileProdutoOigem}
                            readOnly={readOnlyFileProdutoOigem}
                            disabled={readOnlyFileProdutoOigem}
                          />
                        )}

                        {ButtonTypeCancelar && (
                          <ButtonTypeCancelar
                            textButton={linkCancelar}
                            onClickButtonType={onButtonClickCancelar}
                            cor={corCancelar}
                            tipo="button"
                            Icon={IconCancelar}
                            iconColor="#fff"
                            iconSize={16}
                          />
                        )}
                      </div>

                    </div>
                    <hr style={{ borderColor: 'black', width: '100%', height: '10px' }} />

                    {/* FIM PRODUTO ORIGEM */}

                    {/* INICIO PRODUTO DESTINO  */}
                    <h2>Produto Destino</h2>
                    <div className="row mt-3">
                      <div className="col-sm-6 col-md-6 col-xl-6 ">

                        {InputFieldProdutoDestino && (
                          <InputFieldProdutoDestino
                            label={labelInputFieldProdutoDestino}
                            type="text"
                            value={valueInputFieldProdutoDestino}
                            onChange={onChangeInputFieldProdutoDestino}
                            readOnly={readOnlyProdutoDestino}
                          />
                        )}

                        {ButtonTypeProdutoPesquisadoDestino && (
                          <ButtonTypeProdutoPesquisadoDestino
                            textButton={linkNomeProdutoPesquisadoDestino}
                            onClickButtonType={onButtonClickProdutoPesquisadoDestino}
                            cor={corProdutoPesquisadoDestino}
                            tipo="button"
                            Icon={IconProdutoPesquisadoDestino}
                            iconColor="#fff"
                            iconSize={16}
                            disabledBTN={readOnlyButtonProdutoPesquisadoDestino}
                          />
                        )}

                    
                      </div>

                      <div className="col-sm-6 col-md-6 col-xl-6 ">
                        {InputFileProdutoDestino && (
                          <InputFileProdutoDestino
                            label={labelInputFileProdutoDestino}
                            type="file"
                            accpet={acceptFileProdutoDestino}
                            value={valueInputFileProdutoDestino}
                            onChange={onChangeInputFileProdutoDestino}
                            readOnly={readOnlyFileProdutoDestino}
                            disabled={readOnlyFileProdutoDestino}
                          />
                        )}

                        {ButtonTypeCadastro && (
                          <ButtonTypeCadastro
                            textButton={linkNome}
                            onClickButtonType={onButtonClickCadastro}
                            cor={corCadastro}
                            tipo="button"
                            Icon={IconCadastro}
                            iconColor="#fff"
                            iconSize={16}
                          />
                        )} 
                        
                      </div>

                    </div>
                    {/* FIM PRODUTO DESTINO */}
                  </div>

                  <hr style={{ borderColor: 'black', width: '100%', height: '10px' }} />

                  <div className="row mt-3">
                    {ButtonTypeVisualizarProduto && (
                      <ButtonTypeVisualizarProduto
                        textButton={linkNomeVisualizarProduto}
                        onClickButtonType={onButtonClickVisualizarProduto}
                        cor={corVisualizarProduto}
                        tipo="button"
                        Icon={IconVisualizarProduto}
                        iconColor="#fff"
                        iconSize={25}
                        disabledBTN={readOnlyVisualizarProduto}
                      />
                    )}
                  </div>

{/* <hr style={{ borderColor: 'black', width: '100%', height: '10px' }} /> */}

                  <div className="row" style={{ marginTop: '3rem' }}>

                    {ButtonSearchComponent && (
                      <ButtonType
                        textButton={linkNomeSearch}
                        onClickButtonType={onButtonClickSearch}
                        cor={corSearch}
                        tipo="button"
                        Icon={IconSearch}
                        iconColor="#fff"
                        iconSize={25}
                        disabledBTN={styleButtonSearch}
                      />
                    )}

                    

                    {ButtonTypePedido && (
                      <ButtonTypePedido
                        textButton={linkPedido}
                        onClickButtonType={onButtonClickPedido}
                        // cor="danger"
                        cor={corPedido}
                        tipo="button"
                        Icon={IconPedido}
                        iconColor="#fff"
                        iconSize={25}
                        disabledBTN={disabledBTBPedido}
                      />
                    )}

                    {ButtonTypeEstruturaProduto && (
                      <ButtonTypeEstruturaProduto
                        textButton={linkEstruturaProduto}
                        onClickButtonType={onButtonClickEstruturaProduto}
                        // cor="danger"
                        cor={corEstruturaProduto}
                        tipo="button"
                        Icon={IconEstruturaProduto}
                        iconColor="#fff"
                        iconSize={25}
                        style={{ color: 'white' }}
                        disabledBTN={disabledBTEstruturaProduto}
                      />
                    )}

                    {ButtonTypeTXT && (
                      <ButtonTypeTXT
                        textButton={linkTXT}
                        onClickButtonType={onButtonClickTXT}
                        // cor="danger"
                        cor={corTXT}
                        tipo="button"
                        Icon={IconTXT}
                        iconColor="#000"
                        iconSize={25}
                        style={{ color: 'white' }}
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
                        iconSize={25}
                        style={{ color: 'white' }}
                      />
                    )}
                   
                    {ButtonTypeDownload && (
                      <ButtonTypeDownload
                        textButton={linkDownload}
                        onClickButtonType={onButtonClickDownload}
                        // cor="danger"
                        cor={corDownload}
                        tipo="button"
                        Icon={IconDownload}
                        iconColor="#fff"
                        iconSize={25}
                        style={{ color: 'white' }}
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