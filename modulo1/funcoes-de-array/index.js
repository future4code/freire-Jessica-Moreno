// Exercícios de interpretação de código
//-----------------= Exercicio 1

//a. Sera impresso o nome, o indice e a array no console

//-----------------= Exercicio 2

//a. Sera impresso só o nome no console 

//-----------------= Exercicio 3

//a. Sera impresso todos os itens que não contenham chijo 

//Exercícios de escrita de código
//-----------------= Exercicio 1

// const pets = [
//     { nome: "Lupin", raca: "Salsicha"},
//     { nome: "Polly", raca: "Lhasa Apso"},
//     { nome: "Madame", raca: "Poodle"},
//     { nome: "Quentinho", raca: "Salsicha"},
//     { nome: "Fluffy", raca: "Poodle"},
//     { nome: "Caramelo", raca: "Vira-lata"},
//  ]
// //a.
//  const nomeDosPets = pets.map ((pet)=>{
//      return pet.nome

//  })
//  console.log(nomeDosPets);
// //a.
//  const petsRacaSalsicha = pets.filter ((pet)=>{
//      if (pet.raca === "Salsicha"){
//      return pet
//     }
//  })
//  console.log(petsRacaSalsicha);
//  //c.
//  const petsRacaPoodle = pets.filter((pet)=>{
//      if (pet.raca ==="Poodle"){
//          return pet
//      }
//  })

//  const promocaoTosa = petsRacaPoodle.map((pet)=>{
//      return `Você ganhou um cupom de desconto de 10% para tosar o/a ${pet.nome}!`
//  })
//  console.log(promocaoTosa);

//-----------------= Exercicio 2

// const produtos = [
//     { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
//     { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
//     { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
//     { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
//     { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
//     { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
//     { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
//     { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
//     { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
//     { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
//  ]

//  //a.

//  const nomeDosProdutos = produtos.map((produto)=>{
//      return produto.nome
//  })

//  //b.
//  const produtosComDesconto = produtos.map((produto) =>{
//      const desconto = produto.preco * 0.95
//      return {nome: produto.nome, preço: desconto.toFixed(2)}
//  })
// console.log(produtosComDesconto)

// //c.
// const produtosTipoBebida = produtos.filter((produto)=>{
//     if (produto.categoria === "Bebidas"){
//         return true
//     }
// })
// console.log(produtosTipoBebida);

// //d.

// const produtosYpe = produtos.filter((produto)=>{
//     return produto.nome.includes("Ypê")

// })
// console.log(produtosYpe)

// //e.
// const compreYpe = produtosYpe.map((produto)=>{
//     return `Compre ${produto.nome} por ${produto.preco}`
// })

// console.log(compreYpe);


//Desafio

//-----------------= Exercicio 1

const pokemons = [
    { nome: "Bulbasaur", tipo: "grama" },
    { nome: "Bellsprout", tipo: "grama" },
    { nome: "Charmander", tipo: "fogo" },
    { nome: "Vulpix", tipo: "fogo" },
    { nome: "Squirtle", tipo: "água" },
    { nome: "Psyduck", tipo: "água" },
 ]

//a. 
const pokemonEmOrdemAlfabetica = pokemons.sort((pokemon)=>{
    return pokemon
})

console.log(pokemonEmOrdemAlfabetica);

// const tiposDePokemon = pokemons.filter((pokemon)=>{
//     return pokemon.tipo
// })
// console.log(tiposDePokemon);