function soma(x, y) {
    return x + y;
}

function subtrai(x, y) {
    return x - y;
}

function divide(x, y) {
    return x / y;
}

function multiplica(x, y) {
    return x * y;
}

function eleva(x) {
    return x ** 2;
}

var x; var y;
var operator;

function click() {
    const numbers = document.querySelectorAll(".numeros")
    console.log(numbers)
    for(let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener("click", () => {
    let teste = numbers[i].textContent;
    document.getElementById("vysor").innerHTML += teste;
    })
    }
}

function acumula() {
    x = null;
    var acumulador = parseFloat(document.getElementById("vysor").textContent);
    x = acumulador;
    console.log(acumulador)
    return acumulador;
}

function acumulaY() {
        var acumulador2 = parseFloat(document.getElementById("vysor").textContent);
        y = acumulador2;
        return acumulador2;
}

console.log(x)
click()

function opera() {
    let operators = document.getElementsByClassName("operator")
    for(let i = 0; i < operators.length; i++) {
        operators[i].addEventListener("click", () => {
            operator = operators[i].id
        })
    }
}

function apaga() {
    document.getElementById("C").addEventListener("click", () => {
        document.getElementById("vysor").innerHTML = null;
        operator = null;
        x = null;
        y = null;
    })
}

function clickEleva() {
    document.getElementById("eleva").addEventListener("click", () => {
        if (document.getElementById("vysor").innerHTML.length === 0) {
            alert("Por favor insira um número antes de Elevar")
        } else {
        x = parseFloat(document.getElementById("vysor").innerHTML)
        let result = eleva(x)
        document.getElementById("vysor").innerHTML = result;
        console.log(result)
        return result;
    }
    })
}

function clickSoma() {
    document.getElementById("soma").addEventListener("click", () => {
        acumula()
        if (document.getElementById("vysor").innerHTML.length === 0) {
            alert("Por favor insira um número antes de Somar")
        }
        document.getElementById("vysor").innerHTML = null;
    })
}

function clickSub() {
    document.getElementById("sub").addEventListener("click", () => {
        acumula()
        if (document.getElementById("vysor").innerHTML.length === 0) {
            alert("Por favor insira um número antes de Subtrair")
        }
        document.getElementById("vysor").innerHTML = null;
    })
}

function clickMulti() {
    document.getElementById("multi").addEventListener("click", () => {
        acumula()
        if (document.getElementById("vysor").innerHTML.length === 0) {
            alert("Por favor insira um número antes de Multiplicar")
        }
        document.getElementById("vysor").innerHTML = null;
    })
}

function clickDiv() {
    document.getElementById("div").addEventListener("click", () => {
        acumula()
        if (document.getElementById("vysor").innerHTML.length === 0) {
            alert("Por favor insira um número antes de Dividir")
        }
        document.getElementById("vysor").innerHTML = null;
    })
}

function clickIgual() {
    document.getElementById("igual").addEventListener("click", () => {
    acumulaY()
    switch(operator) {
        case "soma":
            document.getElementById("vysor").innerHTML = soma(x, y)
            break;
        case "sub":
            document.getElementById("vysor").innerHTML = subtrai(x, y)
            break;
        case "div":
            document.getElementById("vysor").innerHTML = divide(x, y);
            break;
        case "multi":
            document.getElementById("vysor").innerHTML = multiplica(x, y);
            break;
        default:
            alert("Nenhum operador selecionado")
    }
})
}



apaga()
opera()
clickEleva()
clickDiv()
clickSub()
clickSoma()
clickMulti()
clickIgual()