import React from 'react';

import Select from 'react-select';
import makeAnimated from 'react-select/animated';


const animatedComponents = makeAnimated();

export default function SelectionAction({ options, isMulti, closeMenuOnSelect, defaultValue}) {
  return (
    <Select
      closeMenuOnSelect={false}
      components={animatedComponents}
      defaultValue
      isMulti
      options
    />
  );
}