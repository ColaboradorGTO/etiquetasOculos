export const mascaraTelefone = (valor) => {
    if (!valor) return "";

    // Remove todos os caracteres que não são números
    valor = valor.replace(/\D/g, "");

    // Aplica a máscara de telefone
    if (valor.length <= 10) {
        // Formato para telefones fixos (ex: (11) 1234-5678)
        return valor.replace(/(\d{2})(\d{4})(\d{4})/, "($1) $2-$3");
    } else {
        // Formato para celulares (ex: (11) 9 1234-5678)
        return valor.replace(/(\d{2})(\d{1})(\d{4})(\d{4})/, "($1) $2 $3-$4");
    }
};

export const removerMascaraTelefone = (valor) => {
    if (!valor) return "";
    // Remove todos os caracteres que não são números
    return valor.replace(/\D/g, "");
};

export const validaTelefoneOrCelular = (telefoneOrCelular) => {
    telefoneOrCelular = String(telefoneOrCelular).replace(/\D/g, "");

    if (telefoneOrCelular?.length < 10) return false;

    const regex = /^(\(?\d{2}\)?\s?)?(\d{4,5}\-?\d{4})$/;
    return regex.test(telefoneOrCelular);
}

// Mascara do TELEFONE
// export const mascaraTelefone = (valor) => {

//     //Remove tudo o que não é dígito
//     valor = String(valor).replace(/\D/g, "")

//     if (valor) {
//         valor = valor.replace(/^(\d{0})(\d)/, "$1($2")

//         valor = valor.replace(/(\d{2})(\d)/, "$1) $2")

//         valor = valor.replace(/(\d{3})(\d)/, "$1$2-")

//         if (valor.length > 14) {
//             valor = valor.replace(/\D/g, '')
//             valor = valor.replace(/(\d{2})(\d)/, "($1) $2")
//             valor = valor.replace(/(\d)(\d{8})$/, "$1 $2")
//             valor = valor.replace(/(\d)(\d{4})$/, "$1-$2")

//         }
//     }

//     return valor
// }