const form = document.querySelector("form")
const resp = document.querySelector("h3")

// "ouvinte" do evento, acionado quando o botão submit for clicado

form.addEventListener("submit", (e) => {
    e.preventDefault()

    // Obtém e converte o conteúdo do campo InHourBrasil
    const hourBrasil = Number(form.inHourBrasil.value)

    let hourFranca = hourBrasil + 5 // Calcula o horário da frança
    if (hourFranca > 24){
        hourFranca = hourFranca - 24
    }
    // Exibe a resposta (altera o conteúdo do elemento h3 da página)
    resp.innerText = `Hora na França ${hourFranca.toFixed(2)}`
})