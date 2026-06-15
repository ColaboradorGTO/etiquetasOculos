import { lazy } from "react";

const loadComponent = (path, exportName) =>
  lazy(() =>
    import(`../components/${path}`).then((module) => ({
      default: module[exportName],
    }))
  );

export const componentsMap = {
    "/administrativo/ResumoDashBoardAdministrativo": loadComponent("../componets/Administrativo/ResumoAdministrativo/ResumoDashBoardAdministrativo"),
    "/administrativo/ActionPesquisaExtratoContaCorenteLoja": loadComponent("../components/Administrativo/ExtratoContaCorrenteLoja/ActionPesquisaExtratoContaCorenteLoja"),
    "/administrativo/ActionPesquisaRecebimentosLoja": loadComponent("../components/Administrativo/RecebimentosLoja/ActionPesquisaRecebimentosLoja"),
    "/administrativo/ActionPesquisaVendasMarca": loadComponent("../components/Administrativo/VendasMarca/ActionPesquisaVendasMarca"),
    "/administrativo/ActionPesquisaVendasDigitalMarca": loadComponent("../components/Administrativo/VendasDigitalMarca/ActionPesquisaVendasDigitalMarca"),
    "/administrativo/ActionPesquisaVendasVendedor": loadComponent("../components/Administrativo/VendasVendedor/ActionPesquisaVendasVendedor"),
    "/administrativo/ActionPesquisaVendasConvenio": loadComponent("../components/Administrativo/VendasConvenio/ActionPesquisaVendasConvenio"),
    "/administrativo/ActionPesquisaBalancoPorLoja": loadComponent("../components/Administrativo/BalancoPorLoja/ActionPesquisaBalancoPorLoja"),
    "/administrativo/ActionPesquisaBalancoAvulso": loadComponent("../components/Administrativo/BalancoAvulso/ActionPesquisaBalancoAvulso"),
    "/administrativo/ActionPesquisaProdutosPreco": loadComponent("../components/Administrativo/ProdutosPreco/ActionPesquisaProdutosPreco"),
    "/administrativo/ActionPesquisaAlterarVendaVendedor": loadComponent("../components/Administrativo/AlterarVendaVendedor/ActionPesquisaAlterarVendaVendedor"),
    "/administrativo/ActionPesquisaQuebraCaixaLoja": loadComponent("../components/Administrativo/QuebraCaixaLoja/ActionPesquisaQuebraCaixaLoja"),
    "/administrativo/ActionPesquisaVendas": loadComponent("../components/Administrativo/Vendas/ActionPesquisaVendas"),
    "/administrativo/ActionPesquisaConsultaVouchers": loadComponent("../components/Administrativo/ConsultaVouchers/ActionPesquisaConsultaVouchers"),
    "/administrativo/ActionPesquisaVoucherResumido": loadComponent("../components/Administrativo/VoucherResumido/ActionPesquisaVoucherResumido"),
    "/administrativo/ActionPesquisaEstoqueLoja": loadComponent("../components/Administrativo/EstoqueLoja/ActionPesquisaEstoqueLoja"),
    "/administrativo/ActionPesquisaVendasCanceladas": loadComponent("../components/Administrativo/VendasCanceladas/ActionPesquisaVendasCanceladas"),
    "/administrativo/ActionPesquisaVendasContigencia": loadComponent("../components/Administrativo/VendasContigencia/ActionPesquisaVendasContigencia"),
    "/administrativo/ActionPesquisaVendasDescontoFuncionario": loadComponent("../components/Administrativo/VendasDescontoFuncionario/ActionPesquisaVendasDescontoFuncionario"),
    "/administrativo/ActionPesquisaPrimeiroBalanco": loadComponent("../components/Administrativo/PrimeiroBalanco/ActionPesquisaPrimeiroBalanco"),
    "/administrativo/ActionPesquisaAlteracaoPreco": loadComponent("../components/Administrativo/AlteracaoPreco/ActionPesquisaAlteracaoPreco"),
    "/administrativo/ActionPesquisaVendasVouchers": loadComponent("../components/Administrativo/VendasVouchers/ActionPesquisaVendasVouchers"),
}