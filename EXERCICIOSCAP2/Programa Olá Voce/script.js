// Cria referência ao form e ao elemento h3 (onde será exibida a resposta)
const form = document.querySelector("form")
const resp = document.querySelector("h3")

// Cira um "ouvinte" de evento, adicionado quando o botão submit for clicado

form.addEventListener("submit", (e) => {
    e.preventDefault()
    const nome = form.inNome.value // Obtém o nome digitado no Form
    resp.innerHTML = `Olá ${nome}` // Exibe a resposta do programa
})