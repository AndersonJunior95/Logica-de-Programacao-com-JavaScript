const idades = [5, 6, 8, 3, 6, 9];
console.log(idades.indexOf(6))  // Retorna 1 - // Busca ocorre do ínicio do vetor
console.log(idades.lastIndexOf(6))  // Retorna 4 - // Busca do final ao inicio
console.log(idades.indexOf(7))  // Retorna -1 - // Busca o vetor e se o vetor não existir ele retorna -1
console.log(idades.includes(3)) // Retorna 3 - // Retorna True - Verifica se o número existe e se de fato existir ele retorna true se não retorna false
