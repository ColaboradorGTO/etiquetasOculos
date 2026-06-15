import { Fragment } from "react"
// import Select from 'react-select'
import AsyncSelect from 'react-select/async';
export const MultSelectActionAsync = ({ 
  label,
  nome,
  optionsMultSelect,
  defaultValue,
  value,
  id,
  animatedComponents, 
  isMulti,
  onChange 
}) => {

  return (

    <Fragment >
      <div className="col-sm-6 col-md-4 col-xl-6 " >
        <label className="form-label" htmlFor={id}>{label}</label>
        

        <AsyncSelect
          defaultValue={[defaultValue]}
          value={value}
          onChange={onChange}
          components={animatedComponents}
          closeMenuOnSelect={false}
          isMulti={isMulti}
          name={nome}
          options={optionsMultSelect}  
          className="basic-multi-select"
          classNamePrefix="select"
          menuPortalTarget={document.body}
          styles={{
            menuPortal: (base) => ({ ...base, zIndex: 9999 }),
          }}
        />
      </div>
    </Fragment>
  )
}
