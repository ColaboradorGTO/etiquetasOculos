import React, { Fragment, useRef, useState } from "react"
import { AiOutlineArrowUp, AiOutlineExpand, AiOutlinePrinter } from "react-icons/ai"
import { PiSignOutBold } from "react-icons/pi"


export const MenuButton = () => {
  const contentRef = useRef()
  
  const toggleFullscreen = () => {
    const elem = document.documentElement;
    if (
      !document.fullscreenElement &&
      !document.mozFullScreenElement &&
      !document.webkitFullscreenElement &&
      !document.msFullscreenElement
    ) {
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.mozRequestFullScreen) { // Firefox
        elem.mozRequestFullScreen();
      } else if (elem.webkitRequestFullscreen) { // Chrome, Safari and Opera
        elem.webkitRequestFullscreen();
      } else if (elem.msRequestFullscreen) { // IE/Edge
        elem.msRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) { // Firefox
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) { // Chrome, Safari and Opera
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) { // IE/Edge
        document.msExitFullscreen();
      }
    }
  };

  return (

    <Fragment>
      <nav className="shortcut-menu d-none d-sm-block">
        <input type="checkbox" className="menu-open" name="menu-open" id="menu_open" />
        <label htmlFor="menu_open" className="menu-open-button ">
          <span className="app-shortcut-icon d-block"></span>
        </label>
        <a href="#" className="menu-item btn" data-toggle="tooltip" data-placement="left" title="Topo da Página">
          <AiOutlineArrowUp className="" size={22}/>
        </a>
       
        <a href="/" className="menu-item btn" data-toggle="tooltip" data-placement="left" title="Sair">
          <PiSignOutBold className="fal fa-sign-out" size={22} />
        </a>
        <a href="#" onClick={toggleFullscreen} className="menu-item btn" data-action="app-fullscreen" data-toggle="tooltip" data-placement="left" title="Tela Inteira">
          
          <AiOutlineExpand className="fal " size={22} />
        </a>
        <a href="#" className="menu-item btn" data-action="app-print" data-toggle="tooltip" data-placement="left" title="Imprimir Página">
      
          <AiOutlinePrinter className="fal " size={22} />
        </a>
      
        {/* <!--
        <a href="#" className="menu-item btn" data-action="app-voice" data-toggle="tooltip" data-placement="left" title="Voice command">
          <i className="fal fa-microphone"></i>
        </a>
        --> */}
      </nav>
    </Fragment>
  )
}