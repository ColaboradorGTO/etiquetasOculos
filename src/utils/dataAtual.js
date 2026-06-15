import { format, subMonths, subDays, addMonths } from 'date-fns';

export const getAnoAtual = () => {
  const data = new Date();
  return data.getFullYear();
}
export function getHoraAtual() {
  const data = new Date();
  const hora = data.getHours().toString().padStart(2, "0"); 
  const minuto = data.getMinutes().toString().padStart(2, "0"); 
  const segundo = data.getSeconds().toString().padStart(2, "0");
  return `${hora}:${minuto}:${segundo}`; 
}

export function getDataHoraAtual() {
  const data = new Date();
  const hora = data.getHours().toString().padStart(2, "0");
  const minuto = data.getMinutes().toString().padStart(2, "0");
  const segundo = data.getSeconds().toString().padStart(2, "0");
  const ano = data.getFullYear();
  const mes = (data.getMonth() + 1).toString().padStart(2, "0");
  const dia = data.getDate().toString().padStart(2, "0");
  return `${ano}-${mes}-${dia} ${hora}:${minuto}:${segundo}`;
}

export function getDataAtual() {
  const data = new Date();
  const ano = data.getFullYear();
  const mes = (data.getMonth() + 1).toString().padStart(2, "0"); 
  const dia = data.getDate().toString().padStart(2, "0"); 
  return `${ano}-${mes}-${dia}`; 
}
export function getDataAtualMesAnoAnterior() {
  const data = new Date(); 
  const ano = data.getFullYear() - 1;
  const mes = (data.getMonth() + 1).toString().padStart(2, "0"); 
  const dia = data.getDate().toString().padStart(2, "0"); 
  return `${ano}-${mes}-${dia}`; 
}

export function getDataPrimeiroDiaMes() {
  const data = new Date(); 
  const ano = data.getFullYear();
  const mes = (data.getMonth() + 1).toString().padStart(2, "0"); 
  const dia = "01";
  return `${ano}-${mes}-${dia}`; 
}

export function getDataDiaMesAnoAnterior() {
  const data = new Date();
  const ano = data.getFullYear() - 1;
  const mes = (data.getMonth() + 1).toString().padStart(2, "0"); 
  const dia = "01"; 
  return `${ano}-${mes}-${dia}`;
}


export function  getDataDoisMesesAtras() {
  const data = new Date();
  const dataDoisMesesAtras = subMonths(data, 2);
  const ano = dataDoisMesesAtras.getFullYear();
  const mes = (dataDoisMesesAtras.getMonth() + 1).toString().padStart(2, "0"); 
  const dia = dataDoisMesesAtras.getDate().toString().padStart(2, "0"); 
  return `${ano}-${mes}-${dia}`; 
}

export function  getDataTresMesesAtras() {
  const data = new Date();
  const dataTresMesesAtras = subMonths(data, 3);
  const ano = dataTresMesesAtras.getFullYear();
  const mes = (dataTresMesesAtras.getMonth() + 1).toString().padStart(2, "0"); 
  const dia = dataTresMesesAtras.getDate().toString().padStart(2, "0"); 
  return `${ano}-${mes}-${dia}`; 
}

export function getUmdiaAntes() {
  const data = new Date();
  const ano = data.getFullYear();
  const mes = (data.getMonth() + 1).toString().padStart(2, "0"); 
  const dia = (data.getDate() - 1).toString().padStart(2, "0"); 
  return `${ano}-${mes}-${dia}`; 
}

export function adicionarMeses(dataInicial, meses) {
  const data = new Date(dataInicial);
  return format(addMonths(data, meses), 'yyyy-MM-dd');
}

export function mesAno(){
  const dataObj = new Date();
  const mes = dataObj.toLocaleString('pt-BR', { month: 'long' });
  const ano = dataObj.getFullYear();
  return `${mes.charAt(0).toUpperCase() + mes.slice(1)}/${ano}`;
};

export function mesAnoAnterior() {
  const dataObj = subMonths(new Date(), 0);
  const mes = dataObj.toLocaleString('pt-BR', { month: 'long' });
  const ano = dataObj.getFullYear() - 1;
  return `${mes.charAt(0).toUpperCase() + mes.slice(1)}/${ano}`;
}
// src/utils/calcularDataUmDiaMenos.js

export const calcularDataUmDiaMenos = (data) => {
  const [ano, mes, dia] = data.split('-');
  const dataInicial = new Date(ano, mes - 1, dia);
  const milissegundosPorDia = 1000 * 60 * 60 * 24;
  const dataFinal = new Date(dataInicial.getTime() - milissegundosPorDia);

  let diaFinal = dataFinal.getDate();
  let mesFinal = dataFinal.getMonth() + 1;
  const anoFinal = dataFinal.getFullYear();

  // Ajustes para meses com 30 dias e fevereiro
  if (mesFinal === 4 || mesFinal === 6 || mesFinal === 9 || mesFinal === 11) {
    if (diaFinal === 31) {
      diaFinal = 30;
    }
  } else if (mesFinal === 2) {
    if (diaFinal === 30) {
      diaFinal = 28;
    } else if (diaFinal === 31) {
      diaFinal = 28;
    }
  }

  // Formatação para garantir dois dígitos
  const diaFormatado = String(diaFinal).padStart(2, '0');
  const mesFormatado = String(mesFinal).padStart(2, '0');

  return `${anoFinal}-${mesFormatado}-${diaFormatado}`;
};