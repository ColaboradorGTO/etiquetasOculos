import { Fragment } from "react"
import Select from 'react-select';

export const InputSelect = ({
  label,
  options,
  nome,
  id,
  defaultValue,
  value,
  isDisabled,
  isLoading,
  isClearable,
  isRtl,
  isSearchable,
  onChange
}) => {
  return (

    <Fragment >

      <label className="form-label" htmlFor={id}>{label}</label>
      <div className="" >
        <Select
          // styles={{minWidth: '300px', backgroundColor: 'red'}}
          className="basic-multi-select"
          classNamePrefix="select"
          defaultValue={defaultValue}
          value={value}
          isDisabled={isDisabled}
          isLoading={isLoading}
          isClearable={isClearable}
          isRtl={isRtl}
          isSearchable={isSearchable}
          name={nome}
          options={options}
          onChange={onChange}
        />
      </div>

    </Fragment>
  )
}