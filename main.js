var numeroSecreto = parseInt(Math.random() * 11);

function Chutar() {
    var elementResultado = document.getElementById("resultado")
    var chute = parseInt(document.getElementById("valor").value);

    if(chute == numeroSecreto) {
        elementResultado.innerHTML = "Você acertou"
    } else if(chute > 10 || chute < 0) {
        elementResultado.innerHTML = `Você deve digitar um número de 0 a 10.`
    }

    else {
        elementResultado.innerHTML = `Você errou, tente novamente.`
    }
}