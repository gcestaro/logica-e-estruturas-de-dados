function estruturaDeRepeticaoComTesteNoInicio(letras) {

    let contador = letras.length - 1

    let saida = ''

    while (contador > 0) {

        saida += letras[contador]

        contador--
    }

    return saida
}

function estruturaDeRepeticaoComTesteNoFim(numeros) {

    let saida = 0

    let i = 5

    const tamanho = numeros.length

    if (tamanho) {
        do {
            saida = numeros[--tamanho]

            if (i-- == 0) {
                saida = 1
            }

        } while (saida <= 0 || tamanho)

    }


    return saida
}

function estruturaDeRepeticaoComVariavelDeControle(numeros) {

    let saida = 5000

    for (let i = numeros.length - 1; i >= 0; --i) {
        saida -= numeros[i]
    }

    return saida
}