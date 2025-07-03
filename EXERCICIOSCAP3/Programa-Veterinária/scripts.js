const prompt = require("prompt-sync")()

const weigthFeed = Number(prompt("Peso da Ração (kg): "))
const consumptionDiary = Number(prompt("Consumo Diário (gr): "))

// Cáculo do peso da ração e seu tempo de duração 
const weigthGrams = weigthFeed * 1000
const durationTime = Math.floor(weigthGrams / consumptionDiary)

// Cálculo da sobra da ração
const surplus = weigthGrams % consumptionDiary

console.log(`Duração: ${durationTime} dias`)
console.log(`Sobra ${surplus}gr`)

