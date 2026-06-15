import { Fragment } from "react"
import { InputSearch } from "../Buttons/InputSearch"
import { InputSelectTabela } from "../Buttons/InputSelectTabela"
// import { ButtonPrint } from "../Buttons/ButtonPrint"
// import { ButtonExcel } from "../Buttons/ButtonExcel"
// import { ButtonPDF } from "../Buttons/ButtonPDF"
import { InputSearchDataTable } from "./InputSearchDataTable"

export const FilterComponent = ({ filterText, onFilter, onClear }) => {
  const Options = [
    { value: 0, label: "Todos" },
    // Adicione outras opções conforme necessário
  ];
  return (
    <Fragment>
      <div
          className="col-sm-6 col-md-12 col-xl-12  mb-3 mb-md-0 d-flex"
          style={{
            justifyContent: "space-between"

          }}
        >
          <InputSearchDataTable />
          <div className="d-flex" >


            {/* <ButtonPrint />
            <ButtonExcel />
            <ButtonPDF /> */}
          </div>
        </div>
    </Fragment>
  )
}