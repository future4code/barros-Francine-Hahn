```function calculaPrecoTotal(quantidade) {
  let precoMacas
  if (quantidade < 12) {
    precoMacas = quantidade * 1.3
  } else {
    precoMacas = quantidade
  }
  return precoMacas
}```