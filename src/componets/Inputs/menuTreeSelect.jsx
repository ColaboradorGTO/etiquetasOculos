import React, { Fragment } from 'react';
import { TreeSelect } from 'primereact/treeselect';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';


export const MenuTreeSelect = ({
    valueMenuSelect,
    optionsMenuSelect,
    onChangeMenuSelect,
    placeholderMenuSelect,
    label

}) => {

    return (
        <div className="mb-3">

            <div>
                <label htmlFor="">{label}</label>
            </div>
            <TreeSelect
                value={valueMenuSelect}
                options={optionsMenuSelect}
                onChange={onChangeMenuSelect}
                placeholder={placeholderMenuSelect}
                filter
                display="chip"
                selectionMode="checkbox"
                metaKeySelection={false}
                // className="md:w-20rem w-full"
                style={{
                    maxWidth: '300px',
                    width: '100%',
                    maxHeight: '300px',
                    height: '100%',
                }}
            />
        </div>
    );
};


