import React, { Fragment, useEffect, useState } from "react"
import { getAnoAtual } from "../../utils/dataAtual"

export const FooterMain = () => {
  const [data, setData] = useState('')

  useEffect(() => {
    const dataAtual = getAnoAtual()
    setData(dataAtual)
  })

  return (
    <Fragment>
      <footer className="page-footer" role="contentinfo">
        <div className="d-flex align-items-center flex-1 text-muted">
          <span className="hidden-md-down fw-700">{data} © MettaGroup by&nbsp;<a href='https://mettagroup.com.br' className='text-primary fw-500' title='mettagroup.com.br' target='_blank'>mettagroup.com.br</a></span>
        </div>
      </footer>
    </Fragment>
  )
}