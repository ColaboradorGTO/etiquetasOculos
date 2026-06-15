import { Fragment } from "react";
import { HeadTitleComponent } from "../HeadTitle";
import { ButtonType } from "../Buttons/ButtonType";


export const ActionMainPromocaoAtivas = ({
  title,
  subTitle,
  linkComponentAnterior,
  linkComponent,
  id,


  InputFieldDTInicioComponent,
  InputFieldDTFimComponent,
  InputSelectPendenciaComponent,
  InputFieldProdutoDestino,
  InputFieldProdutoOrigem,
  
  placeHolderInputFieldProdutoDestino,
  placeHolderInputFieldProdutoOrigem,

  labelInputDTInicio,
  labelInputDTFim,
  labelSelectPendencia,
  labelInputProdutoDestino,
  labelInputProdutoOrigem,
  labelBtnProdutoDestino,
  labelBtnProdutoOrigem,

  valueInputFieldDTInicio,
  valueInputFieldDTFim,
  valueSelectPendencia,
  valueInputFieldProdutoDestino,
  valueInputFieldProdutoOrigem,

  onChangeInputFieldDTInicio,
  onChangeInputFieldDTFim,
  onChangeSelectPendencia,
  onChangeInputFieldProdutoDestino,
  onChangeInputFieldProdutoOrigem,

  readOnlyPendencia,
  stylePendencia,
  ButtonSearchComponent,
  ButtonTypePedido,
  ButtonTypeTXT,

  linkNomeSearch,
  linkPedido,
  linkTXT,


  onButtonClickSearch,
  onButtonClickPedido,
  onButtonClickTXT,
  onButtonClickDestino,
  onButtonClickOrigem,

  corSearch,
  corSearchDestino,
  corSearchOrigem,
  corPedido,
  corTXT,


  IconSearch,
  IconPedido,
  IconTXT,
  IconSearchDestino,
  IconSearchOrigem,

  readOnlyDTInicio,
  readOnlyDTFim,
  optionsPendencia

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

                  <div className="row mt-3">
                    <div className="col-sm-6 col-md-4 col-xl-4 ">
                     {InputSelectPendenciaComponent && (
                      <InputSelectPendenciaComponent
                        label={labelSelectPendencia}
                        id={id}
                        options={optionsPendencia}
                        onChange={onChangeSelectPendencia}
                        // value={valueSelectPendencia}
                         defaultValue={valueSelectPendencia}
                        readOnly={readOnlyPendencia}
                        isVisible={stylePendencia}
                        type="select"
                      />
                    )}
                    </div>

                    <div className="col-sm-6 col-md-4 col-xl-4 ">
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

                    <div className="col-sm-6 col-md-4 col-xl-4 ">
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

                  <div className="row mt-3" style={{margin: '0px', padding: '0px'}}>
                    <div className="col-sm-6 col-md-4 col-xl-4 ">
                      {InputFieldProdutoDestino && (
                        <InputFieldProdutoDestino
                          label={labelInputProdutoDestino}
                          labelbtn={labelBtnProdutoDestino}
                          type="text"
                          id={id}
                          placeholder={placeHolderInputFieldProdutoDestino}
                          value={valueInputFieldProdutoDestino}
                          onChange={onChangeInputFieldProdutoDestino}
                          incon={IconSearchDestino}
                          className={corSearchDestino}
                          onClick={onButtonClickDestino}
                        />
                      )}
                    </div>

                    <div className="col-sm-6 col-md-6 col-xl-6 ">
                      {InputFieldProdutoOrigem && (
                        <InputFieldProdutoOrigem
                          label={labelInputProdutoOrigem}
                          labelbtn={labelBtnProdutoOrigem}
                          type="text"
                          id={id}
                          placeholder={placeHolderInputFieldProdutoOrigem}
                          value={valueInputFieldProdutoOrigem}
                          onChange={onChangeInputFieldProdutoOrigem}
                          incon={IconSearchOrigem}
                          className={corSearchOrigem}
                          onClick={onButtonClickOrigem}
                        />
                      )}
                    </div>
                  </div>
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