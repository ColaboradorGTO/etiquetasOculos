import { Fragment } from "react"
import { FooterModal } from "../../../../Modais/FooterModal/footerModal"
import { ButtonTypeModal } from "../../../../Buttons/ButtonTypeModal"
import { Controller, useForm } from "react-hook-form"
import { mascaraTelefone } from "../../../../../utils/mascaraTelefone"
import Select from "react-select"
import { schema } from "./schemaValidationCNPJ"
import FormField from "../../../../Formularios/FormField"
import { AlertError } from "../../../../Inputs/alertError"
import { useCadastrarClienteCNPJVoucher } from "../hooks/useCadastroClienteCNPJVoucher"

export const FormularioCadastro = ({ handleClose, usuarioLogado, optionsModulos, onCpf }) => {
    const { handleSubmit, formState: { errors }, clearErrors, control, setError, setValue } = useForm({
        mode: "onChange" 
    });
    const {
        idCliente,
        tipo,
        dataCadastro,
        cnpj,
        nomeClienteRazao,
        sobrenome,
        dataCriacao,
        telefoneCliente,
        numeroComercial,
        email,
        tipoIndicacaoIE,
        cep,
        endereco,
        numero,
        complemento,
        bairro,
        nuIBGE,
        cidade,
        estado,
        cpfFuncionario,
        empresa,
        IE,
        IM,
        cnae,
        telefoneComercial,
        clienteExistente,

        setIdCliente,
        setTipo,
        setDataCadastro,
        setCnpj,
        setNomeClienteRazao,
        setSobrenome,
        setDataCriacao,
        setTelefoneCliente,
        setNumeroComercial,
        setEmail,
        setTipoIndicacaoIE,
        setCep,
        setEndereco,
        setNumero,
        setComplemento,
        setBairro,
        setNuIBGE,
        setCidade,
        setEstado,
        setTelefoneComercial,
        optionsIndicacaoIE,
        onSubmit
    } = useCadastrarClienteCNPJVoucher({ usuarioLogado, optionsModulos, handleClose, onCpf });


    const handleValidatedSubmit = async () => {
        try {
          
            const dadosParaValidar = {
                cnpjCliente: cnpj,
                nomeClienteRazaoCliente: nomeClienteRazao,
                sobrenomeCliente: sobrenome,
                emailCliente: email,
                telefone: telefoneCliente,
                telefoneComercial: telefoneComercial,
                cepCliente: cep,
                enderecoCliente: endereco,
                numeroEnderecoCliente: numero,
                complementoCliente: complemento,
                bairroCliente: bairro,
                cidadeCliente: cidade,
                estadoCliente: estado,
                dataCriacaoCliente: dataCriacao
            };


            await schema.validate(dadosParaValidar, { abortEarly: false });
            
            
            onSubmit();
            
        } catch (validationError) {
            console.error('❌ Erro de validação:', validationError);
            
            clearErrors();
    

            if (validationError.inner && validationError.inner.length > 0) {
                validationError.inner.forEach(error => {
                    if (error.path) {
                        setError(error.path, {
                            type: 'manual',
                            message: error.message
                        });
                    }
                });
            }

            const errorMessages = validationError.errors || [validationError.message];
            console.log(`Erro de validação:\n${errorMessages.join('\n')}`);
        }
    };

    const handleFechar = () => {
        setIdCliente('');
        setTipo('CNPJ');
        setDataCadastro(new Date().toISOString().split('T')[0]);
        setCnpj('');
        setNomeClienteRazao('');
        setSobrenome('');
        setDataCriacao('');
        setTelefoneCliente('');
        setNumeroComercial('');
        setEmail('');
        setTipoIndicacaoIE(0);
        setCep('');
        setEndereco('');
        setNumero('');
        setComplemento('');
        setBairro('');
        setNuIBGE('');
        setCidade('');
        setEstado('');
        setTelefoneComercial('');
        handleClose();
    }
    return (
        <Fragment>
            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="form-group" >
                    <div className="row mt-2" style={{ width: '100%' }}>
                        <div className="col-sm-2 col-md-2 col-xl-2">
                            <Controller
                                name="idClienteEmpresa"
                                control={control}
                                render={({ field }) => (
                                    <FormField
                                        label={"ID"}
                                        name="idClienteEmpresa"
                                        type="text"
                                        readOnly={true}
                                        value={idCliente}
                                        onChange={(e) => setIdCliente(e.target.value)}
                                        errors={errors}
                                        clearErrors={clearErrors}
                                    />

                                )}
                            />
                        </div>
                        <div className="col-sm-2 col-md-2 col-xl-2">
                            <Controller
                                name="tipoCliente"
                                control={control}
                                render={({ field }) => (
                                    <FormField
                                        name="tipoCliente"
                                        label={"Tipo *"}
                                        type="text"
                                        readOnly={true}
                                        placeholder={"CNPJ"}
                                        errors={errors}
                                        clearErrors={clearErrors}
                                        value={tipo}
                                        onChange={(e) => setTipo(e.target.value)}
                                    />
                                )}
                            />
                        </div>
                        <div className="col-sm-3 col-md-3 col-xl-2">
                            <Controller
                                name="dataCadastroCliente"
                                control={control}
                                render={({ field }) => (
                                    <FormField
                                        name="dataCadastroCliente"
                                        label={"Data do Cadastro *"}
                                        type="date"
                                        readOnly={true}
                                        errors={errors}
                                        clearErrors={clearErrors}
                                        value={dataCadastro}
                                        onChange={(e) => setDataCadastro(e.target.value)}
                                    />
                                )}
                            />
                        </div>
                        <div className="col-sm-5 col-md-5 col-xl-5" >
                            <Controller
                                name="cnpjCliente"
                                control={control}
                                render={({ field }) => (
                                    <FormField
                                        name="cnpjCliente"
                                        label={"CNPJ*"}
                                        type="text"
                                        errors={errors}
                                        clearErrors={clearErrors}
                                        value={cnpj}
                                        onChange={(e) => setCnpj(e.target.value)}
                                    />
                                )}
                            />
                        </div>
                    </div>

                    <div className="row mt-3">
                        <div className="col-sm-2 col-md-3 col-xl-3">
                            <Controller
                                name="IECliente"
                                control={control}
                                render={({ field }) => (
                                    <FormField
                                        name="IECliente"
                                        label={"Inscrição Estadual*"}
                                        type="text"
                                        errors={errors}
                                        clearErrors={clearErrors}
                                        value={IE}
                                        onChange={(e) =>  setIE(e.target.value)}
                                    />
                                )}
                            />
                        </div>
                        <div className="col-sm-2 col-md-3 col-xl-3">
                            <Controller
                                name="IMCliente"
                                control={control}
                                render={({ field }) => (
                                    <FormField
                                        name="IMCliente"
                                        label={"Inscrição Municipal*"}
                                        type="text"
                                        errors={errors}
                                        clearErrors={clearErrors}
                                        value={IM}
                                        onChange={(e) => setIM(e.target.value)}
                                    />
                                )}
                            />
                        </div>
                        <div className="col-sm-5 col-md-3 col-xl-2">
                            <Controller
                                name="cnaeCliente"
                                control={control}
                                render={({ field }) => (
                                    <FormField
                                        name="cnaeCliente"
                                        label={"CNAE*"}
                                        type="text"
                                        errors={errors}
                                        clearErrors={clearErrors}
                                        value={cnae}
                                        onChange={(e) => setCNAE(e.target.value)}
                                    />
                                )}
                            />
                        </div>

                        <div className="col-sm-3 col-md-3 col-xl-3">
                            <Controller
                                name="dataCriacaoCliente"
                                control={control}
                                render={({ field }) => (
                                    <FormField
                                        name="dataCriacaoCliente"
                                        label={"Data da Criação*"}
                                        type="date"
                                        errors={errors}
                                        clearErrors={clearErrors}
                                        value={dataCriacao}
                                        onChange={(e) => setDataCriacao(e.target.value)}
                                    />
                                )}
                            />
                        </div>

                    </div>

                    <div className="row mt-3">
                        <div className="col-sm-6 col-xl-6">
                            <Controller
                                name="nomeClienteRazaoCliente"
                                control={control}
                                render={({ field }) => (
                                    <FormField
                                        name="nomeClienteRazaoCliente"
                                        label={"Razão Social*"}
                                        type="text"
                                        errors={errors}
                                        clearErrors={clearErrors}
                                        value={nomeClienteRazao}
                                        onChange={(e) => setNomeClienteRazao(e.target.value.toUpperCase())}
                                    />
                                )}
                            />
                        </div>
                        <div className="col-sm-6 col-xl-6">
                            <Controller
                                name="sobrenomeCliente"
                                control={control}
                                render={({ field }) => (
                                    <FormField
                                        name="sobrenomeCliente"
                                        label={"Nome Fantasia*"}
                                        type="text"
                                        errors={errors}
                                        clearErrors={clearErrors}
                                        value={sobrenome}
                                        onChange={(e) => setSobrenome(e.target.value.toUpperCase())}
                                    />
                                )}
                            />
                        </div>

                    </div>

                    <div className="row mt-3">

                        <div className="col-sm-4 col-md-3 col-xl-2">
                            <Controller
                                name="telefone"
                                control={control}
                                render={({ field }) => (
                                    <FormField
                                        name="telefone"
                                        label={"Telefone*"}
                                        type="text"
                                        errors={errors}
                                        clearErrors={clearErrors}
                                        value={mascaraTelefone(telefoneCliente)}
                                        onChange={(e) => setTelefoneCliente(e.target.value)}
                                    />
                                )}
                            />
                        </div>
                        <div className="col-sm-4 col-md-3 col-xl-3">
                            <Controller
                                name="telefoneComercial"
                                control={control}
                                render={({ field }) => (
                                    <FormField
                                        name="telefoneComercial"
                                        label={"Telefone Comercial"}
                                        type="text"
                                        errors={errors}
                                        clearErrors={clearErrors}
                                        value={mascaraTelefone(telefoneComercial)}
                                        onChange={(e) => setTelefoneComercial(e.target.value)}
                                    />
                                )}
                                />
                                
                        </div>

                        <div className="col-sm-4 col-md-3 col-xl-3">
                            <Controller
                                name="emailCliente"
                                control={control}
                                render={({ field }) => (
                                    <FormField
                                        name="emailCliente"
                                        label={"E-mail*"}
                                        type="email"
                                        errors={errors}
                                        clearErrors={clearErrors}
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value.toUpperCase())}
                                    />
                                )}
                            />
                        </div>
                        <div className="col-sm-5 col-md-3 col-xl-4">
                            <label className="form-label" htmlFor={""}>Tipo Indicação IE</label>
                             <Select
                                label={"Despesa"}
                                options={optionsIndicacaoIE.map((item) => ({
                                    value: item.value,
                                    label: item.label
                                }))}
                                value={optionsIndicacaoIE.find(option => option.value === tipoIndicacaoIE) || null}
                                onChange={(e) =>  setTipoIndicacaoIE(e?.value || null)}
                            />
                   
                            {errors.tipoIndicacaoIE && (
                                <AlertError
                                    error={errors.tipoIndicacaoIE}
                                    onClose={clearErrors}
                                    fieldName="tipoIndicacaoIE"
                                />
                            )}
                        </div>
                    </div>
                </div>

                <div className="form-group" >
                    <div className="row">
                        <div className="col-sm-2 cold-md-2 col-xl-2">
                            <Controller
                                name="cepCliente"
                                control={control}
                                render={({ field }) => (
                                    <FormField
                                        name="cepCliente"
                                        label={"CEP*"}
                                        type="text"
                                        errors={errors}
                                        clearErrors={clearErrors}
                                        value={cep}
                                        onChange={(e) => setCep(e.target.value)}
                                    />
                                )}
                            />
                        </div>

                        <div className="col-sm-4 cold-md-4 col-xl-4">
                            <Controller
                                name="enderecoCliente"
                                control={control}
                                render={({ field }) => (
                                    <FormField
                                        name="enderecoCliente"
                                        label={"Endereço*"}
                                        type="text"
                                        errors={errors}
                                        clearErrors={clearErrors}
                                        value={endereco}
                                        onChange={(e) => setEndereco(e.target.value.toUpperCase())}
                                        style={{ textTransform: 'uppercase' }}
                                    />
                                )}
                            />
                        </div>

                        <div className="col-sm-1 cold-md-2 col-xl-2">
                            <Controller
                                name="numeroEnderecoCliente"
                                control={control}
                                render={({ field }) => (
                                    <FormField
                                        name="numeroEnderecoCliente"
                                        label={"Número*"}
                                        type="text"
                                        errors={errors}
                                        clearErrors={clearErrors}
                                        value={numero}
                                        onChange={(e) => setNumero(e.target.value)}
                                    />
                                )}
                            />
                        </div>
                        <div className="col-sm-5 cold-md-5 col-xl-4">
                            <Controller
                                name="complementoCliente"
                                control={control}
                                render={({ field }) => (
                                    <FormField
                                        name="complementoCliente"
                                        label={"Complemento"}
                                        type="text"
                                        errors={errors}
                                        clearErrors={clearErrors}
                                        value={complemento}
                                        onChange={(e) => setComplemento(e.target.value.toUpperCase())}
                                        style={{ textTransform: 'uppercase' }}
                                    />
                                )}
                            />
                        </div>
                    </div>

                    <div className="row mt-3" >
                        <div className="col-sm-4 cold-md-4 col-xl-4">
                            <Controller
                                name="bairroCliente"
                                control={control}
                                render={({ field }) => (
                                    <FormField
                                        name="bairroCliente"
                                        label={"Bairro*"}
                                        type="text"
                                        errors={errors}
                                        clearErrors={clearErrors}
                                        value={bairro}
                                        onChange={(e) => setBairro(e.target.value.toUpperCase())}
                                        style={{ textTransform: 'uppercase' }}
                                    />
                                )}
                            />
                        </div>
                        <div className="col-sm-2 cold-md-2 col-xl-2">
                            <Controller
                                name="nuIBGE"
                                control={control}
                                render={({ field }) => (
                                    <FormField
                                        name="nuIBGE"
                                        label={"Nº IBGE*"}
                                        type="text"
                                        errors={errors}
                                        clearErrors={clearErrors}
                                        value={nuIBGE}
                                        onChange={(e) => setNuIBGE(e.target.value)}
                                    />
                                )}
                            />
                        </div>
                        <div className="col-sm-4 cold-md-4 col-xl-4">
                            <Controller
                                name="cidadeCliente"
                                control={control}
                                render={({ field }) => (
                                    <FormField
                                        name="cidadeCliente"
                                        label={"Cidade*"}
                                        type="text"
                                        errors={errors}
                                        clearErrors={clearErrors}
                                        value={cidade}
                                        onChange={(e) => setCidade(e.target.value.toUpperCase())}
                                        style={{ textTransform: 'uppercase' }}
                                    />
                                )}
                            />
                        </div>
                        <div className="col-sm-2 cold-md-2 col-xl-2">
                            <Controller
                                name="estadoCliente"
                                control={control}
                                render={({ field }) => (
                                    <FormField
                                        name="estadoCliente"
                                        label={"Estado*"}
                                        type="text"
                                        errors={errors}
                                        clearErrors={clearErrors}
                                        value={estado}
                                        onChange={(e) => setEstado(e.target.value.toUpperCase())}
                                        style={{ textTransform: 'uppercase' }}
                                    />
                                )}
                            />
                        </div>
                    </div>
                </div>
            </form>
    
            <FooterModal
                ButtonTypeConfirmar={ButtonTypeModal}
                textButtonConfirmar={'Cadastrar'}
                onClickButtonConfirmar={handleValidatedSubmit}
                corConfirmar="success"

                ButtonTypeFechar={ButtonTypeModal}
                onClickButtonFechar={handleFechar}
                textButtonFechar={"Fechar"}
                corFechar="secondary"
            />
        </Fragment>
    )
}