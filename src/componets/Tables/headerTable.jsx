import React from 'react';
import { MdOutlineLocalPrintshop } from "react-icons/md";
import { SiMicrosoftexcel } from "react-icons/si";
import { BsFiletypePdf } from "react-icons/bs";
import { InputSearch } from '../Buttons/InputSearch';
import { ButtonHeaderTable } from '../Buttons/ButtonHeaderTable';

const HeaderTable = ({ globalFilterValue, onGlobalFilterChange, handlePrint, exportToExcel, exportToPDF }) => {
  return (
    <div
      className="row col-sm-6 col-md-12"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: "space-between"
      }}>


      <InputSearch
        value={globalFilterValue}
        onChange={onGlobalFilterChange}
        placeholder="Pesquisar"

      />

      <div style={{ display: "flex", justifyContent: 'space-around' }}>
        <ButtonHeaderTable
          // textButton="Imprimir"
          Icon={MdOutlineLocalPrintshop}
          iconSize={18}
          onClickButtonType={handlePrint}
          cor="primary"
        />
        <ButtonHeaderTable
          // textButton="Excel"
          Icon={SiMicrosoftexcel}
          iconSize={18}
          onClickButtonType={exportToExcel}
          cor="success"
        />
        <ButtonHeaderTable
          // textButton="PDF"
          Icon={BsFiletypePdf}
          iconSize={18}
          onClickButtonType={exportToPDF}
          cor="warning"
        />
      </div>
    </div>
  );
};

export default HeaderTable;
