const canvas = document.getElementById("matrix");

const ctx = canvas.getContext("2d");


canvas.width = window.innerWidth;

canvas.height = window.innerHeight;


const characters =
    "01ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";


const fontSize = 16;


let columns =
    Math.floor(canvas.width / fontSize);


let drops = [];


for (let i = 0; i < columns; i++) {

    drops[i] =
        Math.random() * canvas.height;

}


function matrix() {

    ctx.fillStyle =
        "rgba(0, 0, 0, 0.08)";

    ctx.fillRect(
        0,
        0,
        canvas.width,
        canvas.height
    );


    ctx.fillStyle =
        "#0f5";


    ctx.font =
        fontSize + "px monospace";


    for (
        let i = 0;
        i < drops.length;
        i++
    ) {

        const text =
            characters[
                Math.floor(
                    Math.random() *
                    characters.length
                )
            ];


        ctx.fillText(
            text,
            i * fontSize,
            drops[i] * fontSize
        );


        if (
            drops[i] * fontSize >
            canvas.height &&
            Math.random() > 0.975
        ) {

            drops[i] = 0;

        }


        drops[i]++;

    }

}


setInterval(matrix, 40);


/* =========================
   CAMBIAR TAMAÑO
========================= */

window.addEventListener(
    "resize",
    () => {

        canvas.width =
            window.innerWidth;

        canvas.height =
            window.innerHeight;

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
                canvas.height;

        }

    }
);