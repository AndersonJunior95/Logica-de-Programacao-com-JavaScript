const form = document.querySelector("form")
const resp1 = document.getElementById("outResp1")
const resp2= document.getElementById("outResp2")

form.addEventListener("submit", (e) => {
    e.preventDefault()

    const produto = form.inProduto.value
    const preco = Number(form.inPreco.value)

    const promo = Math.floor(preco * 2)

    resp1.innerText = `Promoção de ${produto}`
    resp2.innerText = `Leve 2 por apenas R$: ${promo.toFixed(2)}`
})