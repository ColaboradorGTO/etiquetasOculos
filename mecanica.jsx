
export const optionsMecanica = [
    {
        value: 1,
        label: "PROMOÇÃO POR PARES // QUANTIDADE // PERCENTUAL DESCONTO",
        aplicacaoDestino: 0,
        mecanica: 2,
        tipoDesconto: 2,
        color: "blue"
    },
    {
        value: 2,
        label: "PROMOÇÃO POR TODOS OS PRODUTOS // QUANTIDADE // PERCENTUAL DESCONTO",
        aplicacaoDestino: 1,
        mecanica: 2,
        tipoDesconto: 2,
        color: "green"
    },
    {
        value: 3,
        label: "PROMOÇÃO POR MENOS NA PRIMEIRA // QUANTIDADE // PERCENTUAL DESCONTO",
        aplicacaoDestino: 3,
        mecanica: 2,
        tipoDesconto: 2,
        color: "yellowGreen"
    },
    {
        value: 4,
        label: "PROMOÇÃO POR EM UM PRODUTO // QUANTIDADE // PERCENTUAL DESCONTO",
        aplicacaoDestino: 4,
        mecanica: 2,
        tipoDesconto: 2,
        color: "purple"
    },

    {
        value: 5,
        label: "PROMOÇÃO POR PARES // VALOR // PERCENTUAL DESCONTO",
        aplicacaoDestino: 0,
        mecanica: 1,
        tipoDesconto: 2,
        color: "orange"
    },
    {
        value: 6,
        label: "PROMOÇÃO POR TODOS OS PRODUTOS // VALOR // PERCENTUAL DESCONTO",
        aplicacaoDestino: 1,
        mecanica: 1,
        tipoDesconto: 2,
        color: "pink"
    },
    {
        value: 7,
        label: "PROMOÇÃO POR MENOS NA PRIMEIRA // VALOR // PERCENTUAL DESCONTO",
        aplicacaoDestino: 3,
        mecanica: 1,
        tipoDesconto: 2,
        color: "brown"
    },
    {
        value: 8,
        label: "PROMOÇÃO POR EM UM PRODUTO // VALOR // PERCENTUAL DESCONTO",
        aplicacaoDestino: 4,
        mecanica: 1,
        tipoDesconto: 2,
        color: "gray"
    },

    {
        value: 9,
        label: "PROMOÇÃO POR PARES // VALOR // VALOR DESCONTO",
        aplicacaoDestino: 0,
        mecanica: 1,
        tipoDesconto: 1,
        color: "teal"
    },
    {
        value: 10,
        label: "PROMOÇÃO POR TODOS OS PRODUTOS // VALOR // VALOR DESCONTO",
        aplicacaoDestino: 1,
        mecanica: 1,
        tipoDesconto: 1,
        color: "lime"
    },
    {
        value: 11,
        label: "PROMOÇÃO POR MENOS NA PRIMEIRA // VALOR // VALOR DESCONTO",
        aplicacaoDestino: 3,
        mecanica: 1,
        tipoDesconto: 1,
        color: "maroon"
    },
    {
        value: 12,
        label: "PROMOÇÃO POR EM UM PRODUTO // VALOR // VALOR DESCONTO",
        aplicacaoDestino: 4,
        mecanica: 1,
        tipoDesconto: 1,
        color: "olive"
    },

    {
        value: 13,
        label: "PROMOÇÃO POR PARES // QUANTIDADE // VALOR FINAL",
        aplicacaoDestino: 0,
        mecanica: 2,
        tipoDesconto: 0,
        color: "silver"
    },
    {
        value: 14,
        label: "PROMOÇÃO POR TODOS OS PRODUTOS // QUANTIDADE // VALOR FINAL",
        aplicacaoDestino: 1,
        mecanica: 2,
        tipoDesconto: 0,
        color: "blueviolet"
    },
    {
        value: 15,
        label: "PROMOÇÃO POR MENOS NA PRIMEIRA // QUANTIDADE // VALOR FINAL",
        aplicacaoDestino: 3,
        mecanica: 2,
        tipoDesconto: 0,
        color: "limegreen"
    },
    {
        value: 16,
        label: "PROMOÇÃO POR EM UM PRODUTO // QUANTIDADE // VALOR FINAL",
        aplicacaoDestino: 4,
        mecanica: 2,
        tipoDesconto: 0,
        color: "coral"
    },

    {
        value: 17,
        label: "PROMOÇÃO POR PARES // QUANTIDADE // VALOR DESCONTO",
        aplicacaoDestino: 0,
        mecanica: 2,
        tipoDesconto: 1,
        color: "indigo"
    },
    {
        value: 18,
        label: "PROMOÇÃO POR TODOS OS PRODUTOS // QUANTIDADE // VALOR DESCONTO",
        aplicacaoDestino: 1,
        mecanica: 2,
        tipoDesconto: 1,
        color: "crimson"
    },
    {
        value: 19,
        label: "PROMOÇÃO POR MENOS NA PRIMEIRA // QUANTIDADE // VALOR DESCONTO",
        aplicacaoDestino: 3,
        mecanica: 2,
        tipoDesconto: 1,
        color: "darkviolet"
    },
    {
        value: 20,
        label: "PROMOÇÃO POR EM UM PRODUTO // QUANTIDADE // VALOR DESCONTO",
        aplicacaoDestino: 4,
        mecanica: 2,
        tipoDesconto: 1,
        color: "darkslategray"
    },
    {
        value: 21,
        label: "PROMOÇÃO POR EM UM PRODUTO // QUANTIDADE VALOR // VALOR FINAL",
        aplicacaoDestino: 4,  // ✅ TPAPARTIRDE = 4
        mecanica: 1,          // ✅ TPAPLICADOA = 1
        tipoDesconto: 0,      // ✅ TPFATORPROMO = 0  
        color: "navy"
    }
]

