function fibonacciteste() {
    let i = 1;
    let pen = 0;
    let ult = 1;

    while (i <= 500) {
        if (i === ult + pen) {
            document.getElementById("resultado").innerHTML = (i)
            console.log(i);
            pen = ult;
            ult = i;
        }
    i++;
    }
}

function fibonacci(n) {
    let fibSeq = []
    let pen = 0, ult = 1

    while (fibSeq.length < n) {
        fibSeq.push(pen)
        let temp = pen
        pen = ult
        ult = temp + pen
    }

    return fibSeq;
}

let fibonacciSequence = fibonacci(15);

let htmlList = "<ul>"
fibonacciSequence.forEach(function(num) {
    htmlList += "<li>" + num + "</li>"
})
htmlList += "</ul>"

document.getElementById("resultado").innerHTML = htmlList
