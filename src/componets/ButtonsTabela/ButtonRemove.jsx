import { Fragment } from "react"
import { FaMinus } from "react-icons/fa";

export const ButtonRemove = ({onClickEdit, nome}) => {
  return (

    <Fragment>
      <button
        disabled=""
        type="button"
        className="btn btn-sm btn-icon"
        style={{ backgroundColor: "#007bff" }}
        onClick={onClickEdit}
        
      >
        <FaMinus size={15} color="#fff" />
        {nome}
    
      </button>
    </Fragment>
  )
}