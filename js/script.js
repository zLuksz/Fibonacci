function exibirFibonacci() {
    var penultimo = 0;
    var ultimo = 1;
    var fibonacci = penultimo + ultimo;
    var fibonacciOutput = document.getElementById("fibonacciOutput");
    fibonacciOutput.innerHTML = "1";

    var interval = setInterval(function() {
        if (fibonacci > 500) {
            clearInterval(interval);
            return;
        }
        fibonacciOutput.innerHTML += " - " + fibonacci;
        penultimo = ultimo;
        ultimo = fibonacci;
        fibonacci = penultimo + ultimo;
    }, 500);
}