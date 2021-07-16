function procedimento(a) {
    console.log(a)
}

function funcao(a) {
    return "Hmmmmm... " + a
}


function escopoDeVariaveis(numero) {

    let saida = 0

    if (numero % 2 == 1) {

        let segundoNumero = a + a

        if (segundoNumero % 4 == 0) {
            saida = numero
        } else {
            saida = segundoNumero
        }

    } else {
        let segundoNumero = Math.floor(numero / 2)

        if (segundoNumero % 2 == 0) {
            saida = numero
        } else {
            saida = segundoNumero
        }
    }

    return saida
}

function parametros(parametro1, parametro2, parametroN) {
    return "Eu posso usar todos esses parametros ai :)"
}