import { Fragment } from "react"
import { FaRegTrashAlt } from "react-icons/fa"

export const ButtonCancelar = () => {
  return (

    <Fragment>
      <button
        disabled=""
        type="button"
        className="btn  btn-sm btn-icon waves-effect waves-themed"
        style={{ backgroundColor: "#dc3545" }}
      >
        <FaRegTrashAlt size={15} color="#fff" />

      </button>
    </Fragment>
  )
}