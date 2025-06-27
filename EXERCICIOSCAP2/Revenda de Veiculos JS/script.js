const form = document.querySelector("form")
const resp1 = document.getElementById("outResp1")
const resp2= document.getElementById("outResp2")
const resp3 = document.getElementById("outResp3")

form.addEventListener("submit", (e) => {
    e.preventDefault()

    const veiculo = form.inVeiculo.value
    const preco = Number(form.inPreco.value)

    const entrada = preco / 2
    const parcelas = entrada / 12

    resp1.innerText = `Promoção: ${veiculo}`
    resp2.innerText = `Entrada de R$: ${entrada.toFixed(2)}`
    resp3.innerText = `+12x de R$${parcelas.toFixed(2)}`

})