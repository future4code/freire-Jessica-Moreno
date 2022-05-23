/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
let cartaUsuario = []
let cartaPc = []
let pontosUsuario = 0
let pontosPc = 0

console.log("Boas Vindas ao Jogo Blackjack!");

if(confirm("Boas Vindas ao Jogo Blackjack! \nQuer iniciar o jogo?")){

//se as cartas forem ases

   let comecarJogo = true
   while (!comecarJogo)
   cartaUsuario.push(comprarCarta())
   cartaUsuario.push(comprarCarta())
   cartaUsuario.push(comprarCarta())
   cartaPc.push(comprarCarta())
   cartaPc.push(comprarCarta())

   if ((cartaUsuario[0] === 11 && cartaUsuario[1] === 11) || (cartaPc[0] === 11 && cartaPc[1] === 11)){
      cartaUsuario= []
      cartaPc =[]
   }else {
      comecarJogo = false
   }
  
   // sem isso não consigo imprimir as duas cartas da erro
   let textoCartas = ""

   //      BARALHO  
   for (let carta of cartaUsuario){
      textoCartas += carta.texto + " "
   }
   // teste console.log(textoCartas);   
   
   for (let cartas = 0; cartas < cartaUsuario.length; cartas++) {
      pontosUsuario += cartaUsuario[cartas].valor;
   }

   for (let cartas = 0; cartas < cartaPc.length; cartas++) {
      pontosPc += cartaPc[cartas].valor;
   }
   console.log(textoCartas, pontosUsuario);



   let continuaComprando = true
   let comprarMais1 = true

   while (continuaComprando){
      if (pontosUsuario > 21){
         continuaComprando = false
      }else {
         let comprarMais1 = confirm(`Suas cartas são ${textoCartas}.\nSeus pontos são ${pontosUsuario} \nA primeira carta do computador é ${cartaPc[0].texto}.\nDeseja comprar mais uma carta?`)
      }
      if (comprarMais1) {
         cartaUsuario.push(comprarCarta())
      }else {
         comprarMais1 = false
      }

      
   }
   









}else {
   alert("O jogo acabou!");
   console.log("O jogo acabou!");
}
