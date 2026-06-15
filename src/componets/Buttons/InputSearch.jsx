import { InputText } from "primereact/inputtext";
import { Fragment } from "react"

import { AiOutlineSearch } from "react-icons/ai";

export const InputSearch = ({
  value,
  onChange,
  placeholder
}) => {
  return (

    <Fragment>
      {/* <div className="col-sm-6 col-md-4 input-group align-items-center mb-5"> */}
      <div className="col-sm-6 col-md-4 input-group align-items-center ">
        <div className="input-group-prepend">
          <button type="submit" className="input-group-text bg-primary">
            <AiOutlineSearch className="fa " size={22} color="#fff" />
          </button>
        </div>
        <InputText
          type="search"
          value={value} 
          onChange={onChange} 
          placeholder={placeholder}
          className="form-control"
        />
      </div>
    </Fragment>
  )
}