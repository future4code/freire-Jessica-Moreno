// Exercícios de interpretação de código
//-----------------= Exercicio 1
//a. o codigo pede ao usuario um numero, ele tem uma condição se o numero for par ou impar ira passar ou não no teste
//b. pares
//c. impares


//-----------------= Exercicio 2

//a. o codigo é um switch para o usuario saber o preço da fruta que ele perguntar
//b.2.25
//c. o preço da fruta pera é 5


//-----------------= Exercicio 3

//a. ela esta pedundo para o usuario digitar o primeiro numero
//b. se ele digitou 10, apareciria que o numero passou no teste. -10 não apareceria nenhuma mensagem, só um erro
//c. sim, por que não foi dada uma condição caso o numero fosse menor que 0


//Exercícios de escrita de código
//-----------------= Exercicio 1
//a. b.
// const idadeDirigir = Number(prompt("Qual a sua idade?"))
// //c.
// if (idadeDirigir >= 18) {
//     console.log("Você pode dirigir")
// } else {
//     console.log("Você não pode dirigir")
// }


//-----------------= Exercicio 2

// const horarioAula = prompt("Qual o horario da aula? Digite M = Manhã / V = Vespertino / N = Noite").toUpperCase()

// if (horarioAula === "M"){
//     console.log("Bom dia!")
// } else if (horarioAula === "V"){
//     console.log("Boa tarde!")
// } else if (horarioAula === "N"){
//     console.log("Boa noite")
// } else {
//     console.log("Digite um valor valido -> M, V ou N")
// }

//-----------------= Exercicio 3

// switch (horarioAula){
//     case "M":
//         console.log("Bom dia!")
//         break
//     case "V":
//         console.log("Boa tarde!")
//         break
//     case "N":
//         console.log("Boa noite!")
//         break
//     default:
//         console.log("Digite um valor valido -> M, V ou N");
//         break
// }

//-----------------= Exercicio 4

// const generoFilme = prompt("Qual genero de filme vamos assistir?").toLowerCase()
// const precoIngresso = Number(prompt("Qual o valor do ingresso?"))

// if (generoFilme === "fantasia" && precoIngresso < 15 ) {
//     console.log("Bom filme!")
// } else {
//     console.log("Escolha outro filme pfv :(")
// }

// //-----------------= Desafio


// 1

// const lanchinho = prompt("Qual snack você vai comprar?").toLowerCase

// switch (lanchinho){
//     case "pipoca":
//         console.log(`Aproveite a sua ${lanchinho}`)
//         break
//     case "bala":
//         console.log(`Aproveite a sua ${lanchinho}`)
//         break
//     case "chocolate":
//         console.log(`Aproveite o seu ${lanchinho}`)
//         break
// }

//2

const nomeCompleto = prompt("Digite seu nome completo")
const tipoDeJogo = prompt("Qual tipo de jogo quer assistir? (digite IN = internacional ou DO para domestico").toLocaleUpperCase()
const etapaDoJogo = prompt("Qual etapa do jogo? (digite SF para semi-final, DT para decisão de terceiro lugar, FI para final").toUpperCase()
const categoria = Number(prompt("Qual categoria? (1, 2, 3 ou 4"))
const quantidadeIngresso = Number(prompt("Quantos ingressos?"))

const ingressoSF = {
    categoria1: 1320,
    categoria2: 880,
    categoria3: 550,
    categoria4: 220,
}
const ingressoDT = {
    categoria1: 660,
    categoria2: 440,
    categoria3: 330,
    categoria4: 170,
}
const ingressoFI = {
    categoria1: 1980,
    categoria2: 1320,
    categoria3: 880,
    categoria4: 330,
}
console.log("---Dados da compra--- ")
console.log(`Nome do cliente: ${nomeCompleto}`)

switch (tipoDeJogo) {
    case "DO":
        console.log("Tipo do jogo: Nacional")
        break
    case "IN":
        console.log("Tipo do jogo: Internacional")
        break
    default:
        console.log("Escolha DO ou IN")
        break
}
switch (etapaDoJogo){
    case "SF":
     console.log("Etapa do jogo: Semi-final")
     break
    case "DT":
        console.log("Etapa do jogo: Decisão do 3º lugar")
        break
    case "FI":
    console.log("Etapa do jogo: Final");
}

