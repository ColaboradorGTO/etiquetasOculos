import { Fragment } from "react"
import { FooterModal } from "../../../../Modais/FooterModal/footerModal"
import { ButtonTypeModal } from "../../../../Buttons/ButtonTypeModal"
import { useForm, Controller } from "react-hook-form"
import { mascaraCPF } from "../../../../../utils/formatCPF"
import { mascaraTelefone, removerMascaraTelefone } from "../../../../../utils/mascaraTelefone"
import FormField from "../../../../Formularios/FormField"
import { schema } from "./schemaValidationCPF"
import { useCadastrarClienteCPFVoucher } from "../hooks/useCadastroClienteCPFVoucher"


export const FormularioCadastro = ({ handleClose, usuarioLogado, optionsModulos, optionsCPF, onCpf }) => {
  const { register, handleSubmit, formState: { errors }, clearErrors, setError, control } = useForm({
    mode: "onChange"
  });

  const {
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
    onSubmit,
    readOnlyCpf,
    setCepDigitado
  } = useCadastrarClienteCPFVoucher({ usuarioLogado, optionsModulos, handleClose, onCpf });

    const fecharModal = () => {
    handleClose();
    setIdCliente('');
    setTipo('');
    setCpf('');
    setNomeClienteRazao('');
    setSobrenome('');
    setDataNascimento('');
    setTelefoneCliente('');
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
  }

  const handleValidatedSubmit = async () => {
    try {
      const dadosParaValidar = {
        cpfCliente: cpf,
        nomeCliente: nomeClienteRazao,
        sobrenomeCliente: sobrenome,
        dataNascimentoCliente: dataNascimento,
        telefoneDoCliente: removerMascaraTelefone(telefoneCliente),
        emailCliente: email,
        cepCliente: cep,
        enderecoCliente: endereco,
        numeroEnderecoCliente: numero,
        complementoCliente: complemento,
        // bairroCliente: bairro,
        nuIBGECliente: nuIBGE,
        cidadeCliente: cidade,
        estadoCliente: estado
      }

      await schema.validate(dadosParaValidar, { abortEarly: false });

      onSubmit();

    } catch (validationError) {
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
  }

  return (
    <Fragment>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group" >
          <div className="row mt-2" style={{ width: '100%' }}>
            <div className="col-sm-2 col-md-2 col-xl-1">

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
            <div className="col-sm-2 col-md-2 col-xl-1">

              <Controller
                name="tipoClienteEmpresa"
                control={control}
                render={({ field }) => (
                  <FormField
                    label={"Tipo *"}
                    name="tipoClienteEmpresa"
                    type="text"
                    placeholder={"CPF"}
                    value={tipo}
                    onChange={(e) => setTipo(e.target.value)}
                    errors={errors}
                    clearErrors={clearErrors}
                    readOnly={true}
                  />
                )}
              />
            </div>
            <div className="col-sm-3 col-md-3 col-xl-2">

              <Controller
                name="dataCadastro"
                control={control}
                render={({ field }) => (
                  <FormField
                    label={"Data do Cadastro *"}
                    name="dataCadastro"
                    type="text"
                    placeholder={"Data do Cadastro"}
                    value={dataCadastro}
                    onChange={(e) => setDataCadastro(e.target.value)}
                    errors={errors}
                    clearErrors={clearErrors}
                    readOnly={true}
                  />
                )}
              />

            </div>
            <div className="col-sm-5 col-md-5 col-xl-2" >

              <Controller
                name="cpfCliente"
                control={control}
                render={({ field }) => (
                  <FormField
                    name="cpfCliente"
                    label={"CPF*"}
                    placeholder={"DIGITE O CPF"}
                    type="text"
                    value={mascaraCPF(cpf)}
                    onChange={(e) => setCpf(e.target.value)}
                    readOnly={readOnlyCpf}
                    maxLength={14}
                    errors={errors}
                    clearErrors={clearErrors}
                  />
                )}
              />
            </div>

            <div className="col-sm-6 col-xl-3">

              <Controller
                name="nomeCliente"
                control={control}
                render={({ field }) => (
                  <FormField
                    label={"Nome*"}
                    name="nomeCliente"
                    placeholder={"DIGITE O NOME"}
                    type="text"
                    value={nomeClienteRazao}
                    onChange={(e) => setNomeClienteRazao(e.target.value.toUpperCase())}
                    errors={errors}
                    clearErrors={clearErrors}
                    style={{ textTransform: 'uppercase' }}
                  />
                )}
              />
            </div>
            <div className="col-sm-6 col-xl-3">

              <Controller
                name="sobrenomeCliente"
                control={control}
                render={({ field }) => (
                  <FormField
                    label={"Sobrenome*"}
                    name="sobrenomeCliente"
                    placeholder={"DIGITE O SOBRENOME"}
                    type="text"
                    value={sobrenome}
                    onChange={(e) => setSobrenome(e.target.value.toUpperCase())}
                    errors={errors}
                    clearErrors={clearErrors}
                    style={{ textTransform: 'uppercase' }}
                  />
                )}
              />
              {/* {console.log(sobrenome, 'sobrenome')} */}
            </div>
          </div>

          <div className="row mt-3">

            <div className="col-sm-3 col-md-3 col-xl-2">
              <Controller
                name="dataNascimentoCliente"
                control={control}
                render={({ field }) => (
                  <FormField
                    label={"Data de Nascimento*"}
                    name="dataNascimentoCliente"
                    type="date"
                    value={dataNascimento}
                    onChange={(e) => setDataNascimento(e.target.value)}
                    errors={errors}
                    clearErrors={clearErrors}
                  />
                )}
              />
            </div>


            <div className="col-sm-4 col-md-3 col-xl-3">

              <Controller
                name="TelefoneCliente"
                control={control}
                render={({ field }) => (
                  <FormField
                    name="TelefoneDoCliente"
                    label={"Telefone"}
                    placeholder={"DIGITE O TELEFONE"}
                    type="text"
                    id={"TelefoneDoCliente"}
                    value={mascaraTelefone(telefoneCliente)}
                    onChange={(e) => setTelefoneCliente(e.target.value)}
                    errors={errors}
                    clearErrors={clearErrors}
                  />
                )}
              />
            </div>

            <div className="col-sm-5 col-md-4 col-xl-4">

              <Controller
                name="emailCliente"
                control={control}
                render={({ field }) => (
                  <FormField
                    name="emailCliente"
                    label={"E-mail"}
                    placeholder={"DIGITE O E-MAIL"}
                    type="email"
                    id={"email"}
                    value={email}
                    onChange={(e) => setEmail(e.target.value.toUpperCase())}
                    errors={errors}
                    clearErrors={clearErrors}
                  />
                )}
              />
            </div>


            <div className="col-sm-5 col-md-5 col-xl-3">
              <label className="form-label" htmlFor={""}>Tipo Indicação IE</label>

              <select
                className="select2 form-control select2-hidden-accessible"
                value={tipoIndicacaoIE}
                onChange={(e) => setTipoIndicacaoIE(Number(e.target.value))}
                id={"tipoIndicacaoIE"}
                disabled={true}
              >
                <option value={9}>{'Não Contribuinte Com ou Sem IE'}</option>
              </select>
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
                    placeholder={"DIGITE O CEP"}
                    type="text"
                    id={"NuCEP"}
                    value={cep}
                    onChange={(e) => { 
                      setCepDigitado(true);
                      setCep(e.target.value)
                    }}
                    errors={errors}
                    clearErrors={clearErrors}
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
                    placeholder={"DIGITE O ENDEREÇO"}
                    type="text"
                    id={"Endereco"}
                    value={endereco}
                    onChange={(e) => setEndereco(e.target.value.toUpperCase())}
                    errors={errors}
                    clearErrors={clearErrors}
                    style={{ textTransform: 'uppercase' }}
                  />
                )}
              />
            </div>
            <div className="col-sm-2 cold-md-2 col-xl-2">

              <Controller
                name="numeroEnderecoCliente"
                control={control}
                render={({ field }) => (
                  <FormField
                    name={"numeroEnderecoCliente"}
                    label={"Número*"}
                    placeholder={"NÚMERO"}
                    type="text"
                    id={"NuEndereco"}
                    value={numero}
                    onChange={(e) => setNumero(e.target.value)}
                    errors={errors}
                    clearErrors={clearErrors}
                  />
                )}
              />
            </div>
            <div className="col-sm-4 cold-md-4 col-xl-4">

              <Controller
                name="complementoCliente"
                control={control}
                render={({ field }) => (
                  <FormField
                    name="complementoCliente"
                    label={"Complemento*"}
                    placeholder={"DIGITE O COMPLEMENTO"}
                    type="text"
                    id={"Complemento"}
                    value={complemento}
                    onChange={(e) => setComplemento(e.target.value.toUpperCase())}
                    errors={errors}
                    clearErrors={clearErrors}
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
                    placeholder={"DIGITE O BAIRRO"}
                    type="text"
                    id={"Bairro"}
                    value={bairro}
                    onChange={(e) => setBairro(e.target.value.toUpperCase())}
                    errors={errors}
                    clearErrors={clearErrors}
                    readOnly={true}
                    style={{ textTransform: 'uppercase' }}
                  />
                )}
              />
            </div>
            <div className="col-sm-2 cold-md-2 col-xl-2">
              <Controller
                name="nuIBGECliente"
                control={control}
                render={({ field }) => (
                  <FormField
                    name="nuIBGECliente"
                    label={"Nº IBGE*"}
                    placeholder={"DIGITE O Nº IBGE"}
                    type="text"
                    id={"NuIBGE"}
                    value={nuIBGE}
                    onChange={(e) => setNuIBGE(e.target.value)}
                    errors={errors}
                    clearErrors={clearErrors}
                    readOnly={true}
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
                    placeholder={"DIGITE A CIDADE"}
                    type="text"
                    id={"Cidade"}
                    value={cidade}
                    onChange={(e) => setCidade(e.target.value.toUpperCase())}
                    errors={errors}
                    clearErrors={clearErrors}
                    readOnly={true}
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
                    placeholder={"ESTADO(UF)"}
                    type="text"
                    id={"estado"}
                    value={estado}
                    onChange={(e) => setEstado(e.target.value)}
                    errors={errors}
                    clearErrors={clearErrors}
                    readOnly={true}
                  />
                )}
              />
            </div>
          </div>
        </div>
      </form>

      <FooterModal
        ButtonTypeConfirmar={ButtonTypeModal}
        textButtonConfirmar={"Confirmar"}
        onClickButtonConfirmar={handleValidatedSubmit}
        corConfirmar="success"

        ButtonTypeFechar={ButtonTypeModal}
        onClickButtonFechar={fecharModal}
        textButtonFechar={"Fechar"}
        corFechar="secondary"
      />
    </Fragment>
  )
}