/**
 * Todas as 30 combinações possíveis de mecânicas de promoção
 * 2 (TPAPLICADOA) × 5 (TPAPARTIRDE) × 3 (TPFATORPROMO) = 30 mecânicas
 * 
 * TPAPLICADOA: 1 = Valor, 2 = Quantidade
 * TPAPARTIRDE: 0 = Pares, 1 = Todos, 2 = Último, 3 = Menos primeira, 4 = Um produto
 * TPFATORPROMO: 0 = Valor final, 1 = Valor desconto, 2 = Percentual desconto
 */
export const optionsMecanicaCompleta = [
  // QUANTIDADE (mecanica: 2) + PERCENTUAL DESCONTO (tipoDesconto: 2)
  {
    value: 1,
    label: "PROMOÇÃO POR PARES // QUANTIDADE // PERCENTUAL DESCONTO",
    aplicacaoDestino: 0,
    mecanica: 2,
    tipoDesconto: 2,
    color: "blue"
  },
  {
    value: 2,
    label: "PROMOÇÃO POR TODOS OS PRODUTOS // QUANTIDADE // PERCENTUAL DESCONTO",
    aplicacaoDestino: 1,
    mecanica: 2,
    tipoDesconto: 2,
    color: "green"
  },
  {
    value: 3,
    label: "PROMOÇÃO POR ÚLTIMO APÓS ENTRADA // QUANTIDADE // PERCENTUAL DESCONTO",
    aplicacaoDestino: 2,
    mecanica: 2,
    tipoDesconto: 2,
    color: "cyan"
  },
  {
    value: 4,
    label: "PROMOÇÃO POR MENOS NA PRIMEIRA // QUANTIDADE // PERCENTUAL DESCONTO",
    aplicacaoDestino: 3,
    mecanica: 2,
    tipoDesconto: 2,
    color: "yellowGreen"
  },
  {
    value: 5,
    label: "PROMOÇÃO EM UM PRODUTO // QUANTIDADE // PERCENTUAL DESCONTO",
    aplicacaoDestino: 4,
    mecanica: 2,
    tipoDesconto: 2,
    color: "purple"
  },

  // QUANTIDADE (mecanica: 2) + VALOR DESCONTO (tipoDesconto: 1)
  {
    value: 6,
    label: "PROMOÇÃO POR PARES // QUANTIDADE // VALOR DESCONTO",
    aplicacaoDestino: 0,
    mecanica: 2,
    tipoDesconto: 1,
    color: "indigo"
  },
  {
    value: 7,
    label: "PROMOÇÃO POR TODOS OS PRODUTOS // QUANTIDADE // VALOR DESCONTO",
    aplicacaoDestino: 1,
    mecanica: 2,
    tipoDesconto: 1,
    color: "crimson"
  },
  {
    value: 8,
    label: "PROMOÇÃO POR ÚLTIMO APÓS ENTRADA // QUANTIDADE // VALOR DESCONTO",
    aplicacaoDestino: 2,
    mecanica: 2,
    tipoDesconto: 1,
    color: "darkred"
  },
  {
    value: 9,
    label: "PROMOÇÃO POR MENOS NA PRIMEIRA // QUANTIDADE // VALOR DESCONTO",
    aplicacaoDestino: 3,
    mecanica: 2,
    tipoDesconto: 1,
    color: "darkviolet"
  },
  {
    value: 10,
    label: "PROMOÇÃO EM UM PRODUTO // QUANTIDADE // VALOR DESCONTO",
    aplicacaoDestino: 4,
    mecanica: 2,
    tipoDesconto: 1,
    color: "darkslategray"
  },

  // QUANTIDADE (mecanica: 2) + VALOR FINAL (tipoDesconto: 0)
  {
    value: 11,
    label: "PROMOÇÃO POR PARES // QUANTIDADE // VALOR FINAL",
    aplicacaoDestino: 0,
    mecanica: 2,
    tipoDesconto: 0,
    color: "silver"
  },
  {
    value: 12,
    label: "PROMOÇÃO POR TODOS OS PRODUTOS // QUANTIDADE // VALOR FINAL",
    aplicacaoDestino: 1,
    mecanica: 2,
    tipoDesconto: 0,
    color: "blueviolet"
  },
  {
    value: 13,
    label: "PROMOÇÃO POR ÚLTIMO APÓS ENTRADA // QUANTIDADE // VALOR FINAL",
    aplicacaoDestino: 2,
    mecanica: 2,
    tipoDesconto: 0,
    color: "mediumpurple"
  },
  {
    value: 14,
    label: "PROMOÇÃO POR MENOS NA PRIMEIRA // QUANTIDADE // VALOR FINAL",
    aplicacaoDestino: 3,
    mecanica: 2,
    tipoDesconto: 0,
    color: "limegreen"
  },
  {
    value: 15,
    label: "PROMOÇÃO EM UM PRODUTO // QUANTIDADE // VALOR FINAL",
    aplicacaoDestino: 4,
    mecanica: 2,
    tipoDesconto: 0,
    color: "coral"
  },

  // VALOR (mecanica: 1) + PERCENTUAL DESCONTO (tipoDesconto: 2)
  {
    value: 16,
    label: "PROMOÇÃO POR PARES // VALOR // PERCENTUAL DESCONTO",
    aplicacaoDestino: 0,
    mecanica: 1,
    tipoDesconto: 2,
    color: "orange"
  },
  {
    value: 17,
    label: "PROMOÇÃO POR TODOS OS PRODUTOS // VALOR // PERCENTUAL DESCONTO",
    aplicacaoDestino: 1,
    mecanica: 1,
    tipoDesconto: 2,
    color: "pink"
  },
  {
    value: 18,
    label: "PROMOÇÃO POR ÚLTIMO APÓS ENTRADA // VALOR // PERCENTUAL DESCONTO",
    aplicacaoDestino: 2,
    mecanica: 1,
    tipoDesconto: 2,
    color: "lightcoral"
  },
  {
    value: 19,
    label: "PROMOÇÃO POR MENOS NA PRIMEIRA // VALOR // PERCENTUAL DESCONTO",
    aplicacaoDestino: 3,
    mecanica: 1,
    tipoDesconto: 2,
    color: "brown"
  },
  {
    value: 20,
    label: "PROMOÇÃO EM UM PRODUTO // VALOR // PERCENTUAL DESCONTO",
    aplicacaoDestino: 4,
    mecanica: 1,
    tipoDesconto: 2,
    color: "gray"
  },

  // VALOR (mecanica: 1) + VALOR DESCONTO (tipoDesconto: 1)
  {
    value: 21,
    label: "PROMOÇÃO POR PARES // VALOR // VALOR DESCONTO",
    aplicacaoDestino: 0,
    mecanica: 1,
    tipoDesconto: 1,
    color: "teal"
  },
  {
    value: 22,
    label: "PROMOÇÃO POR TODOS OS PRODUTOS // VALOR // VALOR DESCONTO",
    aplicacaoDestino: 1,
    mecanica: 1,
    tipoDesconto: 1,
    color: "lime"
  },
  {
    value: 23,
    label: "PROMOÇÃO POR ÚLTIMO APÓS ENTRADA // VALOR // VALOR DESCONTO",
    aplicacaoDestino: 2,
    mecanica: 1,
    tipoDesconto: 1,
    color: "lightgreen"
  },
  {
    value: 24,
    label: "PROMOÇÃO POR MENOS NA PRIMEIRA // VALOR // VALOR DESCONTO",
    aplicacaoDestino: 3,
    mecanica: 1,
    tipoDesconto: 1,
    color: "maroon"
  },
  {
    value: 25,
    label: "PROMOÇÃO EM UM PRODUTO // VALOR // VALOR DESCONTO",
    aplicacaoDestino: 4,
    mecanica: 1,
    tipoDesconto: 1,
    color: "olive"
  },

  // VALOR (mecanica: 1) + VALOR FINAL (tipoDesconto: 0)
  {
    value: 26,
    label: "PROMOÇÃO POR PARES // VALOR // VALOR FINAL",
    aplicacaoDestino: 0,
    mecanica: 1,
    tipoDesconto: 0,
    color: "steelblue"
  },
  {
    value: 27,
    label: "PROMOÇÃO POR TODOS OS PRODUTOS // VALOR // VALOR FINAL",
    aplicacaoDestino: 1,
    mecanica: 1,
    tipoDesconto: 0,
    color: "darkturquoise"
  },
  {
    value: 28,
    label: "PROMOÇÃO POR ÚLTIMO APÓS ENTRADA // VALOR // VALOR FINAL",
    aplicacaoDestino: 2,
    mecanica: 1,
    tipoDesconto: 0,
    color: "cadetblue"
  },
  {
    value: 29,
    label: "PROMOÇÃO POR MENOS NA PRIMEIRA // VALOR // VALOR FINAL",
    aplicacaoDestino: 3,
    mecanica: 1,
    tipoDesconto: 0,
    color: "darkslateblue"
  },
  {
    value: 30,
    label: "PROMOÇÃO EM UM PRODUTO // VALOR // VALOR FINAL",
    aplicacaoDestino: 4,
    mecanica: 1,
    tipoDesconto: 0,
    color: "navy"
  }
];

