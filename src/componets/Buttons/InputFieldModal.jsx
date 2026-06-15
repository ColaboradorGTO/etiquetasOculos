import { Fragment } from "react"
import { useForm } from "react-hook-form"

export const InputFieldModal = ({ 
  label,
  type,
  id,
  nome, 
  value, 
  readOnly, 
  placeholder, 
  onChangeModal, 
  onFocus,
  styleInputFieldModal,
  min,
  max

}) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm()

  return (

    <Fragment>
      <div className="">
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
          placeHolder={placeholder}
          onChange={onChangeModal}
          onFocus={onFocus}
          style={styleInputFieldModal}
          min={min}
          max={max}
        />
      </div>
    </Fragment>
  )
}