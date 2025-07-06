const form = document.querySelector("form")
const resp = document.querySelector("h3")

form.addEventListener ("submit", (e) => {
    e.preventDefault()

    const velocidadePermitida = Number(form.inVelPermitida.value)
    const velocidadeCondutor = Number(form.inVelCondutor.value)


    if(velocidadeCondutor <= velocidadePermitida){
        resp.innerText = "Situação: Sem Multa"
    } else{
        const maisVinte = velocidadePermitida * 0.2
        if (velocidadeCondutor <= maisVinte){
            resp.innerText = "Situação: Multa Leve"
        } else {
        resp.innerText = `Situação: Multa Grave`
        }
    }
})