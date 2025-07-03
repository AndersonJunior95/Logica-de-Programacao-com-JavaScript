const prompt = require("prompt-sync")()

const wage = Number(prompt("Informe o salário do funcionário: "))
const time = Number(prompt("Tempo (anos): "))

const calculationTime = Math.floor(time / 4)
const calculationRecivable = (wage * calculationTime) / 100

console.log(`Quadrinêos = ${calculationTime}`)
console.log(`Salário Final R$: ${(wage + calculationRecivable).toFixed(2)}`)