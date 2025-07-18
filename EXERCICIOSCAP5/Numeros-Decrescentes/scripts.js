const form = document.querySelector("form")
const resp = document.querySelector("h3")

form.addEventListener("submit", (event) => {
    event.preventDefault()

    const numero = Number(form.inNumero.value)

    let resposta = `Entre ${numero} e 1: ${numero}`

    // Laço de repetição
    for(let i = numero; i > 0; i = i - 1){
        
        resposta = resposta + "," + i
      
    }
    resp.innerText = resposta
})