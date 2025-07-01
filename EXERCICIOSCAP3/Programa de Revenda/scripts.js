const prompt = require("prompt-sync")()
// Nome do Veiculo
const veiculo = prompt("Veiculo: ")

// Calculo do preço, entrada e parcela em 12x
const preco = Number(prompt("Preço R$: "))
const entrada = preco * 0.50
const parcela = (preco * 0.50) / 12


// Exibe no console a promoção, entrada e o valor em 12x
console.log(`Promoção: ${veiculo}`)
console.log(`Entrada de R$: ${entrada.toFixed(2)}`)
console.log(`+12x de R$: ${parcela.toFixed(2)}`)