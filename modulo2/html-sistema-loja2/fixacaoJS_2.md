```function calculaPrecoTotal(quantidade) {
  let precoMaca
  if (quantidade < 12) {
    precoMaca = quantidade * 1.3
  } else {
    precoMaca = quantidade
  }
  return precoMaca
}```