import { Fragment } from "react"

export const FooterModal = ({ 
  ButtonTypeConfirmar,
  textButtonConfirmar,
  onClickButtonConfirmar,
  corConfirmar,
  iconConfirmar,
  styleConfirmar,
  loadingTextConfirmar,
  autoLoadingConfirmar,

  ButtonTypeFechar,
  onClickButtonFechar,
  textButtonFechar,
  corFechar,
  iconFechar,
  loadingTextFechar,
  autoLoadingFechar,

  ButtonTypeCadastrar,
  onClickButtonCadastrar,
  textButtonCadastrar,
  corCadastrar,
  iconCadastrar,
  iconSizeCadastrar,
  styleCadastrar,
  tipoBtnCadastrar,
  loadingTextCadastrar,
  autoLoadingCadastrar,

  ButtonTypeCancelar,
  onClickButtonCancelar,
  textButtonCancelar,
  corCancelar,
  iconCancelar,
  iconSizeCancelar,
  loadingTextCancelar,
  autoLoadingCancelar,

  handleClose,
  handleClick, 
  disabled
}) => {
  return (
    <Fragment >
      <div
        style={{ display: "flex", justifyContent: "end", }}
        className="modal-footer"
        id="footerdeposito"
      >
        {ButtonTypeCadastrar && ( 
          <ButtonTypeCadastrar
            textButton={textButtonCadastrar}
            onClickButtonType={onClickButtonCadastrar}
            cor={corCadastrar}
            tipo={tipoBtnCadastrar}
            disabled={disabled}
            Icon={iconCadastrar}
            iconSize={iconSizeCadastrar}
            style={styleCadastrar}
            autoLoading={autoLoadingCadastrar}
            loadingText={loadingTextCadastrar}
          />

        )}
        {ButtonTypeFechar && ( 
          <ButtonTypeFechar
            textButton={textButtonFechar}
            onClickButtonType={onClickButtonFechar}
            cor={corFechar}
            tipo="button"
            iconFechar={iconFechar}
            loadingTextFechar={loadingTextFechar}
            autoLoadingFechar={autoLoadingFechar}
          />

        )}
        {ButtonTypeConfirmar && ( 
          <ButtonTypeConfirmar
            textButton={textButtonConfirmar}
            onClickButtonType={onClickButtonConfirmar}
            cor={corConfirmar}
            tipo="button"
            iconConfirmar={iconConfirmar}
            style={styleConfirmar}
            loadingTextConfirmar={loadingTextConfirmar}
            autoLoadingConfirmar={autoLoadingConfirmar}
          />

        )}

        {ButtonTypeCancelar && (
          <ButtonTypeCancelar
            textButton={textButtonCancelar}
            onClickButtonType={onClickButtonCancelar}
            cor={corCancelar}
            tipo="button"
            iconCancelar={iconCancelar}
            iconSize={iconSizeCancelar}
            loadingTextCancelar={loadingTextCancelar}
            autoLoadingCancelar={autoLoadingCancelar}
          />
        )}
      </div>
    </Fragment>
  )
}