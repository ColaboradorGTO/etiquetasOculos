import Swal from "sweetalert2";
import { get, post, put } from "../../../../../api/funcRequest";
import { removerMascaraCPF } from "../../../../../utils/formatCPF";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import axios from "axios";
import { getDataAtual } from "../../../../../utils/dataAtual";

async function getDadosEnderecoViaCep_API_externa(cep) {
    const URL_VIA_CEP = 'https://viacep.com.br/ws/{CEP}/json/';
    cep = cep.replace(/\D/g, "");

    try {
        const response = await axios.get(URL_VIA_CEP.replace('{CEP}', cep));
        const data = response.data;
        let { erro } = data || {};

        // Se não houver erro, status é 200
        let status = erro ? 429 : 200;

        if (status !== 200) {
            return { status: 429, message: 'CEP INVÁLIDO OU NÃO ENCONTRADO, verifique e tente novamente!' };
        }

        return { status, data };
    } catch (respError) {
        let status = respError?.response?.status || 500;
        let message = respError?.response?.statusText || respError?.message || 'Erro ao consultar o CEP';
        return { status, message };
    }
}

async function validaCEP(cep, verificarNaApi = false) {
    const regex = /^[0-9]{5}-?[0-9]{3}$/;
    
    if (!regex.test(cep)){
        return false;
    }

    if(verificarNaApi){
        let respCep = await getDadosEnderecoViaCep_API_externa(cep);
        return !(respCep?.erro == 'true'); 
    }

    return true;
}

async function getDadosEnderecoViaCep_API_redundancia(cep) {
    const URL_VIA_CEP = 'https://opencep.com/v1/{CEP}.json';
    cep = cep.replace(/\D/g, "");

    try {
        const response = await axios.get(URL_VIA_CEP.replace('{CEP}', cep));
        const data = response.data;
        let { erro } = data || {};

        let status = erro ? 429 : 200;

        if (status !== 200) {
            return { status: 429, message: 'CEP INVÁLIDO OU NÃO ENCONTRADO, verifique e tente novamente!' };
        }

        return { status, data };
    } catch (respError) {
        let status = respError?.response?.status || 500;
        let message = respError?.response?.statusText || respError?.message || 'Erro ao consultar o CEP';
        return { status, message };
    }
}

