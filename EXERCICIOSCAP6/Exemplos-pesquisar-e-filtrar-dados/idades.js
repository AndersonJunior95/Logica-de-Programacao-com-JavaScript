// O vetor sempre tem que retornar uma saída ao usuário quando não obtivermos o resultado da pesquisa que o usuário estiver fazendo

/*
const idades = [12, 20, 15, 17, 14]

for (const idade of idades) {
    if (idade >= 18) {
        console.log(idade)
    }
}
*/

const idades = [12, 16, 15, 17, 14]
let maiores = false

for (const idade of idades){
    if(idade >= 18){
        console.log(idade)
        maiores = true
    }
}

if (!maiores) {
    console.log("Não há idades maiores que 18 na lista")
}