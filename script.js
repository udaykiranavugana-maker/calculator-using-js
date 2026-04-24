// Run after page fully loads (fix for GitHub)
window.onload = function () {

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

    // Make functions global (so buttons can access)
    window.Add = Add;
    window.Sub = Sub;
    window.Mul = Mul;
    window.Div = Div;

    // ===============================
    // SYMBOL ANIMATION (your logic)
    // ===============================

    const symbols = document.querySelectorAll(".symbol");

    symbols.forEach(symbol => {
        let x = Math.random() * window.innerWidth;
        let y = Math.random() * window.innerHeight;

        let dx = (Math.random() * 2 + 1) * (Math.random() < 0.5 ? -1 : 1);
        let dy = (Math.random() * 2 + 1) * (Math.random() < 0.5 ? -1 : 1);

        function move() {
            x += dx;
            y += dy;

            // Bounce on edges
            if (x <= 0 || x >= window.innerWidth - 30) dx *= -1;
            if (y <= 0 || y >= window.innerHeight - 30) dy *= -1;

            // Avoid center (display area)
            const centerX = window.innerWidth / 2;
            const centerY = window.innerHeight / 2;

            if (
                x > centerX - 180 &&
                x < centerX + 180 &&
                y > centerY - 120 &&
                y < centerY + 120
            ) {
                dx *= -1;
                dy *= -1;
            }

            symbol.style.transform = `translate(${x}px, ${y}px)`;

            requestAnimationFrame(move);
        }

        move();
    });

};