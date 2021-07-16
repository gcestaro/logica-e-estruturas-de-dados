function estruturasIndexadas() {

    let numeros = [1, 1, 2, 3, 5, 8, 13]

    let saida = 0

    for (let indice = 0; indice < numeros.length; indice++) {
        saida += numeros[indice]
    }

    return saida
}

function matrizes() {

    let numerosRomanosVsArabicos = [
        ['M', 'D', 'C', 'L', 'X', 'V', 'I'],
        [1000, 500, 100, 50, 10, 5, 1]
    ]

    let saida = ['Qual é qual?']

    for (let i = numerosRomanosVsArabicos.length - 1; i >= 0; i--) {
        saida[0] = numerosRomanosVsArabicos[0][i] + ', em romano, representa ' + numerosRomanosVsArabicos[1][i] + ' em arábico'
    }

    return saida.join('\n')
}