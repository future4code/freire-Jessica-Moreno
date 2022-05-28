// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    array.sort(function(a , b) {
        return a -b
    })
    return array    
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    let arrayPares = array.filter((numero)=>{
        if (numero % 2 === 0){
            return true
        }
    })
    return arrayPares
  
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    let arrayPares = array.filter((numero)=>{
        if (numero % 2 === 0){
            return true
        }
    })
    let arrayElevada = arrayPares.map((numero)=>{
        return numero   ** 2
    })
    return arrayElevada
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    array.sort(function(a, b){
        return b - a
    })
    return array[0]
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    
    function maiorNumero (){
        if (num1 > num2){
            return num1
        }else  {return num2
        }
        
    }

    function maiorDivisivelPorMenor(){
        if (num1 > num2 && num1 % num2 === 0){
            return true
        } else if (num2 > num1 && num2 % num1 === 0){
            return true
        } else if (num1 === num2 && num1 % num2 === 0){
            return true
        } else if (num2 === num1 && num2 % num1 === 0){
            return true
        } else {
            return false
        }
    }
    
    function difereca(){
        if (num1 - num2 > 0){
            return num1 - num2
        } else {
            return num2 - num1
        }
    
    }
    let resultado = {
        maiorNumero: maiorNumero(),
        maiorDivisivelPorMenor: maiorDivisivelPorMenor(),
        diferenca: difereca(),

    }
    return resultado  
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    let pares = []
      for (let i = 0; i < n; i++) {
          pares.push(i*2)
     }
   return pares
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if (ladoA < ladoB && ladoB < ladoC && ladoA < ladoC){
        return "Escaleno"
    } else if (ladoA === ladoB && ladoB < ladoC){
        return "Isósceles"
    } else if (ladoA === ladoC && ladoB > ladoC){
        return "Isósceles"
    } else if (ladoB === ladoC && ladoA < ladoC){
        return "Isósceles"
    }else if (ladoA === ladoB && ladoB === ladoC){
        return "Equilátero"
    }

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    array.sort(function(a , b) {
        return b-a
    })
    return [array[1], array[array.length-2]]
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   let filme1 ={
       nome: 'O Diabo Veste Prada',
       ano: 2006,
       diretor: 'David Frankel',
       atores: ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci']
   }

   return `Venha assistir ao filme ${filme1.nome}, de ${filme1.ano}, dirigido por ${filme1.diretor} e estrelado por ${filme1.atores[0]}, ${filme1.atores[1]}, ${filme1.atores[2]}, ${filme1.atores[3]}.`
      
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   return  {...pessoa, nome:"ANÔNIMO"}     
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
    let pessoasAutorizadas = pessoas.filter((pessoas)=>{
        if (pessoas.idade > 14 && pessoas.idade < 60  && pessoas.altura >= 1.5){
            return true
        }
    })
    return pessoasAutorizadas 
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    let pessoasNaoAutorizadas = pessoas.filter((pessoas)=>{
        if (pessoas.idade <= 14 || pessoas.idade >= 60 ||   pessoas.altura < 1.5)
        return true
    })
  return pessoasNaoAutorizadas 
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
    let contasAtualizadas = 0
    for (let i = 0; i < contas.length; i++) {
        for (let x = 0; x < contas[i].compras.length; x++) {
            contasAtualizadas += contas[i].compras[x]

        }
        contas[i].saldoTotal -= contasAtualizadas 
        contas[i].compras = []       
        
    }
    return contas   

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
    return consultas.sort(function(a , b) {
        if (a.nome < b.nome){
            return -1
        }
        if (a.nome > b.nome){
            return 1
        }
        return 0

    })
    
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
    
   
}