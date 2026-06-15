import { Fragment } from "react"
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
export const InputFieldDateAction = ({ label,  value, defaultValue,  onChange }) => {
  return (

    <Fragment>
      <div className="col-sm-6 col-md-4 col-xl-4 mt-4">
        <label className="form-label" >
          {label}
        </label>
        
        <DatePicker
          label={label}
          value={value}
          defaultValue={defaultValue}
          onChange={onChange}
          className="form-control"
        />
      </div>
    </Fragment>
  )
}