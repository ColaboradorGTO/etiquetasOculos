import { Fragment, useEffect, useRef, useState } from "react";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { formatMoeda } from "../../../../utils/formatMoeda";
import HeaderTable from "../../../Tables/headerTable";
import Swal from "sweetalert2";
import { useReactToPrint } from "react-to-print";
import jsPDF from "jspdf";
import * as XLSX from 'xlsx';
import { isValidEAN13 } from "../../../../utils/isValidEAN13";
import { ActionDetalharProdutosEtiquetaModal } from "./actionDetalharProdutosEtiquetaModal";

export const ActionListaProdutoEtiqueta = ({
  dadosListaPrecosSap,
  setBtnVisivel,
  modalImprimir,
  setModalImprimir,
  produtosSelecionados,
  setProdutosSelecionados,
  dadosAcumuladorEtiquetas,
  setDadosAcumuladorEtiquetas,
  setSelectAll,
  selectedIds,
  setSelectedIds,
  copia,
  setCopia
}) => {

  const [globalFilterValue, setGlobalFilterValue] = useState('');
  const [selectAllChecked, setSelectAllChecked] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);
  const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(10);
  const dataTableRef = useRef();

  const onGlobalFilterChange = (e) => {
    setGlobalFilterValue(e.target.value);
  };

  const handlePrint = useReactToPrint({
    content: () => dataTableRef.current,
    documentTitle: 'Lista de Produtos',
  });

  const exportToPDF = () => {
    const doc = new jsPDF();
    doc.autoTable({
      head: [['Nº', 'Cod Barras', 'Produto', 'Tamanho', 'Quantidade', 'PR. Venda', 'Grupo', 'Estilo', 'Marca']],
      body: dados.map(item => [
        item.contador,
        item.NUCODBARRAS,
        item.DSNOME,
        item.TAMANHO,
        item.quantidade,
        formatMoeda(item.PRECOVENDA),
        item.DSLISTAPRECO,
        item.DSESTILO,
        item.MARCA
      ]),
      horizontalPageBreak: true,
      horizontalPageBreakBehaviour: 'immediately'
    });
    doc.save('lista_produtos.pdf');
  };

  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(dados);
    const workbook = XLSX.utils.book_new();
    const header = ['Nº', 'Cod Barras', 'Produto', 'Tamanho', 'Quantidade', 'PR. Venda', 'Grupo', 'Estilo', 'Marca'];
    worksheet['!cols'] = [
      { wpx: 70, caption: 'Nº' },
      { wpx: 100, caption: 'Cod Barras' },
      { wpx: 200, caption: 'Produto' },
      { wpx: 70, caption: 'Tamanho' },
      { wpx: 50, caption: 'Quantidade' },
      { wpx: 100, caption: 'PR. Venda' },
      { wpx: 200, caption: 'Grupo' },
      { wpx: 200, caption: 'Estilo' },
      { wpx: 100, caption: 'Marca' },
    ];
    XLSX.utils.sheet_add_aoa(worksheet, [header], { origin: 'A1' });
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Lista de Produtos');
    XLSX.writeFile(workbook, 'lista_produtos.xlsx');
  };

  const onPageChange = (event) => {
    setFirst(event.first);
    setRows(event.rows);
  };

  const dados = dadosListaPrecosSap.map((item, index) => {
    let contador = index + 1;
    let quantidade = 1;
    const arrayGrupos = [
      'Todos',
      'Tesoura',
      'Magazine',
      'Yorus',
      'Free Center'
    ];
    let grupo = item.DSLISTAPRECO || arrayGrupos[item.IDSUBGRUPOEMPRESARIAL] || 'Todos';
    let estilo = item.DSESTILO || '';
    if (item.STTRANSFORMADO === 'True') {
      let subgrupo = item.SUBGRUPO ? item.SUBGRUPO.split('-') : [];

      if (subgrupo.length > 0) {
        subgrupo = subgrupo.pop()?.split(' ')?.join(' - ') || '';
      }

      grupo = arrayGrupos[item.IDSUBGRUPOEMPRESARIAL] || grupo;

      if (estilo.length > 0) {
        estilo = subgrupo.length > 0 ? `${subgrupo} - ${estilo}` : estilo;
      } else {
        estilo = subgrupo;
      }
    }

    // Ajuste para TAMANHO conforme solicitado
    let dsProd = item.DSNOME || '';
    let tamanho = (item.TAMANHO || item.DSTAMANHO || ((dsProd.split(' ')).pop()).replace(/[^\w\s]/gi, ''))?.toUpperCase();
    let codBarras = item.NUCODBARRAS || item.CODBARRAS;
    let stCodBarrasValid = isValidEAN13(codBarras) ? 'True' : 'False';
    let stDisabled = item.STATIVO !== 'True' || stCodBarrasValid !== 'True' ? 'disabled' : '';
    let subGrupo = item.SUBGRUPO ? (item.SUBGRUPO).split('-') : '';
    return {
      contador,
      NUCODBARRAS: codBarras,
      DSNOME: item.DSNOME,
      TAMANHO: tamanho,
      stCodBarrasValid,
      stDisabled,
      quantidade,
      subGrupo,
      PRECOVENDA: item.PRECOVENDA,
      DSESTILO: item.DSESTILO ? item.DSESTILO : item.SUBGRUPO,
      MARCA: item.MARCA || '',
      IDPRODUTO: item.IDPRODUTO,
      STRANSFRMADO: item.STTRANSFORMADO,
      DSLISTAPRECO: item.DSLISTAPRECO || item.IDSUBGRUPOEMPRESARIAL || 0,
      DSLOCALEXPOSICAO: item.DSLOCALEXPOSICAO,
      STATIVO: item.STATIVO === 'True' ? 'Ativo' : 'Inativo',
      arrayGrupos,
    };

  });

  useEffect(() => {
    const itensSelecionaveis = dados.filter(item => item.stDisabled !== 'disabled');

    const dadosPaginaAtual = dados.slice(first, first + rows);
    const itensSelecionaveisPaginaAtual = dadosPaginaAtual.filter(item => item.stDisabled !== 'disabled');

    if (selectedItems.length === 0) {
      setSelectAllChecked(false);
    } else if (
      selectedItems.length === itensSelecionaveis.length ||
      (selectedItems.length === itensSelecionaveisPaginaAtual.length &&
        itensSelecionaveisPaginaAtual.length > 0 &&
        itensSelecionaveisPaginaAtual.every(item =>
          selectedItems.some(selected => selected.IDPRODUTO === item.IDPRODUTO)
        ))
    ) {
      setSelectAllChecked(true);
    } else {
      setSelectAllChecked(false);
    }

  }, [selectedItems, dados, first, rows]);

  const onSelectAllChange = (checked) => {
    if (checked) {
      Swal.fire({
        icon: 'question',
        title: 'Selecione o modo de seleção',
        text: 'Deseja selecionar todos da tabela ou somente o que está em tela?',
        showConfirmButton: true,
        showCancelButton: true,
        showCloseButton: true,
        customClass: { container: 'custom-swal' },
        confirmButtonText: 'Todos os registros',
        cancelButtonText: 'Apenas o que está tela',
        cancelButtonColor: '#2196F3',
        allowOutsideClick: false,
      }).then((result) => {

        if (result.isConfirmed) {
          const itensSelecionaveis = dados.filter(item => item.stDisabled !== 'disabled');
          setBtnVisivel(true);
          setSelectedItems([...itensSelecionaveis]);
          setSelectedIds(itensSelecionaveis.map(item => item.IDPRODUTO));
          setProdutosSelecionados(itensSelecionaveis.map(item => ({ ...item, quantidade: 1 })));
          setSelectAll(true);

        } else if (result.dismiss === Swal.DismissReason.cancel) {
          const itensSelecionaveisPaginaAtual = dados.slice(first, first + rows).filter(item => item.stDisabled !== 'disabled');
          setBtnVisivel(true);
          setSelectedItems([...itensSelecionaveisPaginaAtual]);
          setSelectedIds(itensSelecionaveisPaginaAtual.map(item => item.IDPRODUTO));
          setProdutosSelecionados(itensSelecionaveisPaginaAtual.map(item => ({ ...item, quantidade: 1 })));
          setSelectAll(true);

        } else {
          setBtnVisivel(false);
          setSelectedItems([]);
          setSelectedIds([]);
          setProdutosSelecionados([]);
          setSelectAll(false);
        }
      });
    } else {
      setBtnVisivel(false);
      setSelectedItems([]);
      setSelectedIds([]);
      setProdutosSelecionados([]);
      setSelectAll(false);
    }
  }

  const colunasListaProdEtiquetas = [
    {
      field: 'IDPRODUTO',
      header: (
        <div>
          <label>{selectAllChecked ? 'Desmarcar Todos' : 'Marcar Todos'}</label>
          <input
            type="checkbox"
            checked={selectAllChecked}
            onChange={(e) => onSelectAllChange(e.target.checked)}
          />
        </div>
      ),
      body: (rowData) => {
        return (
          <div>
            <input
              type="checkbox"
              checked={selectedIds.includes(rowData.IDPRODUTO)}
              onChange={(e) => {
                const isChecked = e.target.checked;
                const updatedSelectedIds = isChecked
                  ? [...selectedIds, rowData.IDPRODUTO]
                  : selectedIds.filter(id => id !== rowData.IDPRODUTO);

                setSelectedIds(updatedSelectedIds);
                setSelectAll(updatedSelectedIds.length === dados.length);
                setSelectedItems((prevItems) =>
                  isChecked
                    ? [...prevItems, rowData]
                    : prevItems.filter(item => item.IDPRODUTO !== rowData.IDPRODUTO)
                );

                setProdutosSelecionados((prevProdutos) => {
                  if (!isChecked) {
                    return prevProdutos.filter(item => item.IDPRODUTO !== rowData.IDPRODUTO);
                  }

                  const produtoExistente = prevProdutos.find(item => item.IDPRODUTO === rowData.IDPRODUTO);
                  const quantidadeAtual = Number(produtoExistente?.quantidade) || 1;

                  if (produtoExistente) {
                    return prevProdutos.map((item) =>
                      item.IDPRODUTO === rowData.IDPRODUTO
                        ? { ...item, ...rowData, quantidade: quantidadeAtual }
                        : item
                    );
                  }

                  return [...prevProdutos, { ...rowData, quantidade: quantidadeAtual }];
                });
              }}
              disabled={rowData.stDisabled === 'disabled'}
            />
          </div>
        );
      }
    },
    {
      field: 'contador',
      header: 'Nº',
      body: (row) => <th style={{ color: row.stDisabled === 'disabled' ? 'red' : 'blue' }}>{row.contador}</th>,
      sortable: true
    },
    {
      field: 'NUCODBARRAS',
      header: 'Cód Barras',
      body: row => <th style={{ color: row.stDisabled === 'disabled' ? 'red' : 'blue' }}>{row.NUCODBARRAS}</th>,
      sortable: true
    },
    {
      field: 'DSNOME',
      header: 'Produto',
      body: row => <th style={{ color: row.stDisabled === 'disabled' ? 'red' : 'blue' }}>{row.DSNOME}</th>,
      sortable: true
    },
    {
      field: 'TAMANHO',
      header: 'Tamanho',
      body: row => <th style={{ color: row.stDisabled === 'disabled' ? 'red' : 'blue' }}>{row.TAMANHO}</th>,
      sortable: true
    },
    {
      field: 'quantidade',
      header: 'Quantidade',
      body: (row) => {
        const produtoSelecionado = produtosSelecionados.find(p => p.IDPRODUTO === row.IDPRODUTO);
        const quantidadeAtual = produtoSelecionado 
          ? (produtoSelecionado.quantidade ?? 1) 
          : 1;

        return (
          <div style={{ background: '', width: '50%' }}>
            <input
              type="number"
              value={quantidadeAtual}
              onChange={(e) => {
                const novaQuantidade = e.target.value;
                const produtoJaSelecionado = selectedIds.includes(row.IDPRODUTO);

                if (!produtoJaSelecionado) {
                  setSelectedIds((prevIds) => [...prevIds, row.IDPRODUTO]);
                  setSelectedItems((prevItems) => [...prevItems, row]);
                  setSelectAll(false);
                  setBtnVisivel(true);
                }

                setProdutosSelecionados((prevProdutos) => {
                  const produtoExiste = prevProdutos.some((prod) => prod.IDPRODUTO === row.IDPRODUTO);

                  if (!produtoExiste) {
                    return [...prevProdutos, { ...row, quantidade: novaQuantidade }];
                  }

                  return prevProdutos.map((prod) =>
                    prod.IDPRODUTO === row.IDPRODUTO
                      ? { ...prod, quantidade: novaQuantidade }
                      : prod
                  );
                });
              }}
              onBlur={(e) => {
                const valor = e.target.value === '' ? 1 : parseInt(e.target.value, 10) || 1;

                setProdutosSelecionados((prevProdutos) => {
                  return prevProdutos.map((prod) =>
                    prod.IDPRODUTO === row.IDPRODUTO
                      ? { ...prod, quantidade: valor }
                      : prod
                  );
                });
              }}
              style={{ width: '100%' }}
            />

          </div>
        );
      }
    },
    {
      field: 'PRECOVENDA',
      header: 'PR. Venda',
      body: row => <th style={{ color: row.stDisabled === 'disabled' ? 'red' : 'blue' }}>{formatMoeda(row.PRECOVENDA)}</th>,
      sortable: true
    },
    {
      field: 'DSLISTAPRECO',
      header: 'Grupo',
      body: row => <th style={{ color: row.stDisabled === 'disabled' ? 'red' : 'blue' }}>{row.DSLISTAPRECO}</th>,
      sortable: true
    },
    {
      field: 'DSESTILO',
      header: 'Estilo',
      body: row => <th style={{ color: row.stDisabled === 'disabled' ? 'red' : 'blue' }}>{row.DSESTILO}</th>,
      sortable: true
    },
    {
      field: 'MARCA',
      header: 'Marca',
      body: row => <th style={{ color: row.stDisabled === 'disabled' ? 'red' : 'blue' }}>{row.MARCA}</th>,
      sortable: true
    },
    {
      field: 'STATIVO',
      header: 'Status',
      body: row => <th style={{ color: row.STATIVO === 'Ativo' ? 'blue' : 'red' }}>{row.STATIVO}</th>,
      sortable: true
    },
  ];

  useEffect(() => {
    if (selectedIds.length > 0) {
      setBtnVisivel(true);
    } else {
      setBtnVisivel(false);
    }
  }, [selectedIds, setBtnVisivel]);


  return (
    <Fragment>
      <div className="panel">

        <div className="panel-hdr">
          <h2>Lista de Produtos </h2>
        </div>

        <div style={{ background: '', width: '15%', display: 'flex', alignItems: 'center', gap: '1rem', marginLeft: '1rem' }}>
          <span style={{ fontWeight: 'bold', textWrap: 'nowrap' }}>QTD CÓPIAS:</span>
          <input
            type="number"
            defaultValue={1}
            value={copia}
            min={1}
            onChange={(e) => setCopia(e.target.value)}
            style={{ width: '50%' }}
          />

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

        <div className="card" ref={dataTableRef} style={{ marginTop: "1rem" }}>
          <DataTable
            value={dados}
            globalFilter={globalFilterValue}
            size="small"
            selectionMode={'single'}
            sortOrder={-1}
            paginator={true}
            rows={rows}
            first={first}
            onPage={onPageChange}
            rowsPerPageOptions={[10, 20, 50, 100, dados.length]}
            paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
            currentPageReportTemplate="Mostrando {first} a {last} de {totalRecords} Registros"
            filterDisplay="menu"
            showGridlines
            stripedRows
            emptyMessage={<div className="dataTables_empty">Nenhum resultado encontrado </div>}
          >
            {colunasListaProdEtiquetas.map(coluna => (
              <Column
                key={coluna.field}
                field={coluna.field}
                header={coluna.header}
                body={coluna.body}
                sortable={coluna.sortable}
                headerStyle={{ color: 'white', backgroundColor: "#7a59ad", border: '1px solid #e9e9e9', fontSize: '0.8rem' }}
                bodyStyle={{ fontSize: '0.8rem' }}
              />
            ))}
          </DataTable>
        </div>
      </div>

      <ActionDetalharProdutosEtiquetaModal
        show={modalImprimir}
        handleClose={() => setModalImprimir(false)}
        produtosSelecionados={produtosSelecionados}
        setProdutosSelecionados={setProdutosSelecionados}
        dadosAcumuladorEtiquetas={dadosAcumuladorEtiquetas}
        setDadosAcumuladorEtiquetas={setDadosAcumuladorEtiquetas}
      />

    </Fragment>
  );
};