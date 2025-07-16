const form = document.querySelector("form");
const resp1 = document.querySelector("#outSimNao");
const resp2 = document.querySelector("#outTipo");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const ladoA = Number(form.inLadoA.value);
  const ladoB = Number(form.inLadoB.value);
  const ladoC = Number(form.inLadoC.value);

  let equilatero = "Equilatero";
  let isosceles = "Isósceles";
  let escaleno = "Escaleno";

  if (ladoA > ladoB + ladoC || ladoB > ladoA + ladoC || ladoC > ladoB + ladoA) {
    alert(
      "Para formar um triângulo, um dos lados não pode ser maior que a soma dos outros dois\nTente Novamente"
    );
  } else {
    resp1.innerText = "Lados podem formar um triângulo"
    if (ladoA == ladoB && ladoA == ladoC) {
      equilatero;
      resp2.innerText = `Tipo: ${equilatero}`;
    } else if (ladoA == ladoB || ladoA == ladoC || ladoB == ladoC) {
      isosceles;
      resp2.innerText = `Tipo: ${isosceles}`;
    }else{
        escaleno
        resp2.innerText = `Tipo: ${escaleno}`
    }
  }
});
