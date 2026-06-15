import { Fragment } from "react";
import { HeadTitleComponent } from "../HeadTitle";
import { ButtonType } from "../Buttons/ButtonType";
import { MenuTreeSelect } from "../Inputs/menuDropDown";

export const ActionAlteracaoPreco = ({
  title,
  subTitle,
  linkComponentAnterior,
  linkComponent,
  id,


  InputFieldDTInicioComponent,
  InputFieldDTFimComponent,
  InputFieldCodBarraComponent,
  InputFieldComponent,
  InputFieldNomeProdutoComponent,
  InputFieldCodBarrasComponent,

  labelInputDTInicio,
  labelInputDTFim,
  labelInputFieldCodBarra,
  labelInputField,
  labelInputNomeProduto,
  labelInputCodBarras,

  valueInputFieldDTInicio,
  valueInputFieldDTFim,
  valueInputFieldCodBarra,
  valueInputField,
  valueInputFieldNomeProduto,
  valueInputFieldCodBarras,

  onChangeInputFieldDTInicio,
  onChangeInputFieldDTFim,
  onChangeInputFieldCodBarra,
  onChangeInputField,
  onChangeInputFieldNomeProduto,
  onChangeInputFieldCodBarras,

  placeHolderInputFieldCodBarra,
  placeHolderInputFieldComponent,
  onKeyDownInputField,


  InputSelectEmpresaComponent,
  InputSelectMarcasComponent,
  MenuTreeSelectComponent,

  labelSelectEmpresa,
  labelSelectMarcas,

  valueSelectEmpresa,
  valueSelectMarca,
  valueTreeSelect,

  onChangeSelectEmpresa,
  onChangeSelectMarcas,
  onChangeTreeSelect,

  optionsEmpresas,
  optionsMarcas,
  optionsTreeSelect,

  placeholderTreeSelect,
  onNodeTreeSelect,
  onNodeTreeUnselect,



  ButtonSearchComponent,
  linkNomeSearch,
  onButtonClickSearch,
  corSearch,
  IconSearch,

  readOnlyDTInicio,
  readOnlyDTFim,
  readOnlyNomeProduto,
  readOnlyCodBarras,

  onKeyDownInputFieldDTFim,
  onKeyDownInputFieldDTInicio,
  onKeyDownInputFieldNomeProduto,
  onKeyDownInputFieldCodBarras,

  InputCheckBoxAction,
  labelCheckBox,
  nomeCheckBox,
  placeHolderCheckBox,
  checkedBox,
  valueCheckBox,
  onChangeCheckBox,


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
                    {InputFieldNomeProdutoComponent && (
                      <InputFieldNomeProdutoComponent
                        label={labelInputNomeProduto}
                        type="text"
                        nome="nomeProduto"
                        id={id}
                        readOnly={readOnlyNomeProduto}
                        value={valueInputFieldNomeProduto}
                        onChange={onChangeInputFieldNomeProduto}
                        onKeyDown={onKeyDownInputFieldNomeProduto}
                      />
                    )}


                    {InputFieldCodBarrasComponent && (
                      <InputFieldCodBarrasComponent
                        label={labelInputCodBarras}
                        type="text"
                        nome="codBarras"
                        id={id}
                        readOnly={readOnlyCodBarras}
                        value={valueInputFieldCodBarras}
                        onChange={onChangeInputFieldCodBarras}
                        onKeyDown={onKeyDownInputFieldCodBarras}
                      />
                    )}

                    {InputFieldDTInicioComponent && (
                      <InputFieldDTInicioComponent
                        label={labelInputDTInicio}
                        type="date"
                        nome="dtInicio"
                        id={id}
                        readOnly={readOnlyDTInicio}
                        value={valueInputFieldDTInicio}
                        onChange={onChangeInputFieldDTInicio}
                        onKeyDown={onKeyDownInputFieldDTInicio}
                      />
                    )}

                    {InputFieldDTFimComponent && (
                      <InputFieldDTFimComponent
                        label={labelInputDTFim}
                        type="date"
                        id={id}
                        readOnly={readOnlyDTFim}
                        value={valueInputFieldDTFim}
                        onChange={onChangeInputFieldDTFim}
                        onKeyDown={onKeyDownInputFieldDTFim}
                      />
                    )}


                    {InputSelectEmpresaComponent && (
                      <InputSelectEmpresaComponent
                        label={labelSelectEmpresa}
                        id={id}
                        options={optionsEmpresas}
                        value={valueSelectEmpresa}
                        defaultValue={[valueSelectEmpresa]}
                        onChange={onChangeSelectEmpresa}
                        filtroOptions={optionsEmpresas}
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

                        type="select"
                      />
                    )}
                  </div>

                  <div className="row">
                  </div>

                  <div className="row">
                    
                    {MenuTreeSelectComponent && (
                      
                      <MenuTreeSelectComponent
                        valueMenuSelect={valueTreeSelect}
                        onChangeMenuSelect={onChangeTreeSelect}
                        optionsMenuSelect={optionsTreeSelect}
                        placeholderMenuSelect={placeholderTreeSelect}
                        onNodeMenuSelect={onNodeTreeSelect}
                        onNodeMenuUnselect={onNodeTreeUnselect}
                        label={'SubGrupo'}
                      />
                    )}

                    {InputCheckBoxAction && (
                      <InputCheckBoxAction
                        label={labelCheckBox}
                        nome={nomeCheckBox}
                        placeholder={placeHolderCheckBox}
                        checked={checkedBox}
                        value={valueCheckBox}
                        onChange={onChangeCheckBox}
                      />
                    )}
                  </div>

                  <div className="row ">
                    {InputFieldCodBarraComponent && (
                      <InputFieldCodBarraComponent
                        label={labelInputFieldCodBarra}
                        type="input"
                        id={id}
                        placeHolder={placeHolderInputFieldCodBarra}
                        value={valueInputFieldCodBarra}
                        onChange={onChangeInputFieldCodBarra}

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
                        onKeyDow={onKeyDownInputField}
                      />
                    )}
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