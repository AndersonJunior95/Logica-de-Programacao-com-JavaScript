const form = document.querySelector("form"); // Pegando o formulário
const resp1 = document.querySelector("#outDivisores"); // Primeira resposta
const resp2 = document.querySelector("#outResposta"); // Segunda resposta

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const num = Number(form.inNumero.value);

  let resposta = "";
  let soma = 0;

  for (let i = 1; i <= num / 2; i++) {
    if (num % i === 0) {
      resposta = resposta + ", " + i;
      soma += i;
    }
  }


  resp1.innerText = `Divisores do ${num}: ${resposta}: (Soma:${soma})`;

  if (num == soma){
    resp2.innerText = `${num} É um Número Perfeito`
  } else {
   resp2.innerText =` ${num} Não é um Número Perfeito`
  }
});
