import React, { Fragment } from "react"
import { ButtonType } from "../Buttons/ButtonType";
import { MdAdd } from "react-icons/md";
import { AiOutlineSave, AiOutlineSearch } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";
import { GoDownload, GoUpload } from "react-icons/go";
import { InputFieldCheckBox } from "../Inputs/InputChekBox";
import { HeadTitleComponent } from "../HeadTitle";
import AsyncSelectAction from "../Select/AsyncSelectAction";
import { MenuTreeSelect } from "../Inputs/menuDropDown";
import { Menu } from "primereact/menu";



export const ActionMain = ({
  title,
  subTitle,
  linkComponentAnterior,
  linkComponent,

  buttonHeader,
  onClickButtonTypeHeader,
  textButtonHeader,
  disabledBTNHeader,
  iconSizeHeader,
  iconHeader,
  corHeader,

  readOnlyDescricao,
  readOnlyPendencia,
  readOnlyVendaCPFCNPJ,
  readOnlyTelefone,

  valueSelectEmpresa,
  valueSelectMarca,
  valueSelectUF,
  valueSelectComissoes,
  valueSelectQuebra,
  valueSelectGrupo,
  valueSelectSubGrupo,
  valueSelectPagamento,
  valueSelectFuncionario,
  valueSelectCondicoesPagamentos,
  valueSelectFornecedor,
  valueSelectFabricante,
  valueSelectComprador,
  valueSelectSituacao,
  valueSelectCampanha,
  valueSelectTipoPedido,
  valueSelectPendencia,
  valueSelectStatusFiliais,
  valueSelectAlvaras,

  valueSelectLoja,
  defaultValueSelectEmpresa,
  defaultValueSelectSubGrupo,


  defaultOptionsEmpresasAsync,
  defaultOptionsMarcaAsync,
  defaultOptionsFornecedoresAsync,
  defaultOptionsFabricantesAsync,
  defaultOptionsCompradoresAsync,


  valueSelectEmpresaAsync,
  valueSelectMarcaAsync,
  valueSelectFornecedoresAsync,
  valueSelectFabricantesAsync,
  valueSelectCompradoresAsync,

  valueMultSelectGrupo,
  valueMultSelectSubGrupo,
  valueMultSelectMarca,
  valueMultSelectFornecedor,
  valueMultSelectEmpresa,
  valueMultSelectFuncionario,

  defaultValueMultSelectGrupo,

  defaultValueSelectFornecedor,
  defaultValueSelectGrupo,
  defaultValueSelectMarca,

  isMultiSelectGrupo,
  isMultiSelectMarca,

  valueSelectGrade,



  valueDTCosulta,
  valueInputFieldDTInicio,
  valueInputFieldDTFim,
  valueInputFieldDTFimA,
  valueInputFieldDTFimB,
  valueInputFieldDTFimC,
  valueInputFieldDTInicioA,
  valueInputFieldDTInicioB,
  valueInputFieldDTInicioC,

  valueInputFieldDescricao,
  valueInputQuantidade,
  valueInputField,
  valueInputFieldCodBarra,
  valueInputFieldNumeroVoucher,
  valueInputFieldNumeroNF,
  valueInputFieldLojaOrigem,
  valueInputFieldVendedor,
  valueInputFieldTelefone,
  valueInputFieldVendaCPFCNPJ,
  valueInputFieldEndereco,
  valueInputFieldComplemento,
  valueInputFieldUF,
  valueInputFieldCep,
  valueInputFieldBairro,
  valueInputFieldCidade,
  valueInputFieldSerie,
  valueInputFieldSearch,
  valueInputFieldOR,
  valueInputFieldOT,
  valueSelectFilial,
  valueInputFieldComissao,
  valueInputFieldObsFornecedor,

  valueTextAreaFieldComponent,

  nomeSelectGrupo,

  onChangeTextAreaFieldComponent,


  onChangeInputFieldLojaOrigem,
  onChangeInputFieldNumeroNF,
  onChangeInputFieldDescricao,
  onChangeInputFieldDTConsulta,
  onChangeInputFieldDTInicio,
  onChangeInputFieldDTInicioA,
  onChangeInputFieldDTInicioB,
  onChangeInputFieldDTInicioC,
  onChangeInputFieldDTFimA,
  onChangeInputFieldDTFimB,
  onChangeInputFieldDTFimC,
  onChangeInputFieldDTFim,
  onChangeInputQuantidade,
  onChangeInputField,
  onChangeInputFieldCodBarra,
  onChangeInputFieldNumeroVoucher,
  onChangeInputFieldVendedor,
  onChangeInputFieldVendaCPFCNPJ,
  onChangeInputFieldTelefone,
  onChangeInputFieldEndereco,
  onChangeInputFieldComplemento,
  onChangeInputFieldUF,
  onChangeInputFieldCep,
  onChangeInputFieldBairro,
  onChangeInputFieldCidade,
  onChangeInputFieldSerie,
  onChangeInputFieldSearch,
  onChangeInputFieldOR,
  onChangeInputFieldOT,
  onChangeInputFieldComissao,
  onChangeInputFieldObsFornecedor,

  onChangeSelectEmpresa,
  onChangeSelectMarcas,
  onChangeSelectUF,
  onChangeSelectComissoes,
  onChangeSelectQuebra,
  onChangeSelectGrupo,
  onChangeSelectSubGrupo,
  onChangeSelectPagamento,
  onChangeSelectFuncionario,
  onChangeSelectCondicoesPagamentos,
  onChangeSelectFornecedor,
  onChangeSelectFabricante,
  onChangeSelectComprador,
  onChangeSelectSituacao,
  onChangeSelectCampanha,
  onChangeSelectTipoPedido,
  onChangeSelectGrade,
  onChangeSelectPendencia,
  onChangeStatusFiliais,
  onChangeAlvaras,
  onChangeSelectFilial,


  onChangeSelectEmpresaAsync,
  onChangeSelectMarcaAsync,
  onChangeSelectFornecedoresAsync,
  onChangeSelectFabricantesAsync,
  onChangeSelectCompradoresAsync,

  onChangeMultSelectGrupo,
  onChangeMultSelectSubGrupo,
  onChangeMultSelectMarca,
  onChangeMultSelectFornecedor,
  onChangeMultSelectEmpresa,
  onChangeMultSelectFuncionario,

  // Selects
  options,
  optionsSelectUF,
  optionsSelectCampanha,
  optionsMarcas,
  optionsEmpresas,
  optionsComissoes,
  optionsQuebra,
  optionsGrupos,
  optionsSubGrupos,
  optionsLojas,
  optionsFornecedores,
  optionsGrades,
  optionsFabricantes,
  optionsCompradores,
  optionsSituacao,
  optionsNFE,
  optionsSaldo,
  optionsFilial,
  optionsFrete,
  optionsUsoPrinicipal,
  optionsPagamento,
  optionsTipoNF,
  optionsFilialCNPJ,
  optionsContaBanco,
  optionsFuncionarios,
  optionsFiscal,
  optionsSelectEnviar,
  optionsCondicoesPagamentos,
  optionsTipoPedido,
  optionsSelectTransportadora,
  optionsSelectRotina,
  optionsFieldLojaOrigemComponent,
  optionsPendencia,
  optionStatusFiliais,
  optionAlvaras,

  optionsEmpresasAsync,
  optionsMarcaAsync,
  optionsFornecedoresAsync,
  optionsFabricantesAsync,
  optionsCompradoresAsync,

  loadOptionsEmpresasAsync,
  loadOptionsMarcaAsync,
  loadOptionsFornecedoresAsync,
  loadOptionsFabricantesAsync,
  loadOptionsCompradoresAsync,

  optionsMultSelectGrupo,
  optionsMultSelectSubGrupo,
  optionsMultSelectMarca,
  optionsMultSelectFornecedor,
  optionsMultSelectEmpresa,
  optionsMultSelectFuncionario,

  // Multi Selects
  MultSelectGrupoComponent,
  MultSelectSubGrupoComponent,
  MultSelectMarcaComponent,
  MultSelectFornecedorComponent,
  MultSelectEmpresaComponent,
  MultSelectFuncionarioComponent,

  animatedComponentsGrupo,
  animatedComponentsSubGrupo,
  animatedComponentsMarca,
  animatedComponentsFornecedor,
  animatedComponentsEmpresa,
  animatedComponentsFuncionario,

  // Inputs Fields
  InputFieldComponent,
  InputFieldUFComponent,
  InputFieldComplementoComponent,
  InputFieldEnderecoComponent,
  InputFieldBairroComponent,
  InputFieldCidadeComponent,
  InputFieldCepComponent,
  InputFieldTelefoneComponent,
  InputFieldNumeroNFComponent,
  InputFieldDTInicioComponent,
  InputFieldDTInicioAComponent,
  InputFieldDTInicioBComponent,
  InputFieldDTInicioCComponent,
  InputFieldDTFimComponent,
  InputFieldDTFimAComponent,
  InputFieldDTFimBComponent,
  InputFieldDTFimCComponent,
  InputFieldDTConsultaComponent,
  InputFieldCodBarraComponent,
  InputFieldVendaCPFCNPJComponent,
  InputFieldNumeroVoucherComponent,
  InputFieldSerieComponent,
  InputFieldModeloNFComponent,
  InputFieldChaveNFComponent,
  InputFieldNFCEComponent,
  InputFieldLojaOrigemComponent,
  InputFieldLojaDestinoComponent,
  InputFieldDescricaoComponent,
  InputFieldQuantidadeComponent,
  InputFieldStatusComponent,
  InputFieldObsFornecedor,
  InputFieldObsInterna,
  InputFieldVendedor,
  InputFieldEmailVendedor,
  InputFieldORComponent,
  InputFieldOTComponent,

  InputFieldSearch,

  InputFieldTotalAntesDescontoComponent,
  InputFieldDescontoComponent,
  InputFieldDescontoComponent1,
  InputFieldDescontoComponent2,
  InputFieldDescontoComponent3,
  InputFieldComissao,
  InputFieldTotalLiq,
  InputFieldAdiantamentoTotalComponent,
  InputFieldDespesasAdicionaisComponent,
  InputFieldImpostoComponent,
  InputFieldImpostoRetidoComponent,
  InputFieldTotaPagarComponent,
  InputFieldSaldoComponent,
  InputFieldValorAplicadoComponent,

  TextAreaFieldComponent,

  onKeyDownInputField,
  onKeyDownInputFieldCodBarra,
  onKeyDownInputFieldNumeroNF,
  onKeyDownInputFieldDescricao,
  onKeyDownInputFieldComissao,
  onKeyDownInputFieldObsFornecedor,
  onKeyDownInputFieldVendedor,
  onKeyDownInputFieldEmailVendedor,
  onKeyDownInputFieldDesconto1,
  onKeyDownInputFieldDesconto2,
  onKeyDownInputFieldDesconto3,
  onKeyDownInputFieldLojaOrigem,
  onKeyDownInputFieldSearch,
  onKeyDownInputFieldDTInicioA,
  onKeyDownInputFieldDTFimA,
  onKeyDownInputFieldDTInicioB,
  onKeyDownInputFieldDTFimB,
  onKeyDownInputFieldDTInicioC,
  onKeyDownInputFieldDTFimC,
  onKeyDownInputFieldDTInicio,
  onKeyDownInputFieldDTFim,
  onKeyDownSelectEmpresa,
  onKeyDownInputFieldDTConsulta,
  onKeyDownSelectMarcas,
  onKeyDownEmpresa,
  onKeyDownSelectUF,
  onKeyDownSelectComissoes,
  onKeyDownInputFieldQuantidade,
  onKeyDownInputFieldNumeroVoucher,
  onKeyDownInputFieldVendaCPFCNPJ,

  // Inputs Selects
  InputSelectEmpresaComponent,
  InputSelectCampanhaComponent,
  InputSelectMarcasComponent,
  InputSelectUFComponent,
  InputSelectComissoesComponent,
  InputSelectQuebraComponent,
  InputSelectGrupoComponent,
  InputSelectSubGrupoComponent,
  InputSelectLojasComponent,
  InputSelectFornecedorComponent,
  InputSelectGradeComponent,
  InputSelectFabricanteComponent,
  InputSelectCompradorComponent,
  InputSelectPagamentoComponent,
  InputSelectUsoPrinicipalComponent,
  InputSelectFreteComponent,
  InputSelectSaldoComponent,
  InputSelectFilialComponent,
  InputSelectNFEComponent,
  InputSelectSituacaoComponent,
  InputSelectFilialCNPJComponent,
  InputSelectTipoNFComponent,
  InputSelectContaBancoComponent,
  InputSelectFuncionarioComponent,
  InputSelectFiscalComponent,
  InputSelectEnviarComponent,
  InputSelectCondicoesPagamentos,
  InputSelectTipoPedido,
  InputSelectTransportadora,
  InputSelectRotina,
  InputSelectPendenciaComponent,
  InputSelectStatusFiliaisComponent,
  InputSelectAlvarasComponent,



  // Selects Async
  InputSelectEmpresaComponentAync,
  InputSelectMarcaComponentAync,
  InputSelectFonecedoresComponentAync,
  InputSelectFabricantesComponentAync,
  InputSelectCompradoresComponentAync,


  // Inputs CheckBox
  CheckBoxComponent,
  CheckBoxComponent1,
  CheckBoxComponent2,
  CheckBoxComponent3,
  CheckBoxComponent4,
  CheckBoxComponent5,

  // Buttons
  ButtonSearchComponent,
  ButtonModalComponent,
  ButtonTypeCadastro,
  ButtonTypeCancelar,
  ButtonTypeSalvar,
  ButtonTypeExportar,
  ButtonTypeImportar,
  ButtonTypeVendasEstrutura,
  ButtonTypeVendasVendedor,
  ButtonTypeProdutoVendidos,
  ButtonTypeVendasResumida,
  ButtonTypeVendasPorPeriodo,
  ButtonTypeVendasPorProduto,
  ButtonTypeBalanco,
  ButtonTypeSaldo,
  ButtonTypeLoja,
  ButtonTypeVincular,

  // Labels
  labelInputField,
  labelInputFieldDTFim,
  labelInputDTFimA,
  labelInputDTFimB,
  labelInputDTFimC,
  labelInputFieldDTInicio,
  labelInputDTInicioA,
  labelInputDTInicioB,
  labelInputDTInicioC,
  labelInputFieldDTConsulta,
  labelInputFieldCodBarra,
  labelInputFieldNVoucherNVendaCPFCNPJ,
  labelInputFieldVendaCPFCNPJ,
  labelInputFieldNumeroVoucher,
  labelInputFieldSerie,
  labelInputFieldNFCE,
  labelInputFieldStatus,
  labelInputFieldLojaOrigem,
  labelInputFieldLojaDestino,
  labelInputFieldDescricao,
  labelInputFieldQuantidade,
  labelInputFieldNumeroNF,
  labelInputFieldModeloNF,
  labelInputFieldChaveNF,
  labelInputFieldUF,
  labelInputFieldComplemento,
  labelInputFieldEndereco,
  labelInputFieldBairro,
  labelInputFieldCidade,
  labelInputFieldCep,
  labelInputFieldObsFornecedor,
  labelInputFieldObsInterna,
  labelInputFieldVendedor,
  labelInputFieldEmailVendedor,
  labelInputFieldComissao,
  labelInputFieldTotalLiq,
  labelInputFieldTelefone,
  labelInputFieldOR,
  labelInputFieldOT,

  labelTextAreaField,
  labelInputFieldTotalAntesDesconto,
  labelInputFieldDesconto,
  labelInputFieldDesconto1,
  labelInputFieldDesconto2,
  labelInputFieldDesconto3,
  labelInputFieldAdiantamentoTotal,
  labelInputFieldDespesasAdicionais,
  labelInputFieldImposto,
  labelInputFieldImpostoRetido,
  labelInputFieldTotaPagar,
  labelInputFieldSaldo,
  labelInputFieldValorAplicado,
  labelInputFieldSearch,
  labelInputQuantidade,

  placeHolderInputFieldDescricao,
  placeHolderInputFieldComponent,
  placeHolderInputFieldCodBarra,
  placeHolderInputFieldNumeroNF,
  placeHolderInputFieldSerie,
  placeHolderInputFieldTelefone,
  placeHolderInputFieldVendaCPFCNPJ,
  placeHolderInputFieldQuantidade,
  placeHolderInputFieldOR,
  placeHolderInputFieldOT,
  placeHolderInputFieldComissao,
  placeHolderInputFieldObsFornecedor,
  placeHolderInputFieldVendedor,
  
  labelMultSelectGrupo,
  labelMultSelectSubGrupo,
  labelMultSelectMarca,
  labelMultSelectFornecedor,
  labelMultSelectEmpresa,
  labelMultSelectFuncionario,

  labelSelectUF,
  labelSelectComissoes,
  labelSelectMarcas,
  labelSelectEmpresa,
  labelSelectQuebra,
  labelSelectGrupo,
  labelSelectSubGrupo,
  labelSelectLojas,
  labelSelectFornecedor,
  labelSelectGrade,
  labelSelectFabricantes,
  labelSelectFilialCNPJ,
  labelSelectTipoNF,
  labelSelectCampanha,
  labelSelectContaBanco,
  labelSelectFiscal,
  labelSelectEnviar,
  labelSelectCondicoesPagamentos,
  labelSelectTipoPedido,
  labelSelectTransportadora,
  labelSelectRotina,
  LabelSelectStatusFiliais,
  LabelSelectAlvaras,

  labelSelectEmpresaAsync,
  labelSelectMarcaAsync,
  labelSelectFornecedoresAsync,
  labelSelectFabricantesAsync,
  labelSelectCompradoresAsync,


  // Label CheckBox
  labelCheckBox1,
  labelCheckBox2,
  labelCheckBox3,
  labelCheckBox4,
  labelCheckBox5,

  linkNome,
  linkNomeVincular,
  linkNomeModal,
  linkCancelar,
  linkExportar,
  linkImportar,
  linkNomeSearch,
  linkNomeVendasResumido,
  linkNomeVendasPorPeriodo,
  linkNomeVendasPorProduto,
  linkNomeVendasEstrutura,
  linkNomeVendasVendedor,
  linkNomeProdutoVendido,
  linkNomeLoja,
  linkNomeSaldo,
  linkNomeBalanco,
  linkSalvar,

  labelSelectPagamento,
  labelSelectUsoPrinicipal,
  labelSelectFrete,
  labelSelectSaldo,
  labelSelectFilial,
  labelSelectNFE,
  labelSelectSituacao,
  labelSelectFuncionario,
  labelSelectPendencia,
  // labelSelectFornecedor,
  // labelSelectFabricantes,
  labelSelectComprador,
  // labelSelectGrade,
  // labelSelectNFE,
  // labelSelectSituacao,

  styleSituacao,
  styleInputQuantidade,
  styleSubGrupo,
  id,

  isDisabledEmpresa,
  isDisabledCodBarra,
  isDisabledGrupo,
  isDisabledMarca,

  btnVisivelEstrutura,

  styleCancelar,
  styleVendasEstrutura,
  stylePendencia,
  styleEmpresa,
  styleSearch,
  styleCadastro,
  styleSalvar,
  styleInputFieldOR,
  styleInputFieldOT,
  stylesGrupo,
  styleProdutoVendido,
  styleVendedor,
  // Funções

  onButtonClickSearch,
  onButtonClickSalvar,
  onButtonClickCancelar,
  onButtonClickCadastro,
  onClickCriarVoucher,
  onClickVendaCPFCNPJ,
  onButtonClickModal,
  onButtonClickVendasEstrutura,
  onButtonClickVendasVendedor,
  onButtonClickLoja,
  onButtonClickSaldo,
  onButtonClickExportar,
  onButtonClickImportar,
  onButtonClickTypeBalanco,
  onButtonClickVincular,
  onButtonClickVendaPeriodo,
  onButtonClickVendaProduto,
  onButtonClickProdutoVendido,
  onButtonClickVendasResumido,

  iconVendasEstrutura,
  iconVendasVendedor,
  iconProdutoVendido,
  iconVendasResumida,
  IconCadastro,
  IconCancelar,
  IconSearch,
  iconTypeSaldo,
  iconSizeCadastro,
  IconSalvar,

  corCadastro,
  corCancelar,
  corSalvar,
  corSearch,
  corVendasEstrutura,
  corVendasVendedor,
  corTypeSaldo,
  corProdutoVendido,

  MenuTreeSelectComponent,
  valueTreeSelect,
  optionsTreeSelect,
  onChangeTreeSelect,
  placeholderTreeSelect,
  onNodeTreeSelect,
  onNodeTreeUnselect,

  idCheckBox,
  labelCheckBox,
  nomeChekBox,
  isChekedBox,
  onChangeCheckBox,

  keyGrupo

}) => {
  const Options = [
    { value: 0, label: "Todos" },
    // Adicione outras opções conforme necessário
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <Fragment>
      <form action="#" onSubmit={handleSubmit} style={{ zIndex: 9999 }} >
        <HeadTitleComponent
          tittuloComponent={title}
          nomeLoja={subTitle}
          linkComponentAnterior={linkComponentAnterior}
          linkComponent={linkComponent}
          // buttonHeader={buttonHeader}
          // onClickButtonTypeHeader={onClickButtonTypeHeader}
          // textButtonHeader={textButtonHeader}
          // disabledBTNHeader={disabledBTNHeader}
          iconSize={iconSizeHeader}
          Icon={iconHeader}
          cor={corHeader}
        />
        <div className="row">
          <div className="col-xl-12">
            <div id="panel-1" className="panel">
              <div className="panel-container show ">


                <div className="panel-tag" style={{ paddingBottom: '5rem' }}>
                  <div className="row">
                    {MenuTreeSelectComponent && (

                      <MenuTreeSelectComponent
                        valueMenuSelect={valueTreeSelect}
                        onChangeMenuSelect={onChangeTreeSelect}
                        optionsMenuSelect={optionsTreeSelect}
                        placeholderMenuSelect={placeholderTreeSelect}
                        onNodeMenuSelect={onNodeTreeSelect}
                        onNodeMenuUnselect={onNodeTreeUnselect}
                      />
                    )}
                  </div>

                  <div className="row">

                  </div>
                  <div className="row">
                    {InputSelectPendenciaComponent && (
                      <InputSelectPendenciaComponent
                        label={labelSelectPendencia}
                        id={id}
                        options={optionsPendencia}
                        onChange={onChangeSelectPendencia}
                        value={valueSelectPendencia}
                        readOnly={readOnlyPendencia}
                        isVisible={stylePendencia}
                        type="select"
                      />
                    )}

                    {InputFieldSearch && (
                      <InputFieldSearch
                        label={labelInputFieldSearch}
                        type="text"
                        value={valueInputFieldSearch}
                        onChange={onChangeInputFieldSearch}
                        onKeyDown={onKeyDownInputFieldSearch}
                      />
                    )}

                    {InputFieldDTInicioAComponent && (
                      <InputFieldDTInicioAComponent
                        label={labelInputDTInicioA}
                        type="date"
                        id={id}
                        name="dtconsultainicio"
                        value={valueInputFieldDTInicioA}
                        onChange={onChangeInputFieldDTInicioA}
                        onKeyDown={onKeyDownInputFieldDTInicioA}
                      />
                    )}
                    {InputFieldDTFimAComponent && (
                      <InputFieldDTFimAComponent
                        label={labelInputDTFimA}
                        type="date"
                        id={id}
                        name="dtconsultafim"
                        value={valueInputFieldDTFimA}
                        onChange={onChangeInputFieldDTFimA}
                        onKeyDown={onKeyDownInputFieldDTFimA}
                      />
                    )}

                    {InputFieldDTInicioBComponent && (
                      <InputFieldDTInicioBComponent
                        label={labelInputDTInicioB}
                        type="date"
                        id={id}
                        name="dtconsultainicio"
                        value={valueInputFieldDTInicioB}
                        onChange={onChangeInputFieldDTInicioB}
                        onKeyDown={onKeyDownInputFieldDTInicioB}
                      />
                    )}

                    {InputFieldDTFimBComponent && (
                      <InputFieldDTFimBComponent
                        label={labelInputDTFimB}
                        type="date"
                        id={id}
                        name="dtconsultafim"
                        value={valueInputFieldDTFimB}
                        onChange={onChangeInputFieldDTFimB}
                        onKeyDown={onKeyDownInputFieldDTFimB}
                      />
                    )}

                    {InputFieldDTInicioCComponent && (
                      <InputFieldDTInicioCComponent
                        label={labelInputDTInicioC}
                        type="date"
                        id={id}
                        name="dtconsultainicio"
                        value={valueInputFieldDTInicioC}
                        onChange={onChangeInputFieldDTInicioC}
                        onKeyDown={onKeyDownInputFieldDTInicioC}
                      />
                    )}


                    {InputFieldDTFimCComponent && (
                      <InputFieldDTFimCComponent
                        label={labelInputDTFimC}
                        type="date"
                        id={id}
                        name="dtconsultafim"
                        value={valueInputFieldDTFimC}
                        onChange={onChangeInputFieldDTFimC}
                        onKeyDown={onKeyDownInputFieldDTFimC}
                      />
                    )}
                  </div>

                  <div className="row">

                    {/* Inputs Datas */}


                    {InputFieldDTInicioComponent && (
                      <InputFieldDTInicioComponent
                        label={labelInputFieldDTInicio}
                        type="date"
                        id={id}
                        name="dtconsultainicio"
                        value={valueInputFieldDTInicio}
                        onChange={onChangeInputFieldDTInicio}
                        onKeyDown={onKeyDownInputFieldDTInicio}
                      />
                    )}
                    {/* {InputFieldDTInicioComponent && (
                      <InputFieldDTInicioComponent
                        label={labelInputFieldDTInicio}                     
                        id={id}
                        value={valueInputFieldDTInicio}
                        onChange={onChangeInputFieldDTInicio}
                      />
                    )} */}
                    {InputFieldDTFimComponent && (
                      <InputFieldDTFimComponent
                        label={labelInputFieldDTFim}
                        type="date"
                        id={id}
                        name="dtconsultafim"
                        value={valueInputFieldDTFim}
                        onChange={onChangeInputFieldDTFim}
                        onKeyDown={onKeyDownInputFieldDTFim}
                      />

                    )}

                    {InputFieldDTConsultaComponent && (
                      <InputFieldDTConsultaComponent
                        label={labelInputFieldDTConsulta}
                        type="date"
                        id={id}
                        name="dtconsultafim"
                        value={valueDTCosulta}
                        onChange={onChangeInputFieldDTConsulta}
                        onKeyDown={onKeyDownInputFieldDTConsulta}
                      />
                    )}

                    {InputFieldComissao && (
                      <InputFieldComissao
                        label={labelInputFieldComissao}
                        type="text"
                        id={id}
                        name="dtconsultafim"
                        value={valueInputFieldComissao}
                        onChange={onChangeInputFieldComissao}
                        placeHolder={placeHolderInputFieldComissao}
                        onKeyDown={onKeyDownInputFieldComissao}
                      />
                    )}

                    {InputFieldObsFornecedor && (
                      <InputFieldObsFornecedor
                        label={labelInputFieldObsFornecedor}
                        type="text"
                        id={id}
                        name="dtconsultafim"
                        value={valueInputFieldObsFornecedor}
                        onChange={onChangeInputFieldObsFornecedor}
                        placeHolder={placeHolderInputFieldObsFornecedor}
                        onKeyDown={onKeyDownInputFieldObsFornecedor}
                      />

                    )}

                    {InputFieldObsInterna && (
                      <InputFieldObsInterna
                        label={labelInputFieldObsInterna}
                        type="text"
                        id={id}
                        name="dtconsultafim"
                        value=""
                      />
                    )}

                    {InputFieldVendedor && (
                      <InputFieldVendedor
                        label={labelInputFieldVendedor}
                        type="text"
                        id={id}
                        name="dtconsultafim"
                        value={valueInputFieldVendedor}
                        onChange={onChangeInputFieldVendedor}
                        placeHolder={placeHolderInputFieldVendedor}
                        onKeyDown={onKeyDownInputFieldVendedor}
                      />
                    )}

                    {InputFieldEmailVendedor && (
                      <InputFieldEmailVendedor
                        label={labelInputFieldEmailVendedor}
                        type="text"
                        id={id}
                        name="dtconsultafim"
                        value=""
                        onKeyDown={onKeyDownInputFieldEmailVendedor}
                      />
                    )}


                    {InputFieldDescontoComponent1 && (
                      <InputFieldDescontoComponent1
                        label={labelInputFieldDesconto1}
                        type="text"
                        id={id}
                        name="dtconsultafim"
                        value=""
                        onKeyDown={onKeyDownInputFieldDesconto1}
                      />
                    )}
                    {InputFieldDescontoComponent2 && (
                      <InputFieldDescontoComponent2
                        label={labelInputFieldDesconto2}
                        type="text"
                        id={id}
                        name="dtconsultafim"
                        value=""
                        onKeyDown={onKeyDownInputFieldDesconto2}
                      />
                    )}

                    {InputFieldDescontoComponent3 && (
                      <InputFieldDescontoComponent3
                        label={labelInputFieldDesconto3}
                        type="text"
                        id={id}
                        name="dtconsultafim"
                        value=""
                        onKeyDown={onKeyDownInputFieldDesconto3}
                      />
                    )}

                    {InputFieldLojaOrigemComponent && (
                      <InputFieldLojaOrigemComponent
                        label={labelInputFieldLojaOrigem}
                        type="input"
                        id={id}
                        options={optionsFieldLojaOrigemComponent}
                        value={valueInputFieldLojaOrigem}
                        onChange={onChangeInputFieldLojaOrigem}
                        readOnly={true}
                        onKeyDown={onKeyDownInputFieldLojaOrigem}
                      />
                    )}




                    {/* Selects */}


                    {InputSelectEmpresaComponentAync && (
                      <AsyncSelectAction
                        label={labelSelectEmpresaAsync}
                        valueSelectAsync={valueSelectEmpresaAsync}
                        filtroOptions={optionsEmpresasAsync}
                        id={id}
                        onChangeSelectAsync={onChangeSelectEmpresaAsync}
                        loadOptions={loadOptionsEmpresasAsync}
                        defaultOptionsAsync={defaultOptionsEmpresasAsync}

                      />
                    )}
                    {InputSelectMarcaComponentAync && (
                      <InputSelectMarcaComponentAync
                        label={labelSelectMarcaAsync}
                        value={valueSelectMarcaAsync}
                        filterOption={optionsMarcaAsync}
                        onChange={onChangeSelectMarcaAsync}
                        loadOptions={loadOptionsMarcaAsync}
                        defaultOptions={defaultOptionsMarcaAsync}

                      />
                    )}
                    {InputSelectFonecedoresComponentAync && (
                      <InputSelectFonecedoresComponentAync
                        label={labelSelectFornecedoresAsync}
                        valueSelectAsync={valueSelectFornecedoresAsync}
                        filtroOptions={optionsFornecedoresAsync}
                        onChangeSelectAsync={onChangeSelectFornecedoresAsync}
                        loadOptions={loadOptionsFornecedoresAsync}
                        defaultOptionsAsync={defaultOptionsFornecedoresAsync}

                      />
                    )}
                    {InputSelectFabricantesComponentAync && (
                      <InputSelectFabricantesComponentAync
                        label={labelSelectFabricantesAsync}
                        valueSelectAsync={valueSelectFabricantesAsync}
                        filtroOptions={optionsFabricantesAsync}
                        onChangeSelectAsync={onChangeSelectFabricantesAsync}
                        loadOptions={loadOptionsFabricantesAsync}
                        defaultOptionsAsync={defaultOptionsFabricantesAsync}

                      />
                    )}
                    {InputSelectCompradoresComponentAync && (
                      <InputSelectCompradoresComponentAync
                        label={labelSelectCompradoresAsync}
                        valueSelectAsync={valueSelectCompradoresAsync}
                        filtroOptions={optionsCompradoresAsync}
                        onChangeSelectAsync={onChangeSelectCompradoresAsync}
                        loadOptions
                        defaultOptionsAsync={defaultOptionsCompradoresAsync}

                      />
                    )}

                    {InputSelectMarcasComponent && (
                      <InputSelectMarcasComponent
                        label={labelSelectMarcas}
                        nome="idloja"
                        id={id}
                        options={optionsMarcas}
                        onChange={onChangeSelectMarcas}
                        value={valueSelectMarca}
                        defaultValue={[defaultValueSelectMarca]}
                        isDisabled={isDisabledMarca}
                        type="select"
                        onKeyDown={onKeyDownSelectMarcas}
                      />
                    )}

                    {InputSelectEmpresaComponent && (
                      <InputSelectEmpresaComponent
                        label={labelSelectEmpresa}
                        isDisabled={isDisabledEmpresa}
                        id={id}
                        options={optionsEmpresas}
                        value={valueSelectEmpresa}
                        defaultValue={[defaultValueSelectEmpresa]}
                        onChange={onChangeSelectEmpresa}
                        filtroOptions={optionsEmpresas}
                        onKeyDown={onKeyDownSelectEmpresa}
                      // isVisible={styleEmpresa}

                      />
                    )}

                    {InputSelectGrupoComponent && (
                      <InputSelectGrupoComponent
                        key={keyGrupo}
                        label={labelSelectGrupo}
                        nome={nomeSelectGrupo}
                        isVisible={stylesGrupo}
                        defaultValue={defaultValueSelectGrupo}
                        isDisabled={isDisabledGrupo}
                        options={optionsGrupos}
                        value={valueSelectGrupo}
                        onChange={onChangeSelectGrupo}
                      />
                    )}

                    {InputSelectSubGrupoComponent && (
                      <InputSelectSubGrupoComponent
                        label={labelSelectSubGrupo}
                        nome="idmarca"
                        options={optionsSubGrupos}
                        defaultValue={[defaultValueSelectSubGrupo]}
                        value={valueSelectSubGrupo}
                        onChange={onChangeSelectSubGrupo}
                        isDisabled={styleSubGrupo}
                      />
                    )}

                    {InputSelectFuncionarioComponent && (
                      <InputSelectFuncionarioComponent
                        label={labelSelectFuncionario}
                        nome="funcionario"
                        id={id}
                        options={optionsFuncionarios}
                        value={valueSelectFuncionario}
                        onChange={onChangeSelectFuncionario}

                      />
                    )}

                    {InputSelectUFComponent && (
                      <InputSelectUFComponent
                        label={labelSelectUF}
                        nome="idloja"
                        id={id}
                        options={optionsSelectUF}
                        value={valueSelectUF}
                        onChange={onChangeSelectUF}
                        onKeyDown={onKeyDownSelectUF}
                      />
                    )}
                    {InputSelectComissoesComponent && (
                      <InputSelectComissoesComponent
                        label={labelSelectComissoes}
                        nome="idloja"
                        id={id}
                        options={optionsComissoes}
                        value={valueSelectComissoes}
                        onChange={onChangeSelectComissoes}
                        onKeyDown={onKeyDownSelectComissoes}
                      />
                    )}
                    {InputSelectQuebraComponent && (
                      <InputSelectQuebraComponent
                        label={labelSelectQuebra}
                        nome="idloja"
                        id={id}
                        options={optionsQuebra}
                        value={valueSelectQuebra}
                        onChange={onChangeSelectQuebra}
                      />
                    )}

                    {InputSelectStatusFiliaisComponent && (
                      <InputSelectStatusFiliaisComponent
                        label={LabelSelectStatusFiliais}
                        nome="Status Filiais"
                        id={id}
                        options={optionStatusFiliais}
                        onChange={onChangeStatusFiliais}
                        value={valueSelectStatusFiliais}
                      />

                    )}

                    {InputSelectAlvarasComponent && (
                      <InputSelectAlvarasComponent
                        label={LabelSelectAlvaras}
                        nome="Alvarás"
                        id={id}
                        options={optionAlvaras}
                        onChange={onChangeAlvaras}
                        value={valueSelectAlvaras}
                      />

                    )}

                    {InputSelectFornecedorComponent && (
                      <InputSelectFornecedorComponent
                        label={labelSelectFornecedor}
                        nome="Fornecedor"
                        id={id}
                        options={optionsFornecedores}
                        onChange={onChangeSelectFornecedor}
                        value={valueSelectFornecedor}
                        defaultValue={defaultValueSelectFornecedor}
                      />

                    )}

                    {InputSelectFabricanteComponent && (
                      <InputSelectFabricanteComponent
                        label={labelSelectFabricantes}
                        nome="idloja"
                        id={id}
                        options={optionsFabricantes}
                        defaultValue={valueSelectFabricante}
                        onChange={onChangeSelectFabricante}
                      />
                    )}

                    {InputSelectCompradorComponent && (
                      <InputSelectCompradorComponent
                        label={labelSelectComprador}
                        nome="idloja"
                        id={id}
                        options={optionsCompradores}
                        defaultValue={valueSelectComprador}
                        onChange={onChangeSelectComprador}
                      />
                    )}

                    {InputSelectSituacaoComponent && (
                      <InputSelectSituacaoComponent
                        label={labelSelectSituacao}
                        nome="idloja"
                        id={id}
                        options={optionsSituacao}
                        defaultValue={valueSelectSituacao}
                        onChange={onChangeSelectSituacao}
                        styles={styleSituacao}
                      />
                    )}
                    {InputSelectGradeComponent && (
                      <InputSelectGradeComponent
                        label={labelSelectGrade}
                        nome="idloja"
                        id={id}
                        options={optionsGrades}
                        value={valueSelectGrade}
                        onChange={onChangeSelectGrade}
                      />
                    )}

                    {InputSelectFilialCNPJComponent && (
                      <InputSelectFilialCNPJComponent
                        label={labelSelectFilialCNPJ}
                        nome="idloja"
                        id={id}
                        options={optionsFilialCNPJ}
                      />
                    )}

                    {InputSelectTipoNFComponent && (
                      <InputSelectTipoNFComponent
                        label={labelSelectTipoNF}
                        nome="idloja"
                        id={id}
                        options={optionsTipoNF}
                      />
                    )}

                    {InputSelectContaBancoComponent && (
                      <InputSelectContaBancoComponent
                        label={labelSelectContaBanco}
                        nome="idloja"
                        id={id}
                        options={optionsContaBanco}
                      />

                    )}

                    {InputSelectTransportadora && (
                      <InputSelectTransportadora
                        label={labelSelectTransportadora}
                        nome="idloja"
                        id={id}
                        options={optionsSelectTransportadora}
                      />
                    )}

                    {InputSelectFreteComponent && (

                      <InputSelectFreteComponent
                        label={labelSelectFrete}
                        nome="idloja"
                        id={id}
                        options={optionsFrete}
                      />
                    )}

                    {InputSelectRotina && (
                      <InputSelectRotina
                        label={labelSelectRotina}
                        nome="idloja"
                        id={id}
                        options={optionsSelectRotina}
                      />
                    )}



                    {/* Multi Select */}

                    {MultSelectGrupoComponent && (
                      <MultSelectGrupoComponent
                        label={labelMultSelectGrupo}
                        nome="Grupo"
                        optionsMultSelect={optionsMultSelectGrupo}
                        id={id}
                        isMulti
                        defaultValue={valueMultSelectGrupo}
                        // value={valueMultSelectGrupo}
                        onChange={onChangeMultSelectGrupo}
                        animatedComponents={animatedComponentsGrupo}
                      />

                    )}

                    {MultSelectSubGrupoComponent && (
                      <MultSelectSubGrupoComponent
                        label={labelMultSelectSubGrupo}
                        nome="Grupo"
                        id={id}
                        isMulti
                        optionsMultSelect={optionsMultSelectSubGrupo}
                        defaultValue={valueMultSelectSubGrupo}
                        onChange={onChangeMultSelectSubGrupo}
                        animatedComponents={animatedComponentsSubGrupo}
                      />

                    )}
                    {MultSelectMarcaComponent && (
                      <MultSelectMarcaComponent
                        label={labelMultSelectMarca}
                        id={id}
                        isMulti
                        optionsMultSelect={optionsMultSelectMarca}
                        defaultValue={valueMultSelectMarca}
                        onChange={onChangeMultSelectMarca}
                        animatedComponents={animatedComponentsMarca}
                      />

                    )}
                    {MultSelectEmpresaComponent && (
                      <MultSelectEmpresaComponent
                        label={labelMultSelectEmpresa}
                        nome={labelMultSelectEmpresa}
                        id={id}
                        isMulti={true}
                        optionsMultSelect={optionsMultSelectEmpresa}
                        // value={valueMultSelectEmpresa}
                        defaultValue={[valueMultSelectEmpresa]}
                        onChange={onChangeMultSelectEmpresa}
                        animatedComponents={animatedComponentsEmpresa}
                        onKeyDown={onKeyDownEmpresa}
                      />

                    )}
                    {MultSelectFornecedorComponent && (
                      <MultSelectFornecedorComponent
                        label={labelMultSelectFornecedor}
                        nome="Fornecedor"
                        id={id}
                        isMulti={true}
                        optionsMultSelect={optionsMultSelectFornecedor}
                        defaultValue={valueMultSelectFornecedor}
                        onChange={onChangeMultSelectFornecedor}
                        animatedComponents={animatedComponentsFornecedor}
                      />

                    )}
                    {MultSelectFuncionarioComponent && (
                      <MultSelectFuncionarioComponent
                        label={labelMultSelectFuncionario}
                        nome="Funcionario"
                        id={id}
                        isMulti={true}
                        optionsMultSelect={optionsMultSelectFuncionario}
                        defaultValue={valueMultSelectFuncionario}
                        onChange={onChangeMultSelectFuncionario}
                        animatedComponents={animatedComponentsFuncionario}
                      />

                    )}


                    {/* Inputs Text */}
                    {InputFieldORComponent && (
                      <InputFieldORComponent
                        label={labelInputFieldOR}
                        type="number"
                        name="dtcodbarra"
                        value={valueInputFieldOR}
                        onChange={onChangeInputFieldOR}
                        placeHolder={placeHolderInputFieldOR}
                        style={styleInputFieldOR}
                      />
                    )}

                    {InputFieldOTComponent && (
                      <InputFieldOTComponent
                        label={labelInputFieldOT}
                        type="number"
                        name="dtcodbarra"
                        value={valueInputFieldOT}
                        onChange={onChangeInputFieldOT}
                        placeHolder={placeHolderInputFieldOT}
                        style={styleInputFieldOT}
                      />
                    )}

                    {InputFieldCodBarraComponent && (
                      <InputFieldCodBarraComponent
                        label={labelInputFieldCodBarra}
                        type="input"
                        id={id}
                        placeHolder={placeHolderInputFieldCodBarra}
                        value={valueInputFieldCodBarra}
                        onChange={onChangeInputFieldCodBarra}
                        readOnly={isDisabledCodBarra}
                        onKeyDown={onKeyDownInputFieldCodBarra}
                      />
                    )}

                    {InputFieldComponent && (
                      <InputFieldComponent
                        label={labelInputField}
                        type="input"
                        id={id}
                        placeHolder={placeHolderInputFieldComponent}
                        value={valueInputField}
                        onChange={onChangeInputField}
                        onKeyDown={onKeyDownInputField}
                      />
                    )}

                    {InputFieldNumeroNFComponent && (
                      <InputFieldNumeroNFComponent
                        label={labelInputFieldNumeroNF}
                        type="input"
                        id={id}
                        name=""
                        value={valueInputFieldNumeroNF}
                        onChange={onChangeInputFieldNumeroNF}
                        placeHolder={placeHolderInputFieldNumeroNF}
                        onKeyDown={onKeyDownInputFieldNumeroNF}
                      />
                    )}


                    {InputFieldDescricaoComponent && (
                      <InputFieldDescricaoComponent
                        label={labelInputFieldDescricao}
                        type="input"
                        id={id}
                        placeHolder={placeHolderInputFieldDescricao}
                        readOnly={readOnlyDescricao}
                        value={valueInputFieldDescricao}
                        onChange={onChangeInputFieldDescricao}
                        onKeyDown={onKeyDownInputFieldDescricao}
                      />
                    )}
                    {InputFieldQuantidadeComponent && (
                      <InputFieldQuantidadeComponent
                        label={labelInputFieldQuantidade}
                        type="number"
                        id={id}
                        name="dtcodbarra"
                        value={valueInputQuantidade}
                        onChange={onChangeInputQuantidade}
                        placeHolder={placeHolderInputFieldQuantidade}
                        style={styleInputQuantidade}
                        onKeyDown={onKeyDownInputFieldQuantidade}
                      />
                    )}
                    {InputFieldVendaCPFCNPJComponent && (
                      <InputFieldVendaCPFCNPJComponent
                        label={labelInputFieldVendaCPFCNPJ}
                        onChange={onChangeInputFieldVendaCPFCNPJ}
                        type="input"
                        id={id}
                        value={valueInputFieldVendaCPFCNPJ}
                        placeHolder={placeHolderInputFieldVendaCPFCNPJ}
                        readOnly={readOnlyVendaCPFCNPJ}
                        onKeyDown={onKeyDownInputFieldVendaCPFCNPJ}
                      />
                    )}
                    {InputFieldTelefoneComponent && (
                      <InputFieldTelefoneComponent
                        label={labelInputFieldTelefone}
                        id={id}
                        placeHolder={placeHolderInputFieldTelefone}
                        value={valueInputFieldTelefone}
                        onChange={onChangeInputFieldTelefone}
                        readOnly={readOnlyTelefone}
                      />
                    )}
                    {InputFieldSerieComponent && (
                      <InputFieldSerieComponent
                        label={labelInputFieldSerie}
                        placeHolder={placeHolderInputFieldSerie}
                        value={valueInputFieldSerie}
                        onChange={onChangeInputFieldSerie}
                        type="input"
                        id={id}

                      />
                    )}
                    {InputFieldNFCEComponent && (
                      <InputFieldNFCEComponent
                        label={labelInputFieldNFCE}
                        type="input"
                        id={id}
                      />
                    )}
                    {InputFieldNumeroVoucherComponent && (
                      <InputFieldNumeroVoucherComponent
                        label={labelInputFieldNumeroVoucher}
                        type="input"
                        id={id}
                        value={valueInputFieldNumeroVoucher}
                        onChange={onChangeInputFieldNumeroVoucher}
                        onKeyDown={onKeyDownInputFieldNumeroVoucher}
                      />
                    )}

                    {/* {InputFieldLojaOrigemComponent && (
                      <InputFieldLojaOrigemComponent
                        label={labelInputFieldLojaOrigem}
                        type="input"
                        id={id}
                        options={optionsFieldLojaOrigemComponent}
                        value={valueInputFieldLojaOrigem}
                        onChange={onChangeInputFieldLojaOrigem}
                        readOnly={true}
                      />
                    )} */}
                    {InputFieldLojaDestinoComponent && (
                      <InputFieldLojaDestinoComponent
                        label={labelInputFieldLojaDestino}
                        type="input"
                        id={id}
                        options={options}
                      />
                    )}

                    {InputSelectPagamentoComponent && (
                      <InputSelectPagamentoComponent
                        label={labelSelectPagamento}
                        type="select"
                        id={id}
                        options={optionsPagamento}
                        value={valueSelectPagamento}
                        onChange={onChangeSelectPagamento}
                      />
                    )}

                    {InputSelectUsoPrinicipalComponent && (
                      <InputSelectUsoPrinicipalComponent
                        label={labelSelectUsoPrinicipal}
                        type="select"
                        id={id}
                        options={optionsUsoPrinicipal}
                      />
                    )}

                    {InputSelectFreteComponent && (
                      <InputSelectFreteComponent
                        label={labelSelectFrete}
                        type="select"
                        id={id}
                        options={optionsFrete}
                      />
                    )}

                    {InputSelectSaldoComponent && (
                      <InputSelectSaldoComponent
                        label={labelSelectSaldo}
                        type="select"
                        id={id}
                        options={optionsSaldo}
                      />
                    )}

                    {InputSelectFilialComponent && (
                      <InputSelectFilialComponent
                        label={labelSelectFilial}
                        type="select"
                        id={id}
                        options={optionsFilial}
                        value={valueSelectFilial}
                        onChange={onChangeSelectFilial}
                      />
                    )}

                    {InputSelectNFEComponent && (
                      <InputSelectNFEComponent
                        label={labelSelectNFE}
                        type="select"
                        id={id}
                        options={optionsNFE}
                      />
                    )}

                    {InputSelectCampanhaComponent && (
                      <InputSelectCampanhaComponent
                        label={labelSelectCampanha}
                        type="select"
                        id={id}
                        options={optionsSelectCampanha}
                        value={valueSelectCampanha}
                        onChange={onChangeSelectCampanha}
                      />
                    )}

                    {InputSelectFiscalComponent && (
                      <InputSelectFiscalComponent
                        label={labelSelectFiscal}
                        type="select"
                        id={id}
                        options={optionsFiscal}
                      />

                    )}

                    {InputSelectEnviarComponent && (
                      <InputSelectEnviarComponent
                        label={labelSelectEnviar}
                        type="select"
                        id={id}
                        options={optionsSelectEnviar}
                      />
                    )}

                    {InputSelectCondicoesPagamentos && (
                      <InputSelectCondicoesPagamentos
                        label={labelSelectCondicoesPagamentos}
                        type="select"
                        id={id}
                        options={optionsCondicoesPagamentos}
                        value={valueSelectCondicoesPagamentos}
                        onChange={onChangeSelectCondicoesPagamentos}
                      />
                    )}


                    {InputSelectTipoPedido && (
                      <InputSelectTipoPedido
                        label={labelSelectTipoPedido}
                        type="select"
                        id={id}
                        options={optionsTipoPedido}
                        value={valueSelectTipoPedido}
                        onChange={onChangeSelectTipoPedido}
                      />
                    )}



                    {/* Buttons */}
                  </div>

                  {/* Selects */}
                  <div className="row">


                    {InputFieldTotalAntesDescontoComponent && (
                      <InputFieldTotalAntesDescontoComponent
                        label={labelInputFieldTotalAntesDesconto}
                        id={id}
                        name=""
                        value=""
                        readOnly={true}
                      />
                    )}

                    {InputFieldDescontoComponent && (
                      <InputFieldDescontoComponent
                        label={labelInputFieldDesconto}
                        id={id}
                        name=""
                        value=""
                        readOnly={true}
                      />
                    )}

                    {InputFieldAdiantamentoTotalComponent && (
                      <InputFieldAdiantamentoTotalComponent
                        label={labelInputFieldAdiantamentoTotal}
                        id={id}
                        name=""
                        value=""
                        readOnly={true}
                      />
                    )}

                    {InputFieldDespesasAdicionaisComponent && (
                      <InputFieldDespesasAdicionaisComponent
                        label={labelInputFieldDespesasAdicionais}
                        id={id}
                        name=""
                        value=""
                        readOnly={true}
                      />
                    )}

                    {InputFieldImpostoComponent && (
                      <InputFieldImpostoComponent
                        label={labelInputFieldImposto}
                        id={id}
                        name=""
                        value=""
                        readOnly={true}
                      />
                    )}

                    {InputFieldImpostoRetidoComponent && (
                      <InputFieldImpostoRetidoComponent
                        label={labelInputFieldImpostoRetido}
                        id={id}
                        name=""
                        value=""
                        readOnly={true}
                      />
                    )}

                    {InputFieldTotaPagarComponent && (
                      <InputFieldTotaPagarComponent
                        label={labelInputFieldTotaPagar}
                        id={id}
                        name=""
                        value=""
                        readOnly={true}
                      />
                    )}

                    {InputFieldSaldoComponent && (
                      <InputFieldSaldoComponent
                        label={labelInputFieldSaldo}
                        id={id}
                        name=""
                        value=""
                        readOnly={true}
                      />
                    )}

                    {InputFieldValorAplicadoComponent && (
                      <InputFieldValorAplicadoComponent
                        label={labelInputFieldValorAplicado}
                        id={id}
                        name=""
                        value=""
                        readOnly={true}
                      />
                    )}

                    {InputFieldUFComponent && (
                      <InputFieldUFComponent
                        label={labelInputFieldUF}
                        id={id}
                        name=""
                        value={valueInputFieldUF}
                        onChange={onChangeInputFieldUF}
                      />
                    )}

                    {InputFieldComplementoComponent && (
                      <InputFieldComplementoComponent
                        label={labelInputFieldComplemento}
                        id={id}
                        name=""
                        value={valueInputFieldComplemento}
                        onChange={onChangeInputFieldComplemento}
                      />
                    )}

                    {InputFieldEnderecoComponent && (
                      <InputFieldEnderecoComponent
                        label={labelInputFieldEndereco}
                        id={id}
                        name=""
                        value={valueInputFieldEndereco}
                        onChange={onChangeInputFieldEndereco}
                      />
                    )}

                    {InputFieldBairroComponent && (
                      <InputFieldBairroComponent
                        label={labelInputFieldBairro}
                        id={id}
                        name=""
                        value={valueInputFieldBairro}
                        onChange={onChangeInputFieldBairro}

                      />
                    )}

                    {InputFieldCidadeComponent && (
                      <InputFieldCidadeComponent
                        label={labelInputFieldCidade}
                        id={id}
                        name=""
                        value={valueInputFieldCidade}
                        onChange={onChangeInputFieldCidade}
                      />
                    )}

                    {InputFieldCepComponent && (
                      <InputFieldCepComponent
                        label={labelInputFieldCep}
                        id={id}
                        name=""
                        value={valueInputFieldCep}
                        onChange={onChangeInputFieldCep}
                      />
                    )}




                  </div>

                  {/* textArea */}
                  <div className="row">
                    {TextAreaFieldComponent && (
                      <TextAreaFieldComponent
                        label={labelTextAreaField}
                        id={id}
                        name=""
                        value={valueTextAreaFieldComponent}
                        onChange={onChangeTextAreaFieldComponent}
                      />
                    )}

                  </div>

                  {/* CheckBox */}
                  <div className="row">
                    {CheckBoxComponent && (
                      <CheckBoxComponent
                        id={idCheckBox}
                        label={labelCheckBox}
                        cheked={isChekedBox}

                        onChange={onChangeCheckBox}

                      />
                    )}

                    {CheckBoxComponent1 && (
                      <CheckBoxComponent1
                        label={labelCheckBox1}
                        id={id}
                        name=""
                        value=""
                        readOnly={false}
                      />
                    )}

                    {CheckBoxComponent2 && (
                      <InputFieldCheckBox
                        label={labelCheckBox2}
                        id={id}
                        name=""



                      />
                    )}

                    {CheckBoxComponent3 && (
                      <CheckBoxComponent3
                        label={labelCheckBox3}
                        id={id}
                        name=""
                        value=""
                        readOnly={false}
                      />
                    )}

                    {CheckBoxComponent4 && (
                      <CheckBoxComponent4
                        label={labelCheckBox4}
                        id={id}
                        name=""
                        value=""
                        readOnly={false}
                      />
                    )}

                    {CheckBoxComponent5 && (
                      <CheckBoxComponent5
                        label={labelCheckBox5}
                        id={id}
                        name=""
                        value=""
                        readOnly={false}
                      />
                    )}

                  </div>

                  {/* Buttons */}
                  <div className="row">

                    {ButtonSearchComponent && (
                      <ButtonSearchComponent
                        textButton={linkNomeSearch}
                        onClickButtonType={onButtonClickSearch}
                        // cor="primary"
                        cor={corSearch}
                        tipo="button"
                        Icon={IconSearch}
                        iconColor="#fff"
                        iconSize={16}
                        style={styleSearch}
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
                        iconSize={iconSizeCadastro || 16}
                        style={styleCadastro}
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
                        style={styleCancelar}
                      />
                    )}
                    {ButtonTypeVendasEstrutura && (
                      <ButtonType
                        // nome="Vendas por Estrutura"
                        textButton={linkNomeVendasEstrutura}
                        onClickButtonType={onButtonClickVendasEstrutura}
                        // cor="danger"
                        cor={corVendasEstrutura}
                        tipo="button"
                        Icon={iconVendasEstrutura}
                        iconColor="#fff"
                        iconSize={16}
                        style={styleVendasEstrutura}
                        visibilityBTN={btnVisivelEstrutura}
                      />
                    )}
                    {ButtonTypeVendasVendedor && (
                      <ButtonType
                        // nome="Vendas por Vendedor"
                        textButton={linkNomeVendasVendedor}
                        onClickButtonType={onButtonClickVendasVendedor}
                        // cor="success"
                        cor={corVendasVendedor}
                        tipo="button"
                        Icon={iconVendasVendedor}
                        iconColor="#fff"
                        iconSize={16}
                        style={styleVendedor}
                      />
                    )}
                    {ButtonTypeProdutoVendidos && (
                      <ButtonType
                        // nome="Produtos mais Vendidos"
                        textButton={linkNomeProdutoVendido}
                        onClickButtonType={onButtonClickProdutoVendido}
                        cor={corProdutoVendido}
                        tipo="button"
                        Icon={iconProdutoVendido}
                        iconColor="#212529"
                        iconSize={16}
                        style={styleProdutoVendido}
                      />
                    )}

                    {ButtonTypeVendasResumida && (
                      <ButtonType
                        // nome="Vendas Resumida"
                        textButton={linkNomeVendasResumido}
                        onClickButtonType={onButtonClickVendasResumido}
                        cor="primary"
                        tipo="button"
                        Icon={iconVendasResumida}
                        iconColor="#fff"
                        iconSize={16}
                      />
                    )}

                    {ButtonTypeVendasPorPeriodo && (
                      <ButtonType
                        // nome="Vendas por Período"
                        textButton={linkNomeVendasPorPeriodo}
                        onClickButtonType={onButtonClickVendaPeriodo}
                        cor="danger"
                        tipo="button"
                        Icon={AiOutlineSearch}
                        iconColor="#fff"
                        iconSize={16}
                      />
                    )}

                    {ButtonTypeVendasPorProduto && (
                      <ButtonType
                        // nome="Vendas por Produto"
                        textButton={linkNomeVendasPorProduto}
                        onClickButtonType={onButtonClickVendaProduto}
                        cor="success"
                        tipo="button"
                        Icon={AiOutlineSearch}
                        iconColor="#fff"
                        iconSize={16}
                      />
                    )}

                    {ButtonTypeLoja && (
                      <ButtonTypeLoja
                        // nome="Vendas por Produto"
                        textButton={linkNomeLoja}
                        onClickButtonType={onButtonClickLoja}
                        cor="info"
                        tipo="button"
                        Icon={AiOutlineSearch}
                        iconColor="#fff"
                        iconSize={16}
                      />
                    )}

                    {ButtonTypeSaldo && (
                      <ButtonTypeSaldo
                        // nome="Vendas por Produto"
                        textButton={linkNomeSaldo}
                        onClickButtonType={onButtonClickSaldo}
                        // cor="warning"
                        cor={corTypeSaldo}
                        tipo="button"
                        Icon={iconTypeSaldo}
                        iconColor="#212529"
                        iconSize={16}
                      />

                    )}

                    {ButtonTypeBalanco && (
                      <ButtonType
                        // nome="Vendas por Produto"
                        textButton={linkNomeBalanco}
                        onClickButtonType={onButtonClickTypeBalanco}
                        cor="warning"
                        tipo="button"
                        Icon={AiOutlineSearch}
                        iconColor="#212529"
                        iconSize={16}
                      />
                    )}
                    {ButtonTypeSalvar && (
                      <ButtonTypeSalvar
                        // nome="Vendas por Produto"
                        textButton={linkSalvar}
                        onClickButtonType={onButtonClickSalvar}
                        cor={corSalvar || 'info'}
                        tipo="button"
                        Icon={IconSalvar || AiOutlineSave}
                        iconColor="#fff"
                        iconSize={16}
                        style={styleSalvar}
                      />
                    )}

                    {ButtonTypeExportar && (
                      <ButtonTypeExportar
                        // nome="Vendas por Produto"
                        textButton={linkExportar}
                        onClickButtonType={onButtonClickExportar}
                        cor="info"
                        tipo="button"
                        Icon={GoDownload}
                        iconColor="#fff"
                        iconSize={16}
                      />
                    )}


                    {ButtonTypeImportar && (
                      <ButtonTypeImportar
                        // nome="Vendas por Produto"
                        textButton={linkImportar}
                        onClickButtonType={onButtonClickImportar}
                        cor="success"
                        tipo="button"
                        Icon={GoUpload}
                        iconColor="#fff"
                        iconSize={16}
                      />
                    )}

                    {ButtonTypeVincular && (
                      <ButtonType

                        textButton={linkNomeVincular}
                        onClickButtonType={onButtonClickVincular}
                        cor="warning"
                        tipo="button"
                        Icon={AiOutlineSave}
                        iconColor="#fff"
                        iconSize={16}
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