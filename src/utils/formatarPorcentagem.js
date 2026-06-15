
export const formatarPorcentagem = (valor, decimalPlaces = 2) => {
  if (isNaN(valor)) return "0%";
  return `${valor.toFixed(decimalPlaces).replace('.', ',')}%`;
};