import { Fragment } from "react"
import Form from 'react-bootstrap/Form';

export const InputSelect = ({ label, optionsSelect, nome, id,readOnly }) => {
  return (

    <Fragment >
      <div className="">
        <label className="form-label" htmlFor={id}>{label}</label>
        <div className="input-group">
          <Form.Select className="select2 form-control" name={nome} id={id} readOnly={readOnly}>
            {optionsSelect.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </Form.Select>
        </div>
      </div>
    </Fragment>
  )
}