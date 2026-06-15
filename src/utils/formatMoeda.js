export function formatMoeda(value, locale = "pt-BR", currency = 'BRL') {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
  }).format(value);
}

export function formatarMoeda (valor) {
  const apenasNumeros = valor.replace(/\D/g, '');
  if (!apenasNumeros) return '';
  if (apenasNumeros.length <= 2) return apenasNumeros;
  
  const centavos = apenasNumeros.slice(-2);
  const inteiros = apenasNumeros.slice(0, -2);
  
  const integrosFormatado = inteiros.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  
  return integrosFormatado + '.' + centavos;
};

export function removerFormatacaoMoeda(valor) {
  if (!valor) return 0;
  let str = String(valor).trim();
  
  // Se tem vírgula, é o separador decimal (formato brasileiro)
  if (str.includes(',')) {
      // Remove pontos (separadores de milhares)
      str = str.replace(/\./g, '');
      // Troca vírgula por ponto
      str = str.replace(',', '.');
  } else {
      // Sem vírgula, pode ter ponto como decimal
      // Remover apenas pontos que são separadores de milhares (não o último ponto)
      const lastDotIndex = str.lastIndexOf('.');
      if (lastDotIndex > -1) {
          const beforeLastDot = str.substring(0, lastDotIndex).replace(/\./g, '');
          const afterLastDot = str.substring(lastDotIndex);
          str = beforeLastDot + afterLastDot;
      }
  }
  
  return parseFloat(str);
};