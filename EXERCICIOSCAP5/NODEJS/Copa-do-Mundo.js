const PromptSync = require("prompt-sync");

const prompt = PromptSync();

console.log("Programa anos de Copa do Mundo. Digite 0 para sair")
console.log("---------------------------------------------------")

do {
    const ano = Number(prompt("Ano:"))

    if (ano == 0){
        break
    } else if (ano >= 1942 && ano <= 1946){
        console.log(`Não houve copa do mundo no ano: ${ano} (Segunda guerra mundial)`)
    } else if (ano % 4 == 2) {
        console.log(`Houve copa do mundo no ano ${ano}`)
    } else {
        console.log(`Não houve copa do mundo no ano ${ano}`)
    }
} while (true)