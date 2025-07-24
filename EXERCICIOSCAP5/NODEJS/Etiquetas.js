const PromptSync = require("prompt-sync");

const prompt = PromptSync()

const produto = prompt("Produto: ")
const etiquetas = Number(prompt("Nº de Etiquetas: "))

for (let i = 1; i <= etiquetas / 2; i++){
    console.log(`${produto.padEnd(30)} ${produto.padEnd(30)}`)
}
if (etiquetas % 2 == 1) {
    console.log(produto)
}