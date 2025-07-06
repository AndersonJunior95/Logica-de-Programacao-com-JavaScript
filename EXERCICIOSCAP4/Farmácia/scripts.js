const prompt = require("prompt-sync")()

const compra = Number(prompt("Valor da compra: "))

const aux = Math.floor(compra / 20)

let parcelas

if (aux == 0){
    parcelas = 1
} else if (parcelas >=6){
    parcelas = 6
} else {
    parcelas = aux
}

const parcelasTotal = compra / parcelas

console.log(`Valor da Compra R$: ${compra}\ Pode pagar em ${parcelas} de R$${parcelasTotal.toFixed(2)}`)