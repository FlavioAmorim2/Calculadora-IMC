document.addEventListener("DOMContentLoaded", function () {
  const formulario = document.getElementById("calc-form");
  const nomeInput = document.getElementById("nome");
  const nomeError = document.getElementById("nome-error");

  formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    if (!nomeInput.value) {
      nomeError.style.display = "block";
      return;
    } else {
      nomeError.style.display = "none";
    }

    const nome = nomeInput.value;
    const altura = parseFloat(document.getElementById("altura").value);
    const peso = parseFloat(document.getElementById("peso").value);

    const imc = peso / (altura * altura);
    const resultadoElement = document.getElementById("resultado");

    resultadoElement.classList.remove("hidden");

    let categoria;

    if (imc < 18.5) {
      categoria = "Abaixo do peso";
      resultadoElement.style.backgroundColor = "var(--yellow)";
    } else if ((imc > 18.5) & (imc < 25)) {
      categoria = "Peso normal";
      resultadoElement.style.backgroundColor = "var(--green)";
    } else if ((imc > 25) & (imc < 30)) {
      categoria = "Sobrepeso";
      resultadoElement.style.backgroundColor = "var(--yellow)";
    } else {
      categoria = "Obesidade";
      resultadoElement.style.backgroundColor = "var(--red)";
    }

    resultadoElement.innerHTML = `<p> ${nome}, seu IMC é ${imc.toFixed(
      2,
    )} </p> <p>Você está na categoria: ${categoria}</p>`;

    document.getElementById("categoria").value = categoria; //atualizar categoria - input;
    let dados = new FormData(formulario);

    for (let [chave, valor] of dados.entries())
      console.log(chave + " : " + valor);
  });
});
