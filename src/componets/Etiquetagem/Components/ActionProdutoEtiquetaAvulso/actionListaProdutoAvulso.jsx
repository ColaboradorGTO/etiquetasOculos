import { Fragment, useState } from "react"
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ButtonTable } from "../../../ButtonsTabela/ButtonTable";
import { formatMoeda } from "../../../../utils/formatMoeda";
import { CiEdit } from "react-icons/ci";
import { FaCashRegister, FaCheck } from "react-icons/fa";
import { SiSap } from "react-icons/si";
import { BsTrash3 } from "react-icons/bs";


export const ActionListaProdutoAvulso = ({ dadosProdutosAvulso }) => {
  const [modalEditar, setModalEditar] = useState(false);
  const [dadosDetalheCategoriaPedido, setDadosDetalheCategoriaPedido] = useState([]);


  const dadosListaProdutosAvulso = dadosProdutosAvulso.map((item, index) => {
    let contador = index + 1;

    return {
      IDDETALHEPRODUTOPEDIDO: item.IDDETALHEPRODUTOPEDIDO,
      DTCADASTROFORMAT: item.DTCADASTROFORMAT,
      NUREF: item.NUREF,
      CODBARRAS: item.CODBARRAS,
      DSPRODUTO: item.DSPRODUTO,
      QTDPRODUTO: item.QTDPRODUTO,
      VRCUSTO: item.VRCUSTO,
      VRVENDA: item.VRVENDA,
      DSFABRICANTE: item.DSFABRICANTE,
      STMIGRADOSAP: item.STMIGRADOSAP,
      STCANCELADO: item.STCANCELADO,
      STCADASTRADO: item.STCADASTRADO,
      contador
    }
  });


  const colunasPedidos = [

    {
      field: 'DTCADASTROFORMAT',
      header: 'Data',
      body: row => row.DTCADASTROFORMAT,
      sortable: true,
    },
    {
      field: 'CODBARRAS',
      header: 'Cod. Barras',
      body: row => row.CODBARRAS,
      sortable: true,
    },
    {
      field: 'DSPRODUTO',
      header: 'Descrição',
      body: row => row.DSPRODUTO,
      sortable: true,
    },
    {
      field: 'NUREF',
      header: 'Ref',
      body: row => row.NUREF,
      sortable: true,
    },
    {
      field: 'QTDPRODUTO',
      header: 'QTD',
      body: row => row.QTDPRODUTO,
      footer: 'Total ',
      sortable: true,
    },
    {
      field: 'DSFABRICANTE',
      header: 'Fabricante',
      body: row => row.DSFABRICANTE,

      sortable: true,
    },
    {
      field: 'VRCUSTO',
      header: 'Vl. Custo',
      body: row => formatMoeda(row.VRCUSTO),
      sortable: true,
    },
    {
      field: 'VRVENDA',
      header: 'Vl. Venda',
      body: row => formatMoeda(row.VRVENDA),
      sortable: true,
    },
    {
      field: 'STCANCELADO',
      header: 'Status',
      body: row => {
        return (
          <div>
            <p style={{ color: 
              row.STCANCELADO == 'True' ? 'red' : 'blue' 
            }}
            >
              {row.STCANCELADO == 'True' ? 'CANCELADO' : 'ATIVO'}
            </p>
          </div>
        )
      },
      sortable: true,
    },
    {
      field: 'STMIGRADOSAP',
      header: 'Situação',
      body: (row) => { 
        if(row.STMIGRADOSAP == 'True') {
          if(row.STCADASTRADO == 'True') {
            return ( 
              <span style={{color: 'blue' }}>
                INCLUIDO PDV / MIGRADO SAP
              </span>
            )
      
          }else {
            return (
              <div style={{display: 'flex', justifyContent: 'space-around'}}>
                <span style={{color: 'red' }} >
                  NÃO INCLUIDO PDV
                </span>
                <span> / </span>
                <span style={{color: 'blue' }}>
                  MIGRADO SAP
                </span>
              </div>
            )
          }
          
        } else {
          if(row.STCADASTRADO == 'True') {
            return ( 
              <div style={{display: 'flex', justifyContent: 'space-around'}}>
                <span style={{color: 'blue' }} >
                  INCLUIDO PDV  
                </span>
                <span>/</span>
                <span style={{color: 'red' }}>
                  NÃO MIGRADO SAP
                </span>
              </div>
            )
      
          } else {
            return ( 
              <div>
                 <span style={{color: 'red' }}>
                   NÃO INCLUIDO PDV NÃO MIGRADO SAP
                 </span>
               </div>
             )
           }
      
         }
       },
      sortable: true
    },
    {
      field: 'IDDETALHEPRODUTOPEDIDO',
      header: 'Opções',
      body: (row) => {
        if(row.STCANCELADO == 'TRUE') {
          return (
            <div className="p-1 "
              style={{ justifyContent: "space-between", display: "flex" }}
            >
              <div className="p-1">
                <ButtonTable
                  Icon={FaCheck}
                  cor={"success"}
                  iconColor={"white"}
                  iconSize={20}
                  onClickButton
                  titleButton={"Ativar Produto Avulso"}
                />
              </div>
            </div>
          ) 
        } else {
          if(row.STCADASTRADO == 'True') {
            if(row.STMIGRADOSAP == 'True') {
              return (
                <div className="p-1 "
                  style={{ justifyContent: "space-between",  display: "flex" }}
                >
                  <div className="p-1">
                    <ButtonTable
                      Icon={BsTrash3}
                      cor={"danger"}
                      iconColor={"white"}
                      iconSize={20}
                      onClickButton
                      titleButton={"Cancelar Produto Avulso"}
                    />
                  </div>
                </div>
              )
              
            } else {
              return (
                <div className="p-1 "
                  style={{ justifyContent: "space-between",  display: "flex" }}
                >
                  <div className="p-1">
                    <ButtonTable
                      Icon={SiSap}
                      cor={"primary"}
                      iconColor={"white"}
                      iconSize={20}
                      onClickButton
                      titleButton={"Migrar para SAP"}
                    />
                  </div>
                  <div className="p-1">
                  <ButtonTable
                      Icon={BsTrash3}
                      cor={"danger"}
                      iconColor={"white"}
                      iconSize={20}
                      onClickButton
                      titleButton={"Cancelar Produto Avulso"}
                    />
                  </div>
                </div>
              )

            }
          } else {
            if(row.STMIGRADOSAP == 'True') {
              return (
                <div className="p-1 "
                  style={{ justifyContent: "space-between",  display: "flex" }}
                >
                  <div className="p-1">
                    <ButtonTable
                      Icon={BsTrash3}
                      cor={"danger"}
                      iconColor={"white"}
                      iconSize={20}
                      onClickButton
                      titleButton={"Cancelar Produto Avulso"}
                    />
                  </div>
                </div>
              )
              
            } else {
              return (
                <div className="p-1 "
                  style={{ justifyContent: "space-between",  display: "flex" }}
                >
                  <div className="p-1">
                    <ButtonTable
                      Icon={CiEdit}
                      cor={"primary"}
                      iconColor={"white"}
                      iconSize={20}
                      onClickButton
                      titleButton={"Editar Produto Avulso"}
                    />
                  </div>
                  <div className="p-1">
                  <ButtonTable
                      Icon={BsTrash3}
                      cor={"danger"}
                      iconColor={"white"}
                      iconSize={20}
                      onClickButton
                      titleButton={"Cancelar Produto Avulso"}
                    />
                  </div>
                  <div className="p-1">
                  <ButtonTable
                      Icon={FaCashRegister}
                      cor={"success"}
                      iconColor={"white"}
                      iconSize={18}
                      onClickButton
                      titleButton={"Incluir para PDV"}
                    />
                  </div>
                </div>
              )

            }
          }
        }  
      },
    },

  ]

  return (
    <Fragment>
      <div className="card">
        <DataTable
          title="Vendas por Loja"
          value={dadosListaProdutosAvulso}
          sortField="VRTOTALPAGO"
          sortOrder={-1}
          paginator={true}
          rows={10}
          rowsPerPageOptions={[5, 10, 20, 50, 100, 200, 500]}
          showGridlines
          stripedRows
          emptyMessage={<div className="dataTables_empty">Nenhum resultado encontrado</div>}
        >
          {colunasPedidos.map(coluna => (
            <Column
              key={coluna.field}
              field={coluna.field}
              header={coluna.header}
              body={coluna.body}
              footer={coluna.footer}
              sortable={coluna.sortable}
              headerStyle={{ color: 'white', backgroundColor: "#7a59ad", border: '1px solid #e9e9e9', fontSize: '0.8rem' }}
              footerStyle={{ color: 'white', backgroundColor: "#7a59ad", border: '1px solid #e9e9e9', fontSize: '0.8rem' }}
              bodyStyle={{ fontSize: '0.8rem' }}

            />
          ))}
        </DataTable>
      </div>
    </Fragment>
  )
}
