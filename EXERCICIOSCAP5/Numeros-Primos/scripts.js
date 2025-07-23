const form = document.querySelector("form")
const resp = document.querySelector("h3")

form.addEventListener("submit", (event) => {
    event.preventDefault()

    const num = Number(form.inNumero.value)

    let numDivisores = 0 // Declara e inicializa contador

    for (let i = 1; i <= num; i++){ // Percore todos os possíveis divisores de num
        if (num % i == 0){ // Verifica se i (1, 2, 3...) é divisor de num
            numDivisores++ // se é, incrementa contador
        }
    }
    if (numDivisores == 2) { // Se possui apenas 2 divisores é primo
        resp.innerText = `${num} É primo`
    } else {
        resp.innerText = `${num} Não é primo`
    }
})

// Se quisermos otimizar o programa e ter uma boa economia no processamento ficaria assim:

/*

let temDivisor = 0 // Declara e inicializa a variável tipo flag

for (let i = 2; i <= num / 2; i++) { // Percorre os possíveis divisores do num
    if (num % i == 0) {
        temDivisor = 1  // Muda o flag
        break   // Saí da repetição
    }
}

if (num > 1 && !temDivisor){ // Se num > 1 e não possui divisor
    resp.innerText = `${num} É primo`
} else {
    resp.innerText = `${num} Não é primo`
}

*/