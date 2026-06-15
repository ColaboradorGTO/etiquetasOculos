import { Fragment } from "react"


export const ButtonProduto = ({onClickProduto, nome, titleButton}) => {
  return (

    <Fragment>
      <button
        disabled=""
        type="button"
        className="btn btn-warning btn-xs"
        style={{  color: "#000", fontSize: "12px" }}
        onClick={onClickProduto}
        title={titleButton}
      >
        
        {nome}
    
      </button>
    </Fragment>
  )
}