import { Fragment } from "react";

export const InputFieldPedido = ({ label, type, id, nome, value, readOnly, placeHolder, disabled, estyle, onChange = () => {}, style }) => {
  return (
    <Fragment>

      <input
        className="form-control"
        id={id}
        type={type}
        name={nome}
        value={value}
        readOnly={readOnly}
        placeHolder={placeHolder}
        onChange={onChange}
        disabled={disabled}
        style={style}
      />
 
    </Fragment>
  );
};