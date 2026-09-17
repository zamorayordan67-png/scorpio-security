// =============================
// MENU PARA CELULAR
// =============================

const menuButton = document.getElementById("menuButton");
const mainMenu = document.getElementById("mainMenu");

menuButton.addEventListener("click", function () {

    mainMenu.classList.toggle("open");

});


// Cerrar menú al seleccionar una opción

const menuLinks = document.querySelectorAll("#mainMenu a");

menuLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        mainMenu.classList.remove("open");

    });

});


// =============================
// FORMULARIO
// =============================

const contactForm =
    document.getElementById("contactForm");

const formMessage =
    document.getElementById("formMessage");


contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    formMessage.textContent =
        "Gracias por contactarnos. Su mensaje ha sido recibido.";

    contactForm.reset();

});


// =============================
// CAMBIO DE MENU SEGÚN SECCIÓN
// =============================

const sections =
    document.querySelectorAll("section[id]");


window.addEventListener("scroll", function () {

    let currentSection = "inicio";

    sections.forEach(function (section) {

        const sectionTop =
            section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {

            currentSection = section.id;

        }

    });


    menuLinks.forEach(function (link) {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + currentSection
        ) {

            link.classList.add("active");

        }

    });

});