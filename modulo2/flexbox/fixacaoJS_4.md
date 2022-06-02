```function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  let cont = 0
  for (let i = 0; i < arrayDeNumeros.length; i++) {
    if (numeroEscolhido === arrayDeNumeros[i]) {
      cont += 1
    }
  }
  if (cont === 0) {
    return 'Número não encontrado'
  } else {
    return `O número ${numeroEscolhido} aparece ${cont}x`
  }
}```