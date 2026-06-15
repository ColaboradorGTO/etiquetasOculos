export const verificaExistenciaCNPJ = async (cnpj) => {
  try {
    let statusRequest;
    const response = await fetch(`https://minhareceita.org/${cnpj}`);
    if(response.status == 200) {
     const data = await response.json({status: 200, message: 'CNPJ válido', api: 'Minha Receita'});
      return data;      
    } else {
      return {status: 404, message: 'CNPJ inválido', api: 'Minha Receita'};
    }
    return response.data;
  } catch (error) {
    console.error({status: 500, message: 'Erro ao consultar CNPJ', api: 'Minha Receita'});
  }
}