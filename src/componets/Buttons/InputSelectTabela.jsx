import { Fragment } from "react"
import Form from 'react-bootstrap/Form';

export const InputSelectTabela = ({  options, nome, id }) => {
  return (

    <Fragment>

      <Form.Select
       className="select2 form-control" 
       name={nome} 
       id={id}
       style={{ width: "150px" }}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Form.Select>

    </Fragment>
  )
}