const letras = ["A", "B", "C", "D"] // Declara e define o conteúdo incial do vetor
const letras2 = letras.slice(-2)    // Obtém 2 últimas letras
const letras3 = letras.slice(0, -1) // Obtém do início até final, exceto a última
console.log(letras3)    // [ 'A', 'B', 'C', 'D' ]
console.log(letras) // [ 'C', 'D' ]
console.log(letras2)    // [ 'A', 'B', 'C' ]

const retira = letras.splice(2, 1)  // Remove a partir da posição 2, 1 elemento
console.log(letras) // [ 'A', 'B', 'D' ]
console.log(retira) // [ 'C' ]

// O slice() não modifica o conteúdo do vetor oriinal, enquanto splice() modifica. A variável retira é sempre um array, mesmo com um ou zero elementos.