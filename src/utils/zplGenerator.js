// utils/zplGenerator.js

export const generateZPLEtiquetas = (etiquetas) => {
  let zplCommands = '';
  
  etiquetas.forEach((etiqueta, index) => {
    // Início da etiqueta
    zplCommands += '^XA\n'; // Início do formato de etiqueta
    
    // Configurações básicas
    zplCommands += '^LH0,0\n'; // Posição inicial
    zplCommands += '^FO50,50\n'; // Posição do campo
    
    // Campo do valor (preço)
    zplCommands += `^A0N,40,40\n`; // Fonte e tamanho
    zplCommands += `^FD${etiqueta.valor}\n`; // Dados do campo
    zplCommands += '^FS\n'; // Fim do campo
    
    // Adicionar mais campos se necessário (ID, quantidade, etc.)
    if (etiqueta.idEtiqueta) {
      zplCommands += '^FO50,100\n';
      zplCommands += '^A0N,20,20\n';
      zplCommands += `^FDID: ${etiqueta.idEtiqueta}\n`;
      zplCommands += '^FS\n';
    }
    
    // Fim da etiqueta
    zplCommands += '^XZ\n'; // Fim do formato
  });
  
  return zplCommands;
};

export const printZPLDirect = (zplCommands) => {
  // Enviar diretamente para a impressora via WebSocket, raw printing, ou API
  // Exemplo usando uma API local ou driver específico
  
  try {
    // Método 1: Via WebSocket (se tiver um servidor local)
    const ws = new WebSocket('ws://localhost:9100'); // Porta comum para impressoras ZPL
    ws.onopen = () => {
      ws.send(zplCommands);
      ws.close();
    };
    
    // Método 2: Via API local (se tiver um serviço rodando)
    // fetch('http://localhost:3001/print-zpl', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'text/plain' },
    //   body: zplCommands
    // });
    
  } catch (error) {
    console.error('Erro ao imprimir ZPL:', error);
    // Fallback: mostrar comandos ZPL para copiar manualmente
    alert('Comandos ZPL gerados:\n\n' + zplCommands);
  }
};