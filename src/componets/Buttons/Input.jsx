import React, { Fragment } from "react"
import { useForm } from "react-hook-form"

export const InputField = ({ label, type, id, nome, value, readOnly, placeHolder, onChange, onKeyDown }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm()


  return (

    <Fragment>
      <div className="col-sm-6 col-md-3 col-xl-3 mt-4">
        <label className="form-label" htmlFor={id}>
          {label}
        </label>
        <input
          className="form-control"
          id={id}
          type={type}
          name={nome}
          value={value}
          readOnly={readOnly}
          placeHolder={placeHolder}
          onChange={onChange}
          onKeyDown={onKeyDown}
        />
      </div>
    </Fragment>
  )
}