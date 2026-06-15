import { Fragment } from "react"

import { AiOutlineSearch } from "react-icons/ai";
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

export const InputSearchAction = ({
  value,
  onChange,
  placeholder,
  onClick,
  className,
  labelbtn,
  label,
  incon
}) => {
  return (

    <Fragment>
      <div>

        <label htmlFor="">{label}</label>
        <div className="p-inputgroup flex-1">
     
            <InputText 
              placeholder={placeholder} 
              value={value} 
              onChange={onChange}  

            />

            <Button 
              label={labelbtn}
              icon={incon}
              inconSize={50}
              onClick={onClick}  
              className={className}
              style={{ fontSize: '1.2rem' }} // Aumenta o tamanho do ícone
            />
         
        </div>
      </div>

    </Fragment>
  )
}