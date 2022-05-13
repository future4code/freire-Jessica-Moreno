// ------------Exercicio 1

/* function minhaFuncao(variavel) {
	return variavel * 5
}

minhaFuncao(2)
minhaFuncao(10) */

// a. 10 e 50
// b. não aconteceria nada par que não pedimos para imprimir no console



// ------------Exercicio 2

/* let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta) */

// a. to lower case para tudo em letra minuscula, includes para determinar se o texto tem a palavra cenoura, retornando no console true sem sim e false se não.

// b. i - true
//    ii - true
//    iii - true

// ------------------- exercicio escrita 1

// a.

/* 

function mensagem(){
    console.log("Eu sou Lila, tenho 30 anos, moro em Santo André e sou estudante.")
}

mensagem() */

// b.
/* const mensagem = (nome, idade, cidade, profissao) => {
    return `Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}.`
    
}
const msgcomp = mensagem("Lila", 30, "Santo André", "estudante")
console.log(msgcomp) */

// ---------------------- exercicio escrita 2

/* 
a. 
let somaDosNumeros = (num1, num2) =>{
    return num1 + num2
}
console.log(`a somados numeros é: ${somaDosNumeros(30, 30)}` ) */


/* 
b.
let diferencaNum = (num1, num2) =>{
    let maiorIgual = num1 >= num2
    return maiorIgual
}

console.log(diferencaNum(25,30) ) */

/*
c.
 let parNumero = (num1) =>{
    let descobrindoNumero = num1 % 2
    let numeroPar = descobrindoNumero == 0
    return numeroPar
}

console.log(parNumero(25) ) */


// d.
/* function fraseMaiuscula(frase) {
    
    return frase.toUpperCase()

}
let fraseamudar = ("eu amo bolacha")
let frasefinal = fraseMaiuscula(fraseamudar)
console.log( frasefinal)
console.log(frasefinal.length) */

let num1 = Number (prompt("Digite um numero"))
let num2 = Number (prompt("Digite outro numero"))


function soma(a, b) {
    let somafinal = (a + b)
    return somafinal
}
function subtracao(a, b){
    let subfinal = (a - b)
        return subfinal
}
function multiplicacao(a, b){
    let multfinal = (a * b)
        return multfinal
}
function divisao(a, b){
    let divifinal = (a / b)
        return divifinal
}

let resultadoSoma = soma(num1,num2)
let resultadoSub = subtracao(num1,num2)
let resultadoMult = multiplicacao(num1,num2)
let resultadoDiv = divisao(num1,num2)

console.log("Soma: ",resultadoSoma);
console.log(`Subtração: ${resultadoSub}`);
console.log(`Multiplicação: ${resultadoMult}`);
console.log(`Divisão: ${resultadoDiv}`);
