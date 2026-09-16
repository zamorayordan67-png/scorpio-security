¿/* =====================================================
   MATRIX
===================================================== */

const canvas = document.getElementById("matrix");

const ctx = canvas.getContext("2d");


/* TAMAÑO */

function resizeCanvas() {

    canvas.width = window.innerWidth;

    canvas.height = window.innerHeight;

}


resizeCanvas();


window.addEventListener(
    "resize",
    resizeCanvas
);


/* CARACTERES */

const characters =
    "01ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";


const fontSize = 16;


let columns =
    Math.floor(
        canvas.width / fontSize
    );


let drops = [];


function createDrops() {

    columns =
        Math.floor(
            canvas.width / fontSize
        );

    drops = [];

    for (
        let i = 0;
        i < columns;
        i++
    ) {

        drops[i] =
            Math.random() *
            canvas.height /
            fontSize;

    }

}


createDrops();


/* =====================================================
   DIBUJAR MATRIX
===================================================== */

function drawMatrix() {

    ctx.fillStyle =
        "rgba(0, 0, 0, 0.08)";

    ctx.fillRect(
        0,
        0,
        canvas.width,
        canvas.height
    );


    ctx.fillStyle =
        "#00a83b";


    ctx.font =
        fontSize +
        "px monospace";


    for (
        let i = 0;
        i < drops.length;
        i++
    ) {


        const character =
            characters[
                Math.floor(
                    Math.random() *
                    characters.length
                )
            ];


        ctx.fillText(

            character,

            i * fontSize,

            drops[i] * fontSize

        );


        if (

            drops[i] *
            fontSize >
            canvas.height

            &&

            Math.random() >
            0.975

        ) {

            drops[i] = 0;

        }


        drops[i]++;

    }

}


/* INICIAR MATRIX */

setInterval(
    drawMatrix,
    45
);


/* =====================================================
   BOTÓN SERVICIOS
===================================================== */

const serviceButton =
    document.querySelector(
        ".primary-button"
    );


serviceButton.addEventListener(
    "click",
    function () {

        document
            .querySelector(".services")
            .scrollIntoView({
                behavior: "smooth"
            });

    }
);


/* =====================================================
   EFECTO AL CARGAR
===================================================== */

window.addEventListener(
    "load",
    function () {

        console.log(
            "Dragon Security - Sistema iniciado"
        );

    }
);