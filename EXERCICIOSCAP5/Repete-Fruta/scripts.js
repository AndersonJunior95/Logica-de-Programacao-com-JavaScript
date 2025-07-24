const form = document.querySelector("form");
const resp = document.querySelector("h3");


let resposta = "";

form.addEventListener("submit", (event) => {
    event.preventDefault();
    
    const fruta = form.inFruta.value;
    const num = Number(form.inNumero.value);

  for (let i = 1; i <= num; i++) {
    resposta = resposta + fruta + " * ";
    resp.innerText = `${resposta}`;
  }
});
