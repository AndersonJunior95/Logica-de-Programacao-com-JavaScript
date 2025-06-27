const form = document.querySelector("form")
const resp1 = document.getElementById("outResp1")

form.addEventListener("submit", (e) =>{
    e.preventDefault()

    const valuePM = Number(form.inValue.value)
    const tempPermanence = Number(form.inPrice.value)

    const tempUse = Math.ceil(tempPermanence / 15) * valuePM

    resp1.innerText = `Valor a Pagar R$: ${tempUse.toFixed(2)}`
})