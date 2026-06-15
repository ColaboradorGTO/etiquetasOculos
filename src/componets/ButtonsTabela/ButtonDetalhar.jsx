import { Fragment } from "react"
import { GrFormView } from "react-icons/gr";

export const ButtonDetalhar = ({ onClickDetalhar, nome, titleButton }) => {
  return (

    <Fragment>
      <button
        disabled=""
        type="button"
 
        className="btn btn-warning btn-sm btn-icon"
        onClick={onClickDetalhar}
        title={titleButton}
      >
        <GrFormView size={25}  />
        {nome}
      </button>
    </Fragment>
  )
}