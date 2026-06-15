import { Fragment } from "react"

export const ButtonPagamento = ({onClickPagamento, nome, titleButton}) => {
  return (

    <Fragment>
      <button
        disabled=""
        type="button"
        className="btn btn-success btn-xs"
        style={{ color: "white", fontSize: "12px" }}
        onClick={onClickPagamento}
        title={titleButton}
      >
        
        {nome}
    
      </button>
    </Fragment>
  )
}