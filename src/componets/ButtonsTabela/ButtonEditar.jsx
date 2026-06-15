import { Fragment } from "react"
import { CiEdit } from "react-icons/ci"

export const ButtonEditar = ({onClickEdit, nome}) => {
  return (

    <Fragment>
      <button
        disabled=""
        type="button"
        className="btn btn-sm btn-icon"
        style={{ backgroundColor: "#007bff" }}
        onClick={onClickEdit}
        
      >
        <CiEdit size={15} color="#fff" />
        {nome}
    
      </button>
    </Fragment>
  )
}