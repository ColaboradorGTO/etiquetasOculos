export const calcularDiferencaEmDias = (dataVenda) => {
  const DATAHORAVENDA = new Date(dataVenda.slice(6,10), (dataVenda.slice(3,5) > 1 ? dataVenda.slice(3,5)-1 : dataVenda.slice(3,5)), dataVenda.slice(0,2));
  const DATAHORAATUAL = new Date();
  const DIFERENCAEMDIAS = Math.ceil(Math.abs(DATAHORAATUAL - DATAHORAVENDA.getTime())/(1000*60*60*24));
  return DIFERENCAEMDIAS;
}