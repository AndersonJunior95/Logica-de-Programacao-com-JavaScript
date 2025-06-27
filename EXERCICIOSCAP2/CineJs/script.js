const form = document.querySelector("form")
const resp1 = document.querySelector("h3")
const resp2 = document.querySelector("h4")

// Cria um "ouvinte" de evento, adicionando quando o botão submit for clicado
form.addEventListener("submit", (e) => {
    e.preventDefault()

    const titulo = form.inTitulo.value // Obtém conteúdo dos campos
    const duracao = Number(form.inDuracao.value)

    const horas = Math.floor(duracao / 60) // Arredonda para baixo resultado
    const minutos = duracao % 60

    resp1.innerText = titulo
    resp2.innerText = `${horas} hora(s) e ${minutos} minuto(s)`

})