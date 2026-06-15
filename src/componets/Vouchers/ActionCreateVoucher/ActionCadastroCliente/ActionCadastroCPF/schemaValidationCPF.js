import * as yup from "yup";
import { validarCPF } from "../../../../../utils/formatCPF";
import { validaEmail } from "../../../../../utils/validaEmail";

export const schema = yup.object({
  cpfCliente: yup.string()
    .required("CPF é obrigatório")
    .test("cpf-valido", "CPF inválido", value => validarCPF(value)),
  nomeCliente: yup.string()
    .required("Nome é obrigatório")
    .transform((value) => value?.trim()) // Remove espaços extras
    .min(3, "Nome muito curto")
    .test("nome-valido", "Nome deve conter apenas letras e espaços", (value) => {
      if (!value) return false;
      return /^[A-Za-zÀ-ÿ\s]+$/.test(value.trim());
    }),
  sobrenomeCliente: yup.string()
    .required("Sobrenome é obrigatório")
    .transform((value) => value?.trim()) // Remove espaços extras
    .min(2, "Sobrenome muito curto")
    .test("sobrenome-valido", "Sobrenome deve conter apenas letras e espaços", (value) => {
      if (!value) return false;
      return /^[A-Za-zÀ-ÿ\s]+$/.test(value.trim());
    }),
  // dataNascimentoCliente: yup.string()
  //   .required("Data de nascimento é obrigatória"),
  telefoneDoCliente: yup.string()
    .required('Telefone Obrigatório')
    .matches(/^(\(?\d{2}\)?\s?)?(\d{1}\s?\d{4}\-?\d{4}|\d{4,5}\-?\d{4})$/, 'Numero de Telefone Inválido, verifique o TELEFONE e tente novamente!'),
  emailCliente: yup.string()
    .test('email-valido', 'E-mail Inválido, verifique o E-MAIL e tente novamente!', (value) => {
      if (!value || value.length === 0) return true; // Email opcional
      return validaEmail(value);
    }),
  // .email('Email inválido')
    // .required('Email Obrigatório')
  cepCliente: yup.string()
    .required('CEP Obrigatório')
    .matches(/^[0-9]{5}-?[0-9]{3}$/, 'CEP inválido, verifique o CEP e tente novamente!')
    .test("cep-valido", "CEP inválido", value => !value || value),
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
      if (!value || value === 'SN' || value == 'sn') return true;

      return /^\d+[A-Za-z\-\/]*$/.test(value);
    }),
  complementoCliente: yup.string()
    .nullable()
    .default('')
    .test('valid-characters', 'Complemento contém caracteres inválidos', (value) => {
        if (!value || value.length === 0) return true;
        return /^[A-Za-z0-9\s\-\/.,ºªÇçÁáÉéÍíÓóÚúÂâÊêÎîÔôÛûÀàÈèÌìÒòÙùÃãÕõÜü]*$/.test(value);
    })
    .test('not-only-numbers', 'Complemento Inválido, verifique o endereço e tente novamente!', (value) => {
        if (!value || value.length === 0) return true;
        return isNaN(Number(value));
    }),
  // bairroCliente: yup.string()
  //   .required("Bairro é obrigatório")
  //   .matches(/^[a-zA-ZÀ-ÿ\s]+$/, "Bairro inválido"),
  nuIBGECliente: yup.string()
    .required("Nº IBGE é obrigatório"),
  cidadeCliente: yup.string()
    .required("Cidade é obrigatória")
    .matches(/^[A-Za-z0-9\s\-\/.,ºªÇçÁáÉéÍíÓóÚúÂâÊêÎîÔôÛûÀàÈèÌìÒòÙùÃãÕõÜü]*$/, 'Cidade inválida'),
  estadoCliente: yup.string()
    .required("Estado é obrigatório"),
});