import { Fragment } from "react"
import { FaRegSave } from "react-icons/fa"

export const ButtonSalvar = () => {
  return (

    <Fragment>
      <button
        disabled=""
        type="button"
        className="btn btn-sm btn-icon waves-effect waves-themed"
        style={{ backgroundColor: "#28a745" }}
      >
        <FaRegSave size={15} color="#fff" />

      </button>
    </Fragment>
  )
}