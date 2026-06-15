import React from "react";
import Select, { components } from "react-select";

const MenuList = (props) => {
  const { menuHeaderStyle, menuHeaderTitle } = props.selectProps;

  return (
    <components.MenuList {...props}>
      {menuHeaderTitle && (
        <div style={menuHeaderStyle}>
          {menuHeaderTitle}
        </div>
      )}
      {props.children}
    </components.MenuList>
  );
};

export const SelectList = ({
  options,
  value,
  defaultValue,
  onChange,
  placeholder,
  isMulti = false,
  isClearable = true,
  isDisabled = false,
  menuHeaderTitle,
  menuHeaderStyle,
  styles,
  getOptionDisabled,
  ...rest
}) => {
  return (
    <Select
      options={options}
      value={value}
      defaultValue={defaultValue}
      onChange={onChange}
      placeholder={placeholder}
      isMulti={isMulti}
      isClearable={isClearable}
      isDisabled={isDisabled}
      components={{ MenuList }}
      menuHeaderTitle={menuHeaderTitle}
      menuHeaderStyle={menuHeaderStyle}
      styles={styles}
      getOptionDisabled={getOptionDisabled}
      {...rest}
    />
  );
};