import React, { Fragment, useEffect, useState } from "react"
import { ActionMain } from "../../Actions/actionMain";
import { InputField } from "../../Buttons/Input";
import { ButtonType } from "../../Buttons/ButtonType";
import { AiOutlineDoubleLeft, AiOutlineSearch } from "react-icons/ai";
import { get } from "../../../api/funcRequest";
import { getDataAtual } from "../../../utils/dataAtual";
import { MdAdd } from "react-icons/md";
import { useQuery } from "react-query";
import Swal from "sweetalert2";
import { animacaoCarregamento, fecharAnimacaoCarregamento } from "../../../utils/animationCarregamento";
import { InputSelectAction } from "../../Inputs/InputSelectAction";
import { ActionListaVendaCLiente } from "./actionListaVendaCliente";
import { ActionCadastroClienteCPF } from "./ActionCadastroCliente/ActionCadastroCPF/actionCadastroClienteCPF";
import { ActionCadastroClienteCNPJ } from "./ActionCadastroCliente/ActionCadastroCNPJ/actionCadastroClienteCNPJ";
import { useCriarVoucher } from "./hooks/useCriarVoucher";
import { ActionCadastroClienteVoucherCPF } from "./ActionCadastroClienteVoucher/ActionCadastroCPFVoucher/actionCadastroClienteVoucheCPF";
import { ActionCadastroClienteVoucherCNPJ } from "./ActionCadastroClienteVoucher/ActionCadastroCNPJVocuher/actionCadastroClienteVoucheCNPJ";

