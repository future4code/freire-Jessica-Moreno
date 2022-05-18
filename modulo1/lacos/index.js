// Exercícios de interpretação de código
//-----------------= Exercicio 1
// o codigo esta criando uma variavel de valor zero, e um laço para somar os valores na variavel  abaixo de 5 e parar, o resultado sera 10

//-----------------= Exercicio 2
//a. 19, 21, 23, 25, 27, 30
//b. não, vc precisaria ter uma variavel fora do for of, ai teria como acessar cada um deles

//-----------------= Exercicio 3
//va ser impressa 4 linhas cada uma com mais um asteristico começando com 1 *, **, ***, ****



//Exercícios de escrita de código
//-----------------= Exercicio 1

// let voceTemPet = Number(prompt("Você tem quantos pet's?"))
// let quantidadeDePet = voceTemPet
// let nomeDoPet = []
// if (quantidadeDePet == 0){
//         console.log("Que pena! Você pode adotar um pet!")
// } else if (quantidadeDePet > 0){
//     let i = 0
//     while (i < quantidadeDePet ){
//     nomeDoPet[i] = prompt("Fale o nome do seu pet")
//     i++
//     }
// }


// console.log(nomeDoPet)

//-----------------= Exercicio 2
// a.
let arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
for (const numero of arrayOriginal) {
    console.log(numero)
    
}
//b.
for (const numero of arrayOriginal) {
    console.log(numero / 10)
    
}

let arrayPares = []

for (const numero of arrayOriginal) {
    if (numero % 2 === 0 ){
        arrayPares.push(numero)
    }

}
console.log(arrayPares)


//-----------------= Exercicio 1