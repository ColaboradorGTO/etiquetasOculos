
import React from "react";
import { Dropdown } from 'primereact/dropdown';


export default function SelectDropDown({
    value,
    onChange,
    options,
    groupedItemTemplate,
    placeholder
}) {
    
    return (
        <div className="card flex justify-content-center">
           <Dropdown 
                value={value} 
                onChange={onChange} 
                options={options} 
                // optionGroupTemplate={groupedItemTemplate} 
                placeholder={placeholder}
                optionLabel="label" 
                optionGroupLabel="label" 
                optionGroupChildren="items" 
                className="w-full md:w-14rem" 
            />
        </div>
    );
}
        