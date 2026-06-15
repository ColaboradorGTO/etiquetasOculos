import { Fragment, useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import { jsPDF } from 'jspdf';
import * as XLSX from 'xlsx';
import 'jspdf-autotable';
import HeaderTable from "../../../Tables/headerTable";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { formatMoeda } from "../../../../utils/formatMoeda";


export const ActionListaVendaOrigem = ({ dadosDetalheVoucher, usuarioLogado }) => {
  const [globalFilterValueOrigem, setGlobalFilterValueOrigem] = useState('');
  const [rowSelection, setRowSelection] = useState(null);
  const dataTableRefOrigem = useRef();

  const onGlobalFilterChangeOrigem = (e) => {
    setGlobalFilterValueOrigem(e.target.value);
  };

  const handlePrintOrigem = useReactToPrint({
    content: () => dataTableRefOrigem.current,
    documentTitle: 'Venda Origem',
  });

  const exportToPDFOrigem = () => {
    const doc = new jsPDF();
    doc.autoTable({
      head: [['Cod. Barras', 'Descrição', 'Vr. Unit', 'QTD', 'Vr.Bruto', 'Vr.Desconto', 'Vr.Líquido']],
      body: dados.map(item => [
        item.NUCODBARRAS,
        item.DSPRODUTO,
        formatMoeda(item.VRUNIT),
        toFloat(item.QTD),
        formatMoeda(item.VRTOTALBRUTO),
        formatMoeda(item.VRDESCONTO),
        formatMoeda(item.VRTOTALLIQUIDO)
      ]),
      horizontalPageBreak: true,
      horizontalPageBreakBehaviour: 'immediately'
    });
    doc.save('venda_origem.pdf');
  };

  const exportToExcelOrigem = () => {
    const worksheet = XLSX.utils.json_to_sheet(dados);
    const workbook = XLSX.utils.book_new();
    const header = ['Cod. Barras', 'Descrição', 'Vr. Unit', 'QTD', 'Vr.Bruto', 'Vr.Desconto', 'Vr.Líquido'];
    worksheet['!cols'] = [
      { wpx: 100, caption: 'Cod. Barras' },
      { wpx: 200, caption: 'Descrição' },
      { wpx: 100, caption: 'Vr. Unit' },
      { wpx: 100, caption: 'QTD' },
      { wpx: 100, caption: 'Vr.Bruto' },
      { wpx: 100, caption: 'Vr.Desconto' },
      { wpx: 100, caption: 'Vr.Líquido' },
    ];
    XLSX.utils.sheet_add_aoa(worksheet, [header], { origin: 'A1' });
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Venda Origem');
    XLSX.writeFile(workbook, 'venda_origem.xlsx');
  };

  const dados = dadosDetalheVoucher.flatMap((item) => {
    let funcaoFuncionario = usuarioLogado;
    let lojaLogada = usuarioLogado?.loja;
    let empresaUsuarioAutorizador = usuarioLogado.empresa;
    if ((funcaoFuncionario == "GERENTE" || "SUB GERENTE") && (lojaLogada == empresaUsuarioAutorizador && lojaLogada == item.voucher.IDEMPRESAORIGEM) || funcaoFuncionario == 'TI') {

    }
    let STTIPOTROCA = item.voucher?.STTIPOTROCA || 'CORTESIA';
    let IDRESUMOVENDAWEBDESTINO = item.voucher?.IDRESUMOVENDAWEBDESTINO;
    let IDRESUMOVENDAWEB = item.voucher?.IDRESUMOVENDAWEB;

    return item.detalhevoucher?.map((detalhe) => ({

      NUCODBARRAS: detalhe.det.NUCODBARRAS,
      DSPRODUTO: detalhe.det.DSPRODUTO,
      VRUNIT: detalhe.det.VRUNIT,
      QTD: detalhe.det.QTD,
      VRTOTALBRUTO: detalhe.det.VRTOTALBRUTO,
      VRDESCONTO: detalhe.det.VRDESCONTO,
      VRTOTALLIQUIDO: detalhe.det.VRTOTALLIQUIDO,
    }));
  });


  const colunasOrigem = [
    {
      field: 'NUCODBARRAS',
      header: 'Código Barras',
      body: row => <th>{row.NUCODBARRAS}</th>,
      sortable: true,
    },
    {
      field: 'DSPRODUTO',
      header: 'Descrição',
      body: row => <th>{row.DSPRODUTO}</th>,
      sortable: true,
    },
    {
      field: 'VRUNIT',
      header: 'Vr Unit',
      body: row => <th>{formatMoeda(row.VRUNIT)}</th>,
      sortable: true,
    },
    {
      field: 'QTD',
      header: 'QTD',
      body: row => <th>{row.QTD}</th>,
      sortable: true,
    },
    {
      field: 'VRTOTALBRUTO',
      header: 'Vr Bruto',
      body: row => <th>{formatMoeda(row.VRTOTALBRUTO)}</th>,
      sortable: true,
    },
    {
      field: 'VRDESCONTO',
      header: 'Vr Desconto',
      body: row => <th>{formatMoeda(row.VRDESCONTO)}</th>,
      sortable: true,
    },
    {
      field: 'VRTOTALLIQUIDO',
      header: 'Vr Líquido',
      body: row => <th>{formatMoeda(row.VRTOTALLIQUIDO)}</th>,
      sortable: true,
    },
  ]

  return (
    <Fragment>
      <div className=" panel">
        <div className="panel-hdr">

          <h2 className="p-3">Produtos Venda de Origem: {dadosDetalheVoucher[0]?.voucher.IDRESUMOVENDAWEB}  </h2>
        </div>
        <div style={{ marginTop: "1rem", marginBottom: "1rem" }}>
          <HeaderTable
            globalFilterValue={globalFilterValueOrigem}
            onGlobalFilterChange={onGlobalFilterChangeOrigem}
            handlePrint={handlePrintOrigem}
            exportToExcel={exportToExcelOrigem}
            exportToPDF={exportToPDFOrigem}
          />

        </div>


        <div className="card" ref={dataTableRefOrigem}>

          <DataTable
            value={dados}
            globalFilter={globalFilterValueOrigem}
            sortOrder={-1}
            rows={10}
            paginator={true}
            size="small"
            selectionMode="single"
            selection={rowSelection}
            onSelectionChange={(e) => setRowSelection(e.value)}
            rowsPerPageOptions={[10, 20, 50, 100, dados.length]}
            paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
            currentPageReportTemplate="Mostrando {first} a {last} de {totalRecords} Registros"
            filterDisplay="menu"
            showGridlines
            stripedRows
            emptyMessage={<div className="dataTables_empty">Nenhum resultado encontrado </div>}
          >
            {colunasOrigem.map(coluna => (
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
    </Fragment>
  );
}