import { Fragment, useRef, useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { formatMoeda } from '../../../utils/formatMoeda';
import { MdOutlineLocalPrintshop } from 'react-icons/md';
import { CiEdit } from 'react-icons/ci';
import { ButtonTable } from '../../ButtonsTabela/ButtonTable';
import { GrFormView } from 'react-icons/gr';
import { get } from '../../../api/funcRequest';
import HeaderTable from '../../Tables/headerTable';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';
import * as XLSX from 'xlsx';
import { useReactToPrint } from "react-to-print";
import { ActionDetalharModal } from './ActionDetalhar/actionDetalharModal';
import { ActionEditarStatusVoucherModal } from './ActionEditarVoucher/actionEditarStatusVoucherModal';
import { ActionImprimirVoucherModal } from './ActionImprimir/actionImprimirVoucherModal';
import Swal from 'sweetalert2';
import { useAuthFuncionarioUpdate } from './hooks/useAuthFuncionarioUpdate';
import { useAuthFuncionarioPrint } from './hooks/useAuthFuncionarioPrint';
import { ocultaParteDosDadosVoucher } from '../../../utils/ocultarParte';

export const ActionListaVoucherEmitido = ({
  dadosVoucher,
  usuarioLogado,
  optionsModulos,
  refetchListaVouchers,
}) => {
  const storedModule = localStorage.getItem('moduloselecionado');
  const selectedModule = JSON.parse(storedModule);
  const [dadosDetalheVoucher, setDadosDetalheVoucher] = useState([]);
  const [dadosEditarVoucher, setDadosEditarVoucher] = useState([]);
  const [dadosImprimirVoucher, setDadosImprimirVoucher] = useState([]);
  const [modalEditarVoucher, setModalEditarVoucher] = useState(false);
  const [modalImprimirVoucher, setModalImprimirVoucher] = useState(false);
  const [modalDetalhe, setModalDetalhe] = useState(false);
  const [globalFilterValue, setGlobalFilterValue] = useState('');
  const [rowSelection, setRowSelection] = useState(null);
  const dataTableRef = useRef();

  const {
    openSwal
  } = useAuthFuncionarioUpdate({ usuarioLogado, optionsModulos });

  const {
    openSwalImprimir
  } = useAuthFuncionarioPrint({ usuarioLogado, optionsModulos });

  const onGlobalFilterChange = (e) => {
    setGlobalFilterValue(e.target.value);
  };

  const handlePrint = useReactToPrint({
    content: () => dataTableRef.current,
    documentTitle: 'Vouchers Emitidos',
  });

  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(dados);
    const workbook = XLSX.utils.book_new();
    const header = ['Nº', 'Nº Voucher', 'Loja Emissor', 'Caixa Emissor', 'Aut. Criação', 'Data Emissão', 'Valor', 'Loja Recebido', 'Caixa Recebido', 'Aut. Consumo', 'Data Recebido', 'Situação']
    worksheet['!cols'] = [
      { wpx: 50, caption: 'Nº' },
      { wpx: 150, caption: 'Nº Voucher' },
      { wpx: 250, caption: 'Loja Emissor' },
      { wpx: 250, caption: 'Caixa Emissor' },
      { wpx: 250, caption: 'Aut. Criação' },
      { wpx: 250, caption: 'Data Emissão' },
      { wpx: 250, caption: 'Valor' },
      { wpx: 250, caption: 'Loja Recebido' },
      { wpx: 250, caption: 'Caixa Recebido' },
      { wpx: 250, caption: 'Aut. Consumo' },
      { wpx: 250, caption: 'Data Recebido' },
      { wpx: 250, caption: 'Situação' },


    ];
    XLSX.utils.sheet_add_aoa(worksheet, [header], { origin: 'A1' });
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Vouchers Emitidos');
    XLSX.writeFile(workbook, 'vouchers_emitidos.xlsx');
  };

  const exportToPDF = () => {
    const doc = new jsPDF();
    doc.autoTable({
      head: [['Nº', 'Nº Voucher', 'Loja Emissor', 'Caixa Emissor', 'Aut. Criação', 'Data Emissão', 'Valor', 'Loja Recebido', 'Caixa Recebido', 'Aut. Consumo', 'Data Recebido', 'Situação']],
      body: dados.map(item => [item.contador, item.NUVOUCHER, item.EMPORIGEM, item.DSCAIXAORIGEM, item.NOFUNCIONARIOLIBERACAOCRIACAO, item.DTINVOUCHER, item.VRVOUCHER, item.EMPDESTINO, item.DSCAIXADESTINO, item.NOFUNCIONARIOLIBERACAOCONSUMO, item.DTOUTVOUCHER, item.STSTATUS]),
      horizontalPageBreak: true,
      horizontalPageBreakBehaviour: 'immediately'
    });
    doc.save('vouchers_emitidos.pdf');
  };


  const dados = dadosVoucher.map((item, index) => {
    let contador = index + 1;
    let nomeUsrAutorizacao = item.voucher.IDUSRLIBERACAOCRIACAO ? item.voucher.NOFUNCIONARIOLIBERACAOCRIACAO : '';
    let nomeUsrAutorizaConsumo = item.voucher.IDUSRLIBERACAOCONSUMO ? item.voucher.NOFUNCIONARIOLIBERACAOCONSUMO : '';
    return {
      IDVOUCHER: item.voucher.IDVOUCHER,
      IDEMPRESAORIGEM: item.voucher.IDEMPRESAORIGEM,
      DTINVOUCHER: item.voucher.DTINVOUCHERFORMATADO,
      DTOUTVOUCHER: item.voucher.DTOUTVOUCHERFORMATADO,
      IDCAIXAORIGEM: item.voucher.IDCAIXAORIGEM,
      DSCAIXAORIGEM: item.IDCAIXAORIGEM !== 99999 ? item.voucher.DSCAIXAORIGEM : 'CAIXA WEB',
      IDUSRLIBERACAOCRIACAO: item.voucher.IDUSRLIBERACAOCRIACAO,
      NOFUNCIONARIOLIBERACAOCRIACAO: nomeUsrAutorizacao,
      DSCAIXADESTINO: item.voucher.DSCAIXADESTINO,
      IDUSRLIBERACAOCONSUMO: item.voucher.IDUSRLIBERACAOCONSUMO,
      NOFUNCIONARIOLIBERACAOCONSUMO: nomeUsrAutorizaConsumo,
      NUVOUCHER: item.voucher.NUVOUCHER,
      VRVOUCHER: item.voucher.VRVOUCHER,
      STATIVO: item.voucher.STATIVO,
      STCANCELADO: item.voucher.STCANCELADO,
      STSTATUS: item.voucher.STSTATUS,
      EMPORIGEM: item.voucher.EMPORIGEM,
      EMPDESTINO: item.voucher.EMPDESTINO,


      DSMOTIVOCANCELAMENTO: item.voucher.DSMOTIVOCANCELAMENTO,
      MOTIVOTROCA: item.voucher.MOTIVOTROCA,
      IDRESUMOVENDAWEBDESTINO: item.voucher.IDRESUMOVENDAWEBDESTINO,
      IDRESUMOVENDAWEB: item.voucher.IDRESUMOVENDAWEB,
      NUCPFCNPJ: item.voucher.NUCPFCNPJ,
      contador
    }
  });

  const colunasVouchers = [
    {
      field: 'contador',
      header: 'Nº',
      body: row => <th style={{ color: 'blue' }}>{row.contador}</th>,
      sortable: true,
    },
    {
      field: 'NUVOUCHER',
      header: 'Nº Voucher',
      body: row => <th style={{ color: 'blue' }}>{ocultaParteDosDadosVoucher(row.NUVOUCHER)}</th>,
      sortable: true,
    },
    {
      field: 'EMPORIGEM',
      header: 'Loja Emissor',
      body: row => <p style={{ color: 'blue', margin: 0, fontWeight: 600, width: '200px' }}>{row.EMPORIGEM}</p>,
      sortable: true,
    },
    {
      field: 'DSCAIXAORIGEM',
      header: 'Caixa Emissor',
      body: row => <p style={{ color: 'blue', margin: 0, fontWeight: 600, width: '100px' }}>{row.DSCAIXAORIGEM ? 'CAIXA WEB' : 'CAIXA WEB'}</p>,
      sortable: true,
    },
    {
      field: 'NOFUNCIONARIOLIBERACAOCRIACAO',
      header: 'Aut. Criação',
      body: row => <p style={{ color: 'blue', margin: 0, fontWeight: 600, width: '250px' }}>{row.NOFUNCIONARIOLIBERACAOCRIACAO}</p>,
      sortable: true,
    },
    {
      field: 'DTINVOUCHER',
      header: 'Data Emissão',
      body: row => <p style={{ color: 'blue', margin: 0, fontWeight: 600, width: '200px' }}>{row.DTINVOUCHER}</p>,
      sortable: true,
    },
    {
      field: 'VRVOUCHER',
      header: 'Valor',
      body: row => <th style={{ color: 'green' }}>{formatMoeda(row.VRVOUCHER)}</th>,
      sortable: true,
    },
    {
      field: 'EMPDESTINO',
      header: 'Loja Recebido',
      body: row => <p style={{ color: 'blue', margin: 0, fontWeight: 600, width: '200px' }}>{row.EMPDESTINO}</p>,
      sortable: true,
    },
    {
      field: 'DSCAIXADESTINO',
      header: 'Caixa Recebido',
      body: row => <th style={{ color: 'blue' }}>{row.DSCAIXADESTINO}</th>,
      sortable: true,
    },
    {
      field: 'NOFUNCIONARIOLIBERACAOCONSUMO',
      header: 'Aut. Consumo',
      body: row => <p style={{ color: 'blue', margin: 0, fontWeight: 600, width: '300px' }}>{row.NOFUNCIONARIOLIBERACAOCONSUMO}</p>,
      sortable: true,
    },
    {
      field: 'DTOUTVOUCHER',
      header: 'Data Recebido',
      body: row => <p style={{ color: 'blue', margin: 0, fontWeight: 600, width: '200px' }}>{row.DTOUTVOUCHER}</p>,
      sortable: true,
    },
    {
      field: 'STATIVO',
      header: 'Situação',
      body: row => {

        if (row.STATIVO == 'True' && !row.STSTATUS) {

          return <th style={{ color: 'blue' }}>NOVO</th>;
        } else if (row.STATIVO == 'False' && !row.STSTATUS) {

          return <th style={{ color: 'red' }}>FINALIZADO</th>;
        } else if (row.STATIVO == 'True' && (row.STSTATUS == 'LIBERADO PARA O CLIENTE' || row.STSTATUS == 'NOVO')) {
          return <th style={{ color: 'green' }}>{row.STSTATUS}</th>;
        } else if (row.STATIVO == 'False' && (row.STSTATUS == 'NEGADO' || row.STSTATUS == 'CANCELADO' || row.STSTATUS == 'FINALIZADO')) {
          return <th style={{ color: 'red' }}>{row.STSTATUS}</th>;
        } else if (row.STATIVO == 'False' && row.STSTATUS == 'EM ANALISE') {
          return <th style={{ color: 'blue' }}>{row.STSTATUS}</th>;
        } else if (row.STATIVO == 'False' && row.STCANCELADO == 'True' && !row.STSTATUS) {
          return <th style={{ color: 'red' }}>{row.STSTATUS}</th>;
        } else {
          return <th style={{ color: 'red' }}>USADO</th>;
        }
      },
      sortable: true,
    },
    {
      header: 'Opções',
      body: (row) => (
        <div style={{ display: "flex", justifyContent: "space-around", width: '8rem' }}>
          <div className='p-1'>

            <ButtonTable
              titleButton={"Visualizar Detalhes"}
              onClickButton={() => handleClickDetalhar(row)}
              Icon={GrFormView}
              iconSize={25}
              width="35px"
              height="35px"
              iconColor={"#fff"}
              cor={"success"}
            />
          </div>

          <div className='p-1'>
            <ButtonTable
              titleButton={"Editar Situação"}
              onClickButton={() => handleClickEditar(row)}
              Icon={CiEdit}
              iconSize={25}
              width="35px"
              height="35px"
              iconColor={"#fff"}
              cor={"primary"}
            />
          </div>

          <div className='p-1'>

            <ButtonTable
              titleButton={"Imprimir"}
              onClickButton={() => handleClickImprimir(row)}
              Icon={MdOutlineLocalPrintshop}
              iconSize={25}
              width="35px"
              height="35px"
              iconColor={"#fff"}
              cor={"warning"}
            />
          </div>

        </div>
      ),
    }

  ]

  const handleClickDetalhar = async (row) => {
    if (row.IDVOUCHER) {
      handleDetalhar(row.IDVOUCHER);
    }
  }

  const handleDetalhar = async (IDVOUCHER) => {
    try {
      const response = await get(`/detalheVoucherDados?idVoucher=${IDVOUCHER}`)
      if (response.data) {
        setDadosDetalheVoucher(response.data)
        setModalDetalhe(true)
      }
    } catch (error) {
      console.log(error, "não foi possivel pegar os dados da tabela ")
    }
  }

  const handleEdit = async (IDVOUCHER) => {
    try {
      const response = await get(`/detalheVoucherDados?idVoucher=${IDVOUCHER}`);
      if (response.data && response.data.length > 0) {
        setDadosEditarVoucher(response.data);
        setModalEditarVoucher(true);
      }
    } catch (error) {
      console.error('Erro ao buscar detalhes da venda: ', error);
    }
  };

  const handleClickEditar = async (row) => {
    if (optionsModulos[0]?.ALTERAR == 'True') {
      if (row.IDVOUCHER) {

        openSwal(() => handleEdit(row.IDVOUCHER), row)
      }
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Acesso Negado',
        text: 'Você não tem permissão para editar o voucher.',
        timer: 3000,
      });
    }
  }

  const handleImprimir = async (IDVOUCHER) => {
    try {
      const response = await get(`/detalheVoucherDados?idVoucher=${IDVOUCHER}`);
      if (response.data) {
        setDadosImprimirVoucher(response.data);
        setModalImprimirVoucher(true);
      }
    } catch (error) {
      console.error('Erro ao buscar detalhes da venda: ', error);
    }
  };

  const handleClickImprimir = async (row) => {
    if (optionsModulos[0]?.ALTERAR == 'True') {
      if (row.IDVOUCHER) {
        openSwalImprimir(() => handleImprimir(row.IDVOUCHER), row)
      }
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Acesso Negado',
        text: 'Você não tem permissão para editar o voucher.',
        timer: 3000,
      });
    }
  }

  return (
    <Fragment>
      <div className="panel">
        <div className="panel-hdr">
          <h2>Vouchers </h2>
        </div>
        <div style={{ marginTop: "1rem", marginBottom: "1rem" }}>
          <HeaderTable
            globalFilterValue={globalFilterValue}
            onGlobalFilterChange={onGlobalFilterChange}
            handlePrint={handlePrint}
            exportToExcel={exportToExcel}
            exportToPDF={exportToPDF}
          />

        </div>
        <div className="card" ref={dataTableRef}>
          <DataTable
            title="Vouchers"
            size="small"
            value={dados}
            globalFilter={globalFilterValue}
            selectionMode="single"
            selection={rowSelection}
            onSelectionChange={(e) => setRowSelection(e.value)}
            sortOrder={-1}
            paginator={true}
            rows={10}
            rowsPerPageOptions={[10, 20, 50, 100, dados.length]}
            paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
            currentPageReportTemplate="Mostrando {first} a {last} de {totalRecords} Registros"
            filterDisplay="menu"
            showGridlines
            stripedRows
            emptyMessage={<div className="dataTables_empty">Nenhum resultado encontrado </div>}
          >
            {colunasVouchers.map(coluna => (
              <Column
                key={coluna.field}
                field={coluna.field}
                header={coluna.header}

                body={coluna.body}
                footer={coluna.footer}
                sortable={coluna.sortable}
                headerStyle={{ color: 'white', backgroundColor: "#7a59ad", border: '1px solid #e9e9e9', fontSize: '1rem' }}
                footerStyle={{ color: '#212529', backgroundColor: "#e9e9e9", border: '1px solid #ccc', fontSize: '1rem' }}
                bodyStyle={{ fontSize: '1rem' }}

              />
            ))}

          </DataTable>
        </div>
      </div>

      <ActionDetalharModal
        show={modalDetalhe}
        handleClose={() => setModalDetalhe(false)}
        dadosDetalheVoucher={dadosDetalheVoucher}
        usuarioLogado={usuarioLogado}
        optionsModulos={optionsModulos}
      />

      <ActionEditarStatusVoucherModal
        show={modalEditarVoucher}
        handleClose={() => setModalEditarVoucher(false)}
        dadosEditarVoucher={dadosEditarVoucher}
        usuarioLogado={usuarioLogado}
        optionsModulos={optionsModulos}
        refetchListaVouchers={refetchListaVouchers}
      />

      <ActionImprimirVoucherModal
        show={modalImprimirVoucher}
        handleClose={() => setModalImprimirVoucher(false)}
        dadosImprimirVoucher={dadosImprimirVoucher}
      />
    </Fragment>
  )
}