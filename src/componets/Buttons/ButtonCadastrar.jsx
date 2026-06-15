import React, { Fragment, useState } from 'react';

export const ButtonCadastrar = ({ 
  textButton,
  onClickButtonType,
  id,
  className,
  cor,
  tipo,
  Icon,
  iconColor,
  iconSize,
  disabledBTN,
  visibilityBTN,
  style,
  buttonDisabled,
  loading = false,         
  loadingText,           
  autoLoading = true,   
  disabled = false 
}) => {
    const [internalLoading, setInternalLoading] = useState(false);
    const isLoading = loading || internalLoading;
    const isDisabled = disabled || buttonDisabled || isLoading;
  
    const handleClick = async () => {
      if (isDisabled || !onClickButtonType) return;
  
      if (autoLoading) {
        try {
          setInternalLoading(true);
          const result = onClickButtonType();
          
          
          if (result && typeof result.then === 'function') {
            await result;
          }
        } catch (error) {
          console.error('Erro no click do botão:', error);
  
        } finally {
          setInternalLoading(false);
        }
      } else {
        onClickButtonType();
      }
    };
  
  const displayText = isLoading && loadingText ? loadingText : textButton;
  let btnClasses = "btn waves-effect waves-themed";

  if(cor === "primary") {
    btnClasses += " btn-primary";
  } else if(cor === "secondary") {
    btnClasses += " btn-secondary";
  } else if (cor === "success") {
    btnClasses += " btn-success";
  } else if (cor === "danger") {
    btnClasses += " btn-danger";
  } else if (cor === "warning") {
    btnClasses += " btn-warning";
  } else if (cor === "info") {
    btnClasses += " btn-info";
  }

  const typeButton = tipo === "button" ? "button" : "submit";

  const defaultStyle = {
    marginRight: "10px",
    marginLeft: "10px",
    marginTop: "20px",
    ...style 
  };

  return (
    <Fragment>
      <div >

        <button
          id={id}
          className={`${btnClasses} ${className} ${isLoading ? 'loading' : ''}`}
          type={typeButton}
          onClick={handleClick}
          style={defaultStyle}
          disabled={isDisabled}
          visible={visibilityBTN}
          // visibility={visibilityBTN}
        >
          {isLoading ? (
            <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
          ) : (
            Icon && <Icon size={iconSize} color={iconColor} />
          )}
         
          {displayText}
          
        </button>
      </div>
    </Fragment>
  );
};

