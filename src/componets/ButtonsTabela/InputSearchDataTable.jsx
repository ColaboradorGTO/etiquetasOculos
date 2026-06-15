import { Fragment } from "react"

import { AiOutlineSearch } from "react-icons/ai";

export const InputSearchDataTable = () => {
  return (

    <Fragment>
      <div className="d-flex">
        <div className="input-group-prepend">
          <button type="submit" className="input-group-text bg-primary">
            <AiOutlineSearch className="fa " size={22} color="#fff" />
          </button>
        </div>
        <input
          type="search"
          className="form-control border-top-left-radius-0 border-bottom-left-radius-0 ml-0 width-lg shadow-inset-1"
          placeholder="Pesquisar"
          aria-label="Pesquisar"
        />
      </div>
    </Fragment>
  )
}