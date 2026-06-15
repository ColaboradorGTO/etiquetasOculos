import { useState } from "react";
import Swal from "sweetalert2";

/**
 * Envia comandos ZPL diretamente para impressora via WebSocket
 * Adaptado do jQuery original para React
 * @param {string} labelPagesZPL - Comandos ZPL para enviar à impressora
 * @returns {Promise<string>} - Resultado da impressão
 */
export const enviarZPLParaImpressora = async (labelPagesZPL) => {
  try {
    // Validação inicial
    if (!labelPagesZPL || labelPagesZPL.length === 0) {
      Swal.fire({
        icon: 'warning',
        title: 'Nenhum arquivo para impressão',
        text: 'Nenhum arquivo enviado para impressão, verifique e tente novamente!',
        customClass: {
            container: 'custom-swal',
        },
      });
      return;
    }

    // Limpa o ZPL (remove espaços e linhas vazias)
    const zplLimpo = labelPagesZPL
      .replace(/^[ \t]+/gm, '')
      .replace(/^\s*$(?:\r\n?|\n)/gm, '')
      .trim();

    console.log('📡 Enviando ZPL para impressora:', zplLimpo.substring(0, 100) + '...');

    // Mostra loading de conexão
    Swal.fire({
      title: 'Conectando à Impressora...',
      text: 'Aguarde a conexão com o serviço de impressão',
      allowOutsideClick: false,
      showConfirmButton: false,
       customClass: {
            container: 'custom-swal',
        },
      didOpen: () => {
        Swal.showLoading();
      }
    });

    // Cria conexão WebSocket
    const socket = new WebSocket('ws://localhost:9090');

    // Aguarda conexão
    await new Promise((resolve, reject) => {
      socket.onopen = () => {
        console.log('✅ Conectado ao serviço de impressão');
        resolve();
      };
      
      socket.onerror = (err) => {
        console.error('❌ Erro na conexão:', err);
        reject(new Error('Falha na conexão com o serviço de impressão do Quality!'));
      };
      
      // Timeout de 10 segundos
      setTimeout(() => {
        reject(new Error('Tempo limite de conexão excedido!'));
      }, 10000);
    });

    // Atualiza loading para impressão
    Swal.fire({
      title: 'Imprimindo...',
      text: 'Enviando dados para a impressora ZPL',
      allowOutsideClick: false,
      showConfirmButton: false,
        customClass: {
            container: 'custom-swal',
        },
      didOpen: () => {
        Swal.showLoading();
      }
    });

    // Envia comandos ZPL
    console.log('📤 Enviando comandos ZPL...');
    socket.send(zplLimpo);

    // Aguarda resposta da impressão
    const resultado = await new Promise((resolve, reject) => {
      socket.onmessage = (e) => {
        console.log('📥 Resposta recebida:', e.data);
        
        if (e?.data?.includes("ERROR")) {
          reject(new Error(e.data));
        } else {
          resolve(e.data);
        }
      };

      socket.onerror = (err) => {
        console.error('❌ Erro na comunicação:', err);
        reject(new Error('Erro na comunicação com a impressora!'));
      };

      socket.onclose = () => {
        console.log('🔌 Conexão fechada');
        resolve('Impressão enviada com sucesso!');
      };

      // Timeout de 10 segundos para resposta
      setTimeout(() => {
        reject(new Error('Tempo limite de resposta excedido'));
      }, 10000);
    });

    // Fecha conexão
    socket.close();

    // Sucesso
    Swal.fire({
      icon: 'success',
      title: 'Impressão Concluída!',
      text: resultado || 'Etiquetas enviadas para a impressora ZPL',
      timer: 2000,
      showConfirmButton: false,
        customClass: {
            container: 'custom-swal',
        },
    });

    console.log('✅ Impressão concluída:', resultado);
    return resultado;

  } catch (error) {
    console.error('❌ Erro na impressão ZPL:', error);
    
    // Fecha loading se estiver aberto
    Swal.close();
    
    // Mostra erro específico
    let mensagemErro = 'Erro desconhecido na impressão';
    
    if (error.message.includes('conexão')) {
      mensagemErro = 'Não foi possível conectar ao serviço de impressão. Verifique se o serviço está rodando na porta 9090';
    } else if (error.message.includes('Tempo limite')) {
      mensagemErro = 'Timeout na comunicação com a impressora. Tente novamente';
    } else {
      mensagemErro = error.message;
    }

    Swal.fire({
      icon: 'error',
      title: 'Erro na Impressão',
      text: mensagemErro,
      confirmButtonText: 'OK',
       customClass: {
            container: 'custom-swal',
        },
    });

    throw error;
  }
};

/**
 * Gera comandos ZPL básicos para etiquetas de preço
 * @param {Array} etiquetas - Array com dados das etiquetas {valor, quantidade}
 * @param {number} copias - Número de cópias de cada etiqueta
 * @returns {string} - Comandos ZPL gerados
 */
export const gerarZPLEtiquetas = (etiquetas, copias = 1) => {
  let comandosZPL = '';
  
  etiquetas.forEach((etiqueta) => {
    for (let copia = 0; copia < copias; copia++) {
      comandosZPL += `
        ^XA
        ^CF0,30
        ^FO50,50^FD${etiqueta.valor}^FS
        ^XZ
      `;
    }
  });

  return comandosZPL.trim();
};

/**
 * Hook personalizado para impressão ZPL
 * @returns {Object} - Funções de impressão e estado
 */
export const useLabelPrinter = () => {
  const [isConnecting, setIsConnecting] = useState(false);
  const [isPrinting, setIsPrinting] = useState(false);

  const imprimirZPL = async (labelPagesZPL) => {
    setIsConnecting(true);
    setIsPrinting(true);
    
    try {
      const resultado = await enviarZPLParaImpressora(labelPagesZPL);
      return resultado;
    } finally {
      setIsConnecting(false);
      setIsPrinting(false);
    }
  };

  return {
    imprimirZPL,
    isConnecting,
    isPrinting,
    isLoading: isConnecting || isPrinting
  };
};