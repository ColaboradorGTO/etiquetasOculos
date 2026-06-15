import { Fragment } from "react"


export const ButtonVenda = ({onClickVenda, nome, titleButton}) => {
  return (

    <Fragment>
      <button
        disabled=""
        type="button"
        className="btn btn-info btn-xs"
        style={{ color: "white",fontSize: "12px" }}
        onClick={onClickVenda}
        title={titleButton}
      >
        
        {nome}
    
      </button>
    </Fragment>
  )
}