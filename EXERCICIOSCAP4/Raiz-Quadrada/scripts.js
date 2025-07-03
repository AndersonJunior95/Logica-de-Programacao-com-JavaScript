const form = document.querySelector("form")
const resp = document.querySelector("h3")

// "ouvinte" do evento, acionado quando o botão submit for clicado
form.addEventListener("submit", (e) => {
    e.preventDefault()

    const rootNumber = Number(form.inNumber.value)
    const root = Math.sqrt(rootNumber)

    if (Number.isInteger(root)){
        resp.innerText = `Raiz ${root}`
    } else {
        resp.innerText = `Não há raiz exata para o ${rootNumber}`
    }
})