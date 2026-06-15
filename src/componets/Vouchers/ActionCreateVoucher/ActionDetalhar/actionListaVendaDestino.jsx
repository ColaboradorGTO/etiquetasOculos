import { Fragment, useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import { jsPDF } from 'jspdf';
import * as XLSX from 'xlsx';
import 'jspdf-autotable';
import HeaderTable from "../../../Tables/headerTable";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { formatMoeda } from "../../../../utils/formatMoeda";
import { toFloat } from "../../../../utils/toFloat";


export const ActionListaVendaDestino = ({ dadosDetalheVoucher, usuarioLogado }) => {
    const [globalFilterValueDestino, setGlobalFilterValueDestino] = useState('');
    const [rowSelection, setRowSelection] = useState(null);
    const dataTableRefDestino = useRef();
    
    const onGlobalFilterChangeDestino = (e) => {
        setGlobalFilterValueDestino(e.target.value);
    };

    const handlePrintDestino = useReactToPrint({
        content: () => dataTableRefDestino.current,
        documentTitle: 'Venda Destino',
    });

    const exportToPDFDestino = () => {
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
        doc.save('venda_destino.pdf');
    };

    const exportToExcelDestino = () => {
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
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Venda Destino');
        XLSX.writeFile(workbook, 'venda_destino.xlsx');
    };

    const dadosDestino = dadosDetalheVoucher?.flatMap((item) => {

        return item.detalhedestino?.map((detalhe) => ({
        NUCODBARRAS: detalhe.vendadetdestino?.NUCODBARRAS,
        DSNOMEPRODUTO: detalhe.vendadetdestino?.DSPRODUTO,
        VUNCOM: detalhe.vendadetdestino?.VUNCOM,
        QTDPRODUTO: detalhe.vendadetdestino?.QTD,
        VRPROD: detalhe.vendadetdestino?.VPROD,
        VRDESC: detalhe.vendadetdestino?.VDESC,
        VRLIQUIDO: detalhe.vendadetdestino?.VRTOTALLIQUIDO,
        }))
    });

    const colunasDestino = [
    {
        field: 'NUCODBARRAS',
        header: 'Código Barras',
        body: row => <th>{row.NUCODBARRAS}</th>,
        sortable: true,
    },
    {
        field: 'DSNOMEPRODUTO',
        header: 'Descrição',
        body: row => <th>{row.DSNOMEPRODUTO}</th>,
        sortable: true,
    },
    {
        field: 'VUNCOM',
        header: 'Vr Unit',
        body: row => <th>{formatMoeda(row.VUNCOM)}</th>,
        sortable: true,
    },
    {
        field: 'QTDPRODUTO',
        header: 'QTD',
        body: row => <th>{row.QTDPRODUTO}</th>,
        sortable: true,
    },
    {
        field: 'VRPROD',
        header: 'Vr Bruto',
        body: row => <th>{formatMoeda(row.VRPROD)}</th>,
        sortable: true,
    },
    {
        field: 'VRDESC',
        header: 'Vr Desconto',
        body: row => <th>{formatMoeda(row.VRDESC)}</th>,
        sortable: true,
    },
    {
        field: 'VRLIQUIDO',
        header: 'Vr Líquido',
        body: row => <th>{formatMoeda(row.VRLIQUIDO)}</th>,
        sortable: true,
    },
    ]

    return (
        <Fragment>
            <div className="mt-2 panel">
                <div className="panel-hdr">

                    <h2 className="p-3">Produtos Venda de Destino: {dadosDetalheVoucher[0]?.voucher.IDRESUMOVENDAWEBDESTINO} </h2>
                </div>
                <div style={{ marginTop: "1rem", marginBottom: "1rem" }}>
                    <HeaderTable
                        globalFilterValue={globalFilterValueDestino}
                        onGlobalFilterChange={onGlobalFilterChangeDestino}
                        handlePrint={handlePrintDestino}
                        exportToExcel={exportToExcelDestino}
                        exportToPDF={exportToPDFDestino}
                    />

                </div>

                <div className="card" ref={dataTableRefDestino}>
                    <DataTable
                        value={dadosDestino}
                        globalFilter={globalFilterValueDestino}
                        size="small"
                        selectionMode="single"
                        selection={rowSelection}
                        onSelectionChange={(e) => setRowSelection(e.value)}
                        sortOrder={-1}
                        rows={10}
                        paginator={true}
                        rowsPerPageOptions={[10, 20, 50, 100, dadosDestino?.length]}
                        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                        currentPageReportTemplate="Mostrando {first} a {last} de {totalRecords} Registros"
                        filterDisplay="menu"
                        showGridlines
                        stripedRows
                        emptyMessage={<div className="dataTables_empty">Nenhum resultado encontrado </div>}
                    >
                        {colunasDestino.map(coluna => (
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