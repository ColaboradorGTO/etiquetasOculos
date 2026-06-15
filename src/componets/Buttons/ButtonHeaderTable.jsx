import React, { Fragment } from 'react';

export const ButtonHeaderTable = ({ 
  textButton,
  onClickButtonType,
  id,
  className,
  cor,
  tipo,
  Icon,
  iconColor,
  iconSize
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


  return (
    <Fragment>

      <div className="col-sm-3 col-md-3 col-lg-4 col-xl-4">
        <button
         
          id={id}
          className={`${btnClasses} ${className}`}
          type={typeButton}
          onClick={() => onClickButtonType()}
        >
          {Icon && <Icon size={iconSize}  color={iconColor} />}
          

          {textButton}
         
        </button>
      </div>
    </Fragment>
  );
};

