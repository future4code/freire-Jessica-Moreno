
````javaScript
function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
    let vezesQueAparece = 0

    for (let i = 0; i < arrayDeNumeros.length; i++) {
        if (arrayDeNumeros[i] === numeroEscolhido) {
            vezesQueAparece = vezesQueAparece + 1
        }
    }

    if (vezesQueAparece === 0) {
        return "Número não encontrado"
    } else {
        return `O número ${numeroEscolhido} aparece ${vezesQueAparece}x`
    }
}
````