import { Fragment, useRef, useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { formatMoeda } from '../../../utils/formatMoeda';
import { ButtonTable } from '../../ButtonsTabela/ButtonTable';
import { GrFormView } from 'react-icons/gr';
import HeaderTable from '../../Tables/headerTable';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';
import * as XLSX from 'xlsx';
import { useReactToPrint } from "react-to-print";
import { get } from '../../../api/funcRequest';
import { retornaDiasEntreDatas } from '../../../utils/retornoEntreDias';
import { Checkbox } from "primereact/checkbox";
import Swal from 'sweetalert2';

export const ActionListaVendaCLiente = ({
  dadosVendasClientes,
  setBtnVisivel,
  selectedRows,
  setSelectedRows,
  dadosVisualizarProdutos,
  setDadosVisualizarProdutos,
  tipoTrocaSelecionada,
  setTipoTrocaSelecionada,
  quantidadesProdutos,
  setQuantidadesProdutos,
  tabelaSecundaria,
  setTabelaSecundaria,
  tabelaVenda,
  setTabelaVenda,
}) => {
  const [rowClick, setRowClick] = useState(true);
  const [globalFilterValue, setGlobalFilterValue] = useState('');
  const dataTableRef = useRef();

  const onRowSelect = (row, checked) => {
    if (checked) {
      const newSelectedRows = [...selectedRows, row];
      setSelectedRows(newSelectedRows);
    } else {

      const newSelectedRows = selectedRows.filter(selectedRow => {
        if (row.contadorIndex !== undefined && selectedRow.contadorIndex !== undefined) {
          return selectedRow.contadorIndex !== row.contadorIndex;
        }
        return selectedRow.IDVENDA !== row.IDVENDA;
      });
      setSelectedRows(newSelectedRows);
    }
  };


  const handleQuantidadeChange = (contadorIndex, novaQuantidade) => {
    const quantidade = Math.max(1, parseInt(novaQuantidade) || 1);
    setQuantidadesProdutos(prev => ({
      ...prev,
      [contadorIndex]: quantidade
    }));
  };

  const getQuantidadeProduto = (contadorIndex, quantidadeOriginal) => {
    return quantidadesProdutos[contadorIndex] || quantidadeOriginal;
  };

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
    const header = ['Nº', 'Nº Venda', 'Cliente', 'CPF/CNPJ', 'Loja', 'Valor Pago', 'Data', 'Situação']
    worksheet['!cols'] = [
      { wpx: 50, caption: 'Nº' },
      { wpx: 100, caption: 'Nº Venda' },
      { wpx: 200, caption: 'Cliente' },
      { wpx: 100, caption: 'CPF/CNPJ' },
      { wpx: 200, caption: 'Loja' },
      { wpx: 100, caption: 'Valor Pago' },
      { wpx: 100, caption: 'Data' },
      { wpx: 100, caption: 'Situação' }
    ];
    XLSX.utils.sheet_add_aoa(worksheet, [header], { origin: 'A1' });
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Vouchers Emitidos');
    XLSX.writeFile(workbook, 'venda_cliente_vouchers.xlsx');
  };

  const exportToPDF = () => {
    const doc = new jsPDF();
    doc.autoTable({
      head: [['Nº', 'Nº Venda', 'Cliente', 'CPF/CNPJ', 'Loja', 'Valor Pago', 'Data', 'Situação']],
      body: dados.map(item => [
        item.contador,
        item.IDVENDA,
        item.nomeClienteVenda,
        item.DEST_CPF,
        item.NOFANTASIA,
        formatMoeda(item.VRTOTALPAGO),
        item.DTHORAFECHAMENTO,
        item.STCANCELADO == 'True' ? 'Ativa' : 'Cancelada'
      ]),
      horizontalPageBreak: true,
      horizontalPageBreakBehaviour: 'immediately'
    });
    doc.save('venda_cliente_vouchers.pdf');
  };

  const dados = dadosVendasClientes.map((item, index) => {
    let contador = index + 1;
    const nomeClienteVenda = item.venda.DEST_CPF ? item.venda.DSNOMERAZAOSOCIAL + ' - ' + item.venda.DSAPELIDONOMEFANTASIA : item.venda.DSNOMERAZAOSOCIAL;
    return {
      contador,
      IDVENDA: item.venda.IDVENDA,
      nomeClienteVenda: nomeClienteVenda,
      DEST_CPF: item.venda.DEST_CPF,
      NOFANTASIA: item.venda.NOFANTASIA,
      VRTOTALPAGO: item.venda.VRTOTALPAGO,
      DTHORAFECHAMENTO: item.venda.DTHORAFECHAMENTO,
      STCANCELADO: item.venda.STCANCELADO,
      DSNOMERAZAOSOCIAL: item.venda.DSNOMERAZAOSOCIAL,
      DSAPELIDONOMEFANTASIA: item.venda.DSAPELIDONOMEFANTASIA,
      DEST_CNPJ: item.venda.DEST_CNPJ,
    }
  });

  const colunasVendas = [
    {
      field: 'contador',
      header: 'Nº',
      body: row => <th style={{ color: 'blue' }}>{row.contador}</th>,
      sortable: true,
    },
    {
      field: 'IDVENDA',
      header: 'Nº Venda',
      body: row => <th style={{ color: 'blue' }}>{row.IDVENDA}</th>,
      sortable: true,
    },
    {
      field: 'nomeClienteVenda',
      header: 'Cliente',
      body: row => <th style={{ color: 'blue' }}>{row.nomeClienteVenda}</th>,
      sortable: true,
    },
    {
      field: 'DEST_CPF',
      header: 'CPF/CNPJ',
      body: row => <th style={{ color: 'blue' }}>{row.DEST_CPF}</th>,
      sortable: true,
    },
    {
      field: 'NOFANTASIA',
      header: 'Loja',
      body: row => <th style={{ color: 'blue' }}>{row.NOFANTASIA}</th>,
      sortable: true,
    },
    {
      field: 'VRTOTALPAGO',
      header: 'Valor Pago',
      body: row => <th style={{ color: 'blue' }}>{formatMoeda(row.VRTOTALPAGO)}</th>,
      sortable: true,
    },
    {
      field: 'DTHORAFECHAMENTO',
      header: 'Data',
      body: row => <th style={{ color: 'green' }}>{row.DTHORAFECHAMENTO}</th>,
      sortable: true,
    },
    {
      field: 'STCANCELADO',
      header: 'Situação',
      body: row => <th style={{ color: 'green' }}>{row.STCANCELADO == 'True' ? 'Ativa' : 'Cancelada'}</th>,
      sortable: true,
    },
    {
      field: 'IDVENDA',
      header: 'Opções',
      body: (row) => (
        <div style={{ display: "flex", justifyContent: "space-around", width: '7rem' }}>
          <div>

            <ButtonTable
              titleButton={"Visualizar Detalhes"}
              onClickButton={() => handleTipoTroca(row)}
              Icon={GrFormView}
              iconSize={30}
              width="35px"
              height="35px"
              iconColor={"#fff"}
              cor={"success"}
            />
          </div>
        </div>
      ),
    }

  ]

  const handleTipoTroca = async (row) => {
    const { value: tipoTroca } = await Swal.fire({
      title: 'Tipo da troca?',
      input: 'select',
      inputOptions: {
        '': 'Selecione',
        'CORTESIA': 'CORTESIA',
        'DEFEITO': 'DEFEITO',
      },
      width: '25rem',
      focusConfirm: false,
      showCancelButton: true,
      confirmButtonText: 'Confirmar',
      confirmButtonColor: '#7a59ad',
      cancelButtonText: 'Sair',
      cancelButtonColor: '#FD429A',
      showLoaderOnConfirm: true,
      allowOutsideClick: false,
      allowEscapeKey: false,

      preConfirm: () => {
        if (row.IDVENDA) {
          handleDetalhar(row.IDVENDA)
        }
      }
    });

    if (tipoTroca) {
      setTipoTrocaSelecionada(tipoTroca);
      return tipoTroca;
    }

    return false;
  };

  const handleDetalhar = async (IDVENDA) => {
    try {
      const response = await get(`/lista-venda-cliente?idVenda=${IDVENDA}`)
      if (response.data) {
        setDadosVisualizarProdutos(response.data)
        setTabelaVenda(false)
        setTabelaSecundaria(true)
      }
    } catch (error) {
      console.log(error, "não foi possivel pegar os dados da tabela ")
    }
  }

  const dadosProdutos = dadosVisualizarProdutos.flatMap((item) => {
    const { venda, detalhe } = item;

    return detalhe.map((detalheItem, index) => {
      const contadorIndex = index + 1;
      return {

        CPROD: detalheItem.det.CPROD,
        IDVENDADETALHE: detalheItem.det.IDVENDADETALHE,
        XPROD: detalheItem.det.XPROD,
        NUCODBARRAS: detalheItem.det.NUCODBARRAS,
        QTD: detalheItem.det.QTD,
        VRTOTALLIQUIDO: detalheItem.det.VRTOTALLIQUIDO,
        VUNTRIB: detalheItem.det.VUNTRIB,
        VPROD: detalheItem.det.VPROD,
        STTROCA: detalheItem.det.STTROCA,
        VENDEDOR_MATRICULA: detalheItem.det.VENDEDOR_MATRICULA,
        STCANCELADO: detalheItem.det.STCANCELADO,
        contadorIndex: contadorIndex,

      };
    });
  });

  const dadosProdutosVenda = dadosVisualizarProdutos.flatMap((item) => {
    let diferenciaDias;
    return {
      IDVENDA: item.venda.IDVENDA,
      DTHORAFECHAMENTO: item.venda.DTHORAFECHAMENTO,
      diferenciaDias: diferenciaDias = retornaDiasEntreDatas(item.venda.DTHORAFECHAMENTOFORMATEUA),
    };

  });

  const colunasVouchers2 = [
    {
      field: 'contadorIndex',
      header: 'Nº',
      body: row => <p >{row.contadorIndex}</p>,
      sortable: true,
    },
    {
      field: 'contadorIndex',
      header: 'Selecione',
      body: row => (
        <Checkbox
          onChange={e => {
            onRowSelect(row, e.checked);
            setBtnVisivel(e.checked);
          }}
          checked={selectedRows.some(selectedRow => selectedRow.contadorIndex === row.contadorIndex)}
          disabled={row.STTROCA == 'True' ? true : false}
        />
      ),
      sortable: true,
    },
    {
      field: 'CPROD',
      header: 'Codigo Produto',
      body: row => <th >{row.CPROD}</th>,
      sortable: true,
    },
    {
      field: 'XPROD',
      header: 'Produto',
      body: row => <th >{row.XPROD}</th>,
      sortable: true,
    },
    {
      field: 'NUCODBARRAS',
      header: 'Codigo Barras',
      body: row => <th >{row.NUCODBARRAS}</th>,
      sortable: true,
    },
    {
      field: 'QTD',
      header: 'Quantidade',
      body: row => {
        const isCheckboxChecked = selectedRows.some(selectedRow => selectedRow.contadorIndex === row.contadorIndex);
        const isDisabled = row.STTROCA == "True" || row.QTD <= 1 || isCheckboxChecked;
        const quantidadeAtual = getQuantidadeProduto(row.contadorIndex, row.QTD);

        return (
          <div >
            <input
              value={quantidadeAtual}
              min={1}
              max={row.QTD}
              step={1}
              style={{ width: '100px', textAlign: 'center' }}
              onChange={e => {
                handleQuantidadeChange(row.contadorIndex, e.value);
              }}
              disabled={isDisabled}
            />
          </div>
        )
      },
      sortable: true,
    },
    {
      field: 'VRTOTALLIQUIDO',
      header: 'Valor',
      body: row => <th style={{}} >{formatMoeda(row.VRTOTALLIQUIDO)} </th>,
      sortable: true,
    },
  ]

  const isSelectable = (data) => {
    return !data.disabled;
  };

  const isRowSelectable = (event) => (event.data ? isSelectable(event.data) : true);
  const rowClassName = (data) => (isSelectable(data) ? '' : 'p-disabled');

  const calcularProdutosTrocados = (dadosProdutos) => {
    const produtosAtivos = dadosProdutos.filter(produto => produto.STCANCELADO === 'False');
    const produtosTrocados = produtosAtivos.filter(produto => produto.STTROCA === 'True');

    return {
      qtdTotalProdutos: produtosAtivos.length,
      qtdItensTrocados: produtosTrocados.length,
      todosTrocados: produtosAtivos.length > 0 && produtosTrocados.length === produtosAtivos.length
    };
  };

  const produtosInfo = calcularProdutosTrocados(dadosProdutos);

  const calcularDataAutorizada = (tipoTroca) => {
    return tipoTroca === 'CORTESIA' ? 32 : 90;
  };

  const dataAutorizada = calcularDataAutorizada(tipoTrocaSelecionada || 'DEFEITO');


  return (
    <Fragment>

      {tabelaVenda && (
        <div className="panel">
          <div className="panel-hdr">
            <h2>Vendas </h2>
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
              size="small"
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
              {colunasVendas.map(coluna => (
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
      )}

      {tabelaSecundaria && (
        <Fragment>
          <div className="panel">
            <div className="panel-hdr">
              {produtosInfo.todosTrocados ? (
                <h2>
                  <span className="fw-500 todosTrocados">
                    <i>Produtos _ Venda: {dadosProdutosVenda[0]?.IDVENDA}</i>
                    &nbsp;&nbsp;
                    <i className="text-danger h4">Todos os Produtos Desta Venda Já Foram Trocados</i>
                  </span>
                </h2>
              ) : dadosProdutosVenda[0]?.diferenciaDias > calcularDataAutorizada(tipoTrocaSelecionada || 'DEFEITO') ? (
                <h2>
                  <span className="fw-500">
                    <i>Produtos - Venda: {dadosProdutosVenda[0]?.IDVENDA}</i>
                    &nbsp;&nbsp;
                    <i className="text-danger h4">
                      Venda Fora do Prazo de <u><b>{calcularDataAutorizada(tipoTrocaSelecionada || 'DEFEITO')} DIAS</b></u> Para Troca do Tipo <u><b>{tipoTrocaSelecionada || 'DEFEITO'}</b></u>.
                      Dias Passados Após a Compra: <u><b>{dadosProdutosVenda[0]?.diferenciaDias} DIAS</b></u>
                    </i>
                  </span>
                </h2>
              ) : (
                <h2>Produtos Vendas</h2>
              )}
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
                key={"IDVENDA"}
                title="Vendas Voucher por Loja"
                value={dadosProdutos}
                globalFilter={globalFilterValue}
                size="small"
                sortOrder={-1}
                selectionMode={rowClick ? null : 'checkbox'}
                selection={rowClick}
                onSelectionChange={(e) => setRowClick(e.value)}
                paginator={true}
                rows={10}
                rowsPerPageOptions={[10, 20, 50, 100, dadosProdutos.length]}
                showGridlines
                stripedRows
                rowClassName={(row) => row.STTROCA == 'True' ? 'row-disabled' : ''}
         
                
                emptyMessage={<div className="dataTables_empty">Não há Produtos Na Venda</div>}
              >
                {colunasVouchers2.map(coluna => (
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
      )}
    </Fragment>
  )
}