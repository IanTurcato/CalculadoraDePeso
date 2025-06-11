function calcularIMC() {
    // Entrada de dados
    let peso = parseFloat(document.getElementById("peso").value);
    let altura = parseFloat(document.getElementById("altura").value);

    // Validação simples
    if (isNaN(peso) || isNaN(altura) || altura <= 0) {
        document.getElementById("resultado").textContent = "Por favor, insira valores válidos.";
        document.getElementById("classificaçãoIMC").textContent = "";
        return;
    }

    // Processamento
    let imc = peso / (altura * altura);
    let classificacao = "";

    if (imc < 18.5) {
        classificacao = "Abaixo do peso";
    } else if (imc < 24.9) {
        classificacao = "Peso normal";
    } else if (imc < 29.9) {
        classificacao = "Sobrepeso";
    } else {
        classificacao = "Obesidade";
    }

    // Saída
    document.getElementById("resultado").textContent = "Seu IMC é: " + imc.toFixed(2);
    document.getElementById("classificaçãoIMC").textContent = "Classificação: " + classificacao;
}
