import  { Fragment, useEffect, useState } from "react"
import Swal from "sweetalert2";
import { AiOutlineSearch } from "react-icons/ai";
import { MdAdd } from "react-icons/md";
import { useQuery } from "react-query";
import { InputField } from "../../Buttons/Input";
import { ButtonType } from "../../Buttons/ButtonType";
import { get } from "../../../api/funcRequest";
import { getDataAtual } from "../../../utils/dataAtual";
import { ActionListaVoucherEmitido } from "./actionListaVoucherEmitido";
import { animacaoCarregamento, fecharAnimacaoCarregamento } from "../../../utils/animationCarregamento";
import { ActionVoucherEmProcessamentoModal } from "./ActionVoucherProcessamento/actionVoucherEmProcessamentoModal";
import { ActionListaDetalhesVoucherEmitido } from "./actionListaDetalhesVoucherEmitido";
import { ActionPesquisaCreateVoucherCliente } from "./actionPesquisaCreateVoucherCliente";
import { InputSelectAction } from "../../Inputs/InputSelectAction";
import { ActionMain } from "../../Actions/actionMain";
import { useFetchData } from "../../../hooks/useFetchData";

export const ActionPesquisaCreateVoucher = ({ usuarioLogado, ID }) => {
  const [actionPrincipal, setActionPrincipal] = useState(true);
  const [actionSecundaria, setActionSecundaria] = useState(false);
  const [tabelaVisivelVoucher, setTabelaVisivelVoucher] = useState(false);
  const [tabelaVisivelVoucherSelecionados, setTabelaVisivelVoucherSelecionados] = useState(false);
  const [tabelaVendasClientes, setTabelaVendasClientes] = useState(false);
  const [dataPesquisaInicio, setDataPesquisaInicio] = useState('');
  const [dataPesquisaFim, setDataPesquisaFim] = useState('');
  const [numeroVoucherSelecionado, setNumeroVoucherSelecionado] = useState('');
  const [empresaSelecionada, setEmpresaSelecionada] = useState('');
  const [marcaSelecionado, setMarcaSelecionado] = useState('');
  const [dadosDetalheVoucherSelecionado, setDadosDetalheVoucherSelecionado] = useState([])
  const [modalVoucher, setModalVoucher] = useState(true);
  const [menuFilhoAtual, setMenuFilhoAtual] = useState(null);

  const { data: optionsEmpresas = [] } = useFetchData('empresas', '/empresas');

  useEffect(() => {
    const dadosArmazenadosVoucher = localStorage.getItem('dadosDetalheVoucher');
    if (dadosArmazenadosVoucher) {
      const dadosArmazenadosVoucherParse = JSON.parse(dadosArmazenadosVoucher);
      setDadosDetalheVoucherSelecionado(dadosArmazenadosVoucherParse);
      setTabelaVisivelVoucherSelecionados(true);
      setTabelaVisivelVoucher(false);

    }
  }, [])


  useEffect(() => {
    const dataInicio = getDataAtual()
    const dataFim = getDataAtual()
    setDataPesquisaInicio(dataInicio)
    setDataPesquisaFim(dataFim)
  }, []);


  useEffect(() => {
    const menuSalvo = localStorage.getItem('menuFilhoSelecionado');
    if (menuSalvo) {
      const menuParsed = JSON.parse(menuSalvo);
      setMenuFilhoAtual(menuParsed);
    }
  }, []);
  
  const { data: optionsModulos = [], error: errorModulos, isLoading: isLoadingModulos, refetch: refetchModulos } = useQuery(
    ['menus-usuario-excecao', menuFilhoAtual?.ID],
    async () => {
      const response = await get(`/menus-usuario-excecao?idUsuario=${usuarioLogado?.id}&idMenuFilho=${menuFilhoAtual?.ID}`);
      
      return response.data;
    },
    { enabled: Boolean(usuarioLogado?.id), staleTime: 60 * 60 * 1000,}
  );


  const fetchListaVouchers = async () => {
    const idEmpresa = empresaSelecionada == '' ? usuarioLogado?.IDEMPRESA : empresaSelecionada;
    const idGrupoEmpresarial = optionsModulos[0]?.ADMINISTRADOR == 'False' ? usuarioLogado?.IDGRUPOEMPRESARIAL : marcaSelecionado;
    const urlBase = `/detalheVoucherDados?dataPesquisaInicio=${dataPesquisaInicio}&dataPesquisaFim=${dataPesquisaFim}&dadosVoucher=${numeroVoucherSelecionado}&idSubGrupoEmpresa=${idGrupoEmpresarial}&idEmpresa=${idEmpresa}`;
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

  const { data: dadosVoucher = [], error: errorVouchers, isLoading: isLoadingVouchers, refetch: refetchListaVouchers } = useQuery(
    ['detalheVoucherDados'],
    () => fetchListaVouchers(),
    { enabled: false, staleTime: 60 * 60 * 1000, }
  );


  const fetchListaVouchersProcessando = async () => {
    const idEmpresa = empresaSelecionada == '' ? usuarioLogado?.IDEMPRESA : empresaSelecionada;

    const urlBase = `/detalheVoucherDados?idEmpresa=${idEmpresa}&stStatus='EM ANALISE'`;
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

  const { data: dadosVoucherProcessamento = [], error: errorVouchersProcessando, isLoading: isLoadingVouchersProcessando, refetch: refetchListaVouchersProcessando } = useQuery(
    ['detalheVoucherDados'],
    () => fetchListaVouchersProcessando(),
    { enabled: true, staleTime: 60 * 60 * 1000, }
  );


  const handleClick = () => {

    setTabelaVisivelVoucher(true);
    setTabelaVendasClientes(false);
    setTabelaVisivelVoucherSelecionados(false);
    setActionPrincipal(true);
    setActionSecundaria(false);
    refetchListaVouchers()
  }

   const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleClick();
    }
  };

  const handleClickCadastro = () => {
    if (optionsModulos[0]?.CRIAR == 'True') {
      setActionPrincipal(false);
      setTabelaVisivelVoucher(false);
      setActionSecundaria(true);
      console.log(actionSecundaria, 'actionSecundaria')
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Acesso Negado',
        text: 'Você não tem permissão para criar um novo voucher.',
        timer: 3000,
      });
    }
  }

  return (

    <Fragment>

      {actionPrincipal && (

        <ActionMain
          linkComponentAnterior={["Home"]}
          linkComponent={["Vouchers"]}
          title="Vouchers "
          subTitle="Nome da Loja"

          InputSelectPendenciaComponent={InputSelectAction}
          labelSelectPendencia="Selecione a Empresa"
          optionsPendencia={[
            { value: '', label: 'Todas' },
            ...optionsEmpresas?.map((empresa) => ({
              value: empresa.IDEMPRESA,
              label: empresa.NOFANTASIA,
              idGrupoEmpresarial: empresa.IDGRUPOEMPRESARIAL,
            }))
          ]}
          onChangeSelectPendencia={(e) => {
            const empresaSelecionadaObj = optionsEmpresas.find(empresa => empresa.IDEMPRESA === e.value);
            setMarcaSelecionado(empresaSelecionadaObj?.IDGRUPOEMPRESARIAL || '');
            setEmpresaSelecionada(e.value);
          }}
          valueSelectPendencia={empresaSelecionada}
          stylePendencia={optionsModulos[0]?.ADMINISTRADOR == "True"}
          // isVisible={{ display: optionsModulos[0]?.ADMINISTRADOR == false ? "none" : "block" }}

          InputFieldDTInicioAComponent={InputField}
          valueInputFieldDTInicioA={dataPesquisaInicio}
          labelInputDTInicioA={"Data Início"}
          onChangeInputFieldDTInicioA={(e) => setDataPesquisaInicio(e.target.value)}
          onKeyDownInputFieldDTInicioA={handleKeyPress}

          InputFieldDTFimAComponent={InputField}
          labelInputDTFimA={"Data Fim"}
          valueInputFieldDTFimA={dataPesquisaFim}
          onChangeInputFieldDTFimA={(e) => setDataPesquisaFim(e.target.value)}
          onKeyDownInputFieldDTFimA={handleKeyPress}

          InputFieldNumeroVoucherComponent={InputField}
          valueInputFieldNumeroVoucher={numeroVoucherSelecionado}
          onChangeInputFieldNumeroVoucher={(e) => setNumeroVoucherSelecionado(e.target.value)}
          labelInputFieldNumeroVoucher={"Nº Voucher / Nº Venda CPF/CNPJ"}
          onKeyDownInputFieldNumeroVoucher={handleKeyPress}

          ButtonSearchComponent={ButtonType}
          linkNomeSearch={"Pesquisar"}
          onButtonClickSearch={handleClick}
          corSearch={"primary"}
          IconSearch={AiOutlineSearch}

          ButtonTypeCadastro={"Criar Voucher"}
          linkNome={"Criar Voucher"}
          onButtonClickCadastro={handleClickCadastro}
          corCadastro={"success"}
          IconCadastro={MdAdd}

        />
      )}

      {actionSecundaria && (
        <div className="">
          <ActionPesquisaCreateVoucherCliente
            actionSecundaria={actionSecundaria}
            setActionSecundaria={setActionSecundaria}
            actionPrincipal={actionPrincipal}
            setActionPrincipal={setActionPrincipal}
            optionsModulos={optionsModulos}
            usuarioLogado={usuarioLogado}
            tabelaVisivelVoucher={tabelaVisivelVoucher}
            setTabelaVisivelVoucher={setTabelaVisivelVoucher}
            tabelaVisivelVoucherSelecionados={tabelaVisivelVoucherSelecionados}
            setTabelaVisivelVoucherSelecionados={setTabelaVisivelVoucherSelecionados}
          />
        </div>
      )}

      {tabelaVisivelVoucher &&
        <ActionListaVoucherEmitido
          dadosVoucher={dadosVoucher}
          usuarioLogado={usuarioLogado}
          optionsModulos={optionsModulos}
          refetchListaVouchers={refetchListaVouchers}
        />
      }

      {tabelaVisivelVoucherSelecionados && (

        <ActionListaDetalhesVoucherEmitido
          dadosDetalheVoucherSelecionado={dadosDetalheVoucherSelecionado}
          usuarioLogado={usuarioLogado}
          optionsModulos={optionsModulos}
        />
      )}

      <ActionVoucherEmProcessamentoModal
        show={modalVoucher}
        handleClose={() => setModalVoucher(false)}
        dadosVoucherProcessamento={dadosVoucherProcessamento}
        setTabelaVisivelVoucherSelecionados={setTabelaVisivelVoucherSelecionados}
        optionsModulos={optionsModulos}
        usuarioLogado={usuarioLogado}
      />

    </Fragment>
  )
}