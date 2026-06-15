import { Fragment } from "react"
import { MdOutlineLocalPrintshop } from "react-icons/md";

export const ButtonImprimir = ({
  onClickImprimir, 
  titleButton,
  className,
  cor,
  tipo,
  Icon,
  iconColor,
  iconSize
}) => {
  let btnClasses = "btn btn-sm btn-icon";

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
  }

  const typeButton = tipo === "button" ? "button" : "submit";

  return (

    <Fragment>
      <button
        disabled=""
        type="button"
        // className="btn btn-sm btn-icon"
        className={`${btnClasses} ${className}`}
        style={{ alignItems: "center" }}
        onclick={onClickImprimir}
        title={titleButton}
      >
        {Icon && <Icon size={iconSize}  color={iconColor} />}
        {/* <MdOutlineLocalPrintshop size={15} color="#fff"/> */}
      </button>
    </Fragment>
  )
}