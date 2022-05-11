/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 */

console.log('Boas vindas ao jogo de Blackjack!')
while(true) {
   let iniciarRodada = confirm('Quer iniciar uma nova rodada?')
   if (iniciarRodada == true) {
      let cartaUsuário1 = comprarCarta()
      let cartaUsuário2 = comprarCarta()
      let cartaComputador1 = comprarCarta()
      let cartaComputador2 = comprarCarta()
      console.log(`Usuário - cartas: ${cartaUsuário1.texto} ${cartaUsuário2.texto} - pontuação ${cartaUsuário1.valor + cartaUsuário2.valor}`)
      console.log(`Computador - cartas: ${cartaComputador1.texto} ${cartaComputador2.texto} - pontuação ${cartaComputador1.valor + cartaComputador2.valor}`)
      if (cartaUsuário1.valor + cartaUsuário2.valor > cartaComputador1.valor + cartaComputador2.valor) {
         console.log('O usuário ganhou!')
      } else if (cartaUsuário1.valor + cartaUsuário2.valor < cartaComputador1.valor + cartaComputador2.valor) {
         console.log('O computador ganhou!')
      } else {
         console.log('Empate!')
      }
   } else {
      console.log('O jogo acabou')
      break
   }
}







