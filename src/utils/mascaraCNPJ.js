export const mascaraCNPJ = (cnpj) => {
    // Verifica se o CNPJ existe e não está vazio
    if (!cnpj || cnpj.trim() === '') {
        return '';
    }
    
    // Remove caracteres não numéricos
    cnpj = cnpj.replace(/[^\d]+/g, '');
    
    // Verifica se tem pelo menos algum número
    if (cnpj.length === 0) {
        return '';
    }
    
    // Se tiver menos de 14 dígitos, retorna apenas os números sem máscara
    if (cnpj.length < 14) {
        return cnpj;
    }
    
    return cnpj.substring(0, 2) + "." + cnpj.substring(2, 5) + "." + cnpj.substring(5, 8) + "/" + cnpj.substring(8, 12) + "-" + cnpj.substring(12, 14);
}

export const removeMascaraCNPJ = (cnpj) => {
    return cnpj.replace(/[^\d]+/g, '');
}

export const validarCNPJ = (cnpj) => {
   
    cnpj = cnpj.replace(/[^\d]+/g, '');

    if (cnpj === '') return false;

    if (cnpj.length !== 14) return false;

    const invalidCnpj = [
        "00000000000000",
        "11111111111111",
        "22222222222222",
        "33333333333333",
        "44444444444444",
        "55555555555555",
        "66666666666666",
        "77777777777777",
        "88888888888888",
        "99999999999999"
    ];

    if (invalidCnpj.includes(cnpj)) return false;

    let tamanho = cnpj.length - 2;
    let numeros = cnpj.substring(0, tamanho);
    let digitos = cnpj.substring(tamanho);
    let soma = 0;
    let pos = tamanho - 7;

    for (let i = tamanho; i >= 1; i--) {
        soma += numeros.charAt(tamanho - i) * pos--;
        if (pos < 2) pos = 9;
    }

    let resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
    if (resultado !== parseInt(digitos.charAt(0))) return false;

    tamanho += 1;
    numeros = cnpj.substring(0, tamanho);
    soma = 0;
    pos = tamanho - 7;

    for (let i = tamanho; i >= 1; i--) {
        soma += numeros.charAt(tamanho - i) * pos--;
        if (pos < 2) pos = 9;
    }

    resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
    if (resultado !== parseInt(digitos.charAt(1))) return false;

    return true;
};