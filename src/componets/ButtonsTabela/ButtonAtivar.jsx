import { Fragment } from "react"

export const ButtonAtivar = () => {
  return (

    <Fragment>
      <button
        disabled=""
        type="button"
        className="btn buttons-html5 btn-outline-success btn-sm  mr-1"
        style={{ alignItems: "center" }}
        onclick="status_ValeTransp_Loja(this.id,'True')"
      >
        Ativar
      </button>
    </Fragment>
  )
}