import React, { Fragment } from 'react';

export const ButtonType = ({ 
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
  visibilityBTN = true,
  style = {}
}) => {
  
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

  const wrapperStyle = {
    display: visibilityBTN ? 'block' : 'none'
  };

  return (
    <Fragment>
      <div style={wrapperStyle} >

        <button
          id={id}
          className={`${btnClasses} ${className}`}
          type={typeButton}
          onClick={() => onClickButtonType?.()}
          style={defaultStyle}
          disabled={disabledBTN}
          visible={visibilityBTN}
          // visibility={visibilityBTN}
        >
          {Icon && <Icon size={iconSize}  color={iconColor} />}

          {textButton}
        </button>
      </div>
    </Fragment>
  );
};

