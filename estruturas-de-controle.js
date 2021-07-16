function entradaESaidaDeDados(entrada) {

    let saida = entrada + 1

    return saida
}

function estruturasDeSelecaoOuDecisaoSimples(entrada) {

    let saida = "Code?"

    // estrutura de selecao ou decisao simples
    if (entrada === "Code!") {
        saida = "Yeah! Let´s Code."
    }

    return saida
}

function estruturasDeSelecaoComposta(entrada) {

    let saida

    // estrutura de selecao ou decisao composta
    if (entrada === "Code!") {
        saida = "Yeah! Let´s Code."
    } else {
        saida = "Code?"
    }

    return saida
}

function estruturasDeSelecaoEncadeadaOuAninhada(a, b) {

    let saida

    if (a > 100) {
        // estrutura de selecao encadeada ou aninhada
        if (a % 2 == 0) {
            saida = b
        } else {
            saida = a
        }
    } else {
        saida = a + b
    }

    return saida
}

function estruturasDeSelecaoDeMultiplaEscolha(a) {

    let saida

    switch (a) {
        case 1:
        case 2:
            saida = "Com certeza é 1 ou 2"
        case 3:
            saida = "Acho que é 3"
        default:
            saida = "Provavelmente é " + a
    }

    return saida
}