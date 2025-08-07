console.log("==================MAP==================")
/*
const numeros = [10, 13, 20, 8, 15] // Vetor incial
const dobros = numeros.map(num => num * 2)  // Cada número é obtido e multiplicado

console.log(dobros.join(", "))
*/

/*
const amigos = [{nome: "Ana", idade: 20},
 {nome: "Bruno", idade: 17},
 {nome: "Catia", idade: 25}]

const amigos2 = amigos.map(aux => ({nome: aux.nome, nasc: 2022 - aux.idade}))

for (const amigo of amigos2){
    console.log(`${amigo.nome} - Nasceu em: ${amigo.nasc}`)
}
*/

console.log("==================FILTER==================")
const numeros = [10, 13, 20, 8, 15]
const pares =  numeros.filter(num => num % 2 == 0)
console.log(pares.join(", "))

const amigos = [{nome: "Ana", idade: 20},
 {nome: "Bruno", idade: 17},
 {nome: "Catia", idade: 25}]

const amigos2 = amigos.filter(aux => aux.idade >= 21 || aux.nome.includes("B"))

for (const amigo of amigos2){
    console.log(`${amigo.nome} - Idade: ${amigo.idade} anos`)
}

if (amigos2.length == 0) {
    console.log("Não há amigos com essas condições...")
}