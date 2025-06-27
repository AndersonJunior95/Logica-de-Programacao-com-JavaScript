const form = document.querySelector("form")
const resp1 = document.getElementById("outResp1")
const resp2 = document.getElementById("outResp2")

form.addEventListener("submit", (e) => {
    e.preventDefault()

    const product = form.inText.value
    const price = Number(form.inPrice.value)
    
    const onePromotion = (price * 3) - 3
    const twoPromotion = price / 2

    resp1.innerText = `${product} - Promoção leve 3 por ${onePromotion.toFixed(2)}`
    resp2.innerText = `O 3º producto custa apenas R$: ${twoPromotion.toFixed(2)}`
})