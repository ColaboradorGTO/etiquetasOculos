import { Fragment } from "react"

export const TextAreaField = ({ label,  id, nome, value, readOnly, placeholder }) => {
  return (

    <Fragment>
      <div className="col-sm-6 col-md-4 col-xl-4 mt-4">
        <label className="form-label" htmlFor={id}>
          {label}
        </label>
        <textarea
          className="form-control"
          cols={30}
          rows={10}
          id={id}
          
          name={nome}
          value={value}
          readOnly={readOnly}
          placeHolder={placeholder}
        />
      </div>
    </Fragment>
  )
}