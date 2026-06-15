export const gerarArquivoTxt = (data) => {
  const txtData = data.map(item => JSON.stringify(item)).join('\n');
  const blob = new Blob([txtData], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'remessa_vendas.txt';
  a.click();
  URL.revokeObjectURL(url);
};