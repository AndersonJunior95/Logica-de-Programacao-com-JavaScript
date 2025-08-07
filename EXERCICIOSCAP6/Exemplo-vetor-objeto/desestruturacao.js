/*
const carros = [];

carros.push({modelo: "Sandero", preco: 46500})
carros.push({modelo: "Pálio", preco: 37800})

for (const carro of carros) {
    const {modelo, preco} = carro   // "desestrutura" objeto carro em modelo e preço
    console.log(`${modelo} - R$: ${preco}`)
}
*/

console.log("================================================================================")

// A desestruturação também pode ocorrer para obter os elementos de um array

/*
const pacientes = ["Ana", "Carlos", "Sofia"]
const [a, b , c] = pacientes

console.log(a)
console.log(b)
console.log(c)
*/

console.log("================================================================================")
// A desesturturação também pode desestruturar elementos de um vetor com uma parte dele sendo atribuída a outras variáveis

/*
const pacientes = ["Ana", "Carlos", "João", "Sofia"]
const [atender, proximo, ...outros] = pacientes

console.log(atender)
console.log(proximo)
console.log(outros)
*/

console.log("================================================================================")
const carro = { modelo: "Corsa", preco: 59500}
const carro2 = {...carro, ano: 2020}
console.log(carro2)
//{ modelo: "Corsa", preco: 59500}

console.log("================================================================================")
let pacientes = ["João", "Sofia"]
pacientes = ["Ana", ...pacientes]   // Acrescenta "Ana" no início do vetor
pacientes = [...pacientes, "Maria"] // Acrescenta "Maria" no final