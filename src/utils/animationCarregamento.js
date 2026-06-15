import Swal from 'sweetalert2';

export function animacaoCarregamento(msgLoading = 'Carregando', ctrlClose = true) {
  // Se já existe um modal aberto, só atualiza o texto
  if (Swal.isVisible()) {
    const loadingDiv = Swal.getHtmlContainer()?.querySelector('.loading h2');
    if (loadingDiv) loadingDiv.textContent = msgLoading;
    return;
  }
  // Se não existe, abre o modal normalmente
  return Swal.fire({
    title: 'Aguarde...',
    html: `
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
        <h2>${msgLoading}</h2>
        <h2 id="numPagesLoading"></h2>
        <small class="${ctrlClose ? 'd-block' : 'd-none'} ">Caso queira cancelar, recarregue a página</small>
        <span></span><span></span><span></span><span></span><span></span><span></span><span></span>
      </div>
    `,
    allowOutsideClick: false,
    allowEscapeKey: false,
    showConfirmButton: false,
    customClass: {
      container: 'custom-swal'
    }
  });
}

export const fecharAnimacaoCarregamento = () => {
  Swal.close();
};

export function animationLoadingStop() {
  clearTimeout(loader);
  Swal.close();
}

export function animationLodadingStart(msg, delay, ctrlClose = true) {
  animationLoadingStop()

  msg = !msg ? 'Carregando...' : msg;

  if(typeof delay !== 'number') {
    delay = 1000;
  } else {
    delay = delay < 0 ? 0 : delay;
  }

  loader = setTimeout(() => animacaoCarregamento(msg, ctrlClose), delay);
}