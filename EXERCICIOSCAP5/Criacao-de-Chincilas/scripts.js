const form = document.querySelector("form");
const resp = document.querySelector("pre");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const chinchilas = Number(form.inChin.value);
  const anos = Number(form.inAnos.value);

  let resposta = "";
  let contador = chinchilas;

  for (let i = 1; i <= anos; i++) {

    resposta = resposta + i + "º Ano: " + contador + " Chinchilas\n";

    contador = contador * 3;
  }
  resp.innerText = `${resposta}`;
});
