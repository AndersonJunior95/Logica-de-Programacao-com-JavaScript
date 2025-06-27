const form = document.querySelector("form")
const resp = document.querySelector("h3")

form.addEventListener("submit", (e) => {
    e.preventDefault()

    const quilo = Number(form.inQuilo.value)
    const consumoGr = Number(form.inConsumo.value)

    const valorQuilo = (quilo / 1000) * consumoGr

    resp.innerText = `Valor a pagar R$: ${valorQuilo}`
})