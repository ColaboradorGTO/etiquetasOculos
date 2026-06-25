import { Fragment, useEffect, useState } from "react"
import { InputField } from "../../../Buttons/Input"
import { InputSelectAction } from "../../../Inputs/InputSelectAction"
import { ActionMain } from "../../../Actions/actionMain"
import { get } from "../../../../api/funcRequest"
import { AiOutlineSearch } from "react-icons/ai"
import { ActionListaProdutoEtiqueta } from "./actionListaProdutoEtiqueta"
import { ButtonType } from "../../../Buttons/ButtonType"
import { MdOutlineLocalPrintshop } from "react-icons/md"
import { GoDownload } from "react-icons/go"
import { BsTrash3 } from "react-icons/bs"
import { useQuery } from "react-query"
import { animacaoCarregamento, fecharAnimacaoCarregamento } from "../../../../utils/animationCarregamento"
import Swal from "sweetalert2"
import { CiEdit } from "react-icons/ci"
import { ActionImprimirEtiquetaModal } from "./actionImprimirEtiquetaModal"
import { ActionEtiquetaOculosModal } from "./ActionEtiquetaOculos/actionEtiquetaOculosModal"

export const ActionPesquisaProdutoEtiqueta = ({  }) => {
  const [descricaoProduto, setDescricaoProduto] = useState('')
  const [codBarrasProduto, setCodBarrasProduto] = useState('')
  const [idProduto, setIDProduto] = useState('')
  const [copia, setCopia] = useState(1);
  const [empresaSelecionada, setEmpresaSelecionada] = useState('');
  const [empresaSelecionadaId, setEmpresaSelecionadaId] = useState('');
  const [btnVisivel, setBtnVisivel] = useState(false);
  const [modalImprimir, setModalImprimir] = useState(false);
  const [produtosSelecionados, setProdutosSelecionados] = useState([]);
  const [dadosAcumuladorEtiquetas, setDadosAcumuladorEtiquetas] = useState([]);
  const [modalImprimirEtiqueta, setModalImprimirEtiqueta] = useState(false);
  const [modalImprimirEtiquetaOculos, setModalImprimirEtiquetaOculos] = useState(false);
  const [selectAll, setSelectAll] = useState(false);
  const [selectedIds, setSelectedIds] = useState([]);
  const [idFuncionario] = useState(() => {
    const params = new URLSearchParams(window.location.search);
    return params.get('idFuncionario');
  });
  console.log('ID Funcionario:', idFuncionario);
  const { data: optionsEmpresas = [], error: errorEmpresas, isLoading: isLoadingEmpresas, refetch: refetchEmpresas
  } = useQuery(
    ['empresasLista'],
    async () => {
      const response = await get(
        `/todas-empresas`
      );

      return response.data;
    },
    { staleTime: 60 * 60 * 1000 }
  );

  const { data: dadosListaPrecos = [], error: errorListaPrecos, isLoading: isLoadingListaPrecos, refetch } = useQuery(
    'listas-de-precos-sap',
    async () => {
      const response = await get(`/listas-de-precos-sap`);

      return response.data;
    },
    { enabled: true, staleTime: 60 * 60 * 1000, }
  );

    useEffect(() => {
    if (dadosListaPrecos && empresaSelecionada?.IDEMPRESA) {
      const empresa = dadosListaPrecos.find(
        item => item.listaPreco?.IDEMPRESA === empresaSelecionada.IDEMPRESA
      );
      if (empresa) {
        setEmpresaSelecionada(empresa.listaPreco?.IDRESUMOLISTAPRECO);
      }
    }
  }, [dadosListaPrecos, empresaSelecionada]);
 
  const optionsListaPrecos = dadosListaPrecos
    .map((item) => item?.listaPreco)
    .filter(Boolean)
    .map((listaPreco) => ({
      value: listaPreco.IDRESUMOLISTAPRECO,
      label: listaPreco.NOMELISTA,
    }));

  const fetchListaPrecosSap = async () => {
    const urlBase = `/lista-produtos-etiqueta-sap?idLista=${empresaSelecionada}&idProduto=${idProduto}&descricao=${descricaoProduto}&codBarras=${codBarrasProduto}`;
    let urlApi = urlBase.includes('?') ? urlBase : urlBase + '?';
    urlApi = urlApi.replace('&page=1', '').replace('page=1', '');
    try {
      animacaoCarregamento('Carregando dados...', true);

      const primeiraPagina = 1;
      const primeiraResposta = await get(`${urlApi}&page=${primeiraPagina}`);
      const page = primeiraResposta.page || primeiraPagina;
      const pageSize = primeiraResposta.pageSize || 1000;
      const totalRows = primeiraResposta.rows || primeiraResposta.data?.length || 0;
      const totalPages = Math.ceil(totalRows / pageSize);

      let allData = [...(primeiraResposta.data || [])];

      if (totalPages > 1) {
        for (let currentPage = 2; currentPage <= totalPages; currentPage++) {
          animacaoCarregamento(`Página ${currentPage} de ${totalPages}`, true);
          const responsePage = await get(`${urlApi}&page=${currentPage}`);
          allData.push(...(responsePage.data || []));
        }
      }

      return allData;
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
      throw error;
    } finally {
      fecharAnimacaoCarregamento();
    }
  };

  const { data: dadosListaPrecosSap = [], error: errorMalotes, isLoading: isLoadingMalotes, refetch: refetchListaPrecosSap } = useQuery(
    ['lista-produtos-etiqueta-sap',],
    () => fetchListaPrecosSap(),
    { enabled: false, staleTime: 60 * 60 * 1000, }
  );

  const handleClick = () => {
    const semEmpresaSelecionada = !empresaSelecionada;
    const semFiltrosDePesquisa = codBarrasProduto === '' && descricaoProduto === '' && idProduto === '';

    if (semEmpresaSelecionada) {
      Swal.fire({
        title: '<span style="font-size: 18px;">Selecione uma Lista de Preços!</span>',
        html: '<span style="font-size: 16px;">Selecione uma Lista de Preços!</span>',
        icon: 'warning',
      })
      return;
    }

    if (semFiltrosDePesquisa) {
      Swal.fire({
        title: 'Atenção!',
        html: 'Preencha ao menos um campo de pesquisa: Cód.Barras, Id. Produto ou Descrição.',
        icon: 'warning',
      })
      return;
    } else {
      refetchListaPrecosSap();

    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleClick();
    }
  };

  const handleCancelar = async (isChecked) => {
    const result = await Swal.fire({
      icon: 'question',
      title: `Deseja Limpar as Etiquetas Guardadas?`,
      text: `Esta ação não poderá ser desfeita!`,
      showCloseButton: true,
      showCancelButton: true,
      cancelButtonColor: '#FD1381',
      confirmButtonColor: '#7352A5',
      confirmButtonText: 'Sim, Limpar!',
      cancelButtonText: 'Não, Voltar!',
      customClass: {
        container: 'custom-swal',
      },
    });

    if (!result.isConfirmed) {
      return;
    }
    setSelectAll(isChecked);
    const updatedSelectedIds = isChecked ? [] : [];
    setSelectedIds(updatedSelectedIds);
    setProdutosSelecionados([]);
    setDadosAcumuladorEtiquetas([]);
    setCopiaEtiqueta(1);
    Swal.fire({
      icon: 'success',
      title: 'Cancelado com sucesso',
      showConfirmButton: false,
      timer: 1500
    })
  }
  const handleImprimir = () => {
    setModalImprimir(true);
  }

  const handleImprimirEtiqueta = () => {
    setModalImprimirEtiqueta(true);
  }

  const handleImprimirEtiquetaOculos = () => {
    setModalImprimirEtiquetaOculos(true);
  }

  const handleAcumuladorEtiquetas = async () => {
    if (produtosSelecionados.length > 0) {
      try {
        setDadosAcumuladorEtiquetas((prev) => {
          let listaAtualizada = [...prev];

          produtosSelecionados.forEach((produto) => {
            const indexExistente = listaAtualizada.findIndex(
              (item) => item.IDPRODUTO === produto.IDPRODUTO
            );

            if (indexExistente !== -1) {
              listaAtualizada[indexExistente].quantidade += produto.quantidade;
            } else {
              listaAtualizada.push({
                quantidade: produto.quantidade,
                NUCODBARRAS: produto.NUCODBARRAS,
                DSNOME: produto.DSNOME,
                TAMANHO: produto.TAMANHO,
                PRECOVENDA: produto.PRECOVENDA,
                DSESTILO: produto.DSESTILO,
                DSLISTAPRECO: produto.DSLISTAPRECO,
                DSLOCALEXPOSICAO: produto.DSLOCALEXPOSICAO,
                IDPRODUTO: produto.IDPRODUTO,
                MARCA: produto.MARCA,
              });
            }
          });

          return listaAtualizada;
        });

        Swal.fire({
          icon: "success",
          title: "Dados Salvos",
          text: "Os dados foram adicionados à lista!",
        });

      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Valor Inválido",
          text: "O valor deve ser maior que 0 para imprimir etiquetas!",
        });
      }
    }
  };

  return (
    <Fragment>
      <ActionMain
        linkComponentAnterior={["Home"]}
        linkComponent={[""]}
        title="Etiquetagem"

        InputSelectEmpresaComponent={InputSelectAction}
        labelSelectEmpresa={"Lista de Preços"}
        optionsEmpresas={optionsListaPrecos}
        valueSelectEmpresa={empresaSelecionada}
        onChangeSelectEmpresa={(e) => setEmpresaSelecionada(e.value)}

        InputFieldComponent={InputField}
        labelInputField={"Cód.Barras "}
        placeHolderInputFieldComponent={"Cód.Barras / Nome Produto"}
        valueInputField={codBarrasProduto}
        onChangeInputField={(e) => setCodBarrasProduto(e.target.value)}
        onKeyDownInputField={handleKeyPress}

        InputFieldNumeroNFComponent={InputField}
        labelInputFieldNumeroNF={"Id. Produto"}
        placeHolderInputFieldNumeroNF={"Id. Produto"}
        valueInputFieldNumeroNF={idProduto}
        onChangeInputFieldNumeroNF={(e) => setIDProduto(e.target.value)}
        onKeyDownInputFieldNumeroNF={handleKeyPress}

        InputFieldDescricaoComponent={InputField}
        labelInputFieldDescricao={"Descrição"}
        placeHolderInputFieldDescricao={"Descrição do Produto"}
        valueInputFieldDescricao={descricaoProduto}
        onChangeInputFieldDescricao={(e) => setDescricaoProduto(e.target.value)}
        onKeyDownInputFieldDescricao={handleKeyPress}

        ButtonSearchComponent={ButtonType}
        linkNomeSearch={"Pesquisar"}
        onButtonClickSearch={handleClick}
        corSearch={"primary"}
        IconSearch={AiOutlineSearch}

        ButtonTypeCadastro={ButtonType}
        linkNome={'Guardar'}
        onButtonClickCadastro={handleAcumuladorEtiquetas}
        corCadastro={"success"}
        IconCadastro={GoDownload}
        styleCadastro={{ display: btnVisivel ? 'block' : 'none' }}

        ButtonTypeSalvar={ButtonType}
        onButtonClickSalvar={handleImprimir}
        linkSalvar={"Editar"}
        corSalvar={"warning"}
        IconSalvar={CiEdit}
        styleSalvar={{ display: dadosAcumuladorEtiquetas.length > 0 ? 'block' : 'none' }}

        ButtonTypeCancelar={ButtonType}
        onButtonClickCancelar={handleImprimirEtiqueta}
        linkCancelar={"Imprimir Etiqueta Padrão"}
        corCancelar={"info"}
        IconCancelar={MdOutlineLocalPrintshop}
        styleCancelar={{ display: btnVisivel || dadosAcumuladorEtiquetas.length > 0 ? 'block' : 'none' }}

        ButtonTypeVendasEstrutura={ButtonType}
        onButtonClickVendasEstrutura={handleCancelar}
        linkNomeVendasEstrutura={"Limpar Histórico"}
        corVendasEstrutura={"danger"}
        iconVendasEstrutura={BsTrash3}
        styleVendasEstrutura={{ display: dadosAcumuladorEtiquetas.length > 0 ? 'block' : 'none' }}
     
        ButtonTypeVendasVendedor={ButtonType}
        linkNomeVendasVendedor={"Imprimir Etiqueta Oculos"}
        onButtonClickVendasVendedor={handleImprimirEtiquetaOculos}
        corVendasVendedor={"warning"}
        iconVendasVendedor={MdOutlineLocalPrintshop}
        styleVendedor={{ display: btnVisivel || dadosAcumuladorEtiquetas.length > 0 ? 'block' : 'none' }}
     />

      <ActionListaProdutoEtiqueta
        dadosListaPrecosSap={dadosListaPrecosSap}
        btnVisivel={btnVisivel}
        setBtnVisivel={setBtnVisivel}
        setModalImprimir={setModalImprimir}
        modalImprimir={modalImprimir}
        produtosSelecionados={produtosSelecionados}
        setProdutosSelecionados={setProdutosSelecionados}
        dadosAcumuladorEtiquetas={dadosAcumuladorEtiquetas}
        setCopia={setCopia}
        setDadosAcumuladorEtiquetas={setDadosAcumuladorEtiquetas}
        selectAll={selectAll}
        setSelectAll={setSelectAll}
        selectedIds={selectedIds}
        setSelectedIds={setSelectedIds}
      />

      <ActionImprimirEtiquetaModal
        show={modalImprimirEtiqueta}
        handleClose={() => setModalImprimirEtiqueta(false)}
        dadosAcumuladorEtiquetas={dadosAcumuladorEtiquetas}
        produtosSelecionados={produtosSelecionados}
        copia={copia}
      />

      <ActionEtiquetaOculosModal 
        show={modalImprimirEtiquetaOculos}
        handleClose={() => setModalImprimirEtiquetaOculos(false)}
        dadosAcumuladorEtiquetas={dadosAcumuladorEtiquetas}
        produtosSelecionados={produtosSelecionados}
        copia={copia}
      />
    </Fragment>
  )
}
