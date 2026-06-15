import{S as e}from"./index-3298cda5.js";function t(n="Carregando",a=!0){var o;if(e.isVisible()){const i=(o=e.getHtmlContainer())==null?void 0:o.querySelector(".loading h2");i&&(i.textContent=n);return}return e.fire({title:"Aguarde...",html:`
      <style>
        .loading span {
          display: inline-block;
          vertical-align: middle;
          width: .6em;
          height: .6em;
          margin: .19em;
          background: #e0dfe2;
          border-radius: .6em;
          animation: loading 1s infinite alternate;
        }
        .loading span:nth-of-type(2) { background: #e3c8ff; animation-delay: 0.3s; }
        .loading span:nth-of-type(3) { background: #d2aef7; animation-delay: 0.5s; }
        .loading span:nth-of-type(4) { background: #ba89ee; animation-delay: 0.7s; }
        .loading span:nth-of-type(5) { background: #ad65fb; animation-delay: 0.9s; }
        .loading span:nth-of-type(6) { background: #9532ff; animation-delay: 1.1s; }
        .loading span:nth-of-type(7) { background: #7b00ff; animation-delay: 1.3s; }
        @keyframes loading {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
      </style>
      <div class="loading animacaoLoading">
        <h2>${n}</h2>
        <h2 id="numPagesLoading"></h2>
        <small class="${a?"d-block":"d-none"} ">Caso queira cancelar, recarregue a página</small>
        <span></span><span></span><span></span><span></span><span></span><span></span><span></span>
      </div>
    `,allowOutsideClick:!1,allowEscapeKey:!1,showConfirmButton:!1,customClass:{container:"custom-swal"}})}const r=()=>{e.close()};function s(){clearTimeout(loader),e.close()}function d(n,a,o=!0){s(),n=n||"Carregando...",typeof a!="number"?a=1e3:a=a<0?0:a,loader=setTimeout(()=>t(n,o),a)}export{t as a,d as b,r as f};
