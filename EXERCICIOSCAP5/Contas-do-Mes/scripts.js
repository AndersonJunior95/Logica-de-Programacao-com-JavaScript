const form = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")

let resposta = ""   // String com a resposta a ser exibida
let numContas = 0   // Inicializa o contador...
let valTotal = 0    // E acumulador (variáveis globais)

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const descricao = form.inDescricao.value // Obtém os dados da conta
    const valor = Number(form.inValor.value)

    numContas ++ // Adiciona valores ao contador e acumulador
    valTotal = valTotal + valor // Ou: valTotal += valor
    resposta = resposta + descricao + " - R$:" + valor.toFixed(2) + "\n"
    resp1.innerText = `${resposta} -------------------------------`
    resp2.innerText = `${numContas} Conta(s) - Total R$: ${valTotal.toFixed(2)}`

    form.inDescricao.value = "" // Limpa campos do form
    form.inValor.value = ""
    form.inDescricao.focus() // Posiciona o campo inDescricao do form
})