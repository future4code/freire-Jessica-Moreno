// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  const mensagemAltura = Number (prompt("Digite a altura de um retangulo"))
  const mensagemLargura = Number (prompt("Digite a largura do retangulo"))
  const resutadoRetangulo = mensagemAltura * mensagemLargura
  console.log(resutadoRetangulo)
 }
 

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  const mensagemAnoAtual = Number (prompt("Qual o ano atual?"))
  const mensagemAnoNascimento = Number (prompt("Qual o ano do seu nascimento?"))
  const idadeDoUsuario = mensagemAnoAtual - mensagemAnoNascimento
  console.log(idadeDoUsuario)

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  const imc = peso / (altura*altura)
  return imc

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  const nome = prompt("Digite seu nome")
  const idade = Number(prompt("Digite sua idade"))
  const email = prompt("Digite seu email")
  const mensagemInformacoes = `Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`
  console.log(mensagemInformacoes)

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const listaDeCores = []
  const corFav1 = prompt("Digite uma de suas cores favoritas")
  const corFav2 = prompt("Digite outra de suas cores favoritas")
  const corFav3 = prompt("Digite uma de suas cores favoritas")
  listaDeCores.push(corFav1, corFav2, corFav3)
  console.log(listaDeCores)

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  return string.toUpperCase()

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  const vendaMinima = custo / valorIngresso
  return vendaMinima

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  const string1Tamanho = string1.length
  const string2Tamanho = string2.length
  const stringsResultado = (string1Tamanho == string2Tamanho)
  return stringsResultado

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  return array[0]

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  return array[array.length -1]

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  const ultimoUElem = array[array.length -1]
  const primeiroElem = array[0]
  array[0] = ultimoUElem
  array[array.length -1] = primeiroElem
  return array

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  const resultadoDasStrings = string1.toUpperCase() == string2.toUpperCase()
  return resultadoDasStrings

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  const perguntaRG1 = Number (prompt("Qual o ano atual?"))
  const perguntaRG2 = Number (prompt("Qual seu ano de nascimento?"))
  const perguntaRG3 = Number (prompt("Em que ano emitiu o RG?"))

  const idadeUsuario =perguntaRG1 - perguntaRG2
  const idadeRGUsuario = perguntaRG1 - perguntaRG3
  
  const novoRGvinteanos = idadeUsuario <= 20 && idadeRGUsuario >= 5
  const novoRGcinquenta = idadeUsuario > 20 && idadeUsuario <= 50 && idadeRGUsuario >= 10
  const novoRGcinquentaMais = idadeUsuario > 50 && idadeRGUsuario >= 15

  console.log(novoRGvinteanos || novoRGcinquenta || novoRGcinquentaMais)
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
  const bissexto1 = ano % 4 == 0
  const bissexto2 = ano % 400 == 0
  const bissexto3 = ano % 100 == 0
  

  return bissexto1 && bissexto2 == bissexto3
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
  const maiorde18 = (prompt("Você tem mais de 18?"))
  const ensinoMedio = (prompt("Você tem o ensino medio completo"))
  const horarios = (prompt("Você possui disponibilidade exclusiva durante os horários do curso?"))
  
  const aprovado1 = maiorde18.toLowerCase() == "sim"
  const aprovado2 = ensinoMedio.toLowerCase() == "sim"
  const aprovado3 = horarios.toLowerCase() == "sim"

console.log(aprovado1 && aprovado2 && aprovado3)
}