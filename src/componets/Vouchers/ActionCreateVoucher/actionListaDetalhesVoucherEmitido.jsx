import { Fragment, useRef, useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { dataFormatada } from '../../../utils/dataFormatada';
import { formatMoeda } from '../../../utils/formatMoeda';
import { MdOutlineLocalPrintshop } from 'react-icons/md';
import { CiEdit } from 'react-icons/ci';
import { ButtonTable } from '../../ButtonsTabela/ButtonTable';
import { ocultaParteDosDadosVoucher } from '../../../utils/ocultarParte';
import { GrFormView } from 'react-icons/gr';
import { get, post } from '../../../api/funcRequest';
import { ActionDetalharModal } from './ActionDetalhar/actionDetalharModal';
import HeaderTable from '../../Tables/headerTable';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';
import * as XLSX from 'xlsx';
import { useReactToPrint } from "react-to-print";
import { ActionEditarStatusVoucherModal } from './ActionEditarVoucher/actionEditarStatusVoucherModal';
import { ActionImprimirVoucherModal } from './ActionImprimir/actionImprimirVoucherModal';
import Swal from 'sweetalert2';
import { useAuthFuncionarioPrint } from './hooks/useAuthFuncionarioPrint';
import { useAuthFuncionarioUpdate } from './hooks/useAuthFuncionarioUpdate';


export const ActionListaDetalhesVoucherEmitido = ({ dadosDetalheVoucherSelecionado, usuarioLogado, optionsModulos }) => {
  const [dadosDetalheVoucher, setDadosDetalheVoucher] = useState([]);
  const [dadosEditarVoucher, setDadosEditarVoucher] = useState([]);
  const [dadosImprimirVoucher, setDadosImprimirVoucher] = useState([]);
  const [modalEditarVoucher, setModalEditarVoucher] = useState(false);
  const [modalImprimirVoucher, setModalImprimirVoucher] = useState(false);
  const [modalDetalhe, setModalDetalhe] = useState(false);
  const [globalFilterValue, setGlobalFilterValue] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [usuarioAutorizado, setUsuarioAutorizado] = useState([])
  const dataTableRef = useRef();
  
  const {
    openSwalImprimir
  } = useAuthFuncionarioPrint({usuarioLogado});

  const {
    openSwal
  } = useAuthFuncionarioUpdate({usuarioLogado});

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
    const header = ['Nº', 'Nº Voucher', 'Loja Emissor',  'Caixa Emissor', 'Aut. Criação', 'Data Emissão', 'Valor', 'Loja Recebido', 'Caixa Recebido', 'Aut. Consumo', 'Data Recebido' , 'Situação']
    worksheet['!cols'] = [
      { wpx: 50,  caption: 'Nº' },
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
      head: [['Nº', 'Nº Voucher', 'Loja Emissor',  'Caixa Emissor', 'Aut. Criação', 'Data Emissão', 'Valor', 'Loja Recebido', 'Caixa Recebido', 'Aut. Consumo', 'Data Recebido' , 'Situação']],
      body: dados.map(item => [item.contador, item.NUVOUCHER, item.EMPORIGEM, item.DSCAIXAORIGEM, item.NOFUNCIONARIOLIBERACAOCRIACAO, item.DTINVOUCHER, item.VRVOUCHER, item.EMPDESTINO, item.DSCAIXADESTINO, item.NOFUNCIONARIOLIBERACAOCONSUMO, item.DTOUTVOUCHER, item.STSTATUS]),
      horizontalPageBreak: true,
      horizontalPageBreakBehaviour: 'immediately'
    });
    doc.save('vouchers_emitidos.pdf');
  };


  const dados = dadosDetalheVoucherSelecionado.map((item, index) => {
    let contador = index + 1;

    return {
      IDVOUCHER: item.voucher.IDVOUCHER,
      IDEMPRESAORIGEM: item.voucher.IDEMPRESAORIGEM,
      DTINVOUCHER: item.voucher.DTINVOUCHER,
      DTOUTVOUCHER: item.voucher.DTOUTVOUCHER,
      DSCAIXAORIGEM: item.voucher.DSCAIXAORIGEM,
      IDUSRLIBERACAOCRIACAO: item.voucher.IDUSRLIBERACAOCRIACAO,
      NOFUNCIONARIOLIBERACAOCRIACAO: item.voucher.NOFUNCIONARIOLIBERACAOCRIACAO,
      DSCAIXADESTINO: item.voucher.DSCAIXADESTINO,
      IDUSRLIBERACAOCONSUMO: item.voucher.IDUSRLIBERACAOCONSUMO,
      NOFUNCIONARIOLIBERACAOCONSUMO: item.voucher.NOFUNCIONARIOLIBERACAOCONSUMO,
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
      body: row => <th style={{color: 'blue'}}>{row.contador}</th>,
      sortable: true,
    },
    {
      field: 'NUVOUCHER',
      header: 'Nº Voucher',
      body: row => <th style={{color: 'blue'}}>{ocultaParteDosDadosVoucher(row.NUVOUCHER)}</th>,
      // body: row => <th style={{color: 'blue'}}>{row.NUVOUCHER}</th>,
      sortable: true,
    },
    {
      field: 'EMPORIGEM',
      header: 'Loja Emissor',
      body: row => <th style={{color: 'blue'}}>{row.EMPORIGEM}</th>,
      sortable: true,
    },
    {
      field: 'DSCAIXAORIGEM',
      header: 'Caixa Emissor',
      body: row => <th style={{color: 'blue'}}>{row.DSCAIXAORIGEM ? 'CAIXA WEB' : 'CAIXA WEB'}</th>,
      sortable: true,
    },
    {
      field: 'NOFUNCIONARIOLIBERACAOCRIACAO',
      header: 'Aut. Criação',
      body: row => <th style={{color: 'blue'}}>{row.NOFUNCIONARIOLIBERACAOCRIACAO}</th>,
      sortable: true,
    },
    {
      field: 'DTINVOUCHER',
      header: 'Data Emissão',
      body: row => <th style={{color: 'blue'}}>{new Date(row.DTINVOUCHER).toLocaleDateString('pt-BR')}</th>,
      sortable: true,
    },
    {
      field: 'VRVOUCHER',
      header: 'Valor',
      body: row => <th style={{color: 'green'}}>{formatMoeda(row.VRVOUCHER)}</th>,
      sortable: true,
    },
    {
      field: 'EMPDESTINO',
      header: 'Loja Recebido',
      body: row => <th style={{color: 'blue'}}>{row.EMPDESTINO}</th>,
      sortable: true,
    },
    {
      field: 'DSCAIXADESTINO',
      header: 'Caixa Recebido',
      body: row => <th style={{color: 'blue'}}>{row.DSCAIXADESTINO}</th>,
      sortable: true,
    },
    {
      field: 'NOFUNCIONARIOLIBERACAOCONSUMO',
      header: 'Aut. Consumo',
      body: row => <th style={{color: 'blue'}}>{row.NOFUNCIONARIOLIBERACAOCONSUMO}</th>,
      sortable: true,
    },
    {
      field: 'DTOUTVOUCHER',
      header: 'Data Recebido',
      body: row => <th style={{color: 'blue'}}>{dataFormatada(row.DTOUTVOUCHER)}</th>,
      sortable: true,
    },
    {
      field: 'STSTATUS',
      header: 'Situação',
      body: row => {
        if (row.STATIVO == 'True' && !row.STSTATUS) {

          return <th style={{color: 'blue'}}>NOVO</th>;
        } else if (row.STATIVO == 'False' && !row.STSTATUS) {
          return <th style={{color: 'red'}}>FINALIZADO</th>;
        } else if (row.STATIVO == 'True' && (row.STSTATUS == 'LIBERADO PARA O CLIENTE' || row.STSTATUS == 'NOVO')) {
          return <th style={{color: 'green'}}>{row.STSTATUS}</th>;
        } else if (row.STATIVO == 'False' && (row.STSTATUS == 'NEGADO' || row.STSTATUS == 'CANCELADO' || row.STSTATUS == 'FINALIZADO')) {
          return <th style={{color: 'red'}}>{row.STSTATUS}</th>;
        } else if (row.STATIVO == 'False' && row.STSTATUS == 'EM ANALISE') {

          return <th style={{color: 'blue'}}>{row.STSTATUS}</th>;
        } else if (row.STATIVO == 'False' && row.STCANCELADO == 'True' && !row.STSTATUS) {
  
          return <th style={{color: 'red'}}>{row.STSTATUS}</th>;
        } else {
     
          return <th style={{color: 'red'}}>USADO</th>;
        }
      }, 
      sortable: true,
    },
    {
      header: 'Opções',
      body: (row) => (
        <div style={{display: "flex", justifyContent: "space-around", width: '120px' }}>
          <div>

            <ButtonTable
              titleButton={"Visualizar Detalhes"}
              onClickButton={() => handleClickDetalhar(row)}
              Icon={GrFormView}
              iconColor={"#fff"}
              cor={"success"}
              iconSize={25}
              width='30px'
              height='30px'
            />
          </div>

          <div>
            <ButtonTable
              titleButton={"Editar Situação"}
              onClickButton={() => handleClickEditar(row)}
              Icon={CiEdit}
              iconColor={"#fff"}
              cor={"primary"}
              iconSize={25}
              width='35px'
              height='30px'
            />
          </div>

          <div>

            <ButtonTable
              titleButton={"Imprimir"}
              onClickButton={() => handleClickImprimir(row)}
              Icon={MdOutlineLocalPrintshop}
              iconColor={"#fff"}
              cor={"warning"}
              iconSize={25}
              width='30px'
              height='30px'
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
      if (response.data) {
        setDadosEditarVoucher(response.data);
        setModalEditarVoucher(true);
      }
    } catch (error) {
      console.error('Erro ao buscar detalhes da venda: ', error);
    }
  };

  const handleClickEditar = async (row) => {
    if (row.IDVOUCHER) {
      openSwal(() =>  handleEdit(row.IDVOUCHER), row)
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
    if(optionsModulos[0]?.ALTERAR == 'True'){
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
          <h2>Detalhe Vouchers </h2>
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
            title="Vouchers "
            value={dados}
            globalFilter={globalFilterValue} 
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
                headerStyle={{ color: 'white', backgroundColor: "#7a59ad", border: '1px solid #e9e9e9', fontSize: '0.8rem' }}
                footerStyle={{ color: '#212529', backgroundColor: "#e9e9e9", border: '1px solid #ccc', fontSize: '0.8rem' }}
                bodyStyle={{ fontSize: '0.8rem' }}

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
      />

     <ActionImprimirVoucherModal 
        show={modalImprimirVoucher}
        handleClose={() => setModalImprimirVoucher(false)}
        dadosImprimirVoucher={dadosImprimirVoucher}
     />
    </Fragment>
  )
}