export const useCadastrarClienteCPF = ({ usuarioLogado, optionsModulos, handleClose }) => {
    const [idCliente, setIdCliente] = useState('');
    const [tipo, setTipo] = useState('');
    const [dataCadastro, setDataCadastro] = useState('');
    const [cpf, setCpf] = useState('');
    const [nomeClienteRazao, setNomeClienteRazao] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');
    const [telefoneCliente, setTelefoneCliente] = useState('');
    const [numeroComercial, setNumeroComercial] = useState('');
    const [email, setEmail] = useState('');
    const [tipoIndicacaoIE, setTipoIndicacaoIE] = useState('');
    const [cep, setCep] = useState('');
    const [endereco, setEndereco] = useState('');
    const [numero, setNumero] = useState('');
    const [complemento, setComplemento] = useState('');
    const [bairro, setBairro] = useState('');
    const [nuIBGE, setNuIBGE] = useState('');
    const [cidade, setCidade] = useState('');
    const [estado, setEstado] = useState('');
    const [cpfFuncionario, setCpfFuncionario] = useState('');
    const [empresa, setEmpresa] = useState('');
    const [ipUsuario, setIpUsuario] = useState('');
    const [cepDigitado, setCepDigitado] = useState(false);

    useEffect(() => {
        const dataAtual = getDataAtual()
        setDataCadastro(dataAtual)
    }, [usuarioLogado]);

    const getIPUsuario = async () => {
        let usuarioIP = null;

        try {
            const { data: ipWhoisData } = await axios.get("http://ipwho.is/");
            usuarioIP = ipWhoisData?.ip;
        } catch (error) {
            console.error("Erro ao buscar IP via ipwho.is:", error);
        }

        if (!usuarioIP) {
            try {
                const { data: ipifyData } = await axios.get("https://api.ipify.org?format=json");
                usuarioIP = ipifyData?.ip;
            } catch (error) {
                console.error("Erro ao buscar IP via ipify.org:", error);
            }
        }
        setIpUsuario(usuarioIP);
        return usuarioIP;
    };

    const { data: optionsCPF = [], error: errorCPF, isLoading: isLoadingCPF } = useQuery(
        ['cliente-todos', cpf],
        async () => {
            const response = await get(`/cliente-todos?numeroCpfCnpj=${removerMascaraCPF(cpf)}`);   
            return response.data;
        },
        { enabled: cpf?.length >= 8, staleTime: 5 * 60 * 1000 }
    );

    useEffect(() => {
        if (cep.length >= 7 && cepDigitado && optionsCPF.length >= 0) {
            getCEP();
        }
    }, [cep, cepDigitado, optionsCPF]);

    const getCEP = async () => {
        try {
            const isValidCep = await validaCEP(cep, false);
            if (!isValidCep) {
                Swal.fire({
                    title: 'CEP Inválido',
                    text: 'Por favor, digite um CEP válido.',
                    icon: 'warning',
                    customClass: {
                        container: 'custom-swal',
                    }
                });
                return;
            }
           
            let response = await getDadosEnderecoViaCep_API_externa(cep);    
         
            if (response.status !== 200) {
                console.log('API principal falhou, tentando API de redundância...');
                response = await getDadosEnderecoViaCep_API_redundancia(cep);
            }
            
            if (response.status !== 200) {
                Swal.fire({
                    title: 'Erro ao buscar CEP',
                    text: response.message || 'CEP não encontrado. Verifique e tente novamente.',
                    icon: 'error',
                    customClass: {
                        container: 'custom-swal',
                    }
                });
                return;
            }
            
            const data = response.data;    
            
            setCep(data.cep || data.zipCode || cep);
            setEndereco(data.logradouro || data.address || '');
            setComplemento(data.complemento || '');
            setBairro(data.bairro || data.neighborhood || '');
            setCidade(data.localidade || data.city || '');
            setEstado(data.uf || data.state || '');
            setNuIBGE(data.ibge || '');
            
        } catch (error) {
            console.error('Erro ao buscar CEP:', error);
            Swal.fire({
                title: 'Erro',
                text: 'Erro interno ao buscar o CEP. Tente novamente.',
                icon: 'error',
                customClass: {
                    container: 'custom-swal',
                }
            });
        }
    };

    
    useEffect(() => {
        if (optionsCPF.length > 0) {
            const cliente = optionsCPF[0];    
            setCepDigitado(false);     
            setIdCliente(cliente?.IDCLIENTE || "");
            setEmpresa(cliente?.IDEMPRESA || "");
            setDataCadastro(cliente?.DTCADASTRO || cliente?.DTULTALTERACAO?.split(" ")[0] || "");
            setCpf(cliente?.NUCPFCNPJ || "");
            setTipo(cliente?.TPCLIENTE || "");
            setDataNascimento(cliente?.DTNASCFUNDACAO ? cliente.DTNASCFUNDACAO.split(" ")[0] : "");
            setTelefoneCliente(cliente?.NUTELCELULAR || "");
            setEmail(cliente?.EEMAIL || "");
            setCep(cliente?.NUCEP || "");
            setEndereco(cliente?.EENDERECO || "");
            setNumero(cliente?.NUENDERECO || "");
            setComplemento(cliente?.ECOMPLEMENTO);
            setBairro(cliente?.EBAIRRO || "");
            setNuIBGE(cliente?.NUIBGE || "");
            setCidade(cliente?.ECIDADE || "");
            setEstado(cliente?.SGUF || "");
            setNumeroComercial(cliente?.NUTELCOMERCIAL || "");
            setTipoIndicacaoIE(cliente?.IDINDICACAOIE || (cliente?.SGUF == "DF" ? 2 : 9));
            
            if (cliente?.NUCPFCNPJ?.length <= 11) {
                setNomeClienteRazao(cliente?.DSNOMERAZAOSOCIAL); 
                setSobrenome(cliente?.DSAPELIDONOMEFANTASIA);    
            } else {
                setNomeClienteRazao(cliente?.DSNOMERAZAOSOCIAL);
                setSobrenome(cliente?.DSAPELIDONOMEFANTASIA);
            }
        } else {
            setCepDigitado(false); 
        }
    }, [optionsCPF]);

    useEffect(() => {
        if (optionsCPF && optionsCPF.length > 0) {
            Swal.fire({
                title: 'Cliente já cadastrado!',
                icon: 'warning',
                confirmButtonText: 'Ok',
                customClass: {
                    container: 'custom-swal',
                }
            });
        }
    }, [optionsCPF]);

    const optionsIndicacaoIE = [
        { value: 9, label: 'Não Contribuinte Com ou Sem IE' },
        { value: 1, label: 'Contribuinte ICMS' },
        { value: 2, label: 'Contribuinte Isento de IE' },
    ]
        
    const readOnlyCpf = optionsCPF && optionsCPF.length > 0;

    const onSubmit = async () => {
        try {
            const cpfSemMascara = removerMascaraCPF(cpf);
            let IM = '';

            const isUpdate = optionsCPF.length > 0 && idCliente;

            const putData = {
                ...(isUpdate && { IDCLIENTE: idCliente }),
                IDEMPRESA: parseInt(usuarioLogado?.IDEMPRESA),
                DSNOMERAZAOSOCIAL: nomeClienteRazao,
                DSAPELIDONOMEFANTASIA: sobrenome,
                TPCLIENTE: 'FISICA',
                NUCPFCNPJ: cpfSemMascara,
                NURGINSCESTADUAL: tipoIndicacaoIE == 2 ? 'ISENTO' : (tipoIndicacaoIE || 'ISENTO') || tipoIndicacaoIE == 9 ? 'ISENTO' : 'ISENTO',
                NUINSCMUNICIPAL: IM,
                NUCEP: cep.replace(/\D/g, ""),
                NUIBGE: parseInt(nuIBGE),
                EENDERECO: endereco,
                NUENDERECO: numero,
                ECOMPLEMENTO: complemento,
                EBAIRRO: bairro,
                ECIDADE: cidade,
                SGUF: estado,
                EEMAIL: email,
                NUTELCOMERCIAL: numeroComercial,
                NUTELCELULAR: telefoneCliente.replace(/\D/g, ""),
                DTNASCFUNDACAO: dataNascimento,
                IDINDICACAOIE: Number(tipoIndicacaoIE.value) || 9,
                DSINDICACAOIE: tipoIndicacaoIE == 9 ? 'NÃO CONTRIBUINTE COM OU SEM IE' : tipoIndicacaoIE == 1 ? 'CONTRIBUINTE ICMS' : 'CONTRIBUINTE ISENTO DE IE',
                IDFUNCIONARIO: Number(usuarioLogado.id),
            }

            const response = isUpdate ? await put('/todos-cliente/:id', putData) : await post('/criar-cliente', putData);
            const textDados = JSON.stringify(putData)
            let textoFuncao = isUpdate ? 'VOUCHER /ATUALIZAÇÃO DE CLIENTE' : 'VOUCHER /CRIAÇÃO DE CLIENTE'

            await getIPUsuario();
            const postData = {
                IDFUNCIONARIO: String(usuarioLogado.id),
                PATHFUNCAO: textoFuncao,
                DADOS: textDados,
                IP: ipUsuario
            }

            await post('/log-web', postData)


            Swal.fire({
                title: isUpdate ? 'Atualização' : 'Cadastro',
                text: isUpdate
                    ? 'Cliente atualizado com sucesso'
                    : 'Cliente cadastrado com sucesso',
                icon: 'success',
                customClass: {
                    container: 'custom-swal',
                }
            });

            handleClose();
            setCpf('');
            setCep('');
            
            return response.data;
        } catch (error) {
            console.error("Erro ao processar cliente:", error);

            const isUpdate = optionsCPF.length > 0 && idCliente;
            let textoFuncao = isUpdate
                ? 'VOUCHER /ERRO AO ATUALIZAR CLIENTE'
                : 'VOUCHER /ERRO AO CADASTRAR CLIENTE';

            const postData = {
                IDFUNCIONARIO: String(usuarioLogado.id),
                PATHFUNCAO: textoFuncao,
                DADOS: '',
                IP: ipUsuario
            }
            await post('/log-web', postData);

            Swal.fire({
                title: 'Erro',
                text: `Ocorreu um erro ao ${isUpdate ? 'atualizar' : 'cadastrar'} o cliente: ${error.message}. Tente novamente.`,
                icon: 'error',
                customClass: {
                    container: 'custom-swal',
                }
            });
            return;
        }
    }

    return {
        idCliente,
        setIdCliente,
        tipo,
        setTipo,
        dataCadastro,
        setDataCadastro,
        cpf,
        setCpf,
        nomeClienteRazao,
        setNomeClienteRazao,
        sobrenome,
        setSobrenome,
        dataNascimento,
        setDataNascimento,
        telefoneCliente,
        setTelefoneCliente,
        email,
        setEmail,
        tipoIndicacaoIE,
        setTipoIndicacaoIE,
        cep,
        setCep,
        endereco,
        setEndereco,
        numero,
        setNumero,
        complemento,
        setComplemento,
        bairro,
        setBairro,
        nuIBGE,
        setNuIBGE,
        cidade,
        setCidade,
        estado,
        setEstado,
        cpfFuncionario,
        setCpfFuncionario,
        empresa,
        optionsIndicacaoIE,
        onSubmit,
        readOnlyCpf,
        setCepDigitado
    }
}