export const ocultaParteDosDadosVoucher = (stringParaOcultar) => {
  if(stringParaOcultar){
    var dadoString = (""+stringParaOcultar);
    var stringPronta = dadoString.substring(0, 5) + ((dadoString.substring(5, dadoString.length-4)).replace(/[0-9]/g, "*")) + dadoString.substring(dadoString.length-4);
  
    return stringPronta;
  } else{
    console.error("O parametro(stringParaOcultar) passado para a função(ocultaParteDosDados) está vazio!");
    return false;
  }
}