import React, { Fragment, useState } from "react";
import AsyncSelect from 'react-select/async';

const AsyncSelectAction = ({ label, valueSelectAsync, filteredOptions, id, loadOptionsAsync, defaultOptionsAsync, onChangeSelectAsync }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  // const loadOptionsAsync = (inputValue, callback) => {
  //   setTimeout(() => {
  //     const filteredOptions = filtro(inputValue);
  //     const options = filteredOptions.map((item) => ({
  //       value: item.STATIVO,
  //       label: item.STATIVO,
  //     }));
  //     callback(options);
  //   }, 1000);
  // };

  return (
    <Fragment>
      <div className="col-sm-6 col-md-4 col-xl-6 mt-4">
        <label className="form-label" htmlFor={id}>{label}</label>
        <AsyncSelect
          cacheOptions
          isSearchable
          loadOptions
          defaultOptions={defaultOptionsAsync}
          onChange={onChangeSelectAsync}
          value={valueSelectAsync}
          filterOption={filteredOptions}
        />
      </div>
    </Fragment>
  );
}


export default AsyncSelectAction;