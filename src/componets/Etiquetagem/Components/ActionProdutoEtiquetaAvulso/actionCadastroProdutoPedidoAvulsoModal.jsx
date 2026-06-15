import { Fragment, useEffect, useState } from "react"
import { HeaderModal } from "../../../Modais/HeaderModal/HeaderModal"
import { Modal } from "react-bootstrap"
import { FooterModal } from "../../../Modais/FooterModal/footerModal"
import { ButtonTypeModal } from "../../../Buttons/ButtonTypeModal"
import { InputFieldModal } from "../../../Buttons/InputFieldModal"
import { useForm } from "react-hook-form"
import Select from 'react-select';
import { get } from "../../../../api/funcRequest"


export const ActionCadastrarProodutodPedidoAvulsoModal = ({ show, handleClose }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const [quantidade, setQuantidade] = useState('')
  const [referencia, setReferencia] = useState('')
  const [codBarras, setCodBarras] = useState('')
  const [descricao, setDescricao] = useState('')
  const [fornecedor, setFornecedor] = useState('')
  const [fabricante, setFabricante] = useState('')
  const [estrutura, setEstrutura] = useState('')
  const [estilo, setEstilo] = useState('')
  const [vrCusto, setVrCusto] = useState('')
  const [vrVenda, setVrVenda] = useState('')
  const [categoriaProdutoSelecionado, setCategoriaProdutoSelecionado] = useState('')
  const [tamanhoSelecionado, setTamanhoSelecionado] = useState('')
  const [unidadeSelecionada, setUnidadeSelecionada] = useState('')
  const [corSelecionada, setCorSelecionada] = useState('')
  const [tipoTecidoSelecionado, setTipoTecidoSelecionado] = useState('')
  const [categoriaSelecionada, setCategoriaSelecionada] = useState('')
  const [localExposicaoSelecionado, setLocalExposicaoSelecionado] = useState('')
  const [ecommerceSelecionado, setEcommerceSelecionado] = useState('')
  const [redeSocialSelecionado, setRedeSocialSelecionado] = useState('')
  const [ncmSelecionado, setNcmSelecionado] = useState('')
  const [tipoProdutoSelecionado, setTipoProdutoSelecionado] = useState('')
  const [tipoFiscalSelecionado, setTipoFiscalSelecionado] = useState('')

  const [dadosCores, setDadosCores] = useState([])
  const [dadosUnidadeMedida, setDadosUnidadeMedida] = useState([])
  const [dadosTipoTecidos, setDadosTipoTecidos] = useState([])
  const [dadosCategoriaPedidos, setDadosCategoriaPedidos] = useState([])
  const [dadosCategoriasProdutos, setDadosCategoriasProdutos] = useState([])
  
  useEffect(() =>{
    getListaCores()
    getListaUnidadeMedida()
    getListaTipoTecidos()
    getListaCategoriaPedidos()
    getListaCategoriasProdutos()
  }, [])
  
  const getListaCores = async () => {
    try {
      const response = await get('/listaCores');
      if (response && response.data) {
        setDadosCores(response.data);
      }
      return response;
    } catch (error) {
      console.error(error);
    }
  }

  const getListaUnidadeMedida = async () => {
    try {
      const response = await get('/unidadeMedida');
      if (response && response.data) {
        setDadosUnidadeMedida(response.data);
      }
      return response;
    } catch (error) {
      console.error(error);
    }
  }

  const getListaTipoTecidos = async () => {
    try {
      const response = await get('/tipoTecidos');
      if (response && response.data) {
        setDadosTipoTecidos(response.data);
      }
      return response;
    } catch (error) {
      console.error(error);
    }
  }

  const getListaCategoriaPedidos = async () => {
    try {
      const response = await get('/categoriaPedidos');
      if (response && response.data) {
        setDadosCategoriaPedidos(response.data);
      }
      return response;
    } catch (error) {
      console.error(error);
    }
  }

  const getListaCategoriasProdutos = async () => {
    try {
      const response = await get('/categoriasProdutos');
      if (response && response.data) {
        setDadosCategoriasProdutos(response.data);
      }
      return response;
    } catch (error) {
      console.error(error);
    }
  }

  const handleCategoriaProduto = (e) => {
    setCategoriaProdutoSelecionado(e.value)
  }

  const handleTamanho = (e) => {
    setTamanhoSelecionado(e.value)
  }

  const handleUnidade = (e) => {
    setUnidadeSelecionada(e.value)
  }

  const handleCor = (e) => {
    setCorSelecionada(e.value)
  }

  const handleTipoTecido = (e) => {
    setTipoTecidoSelecionado(e.value)
  }

  const handleCategoria = (e) => {
    setCategoriaSelecionada(e.value)
  }

  const handleLocalExposicao = (e) => {
    setLocalExposicaoSelecionado(e.value)
  }

  const handleEcommerce = (e) => {
    setEcommerceSelecionado(e.value)
  }

  const handleRedeSocial = (e) => {
    setRedeSocialSelecionado(e.value)
  }

  const handleNcm = (e) => {
    setNcmSelecionado(e.value)
  }

  const handleTipoProduto = (e) => {
    setTipoProdutoSelecionado(e.value)
  }

  const handleTipoFiscal = (e) => {
    setTipoFiscalSelecionado(e.value)
  }

  const optionsCategoriaProduto = [
    { value: 'VESTUARIO', label: 'VESTUARIO' },
    { value: 'CALCADOS', label: 'CALÇADOS' },
    { value: 'ARTIGOS', label: 'ARTIGOS' },
    { value: 'ACESSORIOS', label: 'ACESSÓRIOS' }
  ]

  const optionsEcommerce = [
    { value: 'True', label: 'SIM' },
    { value: 'False', label: 'NÃO' }
  ]
  return (

    <Fragment>
      <Modal
        show={show}
        onHide={handleClose}
        class="modal-content"
        size="xl"
        centered
      >

        <HeaderModal
          title={"Produtos Avulso"}
          subTitle={"Inclusão de Produtos Avulso"}
          handleClose={handleClose}
        />


        <Modal.Body>
          <form>


            <div className="form-group">
              <input type="hidden" name="idDetProdAv" id="idDetProdAv" value="" />
              <div className="row">
                <div className="col-sm-6 col-xl-2">
                  <InputFieldModal
                    label={"Quantidade "}
                    type={"text"}
                    id={"qtdProdPedidoEdit"}
                    value={quantidade}
                    onChangeModal={(e) => setQuantidade(e.target.value)}
                    {...register("qtdProdPedidoEdit", { required: "Campo obrigatório Informe a Quantidade.", })}
                    required={true}
                    placeholder={"Informe a Quantidade."}
                    readOnly={false}
                  />
                </div>
                <div className="col-sm-6 col-xl-2">
                  <InputFieldModal
                    label={"Referência"}
                    type={"text"}
                    id={"refProdutoEdit"}
                    value={referencia}
                    onChangeModal={(e) => setReferencia(e.target.value)}
                    {...register("refProdutoEdit", { required: "Campo obrigatório Informe a Referência.", })}
                    required={true}
                    placeholder={"Informe a Referência."}
                    readOnly={false}
                  />
                </div>
                <div className="col-sm-6 col-xl-2">
                  <InputFieldModal
                    label={"Cod. Barras"}
                    type={"text"}
                    id={"codbProdutoEdit"}
                    value={codBarras}
                    onChangeModal={(e) => setCodBarras(e.target.value)}
                    {...register("codbProdutoEdit", { required: "Campo obrigatório Informe o Código de Barras", })}
                    required={true}
                    placeholder={"Informe o Código de Barras."}
                    readOnly={false}
                  />
                </div>
                <div className="col-sm-6 col-xl-4">
                  <InputFieldModal
                    label={"Descrição Produto"}
                    type={"text"}
                    id={"dsProdPedidoEdit"}
                    value={descricao}
                    onChangeModal={(e) => setDescricao(e.target.value)}
                    {...register("dsProdPedidoEdit", { required: "Campo obrigatório Informe a Descrição de Produto", })}
                    required={true}
                    placeholder={"Informe a Descrição do Produto."}
                    readOnly={false}
                  />
                </div>
                <div className="col-sm-6 col-xl-2">
                  <label className="form-label" htmlFor="tppedido">Categoria Produto</label>
                  <Select
                    id={"idtipopedido"}
                    defaultValue={categoriaProdutoSelecionado}
                    options={[
                      { value: '', label: 'Selecione...' },
                      ...optionsCategoriaProduto.map((item) => {
                        return {
                          value: item.value,
                          label: item.label
                        }
                      })]}
                    onChange={handleCategoriaProduto}
                  />
                </div>
              </div>
            </div>
            <div className="form-group">
              <div className="row">
                <div className="col-sm-6 col-xl-2">
                  <label className="form-label" htmlFor="notam">Tamanho</label>
                  <Select
                    id={"tamprod"}
                    defaultValue={tamanhoSelecionado}
                    options={[
                      { value: '', label: 'Selecione...' },
                      ...optionsCategoriaProduto.map((item) => {
                        return {
                          value: item.value,
                          label: item.label
                        }
                      })]}
                    onChange={handleTamanho}
                  />
                </div>
                <div className="col-sm-6 col-xl-5">
                  <InputFieldModal
                    label={"Fornecedor"}
                    type={"text"}
                    id={"dsFornEdit"}
                    value={fornecedor}
                    onChangeModal={(e) => setFornecedor(e.target.value)}
                    {...register("dsFornEdit", { required: "Campo obrigatório Informe o Fornecedor", })}
                    required={true}
                    placeholder={"Informe o Fornecedor."}
                    readOnly={false}
                  />
                </div>
                <div className="col-sm-6 col-xl-3">
                  <InputFieldModal
                    label={"Fabricante"}
                    type={"text"}
                    id={"dsFabEdit"}
                    value={fabricante}
                    onChangeModal={(e) => setFabricante(e.target.value)}
                    {...register("dsFabEdit", { required: "Campo obrigatório Informe o Fabricante", })}
                    required={true}
                    placeholder={"Informe o Fabricante."}
                    readOnly={false}
                  />
                </div>
                <div className="col-sm-6 col-xl-2">
                  <label className="form-label" htmlFor="tpunid">Unidade</label>
                  <Select
                    id={"unidProd"}
                    defaultValue={unidadeSelecionada}
                    options={[
                      { value: '', label: 'Selecione...' },
                      ...optionsCategoriaProduto.map((item) => {
                        return {
                          value: item.value,
                          label: item.label
                        }
                      })]}
                    onChange={handleUnidade}
                  />
                </div>
              </div>
            </div>
            <div className="form-group">
              <div className="row">
                <div className="col-sm-6 col-xl-2">
                  <label className="form-label" htmlFor="tpcor">Cor</label>
                  <Select
                    id={"corProdCad"}
                    defaultValue={corSelecionada}
                    options={[
                      { value: '', label: 'Selecione...' },
                      ...optionsCategoriaProduto.map((item) => {
                        return {
                          value: item.value,
                          label: item.label
                        }
                      })]}
                    onChange={handleCor}
                  />
                </div>
                <div className="col-sm-6 col-xl-2">
                  <label className="form-label" htmlFor="tptecidoav">Tipo de Tecido</label>
                  <Select
                    id={"tpTecidoProdCad"}
                    defaultValue={tipoTecidoSelecionado}
                    options={[
                      { value: '', label: 'Selecione...' },
                      ...optionsCategoriaProduto.map((item) => {
                        return {
                          value: item.value,
                          label: item.label
                        }
                      })]}
                    onChange={handleTipoTecido}
                  />
                </div>
                <div className="col-sm-6 col-xl-3">
                  <InputFieldModal
                    label={"Estrutura"}
                    type={"text"}
                    id={"dsEstruturaEdit"}
                    value={estrutura}
                    onChangeModal={(e) => setEstrutura(e.target.value)}
                    {...register("dsEstruturaEdit", { required: "Campo obrigatório Informe a Estrutura", })}
                    required={true}
                    placeholder={"Informe a Estrutura."}
                    readOnly={false}
                  />
                </div>
                <div className="col-sm-6 col-xl-2">
                  <InputFieldModal
                    label={"Estilos"}
                    type={"text"}
                    id={"dsEstiloEdit"}
                    value={estilo}
                    onChangeModal={(e) => setEstilo(e.target.value)}
                    {...register("dsEstiloEdit", { required: "Campo obrigatório Informe o Estilo", })}
                    required={true}
                    placeholder={"Informe o Estilo."}
                    readOnly={false}
                  />
                </div>
                <div className="col-sm-6 col-xl-3">
                  <label className="form-label" htmlFor="tpcats">Categorias</label>
                  <Select
                    id={"categoriasProd"}
                    defaultValue={categoriaSelecionada}
                    options={[
                      { value: '', label: 'Selecione...' },
                      ...optionsCategoriaProduto.map((item) => {
                        return {
                          value: item.value,
                          label: item.label
                        }
                      })]}
                    onChange={handleCategoria}
                  />
                </div>
              </div>
            </div>
            <div className="form-group">
              <div className="row">
                <div className="col-sm-6 col-xl-4">
                  <label className="form-label" htmlFor="locexp">Local Exposição</label>
                  <Select
                    id={"localexp"}
                    defaultValue={localExposicaoSelecionado}
                    options={[
                      { value: '', label: 'Selecione...' },
                      ...optionsCategoriaProduto.map((item) => {
                        return {
                          value: item.value,
                          label: item.label
                        }
                      })]}
                    onChange={handleLocalExposicao}
                  />
                </div>
                <div className="col-sm-6 col-xl-2">
                  <label className="form-label" htmlFor="ecommercest">E-commerce</label>
                  <Select
                    id={"stecommerce"}
                    defaultValue={ecommerceSelecionado}
                    options={[
                      { value: '', label: 'Selecione...' },
                      ...optionsEcommerce.map((item) => {
                        return {
                          value: item.value,
                          label: item.label
                        }
                      })]}
                    onChange={handleEcommerce}
                  />
                </div>
                <div className="col-sm-6 col-xl-2">
                  <label className="form-label" htmlFor="redesocialst">Rede Social</label>
                  <Select
                    id={"stredesocial"}
                    defaultValue={redeSocialSelecionado}
                    options={[
                      { value: '', label: 'Selecione...' },
                      ...optionsEcommerce.map((item) => {
                        return {
                          value: item.value,
                          label: item.label
                        }
                      })]}
                    onChange={handleRedeSocial}
                  />
                </div>
                <div className="col-sm-6 col-xl-2">
                  <InputFieldModal
                    label={"Vr Custo"}
                    type={"text"}
                    id={"vrUnitCustoEdit"}
                    value={vrCusto}
                    onChangeModal={(e) => setVrCusto(e.target.value)}
                    {...register("vrUnitCustoEdit", { required: "Campo obrigatório Informe o Valor Custo", })}
                    required={true}
                    placeholder={"Informe o Valor Custo."}
                    readOnly={false}
                  />
                </div>
                <div className="col-sm-6 col-xl-2">
                  <InputFieldModal
                    label={"Vr Venda"}
                    type={"text"}
                    id={"vrUnitVendaEdit"}
                    value={vrVenda}
                    onChangeModal={(e) => setVrVenda(e.target.value)}
                    {...register("vrUnitCustoEdit", { required: "Campo obrigatório Informe o Valor Venda", })}
                    required={true}
                    placeholder={"Informe o Valor da Venda."}
                    readOnly={false}
                  />
                </div>
              </div>
            </div>
            <div className="form-group">
              <div className="row">
                <div className="col-sm-6 col-xl-3">
                  <label className="form-label" htmlFor="tpncm">NCM</label>
                  <Select
                    id={"idNcm"}
                    defaultValue={ncmSelecionado}
                    options={[
                      { value: '', label: 'Selecione...' },
                      ...optionsEcommerce.map((item) => {
                        return {
                          value: item.value,
                          label: item.label
                        }
                      })]}
                    onChange={handleNcm}
                  />
                </div>
                <div className="col-sm-6 col-xl-3">
                  <label className="form-label" htmlFor="tpprod">Tipo Produto</label>
                  <Select
                    id={"idTipoProd"}
                    defaultValue={tipoProdutoSelecionado}
                    options={[
                      { value: '', label: 'Selecione...' },
                      ...optionsEcommerce.map((item) => {
                        return {
                          value: item.value,
                          label: item.label
                        }
                      })]}
                    onChange={handleTipoProduto}
                  />
                </div>
                <div className="col-sm-6 col-xl-6">
                  <label className="form-label" htmlFor="tpfiscal">Tipo Fiscal</label>
                  <Select
                    id={"idTipoFiscal"}
                    defaultValue={tipoFiscalSelecionado}
                    options={[
                      { value: '', label: 'Selecione...' },
                      ...optionsEcommerce.map((item) => {
                        return {
                          value: item.value,
                          label: item.label
                        }
                      })]}
                    onChange={handleTipoFiscal}
                  />
                </div>
              </div>
            </div>
            <FooterModal
              ButtonTypeFechar={ButtonTypeModal}
              onClickButtonFechar={handleClose}
              textButtonFechar={"Fechar"}
              corFechar={"secondary"}

              ButtonTypeCadastrar={ButtonTypeModal}
              onClickButtonCadastrar
              textButtonCadastrar={"Salvar"}
              corCadastrar={"success"}
            />
          </form>
        </Modal.Body>
      </Modal>

    </Fragment>
  )
}
