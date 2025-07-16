const form = document.querySelector("form");
const resp = document.querySelector("#outTempo");
const resp1 = document.querySelector("#outTroco");

form.addEventListener("submit", (e) => {
    e.preventDefault()

    const valor = Number(form.inValor.value)

    if (valor < 1 ) {
        alert ("Valor insuficiente!")
        return
    }

    let tempo
    let troco

    if (valor >= 3.00) {
        tempo = 120
        troco = valor - 3.00
    } else if (valor >= 1.75){
        tempo = 60
        troco = valor - 1.75
    } else {
        tempo = 30
        troco = valor - 1.00
    }

    resp.innerText = `Tempo: ${tempo} minutos`
    if (troco > 0) {
        resp1.innerText = `Troco R$: ${troco.toFixed(2)}`
    }
})