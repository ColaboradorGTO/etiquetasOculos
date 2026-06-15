import { Fragment } from "react"
import { MdOutlineLockOpen, MdOutlineLocalPrintshop, MdOutlineAttachMoney, MdClose, MdPix, MdMoneyOff, MdFormatListBulleted, MdOutlineCreateNewFolder, MdOutlineSend, MdOutlineCloudUpload } from "react-icons/md";
import { CiEdit, CiPower } from "react-icons/ci";
import { GrView, GrFormView, GrCertificate, GrDocumentDownload, GrDocumentPdf } from "react-icons/gr";;
import { BsCash } from "react-icons/bs";
import { GiClothes, GiTakeMyMoney } from "react-icons/gi";
import { FaScaleUnbalanced, FaCcMastercard } from "react-icons/fa6";
import { FcCurrencyExchange } from "react-icons/fc";
import { FiSend } from "react-icons/fi";
import { FaProductHunt, FaCashRegister, FaUserAltSlash, FaUserTimes, FaExclamation, FaMinus, FaRegBuilding, FaRegTrashAlt, FaRegSave, FaBalanceScale, FaBalanceScaleLeft, FaUnlink } from "react-icons/fa";
import { AiOutlineDelete, AiOutlineCloseCircle, AiOutlineArrowLeft } from "react-icons/ai";
import { IoIosAdd } from "react-icons/io";
import { FaCheck } from "react-icons/fa6";
import { GoDownload } from "react-icons/go";
import { BsTrash3, BsFiletypePdf } from "react-icons/bs";
import { SiSap, SiMicrosoftexcel } from "react-icons/si";
import { FcProcess } from "react-icons/fc";
import { FaTruckFast } from "react-icons/fa6";


export const ButtonTable = ({
  onClickButton, 
  titleButton,
  textButton,
  className,
  cor,
  tipo,
  Icon,
  iconColor,
  iconSize,
  disabledBTN,
  width = 'auto',
  height = 'auto',
  id,
  size = 'sm',
  textFontSize = '12px',
  lineHeight,
  flexDirection,

}) => {
  let btnClasses = "btn  btn-icon";

  if(cor === "primary") {
    btnClasses += " btn-primary";
  } else if(cor === "secondary") {
    btnClasses += " btn-secondary";
  } else if (cor === "success") {
    btnClasses += " btn-success";
  } else if (cor === "danger") {
    btnClasses += " btn-danger";
  } else if (cor === "warning") {
    btnClasses += " btn-warning";
  } else if (cor === "info") {
    btnClasses += " btn-info";
  } else if (cor === "dark") {
    btnClasses += " btn-dark";
  }

  if (size === "sm") {
    btnClasses += " btn-sm";
  } else if (size === "md") {
    btnClasses += " btn-md";
  } else if (size === "lg") {
    btnClasses += " btn-lg";
  }

  const typeButton = tipo === "button" ? "button" : "submit";

  return (
    <Fragment>
      <button
        disabled={disabledBTN}
        type="button"
        className={`${btnClasses} ${className}`}
        style={{ alignItems: "center", fontSize: textFontSize, width, height, display: 'block' }}
        onClick={onClickButton}
        title={titleButton}
        id={id}
        // lineHeight={lineHeight}
        flexDirection={flexDirection}
      >
        <div style={{ alignItems: "center",  display: 'flex', flexDirection: flexDirection || 'column', justifyContent: 'center', gap: '2px', width: '100%' }}>

          {Icon && <Icon size={iconSize} color={iconColor} />}
          <p style={{ fontSize: textFontSize, margin: '0px', padding: '0px', lineHeight: lineHeight || '0px' }}>
            {textButton}
          </p>
        </div>  
      </button>
    </Fragment>
  )
}

