export const numeroPorExtenso = (numero) => {
  // Remove caracteres não numéricos exceto ponto e vírgula
  let n = String(numero).replace(/[^\d.,]/g, '').replace(',', '.');
  let valor = parseFloat(n);
  if (isNaN(valor)) return '';

  const ex = [
    ["Zero", "Um", "Dois", "Três", "Quatro", "Cinco", "Seis", "Sete", "Oito", "Nove", "Dez", "Onze", "Doze", "Treze", "Quatorze", "Quinze", "Dezesseis", "Dezessete", "Dezoito", "Dezenove"],
    ["Dez", "Vinte", "Trinta", "Quarenta", "Cinquenta", "Sessenta", "Setenta", "Oitenta", "Noventa"],
    ["Cem", "Cento", "Duzentos", "Trezentos", "Quatrocentos", "Quinhentos", "Seiscentos", "Setecentos", "Oitocentos", "Novecentos"],
    ["Mil", "Milhão", "Bilhão", "Trilhão", "Quadrilhão", "Quintilhão", "Sextilhão", "Setilhão", "Octilhão", "Nonilhão", "Decilhão", "Undecilhão", "Dodecilhão", "Tredecilhão", "Quatrodecilhão", "Quindecilhão", "Sedecilhão", "Septendecilhão", "Octencilhão", "Nonencilhão"]
  ];
  let e = " e ";

  // Separa parte inteira e centavos
  let inteiro = Math.floor(valor);
  let centavos = Math.round((valor - inteiro) * 100);

  // Função recursiva para parte inteira
  function extenso(n, escala = 0) {
    if (n === 0) return escala === 0 ? ex[0][0] : '';
    if (n < 20) return ex[0][n];
    if (n < 100) return ex[1][Math.floor(n / 10) - 1] + (n % 10 ? e + ex[0][n % 10] : '');
    if (n < 1000) {
      if (n === 100) return ex[2][0];
      return ex[2][Math.floor(n / 100)] + (n % 100 ? e + extenso(n % 100) : '');
    }
    for (let i = 0, p = 1000; i < ex[3].length; i++, p *= 1000) {
      if (n < p * 1000) {
        let q = Math.floor(n / p);
        let r = n % p;
        let nomeEscala = ex[3][i];
        if (q > 1 && i > 0) nomeEscala = nomeEscala.replace('ão', 'ões');
        return extenso(q, i) + ' ' + nomeEscala + (r ? e + extenso(r, i) : '');
      }
    }
    return '';
  }

  let result = '';
  if (inteiro > 0) {
    result = extenso(inteiro) + (inteiro === 1 ? ' Real' : ' Reais');
  }
  if (centavos > 0) {
    if (result) result += e;
    result += extenso(centavos) + (centavos === 1 ? ' Centavo' : ' Centavos');
  }
  if (!result) result = ex[0][0] + ' Real';
  return result;
};