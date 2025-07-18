const form = document.querySelector("form")
const resp = document.querySelector("pre")

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const numero = Number(form.inNumero.value)

    let resposta = ""

    // Criação de laço de repetição (i começa em 1 e é incrementado até 10)
    for(let i = 1; i <= 10; i++){
        resposta = resposta + numero + "x" + i + "=" + (numero * i) + "\n"
        // resposta = `${resposta}${numero} x ${i} = ${numero * i}\n`
    }
    resp.innerText = resposta
})