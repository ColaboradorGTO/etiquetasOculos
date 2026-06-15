import { Fragment } from "react"
import Select from 'react-select';

export const InputSelectActionPromocao = ({
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
  onChange,
  styles,
  isVisible,
}) => {
  const customStyles = {
    menu: (provided) => ({
      ...provided,
      zIndex: 9999,
    }),
    control: (provided) => ({
      zIndex: 9999,
      ...provided,
    }),
  };

  const defaultStyle = {
    ...styles,
    ...customStyles,
  };

  return (
    <Fragment>
      <div className="col-sm-6 col-md-12 col-xl-12">
        <label className="form-label" htmlFor={id}>{label}</label>
        <div>
          <Select
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
            styles={defaultStyle}
            menuPortalTarget={document.body} 
          />
        </div>
      </div>
    </Fragment>
  )
}