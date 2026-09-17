// ========================================
// MENÚ CELULAR
// ========================================

const menuButton = document.getElementById("menuButton");
const navigation = document.getElementById("navigation");

menuButton.addEventListener("click", () => {

    navigation.classList.toggle("active");

});


// ========================================
// CERRAR MENÚ AL HACER CLICK
// ========================================

const navigationLinks =
    document.querySelectorAll(".navigation a");

navigationLinks.forEach(link => {

    link.addEventListener("click", () => {

        navigation.classList.remove("active");

    });

});


// ========================================
// BOTÓN VOLVER ARRIBA
// ========================================

const backToTop =
    document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

});


backToTop.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


// ========================================
// FORMULARIO
// ========================================

const contactForm =
    document.getElementById("contactForm");

contactForm.addEventListener("submit", (event) => {

    event.preventDefault();

    alert(
        "Gracias por contactar a Dragón Security. " +
        "Pronto nos comunicaremos contigo."
    );

});