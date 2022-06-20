/* let array
console.log('a. ', array)

array = null
console.log('b. ', array)

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)

let i = 0
console.log('d. ', array[i])

array[i+1] = 19
console.log('e. ', array)

const valor = array[i+6]
console.log('f. ', valor) */

// a. undefided (pois não tem valor)
// b. null (pois o valor é nulo)
// c. 11 (pois tem 11 elementos na lista)
// d. 3 - i = 0, o elemento zero da lista é 3
// e. Array(11) ele troucou o elemento 1 da lista de 4 para 19
// f. 9 é o elemento 6 da lista

//--------------------------------------------------------------

/* const frase = prompt("Digite uma frase")

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length) */

// SUBI NUM ÔNIBUS EM MIRROCOS 27

//--------------------------------------------------------------

/* let nomeUsuario = prompt("Digite seu nome:")
let emailUsuario = prompt("Digite seu e-mail:")

console.log(`O e-mail ${emailUsuario} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeUsuario}`) */

//-----------------------------------------------------------------

/*let comidasFav = ["lasanha", "lamen", "cookie", "brigadeiro", "sopa"]
console.log(comidasFav);
console.log("Essas são as minhas comidas preferidas: ")
console.log(comidasFav[0])
console.log(comidasFav[1])
console.log(comidasFav[2])
console.log(comidasFav[3])
console.log(comidasFav[4])

let perguntaComFav = prompt("Qual sua comida favorita?")

respostaComFav = 0

comidasFav[respostaComFav+1] = perguntaComFav

console.log(comidasFav); */

//----------------------------------------------------------------

/* let listaDeTarefas = []

let perguntaLista1 = prompt("Fale uma tarefa que precisa fazer hoje")
let perguntaLista2 = prompt("Fale outra tarefa que precisa fazer hoje")
let perguntaLista3 = prompt("Fale uma ultima tarefa que precisa fazer hoje")

listaDeTarefas.push(perguntaLista1)
listaDeTarefas.push(perguntaLista2)
listaDeTarefas.push(perguntaLista3)

console.log(listaDeTarefas)

let tarefaConcluida = prompt("Você ja concluiu alguma dessas tarefas? se sim foi qual? (imdique com os numeros 0, 1 ou 2)")

listaDeTarefas.splice(tarefaConcluida, 1)
console.log(listaDeTarefas); */

/* let frase = prompt("fale uma frase")
let listaFrase = frase.split(" ")

console.log(listaFrase); */

const frutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]

const indice = frutas.indexOf("Abacaxi")

console.log(indice, frutas.length)