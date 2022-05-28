```javaScript
function calculaNota(ex, p1, p2) {
  let somaDasNotas = ex + (p1 * 2) + (p2 * 3)
  let notaFinal = somaDasNotas / 6
  if (notaFinal < 6){
    return "D"
  }else if (notaFinal === 6 || notaFinal <7.5){
    return "C"
  }else if (notaFinal === 7.5 || notaFinal < 9){
    return "B"
  } else if (notaFinal >= 9){
    return "A"
  }
}
```