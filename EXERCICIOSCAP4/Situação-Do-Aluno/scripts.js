const form = document.querySelector("form")
const resp1 = document.querySelector("h3")
const resp2 = document.querySelector("h4")

// Cria um "ouvinte" de evento, acionado quando o botão submit for clicado
form.addEventListener("submit", (e) => {
    e.preventDefault()
    const nome = form.inName.value

    const note1 = Number(form.inNote1.value)
    const note2 = Number(form.inNote2.value)

    const media = (note1 + note2) / 2

    resp1.innerText = `Média das Notas ${media.toFixed(2)}`

    // Cria as condições
    if (media >= 7){
        // Altera o texto e estilo da cor do elemento resp2
        resp2.innerText = `Parabéns ${nome}! Você foi aprovado(a)`
        resp2.style.color = "green"
    } else if (media >= 4){
        resp2.innerText = `Atenção! ${nome}. Você está em exame`
        resp2.style.color = "yellow"
    } else {
        resp2.innerText = `Ops ${nome}... Você foi reprovado(a)`
        resp2.style.color = "red"
    }
})