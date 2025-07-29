const form = document.querySelector("form")
const respNome = document.querySelector("span")
const respLista = document.querySelector("pre")

const pacientes = []    // Declara o vetor global

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const nome = form.inPaciente.value  // Obtém o nome do paciente
    pacientes.push(nome)    // Adiciona nome no final do vetor
    let lista = ""  // String para concatenar os pacientes

    // for "tradicional" (incia em 0, enquanto menor que tamanho do array)
    for (let i = 0; i < pacientes.length; i++){
        lista += `${i + 1} Paciente: ${pacientes[i]}\n`
    }

    respLista.innerText = lista // Exibe a lista de pacientes na página
    form.inPaciente.value = ""  // Limpa o conteúdo do campo de formulário
    form.inPaciente.focus() // Posiciona o cursor no campo
})

// Adiciona um "ouvinte" para o evento click no btUrgencia que está no form

form.btUrgencia.addEventListener("click", () => {
    // Verifica se as validações do form estão ok (no caso, paciente is required)
    if (!form.checkValidity()){
        alert("Informe o nome do paciente a ser atendido em caráter de urgência")
        form.inPaciente.focus() // Posiciona o cursor no campo inPaciente
        return  // Retorna ao form
    }

    const nome = form.inPaciente.value  // Obtém nome do paciente
    pacientes.unshift(nome) // Adiciona paciente no início do vetor

    let lista = ""  // String para concatenar pacientes
    
    // forEach aplicado sobre o array pacientes
    pacientes.forEach((paciente, i ) => (lista += `${i + 1}. ${paciente}\n`))

    respLista.innerText = lista // Exibe a lista de pacientes na página
    form.inPaciente.value = ""  // Limpa conteúdo do campo de formulário
    form.inPaciente.focus() // Posiciona o cursor no campo
})

form.btAtender.addEventListener("click", () => {
    // Se o tamango do vetor = 0
    if(pacientes.length == 0){
        alert("Não há pacientes na lista de espera")
        form.inPaciente.focus()
        return
    }
    const atender = pacientes.shift()   // Remove do início da fila (e obtém nome)
    respNome.innerText = atender    // Exibe o nome do paciente em atendimento
    let lista = ""  // String parsa concacetenar pacientes

    pacientes.forEach((pacientes, i) => (lista += `${i + i}. ${pacientes}\n`))
    respLista.innerText = lista // Exibe a lista de pacientes na página
})