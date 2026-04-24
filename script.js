function Add() {
    let v1 = Number(document.getElementById("value1").value);
    let v2 = Number(document.getElementById("value2").value);

    document.getElementById("display").innerText = v1 + v2;
}

function Sub() {
    let v1 = Number(document.getElementById("value1").value);
    let v2 = Number(document.getElementById("value2").value);

    document.getElementById("display").innerText = v1 - v2;
}

function Mul() {
    let v1 = Number(document.getElementById("value1").value);
    let v2 = Number(document.getElementById("value2").value);

    document.getElementById("display").innerText = v1 * v2;
}

function Div() {
    let v1 = Number(document.getElementById("value1").value);
    let v2 = Number(document.getElementById("value2").value);

    if (v2 === 0) {
        document.getElementById("display").innerText = "Cannot divide by zero";
    } else {
        document.getElementById("display").innerText = v1 / v2;
    }
}