const form = document.querySelector("form")
const resp = document.querySelector("h3")


form.addEventListener("submit", (event) => {
    event.preventDefault()

    const num = Number(form.inNumero.value)

    let estrelas = ""

    for (let i = 1; i <= num; i++){
        if (i % 2 == 1){
            estrelas = estrelas + "*"   // Na posição do ímpar do i: *
        } else {
            estrelas = estrelas + "-"   // Na posição par: "-"
        }
    }
    resp.innerText = estrelas   // Exibe as estrelas na tela
})