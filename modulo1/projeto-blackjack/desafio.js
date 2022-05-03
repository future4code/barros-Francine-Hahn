/*
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 */

while(true) {
   let cartasUsuário = []
   let textoCartasUsuário = []
   let cartasComputador = []
   let textoCartasComputador = []
   let somaCartasUsuário = 0
   let somaCartasComputador = 0
   //Início da rodada
   let iniciarRodada = confirm(`Boas vindas ao jogo de Blackjack!
Quer iniciar uma nova rodada?`)
   if (iniciarRodada == true) {
      //Sorteio cartas do usuário
      cartasUsuário.push(comprarCarta())
      cartasUsuário.push(comprarCarta())
      //As cartas não podem ser dois "As", senão devem ser sorteadas novamente.
      if (cartasUsuário[0].valor === 11 && cartasUsuário[1].valor === 11) {
         while (cartasUsuário[0].valor === 11 && cartasUsuário[1].valor === 11) {
            cartasUsuário[0] = comprarCarta()
            cartasUsuário[1] =comprarCarta()
         }
      }
      //Sorteio cartas do computador
      cartasComputador.push(comprarCarta())
      cartasComputador.push(comprarCarta())
      //As cartas não podem ser dois "As", senão devem ser sorteadas novamente.
      if (cartasComputador[0].valor === 11 && cartasComputador[1].valor === 11) {
         while (cartasComputador[0].valor === 11 && cartasComputador[1].valor === 11) {
            cartasComputador[0] = comprarCarta()
            cartasComputador[1] =comprarCarta()
         }
      }
      // Criação de uma lista com o texto das cartas do usuário
      textoCartasUsuário.push(cartasUsuário[0].texto)
      textoCartasUsuário.push(cartasUsuário[1].texto)
      // Criação de uma lista com o texto das cartas do computador
      textoCartasComputador.push(cartasComputador[0].texto)
      textoCartasComputador.push(cartasComputador[1].texto)
      //Caso o usuário queira comprar mais cartas:
      while (somaCartasUsuário < 22) {
         //Soma dos valores das cartas do usuário
         somaCartasUsuário = 0
         for (let i = 0; i < cartasUsuário.length; i++) {
            somaCartasUsuário += cartasUsuário[i].valor 
         }
         let comprarMaisCarta = confirm(`Suas cartas são ${textoCartasUsuário.join(' ')}. A carta revelada do computador é ${cartasComputador[0].texto}.
Deseja comprar mais uma carta?`)
         if (comprarMaisCarta == true && somaCartasUsuário < 22) {
            cartasUsuário.push(comprarCarta())
            textoCartasUsuário.push(cartasUsuário[cartasUsuário.length -1].texto)
         } else {
            break
         }
      }
      //Soma das cartas do computador
      for (let c = 0; c < cartasComputador.length; c++) {
         somaCartasComputador += cartasComputador[c].valor 
      }
      //Vez do computador! Só ocorre se a soma das cartas do usuário forem menor ou igual a 21.
      if (somaCartasUsuário <= 21) {
         while (somaCartasComputador <= somaCartasUsuário) {
            cartasComputador.push(comprarCarta())
            textoCartasComputador.push(cartasComputador[cartasComputador.length -1].texto)
            somaCartasComputador += cartasComputador[cartasComputador.length -1].valor
         }
         if (somaCartasUsuário > somaCartasComputador) {
            alert(`Suas cartas são ${textoCartasUsuário.join(' ')}. Sua pontuação é ${somaCartasUsuário}.
As cartas do computador são ${textoCartasComputador.join(' ')}. A pontuação do computador é ${somaCartasComputador}.
O usuário ganhou!`)
         } else if (somaCartasUsuário < somaCartasComputador && somaCartasComputador < 22) {
            alert(`Suas cartas são ${textoCartasUsuário.join(' ')}. Sua pontuação é ${somaCartasUsuário}.
As cartas do computador são ${textoCartasComputador.join(' ')}. A pontuação do computador é ${somaCartasComputador}.
O computador ganhou!`)
         } else if (somaCartasUsuário < somaCartasComputador && somaCartasComputador > 21) {
            alert(`Suas cartas são ${textoCartasUsuário.join(' ')}. Sua pontuação é ${somaCartasUsuário}.
As cartas do computador são ${textoCartasComputador.join(' ')}. A pontuação do computador é ${somaCartasComputador}.
O usuário ganhou!`)
         } else {
            alert(`Suas cartas são ${textoCartasUsuário.join(' ')}. Sua pontuação é ${somaCartasUsuário}.
As cartas do computador são ${textoCartasComputador.join(' ')}. A pontuação do computador é ${somaCartasComputador}.
Empate!`)
         }
      //Caso o usuário atinge a soma dos valores acima de 21, perde o jogo.
      } else {
         alert(`Suas cartas são ${textoCartasUsuário.join(' ')}. Sua pontuação é ${somaCartasUsuário}.
As cartas do computador são ${textoCartasComputador.join(' ')}. A pontuação do computador é ${somaCartasComputador}.
O computador ganhou!`)
      }
   } else {
      //Fim do jogo
      alert('O jogo acabou')
      break
   }
}
