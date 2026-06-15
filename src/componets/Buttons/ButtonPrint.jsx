import { Fragment } from "react"
import ReactToPrint from 'react-to-print';

export const ButtonPrint = () => {
  return (

    <Fragment>
      {/* <ReactToPrint
        trigger={() => <button>Imprimir Tabela</button>}
        content={() => componentRef.current}
      /> */}

      <div className="dt-buttons ml-3">
        <button
          className="btn buttons-print btn-outline-primary btn-sm"
          tabIndex={0}
          aria-controls="dt-basic-produto-loja"
          type="button"
          title="Print Table"
        >
          <span>Print</span>
        </button>
      </div>
    </Fragment>
  )
}