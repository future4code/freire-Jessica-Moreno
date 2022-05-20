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

    console.log("Boas vindas ao jogo de Blackjack!")

    if(confirm("Quer iniciar uma nova rodada?")){
      const compraCartaUsuario1 = comprarCarta();
      const compraCartaUsuario2 = comprarCarta();
      const compraCartaPC1 = comprarCarta();
      const compraCartaPC2 = comprarCarta();

      let pontuacaoDoUsuario = compraCartaUsuario1.valor + compraCartaUsuario2.valor
      let pontuacaoDoPC = compraCartaPC1.valor + compraCartaPC2.valor

      console.log("Suas cartas: ", compraCartaUsuario1.texto, compraCartaUsuario2.texto, " Pontuação: ", pontuacaoDoUsuario);
      console.log("Cartas do computador: ", compraCartaPC1.texto, compraCartaPC2.texto, " Pontuação: ",  pontuacaoDoPC);
      
      if(pontuacaoDoUsuario === pontuacaoDoPC){
         console.log("Empate!")
      }else if(pontuacaoDoUsuario > pontuacaoDoPC){
         console.log("O usuário ganhou!")
      }else if(pontuacaoDoUsuario < pontuacaoDoPC){
         console.log("O computador ganhou!")
      } 
   
   } else{console.log("O jogo acabou")}