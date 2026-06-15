import { Fragment } from "react";
import { RadioButton } from "primereact/radiobutton";

export const InputFieldActionRadio = ({ 
  label, 
  type, 
  id, 
  nome, 
  value, 
  readOnly, 
  placeHolder, 
  disabled, 
  checked, 
  onChange = () => {}, 
  style 
}) => {
  return (
    <Fragment>
      <div className="form-check" style={{ display: 'flex', alignItems: 'center',  }}>

        <div className="row" >
            <label className="form-check-label" htmlFor={id} style={{marginRight: '0.5rem', fontSize: '1rem', fontWeight: '700'}}>
              {label}
            </label>
            <RadioButton 
              inputId={id} 
              name={nome} 
              value={value} 
              onChange={onChange} 
              checked={checked} 
              disabled={readOnly}
            />
        </div>
      </div>
    </Fragment>
  );
};