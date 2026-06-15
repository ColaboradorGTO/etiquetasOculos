import * as yup from "yup";

export const schema = yup.object().shape({
        // Identificação
    idClienteEmpresa: yup.string(),
    tipoCliente: yup.string(),
    dataCadastroCliente: yup.date(),

    // Dados Empresariais
    IECliente: yup.string(), // Inscrição Estadual
    IMCliente: yup.string(), // Inscrição Municipal
    cnaeCliente: yup.string(),

    cnpjCliente: yup.string().required('CNPJ Obrigatório'),
    nomeClienteRazaoCliente: yup.string()
        .required('Nome/Razão Social Obrigatório')
        .test('nome-valido', 'Nome da empresa deve conter apenas letras e espaços, favor preencher e tentar novamente!', (value) => {
            if (!value) return false;
            return /^[A-Za-zÀ-ÿ\s]+$/.test(value);
        }),
    sobrenomeCliente: yup.string()
        .required('Razão Social Obrigatória')
        .test('sobrenome-valido', 'Razão Social deve conter apenas letras e espaços, favor preencher e tentar novamente!', (value) => {
            if (!value) return false;
            return /^[A-Za-zÀ-ÿ\s]+$/.test(value);
        }),
    emailCliente: yup.string()
        .email('Email inválido')
        .required('Email Obrigatório')
        .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'E-mail Inválido, verifique o E-MAIL e tente novamente!'),
    telefone: yup.string()
        .required('Telefone Obrigatório')
        .matches(/^(\(?\d{2}\)?\s?)?(\d{4,5}\-?\d{4})$/, 'Numero de Telefone Inválido, verifique o TELEFONE e tente novamente!'),
    telefoneComercial: yup.string()
        .test('telefone-comercial-format', 'Numero de Telefone Comercial Inválido, verifique o TELEFONE COMERCIAL e tente novamente!', (value) => {
            if (!value || value.length === 0) return true; // Permite campo vazio
            return /^(\(?\d{2}\)?\s?)?(\d{4,5}\-?\d{4})$/.test(value);
        }),
    cepCliente: yup.string()
        .required('CEP Obrigatório')
        .matches(/^[0-9]{5}-?[0-9]{3}$/, 'CEP inválido, verifique o CEP e tente novamente!'),
    enderecoCliente: yup.string()
        .required('Endereço Obrigatório')
        .test('not-ni', 'Campo pode ser vazio ou diferente de "NI"', (value) => {
            if(!value || value === 'NI') return true;
            return  value.length > 0;
        })
        .test('valid-characters', 'Endereço contém caracteres inválidos', (value) => {
            if(!value || value === 'NI') return true;
            return /^[A-Za-z0-9\s\-\/.,ºªÇçÁáÉéÍíÓóÚúÂâÊêÎîÔôÛûÀàÈèÌìÒòÙùÃãÕõÜü]*$/.test(value);
        })
        .test('not-only-numbers', 'Endereço não pode conter apenas números', (value) => {
            if (!value || value === 'NI') return true;
            return isNaN(Number(value));
        }),
    numeroEnderecoCliente: yup.string()
        .required('Número Obrigatório')
        .test('not-ni-check', 'Campo deve ter conteúdo válido', (value) => {
            if (value === 'SN') return true;
 
            return value && value.length > 0;
        })
        .test('valid-format', 'Número deve começar com dígitos seguidos de letras ou símbolos', (value) => {
            if (!value || value === 'SN') return true;

            return /^\d+[A-Za-z\-\/]*$/.test(value);
        })
        .test('not-only-numbers', 'Número não pode conter apenas dígitos', (value) => {
            if (!value || value === 'SN') return true;

            return isNaN(Number(value));
        }),
    complementoCliente: yup.string()
        .test('has-content', 'Campo pode estar vazio', (value) => {
            if (!value || value.length === 0) return true;

            return value.length > 0;
        })
        .test('valid-characters', 'Complemento contém caracteres inválidos', (value) => {
            if (!value || value.length === 0) return true;
            return /^[A-Za-z0-9\s\-\/.,ºªÇçÁáÉéÍíÓóÚúÂâÊêÎîÔôÛûÀàÈèÌìÒòÙùÃãÕõÜü]*$/.test(value);
        })
        .test('not-only-numbers', 'Complemento Inválido, verifique o endereço e tente novamente!', (value) => {
            if (!value || value.length === 0) return true;
            return isNaN(Number(value));
        }),
    bairroCliente: yup.string().required('Bairro Obrigatório'),
    cidadeCliente: yup.string()
        .required('Cidade Obrigatória')
        .matches(/^[A-Za-z0-9\s\-\/.,ºªÇçÁáÉéÍíÓóÚúÂâÊêÎîÔôÛûÀàÈèÌìÒòÙùÃãÕõÜü]*$/, 'Cidade inválida'),
    estadoCliente: yup.string().required('Estado Obrigatório'),
    dataCriacaoCliente: yup.date()
        .required('Data de Criação Obrigatória')
});