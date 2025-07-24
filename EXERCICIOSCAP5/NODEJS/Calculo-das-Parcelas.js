const PromptSync = require("prompt-sync");

const prompt = PromptSync();

const valor = Number(prompt("Valor R$: "))
const nParcelas = Number(prompt("Nº de Parcelas: "))

const valorParcelas = Math.floor(valor / nParcelas) // Calcula o valor sem decimais
const valorFinal = valorParcelas + (valor % nParcelas)  // Calcula a parcela final

for (let i = 1; i <= nParcelas; i++){
    console.log(`${i}ª parcela: R${valorParcelas.toFixed(2)}`)
}
console.log(`${nParcelas}ª parcela: R$${valorFinal.toFixed(2)}`) // Última parcela