switch (categoria){
    case 1:
        console.log(`Categoria: ${categoria}`)
        break
    case 2:
        console.log(`Categoria: ${categoria}`)
        break
    case 3:
        console.log(`Categoria: ${categoria}`)
        break
    case 4:
        console.log(`Categoria: ${categoria}`)
        break
    default:
        console.log(`Escolha 1, 2, 3 ou 4`)
        break
}

console.log(`Quantidade de Ingressos:  ${quantidadeIngresso} ingressos `);
console.log("---Valores---")

if (tipoDeJogo === "DO" && etapaDoJogo === "SF" && categoria === 1){
    const valorDoIngresso = ingressoSF.categoria1
    console.log(`Valor do ingresso:  R$ ${valorDoIngresso}`)
    console.log(`Valor total: R$` + valorDoIngresso * quantidadeIngresso)
} else if (tipoDeJogo === "DO" && etapaDoJogo === "SF" && categoria === 2){
    const valorDoIngresso = ingressoSF.categoria2
    console.log(`Valor do ingresso:  R$ ${valorDoIngresso}`)
    console.log(`Valor total: R$`+valorDoIngresso * quantidadeIngresso)
} else if (tipoDeJogo === "DO" && etapaDoJogo === "SF" && categoria === 3){
    const valorDoIngresso = ingressoSF.categoria3
    console.log(`Valor do ingresso:  R$ ${valorDoIngresso}`)
    console.log(`Valor total: R$`+valorDoIngresso * quantidadeIngresso)
} else if (tipoDeJogo === "DO" && etapaDoJogo === "SF" && categoria === 4){
    const valorDoIngresso = ingressoSF.categoria4
    console.log(`Valor do ingresso:  R$ ${valorDoIngresso}`)
    console.log(`Valor total: R$`+valorDoIngresso * quantidadeIngresso)
}

if (tipoDeJogo === "DO" && etapaDoJogo === "DT" && categoria === 1){
    const valorDoIngresso = ingressoDT.categoria1
    console.log(`Valor do ingresso:  R$ ${valorDoIngresso}`)
    console.log(`Valor total: R$`+valorDoIngresso * quantidadeIngresso)
} else if (tipoDeJogo === "DO" && etapaDoJogo === "DT" && categoria === 2){
    const valorDoIngresso = ingressoDT.categoria2
    console.log(`Valor do ingresso:  R$ ${valorDoIngresso}`)
    console.log(`Valor total: R$`+valorDoIngresso * quantidadeIngresso)
} else if (tipoDeJogo === "DO" && etapaDoJogo === "DT" && categoria === 3){
    const valorDoIngresso = ingressoDT.categoria3
    console.log(`Valor do ingresso:  R$ ${valorDoIngresso}`)
    console.log(`Valor total: R$`+valorDoIngresso * quantidadeIngresso)
} else if (tipoDeJogo === "DO" && etapaDoJogo === "DT" && categoria === 4){
    const valorDoIngresso = ingressoDT.categoria4
    console.log(`Valor do ingresso:  R$ ${valorDoIngresso}`)
    console.log(`Valor total: R$`+valorDoIngresso * quantidadeIngresso)

}
if (tipoDeJogo === "DO" && etapaDoJogo === "FI" && categoria === 1){
    const valorDoIngresso = ingressoFI.categoria1
    console.log(`Valor do ingresso:  R$ ${valorDoIngresso}`)
    console.log(`Valor total: R$`+valorDoIngresso * quantidadeIngresso)
} else if (tipoDeJogo === "DO" && etapaDoJogo === "FI" && categoria === 2){
    const valorDoIngresso = ingressoFI.categoria2
    console.log(`Valor do ingresso:  R$ ${valorDoIngresso}`)
    console.log(`Valor total: R$`+valorDoIngresso * quantidadeIngresso)
} else if (tipoDeJogo === "DO" && etapaDoJogo === "FI" && categoria === 3){
    const valorDoIngresso = ingressoFI.categoria3
    console.log(`Valor do ingresso:  R$ ${ingressoFI.categoria3}`)
    console.log(`Valor total: R$`+valorDoIngresso * quantidadeIngresso)
} else if (tipoDeJogo === "DO" && etapaDoJogo === "FI" && categoria === 4){
    const valorDoIngresso = ingressoFI.categoria4
    console.log(`Valor do ingresso:  R$ ${valorDoIngresso}`)
    console.log(`Valor total: R$`+valorDoIngresso * quantidadeIngresso)
}

