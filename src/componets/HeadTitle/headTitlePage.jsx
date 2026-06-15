import { Fragment } from "react"
import { AiOutlineAreaChart } from "react-icons/ai"
import { FaAngleDown } from "react-icons/fa"

export const HeadTitlePage = ({pageName }) => {
  return (
    <Fragment>
      <ol className="breadcrumb page-breadcrumb">
        <li className="breadcrumb-item"><a href="javascript:void(0);">Home</a></li>
        <li className="breadcrumb-item active">Tela Principal</li>
        <li className="position-absolute pos-top pos-right d-none d-sm-block dataAtual"></li>
      </ol>

      <div className="subheader">
        <h1 className="subheader-title">
          <AiOutlineAreaChart className='subheader-icon fal fa-chart-area' /> 
          <span className="font-weight-bold" >{pageName}</span> 
        </h1>
      </div>
    </Fragment>
  )
}