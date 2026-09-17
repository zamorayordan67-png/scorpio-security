/* ==========================================
   MENÚ CELULAR
========================================== */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", function () {

    navMenu.classList.toggle("active");

});


/* ==========================================
   CERRAR MENÚ AL SELECCIONAR
========================================== */

const navLinks = document.querySelectorAll(".nav a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navMenu.classList.remove("active");

    });

});


/* ==========================================
   FORMULARIO
========================================== */

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const nombre =
        document.getElementById("nombre").value;

    const telefono =
        document.getElementById("telefono").value;

    const correo =
        document.getElementById("correo").value;

    const asunto =
        document.getElementById("asunto").value;

    const mensaje =
        document.getElementById("mensaje").value;


    const texto =
        `Hola Dragon Security.

Nombre: ${nombre}

Teléfono: ${telefono}

Correo: ${correo}

Asunto: ${asunto}

Mensaje:
${mensaje}`;


    const whatsapp =
        "https://wa.me/593983498360?text=" +
        encodeURIComponent(texto);


    window.open(whatsapp, "_blank");

});


/* ==========================================
   ANIMACIÓN AL HACER SCROLL
========================================== */

const elements =
    document.querySelectorAll(
        ".service-card, .about-box, .work-card"
    );


const observer =
    new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";

                    entry.target.style.transform =
                        "translateY(0)";

                }

            });

        },
        {
            threshold: 0.15
        }
    );


elements.forEach(function (element) {

    element.style.opacity = "0";

    element.style.transform =
        "translateY(25px)";

    element.style.transition =
        "opacity 0.6s ease, transform 0.6s ease";

    observer.observe(element);

});