//--------------------------------------------------------------------ingresso internacional

if (tipoDeJogo === "IN" && etapaDoJogo === "SF" && categoria === 1){
    const valorDoIngresso = ingressoSF.categoria1 / 4.1
    console.log(`Valor do ingresso:  R$ ${valorDoIngresso}`)
    console.log(`Valor total: R$` + valorDoIngresso * quantidadeIngresso)
} else if (tipoDeJogo === "IN" && etapaDoJogo === "SF" && categoria === 2){
    const valorDoIngresso = ingressoSF.categoria2 / 4.1
    console.log(`Valor do ingresso:  R$ ${valorDoIngresso}`)
    console.log(`Valor total: R$`+valorDoIngresso * quantidadeIngresso)
} else if (tipoDeJogo === "IN" && etapaDoJogo === "SF" && categoria === 3){
    const valorDoIngresso = ingressoSF.categoria3 / 4.1
    console.log(`Valor do ingresso:  R$ ${valorDoIngresso}`)
    console.log(`Valor total: R$`+valorDoIngresso * quantidadeIngresso)
} else if (tipoDeJogo === "IN" && etapaDoJogo === "SF" && categoria === 4){
    const valorDoIngresso = ingressoSF.categoria4 / 4.1
    console.log(`Valor do ingresso:  R$ ${valorDoIngresso}`)
    console.log(`Valor total: R$`+valorDoIngresso * quantidadeIngresso)
}

if (tipoDeJogo === "IN" && etapaDoJogo === "DT" && categoria === 1){
    const valorDoIngresso = ingressoDT.categoria1 / 4.1
    console.log(`Valor do ingresso:  R$ ${valorDoIngresso}`)
    console.log(`Valor total: R$`+valorDoIngresso * quantidadeIngresso)
} else if (tipoDeJogo === "IN" && etapaDoJogo === "DT" && categoria === 2){
    const valorDoIngresso = ingressoDT.categoria2 / 4.1
    console.log(`Valor do ingresso:  R$ ${valorDoIngresso}`)
    console.log(`Valor total: R$`+valorDoIngresso * quantidadeIngresso)
} else if (tipoDeJogo === "IN" && etapaDoJogo === "DT" && categoria === 3){
    const valorDoIngresso = ingressoDT.categoria3 / 4.1
    console.log(`Valor do ingresso:  R$ ${valorDoIngresso}`)
    console.log(`Valor total: R$`+valorDoIngresso * quantidadeIngresso)
} else if (tipoDeJogo === "IN" && etapaDoJogo === "DT" && categoria === 4){
    const valorDoIngresso = ingressoDT.categoria4 / 4.10
    console.log(`Valor do ingresso:  R$ ${valorDoIngresso}`)
    console.log(`Valor total: R$`+valorDoIngresso * quantidadeIngresso)

}
if (tipoDeJogo === "IN" && etapaDoJogo === "FI" && categoria === 1){
    const valorDoIngresso = ingressoFI.categoria1 / 4.1
    console.log(`Valor do ingresso:  R$ ${valorDoIngresso}`)
    console.log(`Valor total: R$`+valorDoIngresso * quantidadeIngresso)
} else if (tipoDeJogo === "IN" && etapaDoJogo === "FI" && categoria === 2){
    const valorDoIngresso = ingressoFI.categoria2 / 4.1
    console.log(`Valor do ingresso:  R$ ${valorDoIngresso}`)
    console.log(`Valor total: R$`+valorDoIngresso * quantidadeIngresso)
} else if (tipoDeJogo === "IN" && etapaDoJogo === "FI" && categoria === 3){
    const valorDoIngresso = ingressoFI.categoria3 / 4.1
    console.log(`Valor do ingresso:  R$ ${ingressoFI.categoria3}`)
    console.log(`Valor total: R$`+valorDoIngresso * quantidadeIngresso)
} else if (tipoDeJogo === "IN" && etapaDoJogo === "FI" && categoria === 4){
    const valorDoIngresso = ingressoFI.categoria4 / 4.1
    console.log(`Valor do ingresso:  R$ ${valorDoIngresso}`)
    console.log(`Valor total: R$`+valorDoIngresso * quantidadeIngresso)
}