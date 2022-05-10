/*
--------------------Exercicio - 1

let a = 10
let b = 10

console.log(b)

b = 5

console.log(a, b)

o b aparecera como 10 no primeiro, e como 5 no segundo por que usamos let, o que indica que o valor pode ser alterado, e foi.
o java roda codigo na ordem logo primeiro aparece o 10 e segundo 5

--------------------Exercicio - 2

let a = 10
let b = 20
c = a
b = c
a = b

console.log(a, b, c)

vai aparecer 10, 10, 10 ja que a = 10 e como o java roda o codigo na ordem a partir do momento que c = a 
as outras variaveis mudaram

--------------------Exercicio - 3

let p = prompt("Quantas horas você trabalha por dia?")
let t = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${t/p} por hora`)

horaTrabalhadasPorDia salarioPorDia */

// Exercícios de escrita de código

/*
 ------------ exercicio - 1

nome =
idade =

console.log(typeof nome)
console.log(typeof idade)

// undefined por que não foi definido valor

let nome = prompt ("Qual seu nome?")
let idade = prompt ("Qual sua idade?")

// deu um erro pois as variareis nome e idade estavam em cima e eu usei elas novamente em baixo

console.log(typeof nome)
console.log(typeof idade)

// eles aparecem como string por que o valores deles são texto

console.log("Ola", nome, "você tem", idade,"anos")*/


// exercicio 2

/*let roupa = ("Você esta usando roupa hoje?")
let dente = ("Você escovou os dentes hoje?")
let exercicio = ("Você se exercitou hoje??")

let respostaRoupa = ("Sim")
let respostaDente = ("Sim")
let respostaExercicio = ("Não")

console.log (roupa, "-", respostaRoupa)
console.log (dente, "-", respostaDente)
console.log(exercicio, "-", respostaExercicio)

*/

//Exercicio 3

let a = 10
let b = 25

c = b
b = a
a = c

console.log("O novo valor de a é", a)
console.log("O novo valor de b é", b)



