// Notas 
function media() {
  var nota1 = parseFloat(document.getElementById("nota1").value);
  var nota2 = parseFloat(document.getElementById("nota2").value);
  var nota3 = parseFloat(document.getElementById("nota3").value);
  var media = ((nota1 * 3) + (nota2 * 3) + (nota3 * 4)) / 10;
  // Alerta de nota máxima - 10 pontos
  if (media >= 6)
    alert("Parabens, APROVADO (A)! Media: " + media + "  pontos");
  if (media == 10)
    alert("Uau! APROVADO (A) com distinção.Media: " + media + "  pontos");
  if (media < 6)
    // Notas abaixo da média- Menor que 6 pontos
    alert("Que pena ! Foi REPROVADO (A)! Media " + media +"  pontos");

  /* //Alerta de campos não preenchidos - Pode ser testado 
  if (nota1 === " " || nota2 === "" || nota3 === "");
  alert("Digite todas as NOTAS!"); */
}

function limpar() {
  document.getElementById("nota1").value = " ";
  document.getElementById("nota2").value = " ";
  document.getElementById("nota3").value = " ";
}
