import { Fragment, useState } from "react"

export const InputCheckBoxAction = ({ 
  label, 
  readOnly, 
  id, 
  nome, 
  placeholder, 
  checked, 
  onChange 
}) => {
 


  return (

    <Fragment>
      <div className="col-sm-6 col-xl-2 custom-control custom-checkbox mt-4">
        <input
          style={{
            width: "15px",
            height: "15px", 
            marginRight: "10px",
           

          }}
          id={id}
          type="checkbox"
          name={nome}
          readOnly={readOnly}
          checked={checked}
          placeHolder={placeholder}
          onChange={onChange}
        />
        <label className="custom-label" htmlFor={id}>
          {label}
        </label>
      </div>
    </Fragment>
  )
}