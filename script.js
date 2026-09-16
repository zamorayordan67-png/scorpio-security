// ================================
// EFECTO MATRIX
// ================================

const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const characters =
    "01ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz$#@%&";

const fontSize = 16;

let columns = Math.floor(canvas.width / fontSize);

let drops = [];

for (let i = 0; i < columns; i++) {
    drops[i] = Math.random() * canvas.height;
}


// Dibujar Matrix

function drawMatrix() {

    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";

    ctx.fillRect(
        0,
        0,
        canvas.width,
        canvas.height
    );

    ctx.fillStyle = "#00ff41";

    ctx.font = fontSize + "px monospace";

    for (let i = 0; i < drops.length; i++) {

        const character =
            characters[
                Math.floor(
                    Math.random() * characters.length
                )
            ];

        ctx.fillText(
            character,
            i * fontSize,
            drops[i] * fontSize
        );

        if (
            drops[i] * fontSize > canvas.height &&
            Math.random() > 0.975
        ) {
            drops[i] = 0;
        }

        drops[i]++;
    }
}


// Ejecutar Matrix

setInterval(drawMatrix, 35);


// ================================
// BOTÓN
// ================================

const accessButton =
    document.getElementById("accessButton");

accessButton.addEventListener("click", function () {

    alert(
        "DRAGON SECURITY\n\nSistema de seguridad activado."
    );

});


// ================================
// AJUSTAR VENTANA
// ================================

window.addEventListener("resize", function () {

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    columns = Math.floor(canvas.width / fontSize);

    drops = [];

    for (let i = 0; i < columns; i++) {
        drops[i] = Math.random() * canvas.height;
    }

});