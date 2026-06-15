import React, { Fragment } from "react"
import { AiOutlineAreaChart } from "react-icons/ai"

import Breadcrumb from 'react-bootstrap/Breadcrumb';

export const HeadTitleComponent = ({
  linkComponentAnterior, 
  linkComponent, 
  tittuloComponent, 
  nomeLoja,
  
  textButtonHeader,
  onClickButtonTypeHeader,
  className,
  cor,
  tipo,
  Icon,
  iconColor,
  iconSize,
  disabledBTNHeader

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
      <Breadcrumb className="breadcrumb page-breadcrumb">
        <Breadcrumb.Item className="breadcrumb-item" href="#"> {linkComponentAnterior} </Breadcrumb.Item>
        <Breadcrumb.Item className="breadcrumb-item active" href="#">{linkComponent}</Breadcrumb.Item>
        {/* <Breadcrumb.Item className="position-absolute pos-top pos-right d-none d-sm-block dataAtual"></Breadcrumb.Item> */}
      </Breadcrumb>

      <div className="subheader pr-5">
        <h1 
          style={{fontSize: "1.5rem", fontWeight: "600", paddingRight: "10px", color: "#22282d"}}
        >
          <AiOutlineAreaChart className='subheader-icon fal fa-chart-area' /> 
          {tittuloComponent}
        </h1>
          <h2
            style={{fontSize: "1.5rem", fontWeight: "500", color: "#22282d"}}
          >
            {nomeLoja}
          </h2>

          {/* <button
            type={typeButton}
            className={`${btnClasses} ${className}`}
            onClick={() => onClickButtonTypeHeader()}
            style={{ marginRight: "10px", marginLeft: "10px", marginTop: "20px" }}
            disabled={disabledBTNHeader}
          >
            {Icon && <Icon size={iconSize}  color={iconColor} />}

            {textButtonHeader}
          </button> */}
      </div>
    </Fragment>
  )
}