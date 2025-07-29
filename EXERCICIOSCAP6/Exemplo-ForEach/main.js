const numeros = [5, 10, 15, 20]

let soma = 0

numeros.forEach(num => soma += num)
console.log(`Soma dos Números: ${soma}`)

const cidades = ["Pelotas", "São Lourenço", "Porto Alegre"]

cidades.forEach((cidade, i) => {
    console.log(`${i + 1}ª Cidade: ${cidade}`)
})