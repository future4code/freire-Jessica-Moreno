/* const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado)

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) 

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado)

console.log("d. ", typeof resultado) */

// a. false pq um é true e outro e false, e o operador foi &&
// b. false pelo mesmo motivo
// c. true pq o operador ! devolve o oposto
// d. booleano por que o valor da variavel é de true ou false

//---------------------------------------------------------------

/* let primeiroNumero = prompt ("Digite um numero!")
let segundoNumero = prompt ("Digite outro numero!")

const soma = primeiroNumero + segundoNumero

console.log(soma) */

/* o problema é que o prompt devolve o resultado como string, logo não acontece a soma e sim a concatenação
aparecerar no console a um numero seguido do outro*/

/* para resolver isso diria para ele transformar o prompt em number ao em vez de string add o codigo
let primeiroNumero = Number (prompt ("Digite um numero!"))
let segundoNumero = Number (prompt ("Digite outro numero!"))

const soma = primeiroNumero + segundoNumero

console.log(soma) */

//-----------------------------------------------------------------
//Exercicio - 1

/*
let suaIdade = Number (prompt("Qual a sua idade?"))
let idadeMelhorAmigo = Number (prompt("Qual idade do seu melhor amigo?"))

console.log("Sua idade é maior do que o seu aigo? - " + suaIdade > idadeMelhorAmigo );
console.log(suaIdade - idadeMelhorAmigo);
 */

//-----------------------------------------------------------------

/*
let numeroPar = Number (prompt("Insira um numero par!"))
let resultado = numeroPar % 2
console.log(resultado); */

// ele sempre da zero
// ele sempre aparece 1


//----------------------------------------------------------------

/*
let idadeEmAnos = Number (prompt("Qual sua idade?"))
let idadeEmMeses = idadeEmAnos * 12
let idadeEmDias = idadeEmAnos * 365
let idadeEmHoras = idadeEmAnos * 8760

console.log("idade em meses é : " + idadeEmMeses);
console.log("idade em dias é : " + idadeEmDias);
console.log("idade em horas é : " + idadeEmHoras); */

//---------------------------------------------------------------

let numero1 = Number(prompt("Fale um numero."))
let numero2 = Number(prompt("Fale outro numero."))

let maiorQue = numero1 > numero2
let igualQue = numero1 === numero2
let divisivelPor = (numero1 % numero2) === 0
let divisivelPor2 = (numero2 % numero1) === 0

console.log(maiorQue);
console.log(igualQue)
console.log(divisivelPor)
console.log(divisivelPor2)

