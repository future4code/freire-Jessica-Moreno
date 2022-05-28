```javaScript
function calculaPrecoTotal(quantidade) {
  // Escreva seu código aqui
  let preco = 0
  if(quantidade>=12){
    preco = 1 * quantidade
  }else {
    preco = 1.30 * quantidade
  }
  return preco
}
```