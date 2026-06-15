import { Fragment } from "react"
import { MdAdd } from "react-icons/md";

export const Button = ({ onClickModal, nome }) => {
  return (

    <Fragment>
      <button 
        name="submeter_dia" 
        id="parametro_dia" 
        className="btn btn-success waves-effect waves-themed"
        type="button" 
        onClick={() => onClickModal()}
      >
        <MdAdd className="fal fa-search mr-1" size={20} />
          {nome}
      </button>
    </Fragment>
  )
}