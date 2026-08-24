/* =====================================================
   ZÁRATE SECURITY
   JAVASCRIPT
===================================================== */


/* =====================================================
   MENÚ CELULAR
===================================================== */

const menuBtn = document.getElementById("menuBtn");

const navMenu = document.getElementById("navMenu");


menuBtn.addEventListener("click", function () {

    navMenu.classList.toggle("open");

});


/* Cerrar menú al seleccionar una sección */

const enlaces = document.querySelectorAll(
    ".nav-menu a"
);


enlaces.forEach(function (enlace) {

    enlace.addEventListener(
        "click",
        function () {

            navMenu.classList.remove(
                "open"
            );

        }
    );

});



/* =====================================================
   TARJETA 3D
===================================================== */

const profileCard =
    document.getElementById(
        "profileCard"
    );


profileCard.addEventListener(
    "click",
    function () {

        profileCard.classList.toggle(
            "flipped"
        );

    }
);



/* GIRO AUTOMÁTICO */

let giroAutomatico =
    setInterval(function () {

        profileCard.classList.toggle(
            "flipped"
        );

    }, 7000);



/* =====================================================
   SERVICIOS
===================================================== */

const modal =
    document.getElementById(
        "modal"
    );


const modalTitulo =
    document.getElementById(
        "modalTitulo"
    );


const modalDescripcion =
    document.getElementById(
        "modalDescripcion"
    );


const modalLista =
    document.getElementById(
        "modalLista"
    );


const cerrarModal =
    document.getElementById(
        "cerrarModal"
    );



const servicios = {

    residencial: {

        titulo:
            "Seguridad Residencial",

        descripcion:
            "Protección profesional para conjuntos residenciales, urbanizaciones y comunidades.",

        puntos: [

            "Control de accesos.",

            "Registro de visitantes.",

            "Control de proveedores.",

            "Rondas preventivas.",

            "Supervisión de áreas comunes.",

            "Reporte de novedades."

        ]

    },


    corporativa: {

        titulo:
            "Seguridad Corporativa",

        descripcion:
            "Soluciones de seguridad para empresas, oficinas, industrias y comercios.",

        puntos: [

            "Control de ingreso.",

            "Control de proveedores.",

            "Protección de instalaciones.",

            "Supervisión operativa.",

            "Reportes de seguridad.",

            "Protocolos preventivos."

        ]

    },


    vip: {

        titulo:
            "Seguridad VIP",

        descripcion:
            "Protección personalizada para ejecutivos, empresarios y personas que requieren atención especial.",

        puntos: [

            "Protección personalizada.",

            "Acompañamiento preventivo.",

            "Evaluación de riesgos.",

            "Planificación de desplazamientos.",

            "Coordinación operativa.",

            "Comunicación permanente."

        ]

    },


    tecnologia: {

        titulo:
            "Monitoreo y Tecnología",

        descripcion:
            "Tecnología aplicada a la seguridad para mejorar la capacidad de supervisión.",

        puntos: [

            "Sistemas CCTV.",

            "Monitoreo.",

            "Control de accesos.",

            "Registro de eventos.",

            "Supervisión remota.",

            "Herramientas de comunicación."

        ]

    }

};



function mostrarServicio(
    servicio
) {

    const datos =
        servicios[servicio];


    if (!datos) {

        return;

    }


    modalTitulo.textContent =
        datos.titulo;


    modalDescripcion.textContent =
        datos.descripcion;


    modalLista.innerHTML = "";


    datos.puntos.forEach(
        function (punto) {

            const li =
                document.createElement(
                    "li"
                );

            li.textContent =
                punto;

            modalLista.appendChild(
                li
            );

        }
    );


    modal.classList.add(
        "active"
    );

}



/* CERRAR MODAL */

cerrarModal.addEventListener(
    "click",
    function () {

        modal.classList.remove(
            "active"
        );

    }
);



/* Cerrar haciendo clic afuera */

modal.addEventListener(
    "click",
    function (evento) {

        if (
            evento.target === modal
        ) {

            modal.classList.remove(
                "active"
            );

        }

    }
);



/* Cerrar con ESC */

document.addEventListener(
    "keydown",
    function (evento) {

        if (
            evento.key === "Escape"
        ) {

            modal.classList.remove(
                "active"
            );

        }

    }
);



/* =====================================================
   FORMULARIO
===================================================== */

const formulario =
    document.getElementById(
        "contactForm"
    );


const mensaje =
    document.getElementById(
        "mensaje"
    );


formulario.addEventListener(
    "submit",
    function (evento) {

        evento.preventDefault();


        mensaje.textContent =
            "Solicitud recibida correctamente. Pronto podremos conectar este formulario con WhatsApp o correo.";


        formulario.reset();

    }
);



/* =====================================================
   MENÚ ACTIVO
===================================================== */

const secciones =
    document.querySelectorAll(
        "section[id]"
    );


window.addEventListener(
    "scroll",
    function () {

        let actual = "inicio";


        secciones.forEach(
            function (seccion) {

                const posicion =
                    seccion.offsetTop;


                if (
                    window.scrollY >=
                    posicion - 180
                ) {

                    actual =
                        seccion.id;

                }

            }
        );


        enlaces.forEach(
            function (enlace) {

                enlace.classList.remove(
                    "active"
                );


                if (
                    enlace.getAttribute(
                        "href"
                    ) ===
                    "#" + actual
                ) {

                    enlace.classList.add(
                        "active"
                    );

                }

            }
        );

    }
);



/* =====================================================
   ANIMACIÓN DE APARICIÓN
===================================================== */

const elementos =
    document.querySelectorAll(
        ".about-card, .service-card, .equipment, .protocol, .gallery-item"
    );


const observador =
    new IntersectionObserver(

        function (entradas) {

            entradas.forEach(
                function (entrada) {

                    if (
                        entrada.isIntersecting
                    ) {

                        entrada.target.style.opacity =
                            "1";

                        entrada.target.style.transform =
                            "translateY(0)";

                    }

                }
            );

        },

        {
            threshold: 0.15
        }

    );


elementos.forEach(
    function (elemento) {

        elemento.style.opacity =
            "0";

        elemento.style.transform =
            "translateY(30px)";

        elemento.style.transition =
            "opacity 0.7s ease, transform 0.7s ease";


        observador.observe(
            elemento
        );

    }
);