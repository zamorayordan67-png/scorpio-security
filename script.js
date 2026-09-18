// ================================
// GET HTML ELEMENTS
// ================================

const mainTitle =
    document.getElementById("mainTitle");


const mainText =
    document.getElementById("mainText");


const contactButton =
    document.getElementById("contactButton");


const changeButton =
    document.getElementById("changeButton");


const aboutButton =
    document.getElementById("aboutButton");


const contactForm =
    document.getElementById("contactForm");


const menuButton =
    document.getElementById("menuButton");


// ================================
// CONTACT BUTTON
// ================================

contactButton.addEventListener(
    "click",
    function() {

        alert(
            "Thank you for contacting Zarate Security!"
        );

    }
);


// ================================
// CHANGE MAIN TEXT
// ================================

changeButton.addEventListener(
    "click",
    function() {

        mainTitle.textContent =
            "Professional Security Solutions";


        mainText.textContent =
            "We protect people, businesses and properties with professional security services.";

    }
);


// ================================
// ABOUT BUTTON
// ================================

aboutButton.addEventListener(
    "click",
    function() {

        alert(
            "Zarate Security provides professional protection services."
        );

    }
);


// ================================
// SERVICE BUTTONS
// ================================

const serviceButtons =
    document.querySelectorAll(".serviceButton");


serviceButtons.forEach(
    function(button) {

        button.addEventListener(
            "click",
            function() {

                alert(
                    "More information about this service."
                );

            }
        );

    }
);


// ================================
// CONTACT FORM
// ================================

contactForm.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();


        const name =
            document.getElementById("name").value;


        const email =
            document.getElementById("email").value;


        const message =
            document.getElementById("message").value;


        if (
            name === "" ||
            email === "" ||
            message === ""
        ) {

            alert(
                "Please complete all fields."
            );

            return;
        }


        alert(
            "Thank you, " +
            name +
            "! Your message has been sent."
        );


        contactForm.reset();

    }
);


// ================================
// MENU BUTTON
// ================================

menuButton.addEventListener(
    "click",
    function() {

        alert(
            "Menu button clicked."
        );

    }
);