export const ActionPesquisaCreateVoucherCliente = ({
  actionSecundaria,
  setActionSecundaria,
  actionPrincipal,
  setActionPrincipal,
  usuarioLogado,
  optionsModulos,
  tabelaVisivelVoucher,
  setTabelaVisivelVoucher,
  tabelaVisivelVoucherSelecionados,
  setTabelaVisivelVoucherSelecionados
}) => {
  const [tabelaVisivel, setTabelaVisivel] = useState(false);
  const [tabelaVendasClientes, setTabelaVendasClientes] = useState(false);
  const [tabelaVenda, setTabelaVenda] = useState(true);
  const [tabelaSecundaria, setTabelaSecundaria] = useState(false);
  const [modalCadastroClienteCPF, setModalCadastroClienteCPF] = useState(false);
  const [modalCadastroClienteCPFVoucher, setModalCadastroClienteCPFVoucher] = useState(false);
  const [modalCadastroClienteCNPJ, setModalCadastroClienteCNPJ] = useState(false);
  const [modalCadastroClienteCNPJVoucher, setModalCadastroClienteCNPJVoucher] = useState(false);
  const [dataPesquisaInicio, setDataPesquisaInicio] = useState('');
  const [dataPesquisaFim, setDataPesquisaFim] = useState('');
  const [cpf, setCPF] = useState('');
  const [serie, setSerie] = useState('');
  const [numeroNF, setNumeroNF] = useState('');
  const [empresaSelecionada, setEmpresaSelecionada] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(1000);
  const [btnVisivel, setBtnVisivel] = useState(false);
  const [selectedRows, setSelectedRows] = useState([])
  const [dadosVisualizarProdutos, setDadosVisualizarProdutos] = useState([])
  const [tipoTrocaSelecionada, setTipoTrocaSelecionada] = useState(null);
  const [quantidade, setQuantidade] = useState(0);
  const [quantidadesProdutos, setQuantidadesProdutos] = useState({});

  useEffect(() => {
    const dataInicio = getDataAtual()
    const dataFim = getDataAtual()
    setDataPesquisaInicio(dataInicio)
    setDataPesquisaFim(dataFim)

  }, []);


  const fetchListaEmpresasVouchers = async () => {
    try {
      const urlApi = `/empresasVoucher?idSubGrupoEmpresa=${usuarioLogado?.IDGRUPOEMPRESARIAL}&idEmpresa=${usuarioLogado?.IDEMPRESA}`;
      const response = await get(urlApi);

      if (response.data.length && response.data.length === pageSize) {
        let allData = [...response.data];
        animacaoCarregamento(`Carregando... Página ${currentPage} de ${response.data.length}`, true);

        async function fetchNextPage(currentPage) {
          try {
            currentPage++;
            const responseNextPage = await get(`${urlApi}&page=${currentPage}`);
            if (responseNextPage.length) {
              allData.push(...responseNextPage.data);
              return fetchNextPage(currentPage);
            } else {
              return allData;
            }
          } catch (error) {
            console.error('Erro ao buscar próxima página:', error);
            throw error;
          }
        }

        await fetchNextPage(currentPage);
        return allData;
      } else {

        return response.data;
      }

    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    } finally {
      fecharAnimacaoCarregamento();
    }
  };

  const { data: dadosEmpresasVoucher = [], refetch: refetchListaEmpresaVouchers } = useQuery(
    ['empresasVoucher',],
    () => fetchListaEmpresasVouchers(),
    { enabled: Boolean(usuarioLogado?.IDGRUPOEMPRESARIAL), staleTime: 60 * 60 * 1000 }
  );

  const fetchListaVendasClientes = async () => {
    const urlBase = `/lista-venda-cliente?idEmpresa=${empresaSelecionada}&idSubGrupoEmpresarial=${usuarioLogado?.IDGRUPOEMPRESARIAL}&dataPesquisaInicio=${dataPesquisaInicio}&dataPesquisaFim=${dataPesquisaFim}&cpfOUidVenda=${cpf}&nnf=${numeroNF}&serie=${serie}`;
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
      console.error('Error fetching data:', error);
      throw error;
    } finally {
      fecharAnimacaoCarregamento();
    }
  };

  const { data: dadosVendasClientes = [], error: errorVendasClientes, isLoading: isLoadingVendas, refetch: refetchListaVendasClientes } = useQuery(
    ['lista-venda-cliente'],
    () => fetchListaVendasClientes(),
    {
      enabled: false,
    }
  );

  const handleSelectEmpresa = (e) => {
    setEmpresaSelecionada(e.value);
  }

  const handleOpenModalCPF = () => {
    setModalCadastroClienteCPF(true);
    setModalCadastroClienteCNPJ(false);
  };

  const handleOpenModalCNPJ = () => {
    setModalCadastroClienteCNPJ(true);
    setModalCadastroClienteCPF(false);
  };

  const handleClickModalCPFCNPJ = () => {
    Swal.fire({
      title: 'Qual o tipo de Cliente?',
      text: 'Clique na opção desejada!',
      showCancelButton: true,
      confirmButtonText: 'CPF',
      cancelButtonText: 'CNPJ',
      cancelButtonColor: '#3085d6',
      confirmButtonColor: '#7A5FA3',
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        handleOpenModalCPF();
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        handleOpenModalCNPJ();
      }
    });
  };

  const handleClick = () => {
    setTabelaVisivel(true);
    setTabelaVendasClientes(false);
    setTabelaVisivelVoucherSelecionados(false);
    setActionPrincipal(true);
    setActionSecundaria(false); 
  }
  
  const handleClickClientes = () => {
    setTabelaVendasClientes(true);
    setTabelaVenda(true);
    setTabelaSecundaria(false);
    setTabelaVisivel(false);
    setTabelaVisivelVoucherSelecionados(false);
    setTabelaVisivelVoucher(false)
    refetchListaVendasClientes()
  }

  const {
    optionsCPF,
    onCpf,
    onSubmitVoucher,
    onAuthFuncionario,
  } = useCriarVoucher({
    usuarioLogado,
    selectedRows,
    dadosVisualizarProdutos,
    optionsModulos,
    tipoTrocaSelecionada,
    quantidade,
    quantidadesProdutos,
    modalCadastroClienteCPFVoucher,
    setModalCadastroClienteCPFVoucher,
    setModalCadastroClienteCNPJVoucher,
    handleClick
  })

  return (

    <Fragment>
      <ActionMain
        linkComponentAnterior={["Home"]}
        linkComponent={["Vendas"]}
        title="Vendas "
        subTitle="Relação de Vendas para Troca"
        
        InputFieldDTInicioComponent={InputField}
        labelInputFieldDTInicio={"Data Venda Início"}
        valueInputFieldDTInicio={dataPesquisaInicio}
        onChangeInputFieldDTInicio={e => setDataPesquisaInicio(e.target.value)}

        InputFieldDTFimComponent={InputField}
        labelInputFieldDTFim={"Data Venda Fim"}
        valueInputFieldDTFim={dataPesquisaFim}
        onChangeInputFieldDTFim={e => setDataPesquisaFim(e.target.value)}

        InputSelectEmpresaComponent={InputSelectAction}
        labelSelectEmpresa={"Empresa"}
        optionsEmpresas={[
          {value: '', label: 'Todas as Empresas'},
          ...dadosEmpresasVoucher.map((empresa) => ({
            value: empresa.IDEMPRESA,
            label: empresa.NOFANTASIA,
          }))
        ]}
        valueSelectEmpresa={dadosEmpresasVoucher.find(empresa => empresa.IDEMPRESA == usuarioLogado?.IDEMPRESA) || ''}
        onChangeSelectEmpresa={handleSelectEmpresa}

        InputFieldCodBarraComponent={InputField}
        valueInputFieldCodBarra={cpf}
        onChangeInputFieldCodBarra={(e) => setCPF(e.target.value)}
        labelInputFieldCodBarra={"Nº Venda ou CPF/CNPJ"}
        placeHolderInputFieldCodBarra={"Digite o Nº Venda ou CPF/CNPJ"}

        InputFieldComponent={InputField}
        labelInputField={"Serie"}
        valueInputField={serie}
        onChangeInputField={(e) => setSerie(e.target.value)}
        placeHolderInputFieldComponent={"Digite a Série"}

        InputFieldNumeroNFComponent={InputField}
        labelInputFieldNumeroNF={"Nº NFCE"}
        valueInputFieldNumeroNF={numeroNF}
        onChangeInputFieldNumeroNF={(e) => setNumeroNF(e.target.value)}
        placeHolderInputFieldNumeroNF={"Digite o Nº NFCE"}

        ButtonSearchComponent={ButtonType}
        linkNomeSearch={"Pesquisar"}
        onButtonClickSearch={handleClickClientes}
        corSearch={"primary"}
        IconSearch={AiOutlineSearch}

        ButtonTypeCadastro={ButtonType}
        linkNome={"Cadastro Cliente"}
        onButtonClickCadastro={handleClickModalCPFCNPJ}
        corCadastro={"success"}

        ButtonTypeCancelar={ButtonType}
        linkCancelar={"Voltar"}
        onButtonClickCancelar={handleClick}
        corCancelar={"danger"}
        IconCancelar={AiOutlineDoubleLeft}

        ButtonTypeVendasEstrutura={ButtonType}
        linkNomeVendasEstrutura={"Adicionar Voucher"}
        onButtonClickVendasEstrutura={onAuthFuncionario}
        corVendasEstrutura={"info"}
        iconVendasEstrutura={MdAdd}
        styleVendasEstrutura={btnVisivel ? { display: 'block' } : { display: 'none' }}
      />

      

      {tabelaVendasClientes && (

        <ActionListaVendaCLiente
          dadosVendasClientes={dadosVendasClientes}
          btnVisivel={btnVisivel}
          setBtnVisivel={setBtnVisivel}
          selectedRows={selectedRows}
          setSelectedRows={setSelectedRows}
          dadosVisualizarProdutos={dadosVisualizarProdutos}
          setDadosVisualizarProdutos={setDadosVisualizarProdutos}
          setTipoTrocaSelecionada={setTipoTrocaSelecionada}
          tipoTrocaSelecionada={tipoTrocaSelecionada}
          quantidade={quantidade}
          setQuantidade={setQuantidade}
          quantidadesProdutos={quantidadesProdutos}
          setQuantidadesProdutos={setQuantidadesProdutos}
          tabelaSecundaria={tabelaSecundaria}
          setTabelaSecundaria={setTabelaSecundaria}
          tabelaVenda={tabelaVenda}
          setTabelaVenda={setTabelaVenda}
        />
      )}
      
      <ActionCadastroClienteCPF
        show={modalCadastroClienteCPF}
        handleClose={() => setModalCadastroClienteCPF(false)}
        usuarioLogado={usuarioLogado}
        optionsModulos={optionsModulos}
        optionsCPF={optionsCPF}
      />

      <ActionCadastroClienteCNPJ
        show={modalCadastroClienteCNPJ}
        handleClose={() => setModalCadastroClienteCNPJ(false)}
        usuarioLogado={usuarioLogado}
        optionsModulos={optionsModulos}
      />
 
      <ActionCadastroClienteVoucherCNPJ
        show={modalCadastroClienteCNPJVoucher}
        handleClose={() => setModalCadastroClienteCNPJVoucher(false)}
        usuarioLogado={usuarioLogado}
        optionsModulos={optionsModulos}
        onCpf={onCpf}
      />

      <ActionCadastroClienteVoucherCPF
        show={modalCadastroClienteCPFVoucher}
        handleClose={() => setModalCadastroClienteCPFVoucher(false)}
        usuarioLogado={usuarioLogado}
        optionsModulos={optionsModulos}
        optionsCPF={optionsCPF}
        onCpf={onCpf}
      />
  
    </Fragment>
  )
}
