// Exercícios de interpretação de código
//-----------------= Exercicio 1
/* const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

console.log(filme.elenco[0])
console.log(filme.elenco[filme.elenco.length - 1])
console.log(filme.transmissoesHoje[2])
 */

/* resposta
a. 
Matheus Machtergaele
Virginia Cavendish
object
canal Globo
horario 14h
*/


//-----------------= Exercicio 2

/* const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro)
console.log(gato)
console.log(tartaruga) */

/* resposta
a.
Juca , 3, SRD
Juba , 3, SRD
Jubo , 3, SRD
b.
puxa as informaçoes do primeiro objeto para os proximos
*/

//-----------------= Exercicio 3

/* function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender"))
console.log(minhaFuncao(pessoa, "altura")) */

/*resposta
a. false, undefined
b. por que pedimos só a propriedade backender, e por que não existe a propriedade altura.
*/


//Exercícios de escrita de código
//-----------------= Exercicio 1
//a.
/* const pessoa = {
    nome: "Lila",
    apelido: ["Li", "Lilona", "Lilac"]
}

function comoMeChamar(pessoa){
    return console.log(`Eu sou a ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelido[0]}, ${pessoa.apelido[1]}, ou ${pessoa.apelido[2]}`)
}

comoMeChamar(pessoa)

//b.
const novosApelidos ={
    ...pessoa,
    apelido: ["Lih", "Lilala", "lilali"]
}

comoMeChamar(novosApelidos) */


//-----------------= Exercicio 2

//a.
/* const pessoa = {
    nome:"Dalila",
    idade:64,
    profissao:"Advogada"
}
const pessoa2 = {...pessoa, nome:"Jose", idade: 65, profissao: "engenheiro"
}

//b.
function lista(objeto){
    array = [objeto.nome, objeto.nome.length, objeto.idade, objeto.profissao, objeto.profissao.length]
    return array
}

console.log(lista(pessoa2)); */


//-----------------= Exercicio 3

//a.

/* let carrinho = []*/

//b.

const fruta1 ={
    nome: "Pera",
    disponibilidade: true,
}
const fruta2 ={...fruta1, nome: "Abacate"}

const fruta3 ={...fruta1, nome: "Morango"}

//c.

/*function colocandoNoCarrinho(a,b,c){
    carrinho.push(a,b,c)
    return carrinho
}

//d.
console.log(colocandoNoCarrinho(fruta1,fruta2,fruta3)); */

//Desafio
// 1 -

/* function questionario(){
    const pessoa = {
        nome: prompt("Qual seu nome?"),
        idade: Number(prompt("qual sua idade?")),
        profissao: prompt("qual sua profissão")
    }
    return pessoa

}

console.log(questionario()); */

// 2 -

/* function filmes(){
    const filme1 = {
        lancamento: 1997,
        nome: "a vida é bela"
    }
    const filme2 = {...filme1, lancamento: 2015, nome:"Jurassic World"}

    const lancamento1 = filme1.lancamento > filme2.lancamento
    const lancamento2 = (filme1.lancamento <= filme2.lancamento) || (filme1.lancamento >= filme2.lancamento)
    console.log(`O primeiro filme foi lançado antes do segundo? ${lancamento1}`)
    console.log(`O primeiro filme foi lançado no mesmo ano do segundo?${lancamento2}`)

}

filmes() */

// 3

function disponibilidadeDaFruta(fruta){
    const novaDisponibilidade = {...fruta, disponibilidade: !fruta.disponibilidade}
    return novaDisponibilidade

}

console.log(disponibilidadeDaFruta(fruta1))
