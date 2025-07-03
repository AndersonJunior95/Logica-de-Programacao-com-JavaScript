const form = document.querySelector("form")
const resp = document.querySelector("h3")

// "ouvinte" do evento, acionado quando o botão submit for clicado

form.addEventListener("submit", (e) => {
    e.preventDefault()

    const name = form.InName.value
    const masculine = form.InMasculine.checked
    const height = Number(form.InHeight.value)

    let peso
    if (masculine){
        peso = 22 * Math.pow(height, 2)
    } else {
        peso = 21 * Math.pow(height, 2)
    }
    
    // Apresenta a resposta (altera o conteúdo do elemento h3 da página)
    resp.innerText = `${name}: Seu peso ideal é ${peso.toFixed(3)}kg`
})

form.addEventListener("reset", () => {
    // Limpa o conteúdo do elemento h3 que exibe a resposta
    resp.innerText = ""
})