document.body.classList.add("loading");


/* ==========================================
   LOADER
========================================== */

const loader = document.getElementById("loader");

const loadingText = document.getElementById("loadingText");

const loadingMessages = [
    "INICIALIZANDO SISTEMA DE SEGURIDAD...",
    "CARGANDO PROTOCOLOS...",
    "VERIFICANDO CONEXIÓN...",
    "ACTIVANDO MONITOREO...",
    "SISTEMA SCORPIO ONLINE..."
];

let loadingIndex = 0;

const loadingInterval = setInterval(() => {

    loadingIndex++;

    if (loadingIndex >= loadingMessages.length) {
        loadingIndex = 0;
    }

    loadingText.textContent = loadingMessages[loadingIndex];

}, 700);


window.addEventListener("load", () => {

    setTimeout(() => {

        clearInterval(loadingInterval);

        loadingText.textContent = "SISTEMA LISTO.";

    }, 2500);


    setTimeout(() => {

        loader.classList.add("hide");

        document.body.classList.remove("loading");

    }, 3500);

});


/* ==========================================
   MATRIX CANVAS LOADER
========================================== */

const matrixCanvas = document.getElementById("matrixCanvas");

const matrixContext = matrixCanvas.getContext("2d");


function resizeMatrixLoader() {

    matrixCanvas.width = window.innerWidth;

    matrixCanvas.height = window.innerHeight;

}


resizeMatrixLoader();


const matrixCharacters =
    "SCORPIOSECURITY0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ<>[]{}";


const loaderFontSize = 16;


let loaderColumns =
    Math.floor(matrixCanvas.width / loaderFontSize);


let loaderDrops =
    Array(loaderColumns).fill(1);


function drawLoaderMatrix() {

    matrixContext.fillStyle = "rgba(1, 3, 2, 0.08)";

    matrixContext.fillRect(
        0,
        0,
        matrixCanvas.width,
        matrixCanvas.height
    );


    matrixContext.fillStyle = "#00ff88";

    matrixContext.font =
        loaderFontSize + "px monospace";


    for (
        let i = 0;
        i < loaderDrops.length;
        i++
    ) {

        const character =
            matrixCharacters[
                Math.floor(
                    Math.random() *
                    matrixCharacters.length
                )
            ];


        matrixContext.fillText(
            character,
            i * loaderFontSize,
            loaderDrops[i] * loaderFontSize
        );


        if (
            loaderDrops[i] *
            loaderFontSize >
            matrixCanvas.height &&
            Math.random() > 0.975
        ) {

            loaderDrops[i] = 0;

        }


        loaderDrops[i]++;

    }

}


setInterval(drawLoaderMatrix, 45);


/* ==========================================
   MATRIX BACKGROUND
========================================== */

const backgroundCanvas =
    document.getElementById("matrixBackground");


const backgroundContext =
    backgroundCanvas.getContext("2d");


function resizeBackground() {

    backgroundCanvas.width =
        window.innerWidth;


    backgroundCanvas.height =
        window.innerHeight;

}


resizeBackground();


const backgroundFontSize = 14;


let backgroundColumns =
    Math.floor(
        backgroundCanvas.width /
        backgroundFontSize
    );


let backgroundDrops =
    Array(backgroundColumns).fill(1);


function drawBackgroundMatrix() {

    backgroundContext.fillStyle =
        "rgba(2, 6, 4, 0.12)";


    backgroundContext.fillRect(
        0,
        0,
        backgroundCanvas.width,
        backgroundCanvas.height
    );


    backgroundContext.fillStyle =
        "#00ff88";


    backgroundContext.font =
        backgroundFontSize + "px monospace";


    for (
        let i = 0;
        i < backgroundDrops.length;
        i++
    ) {

        const character =
            matrixCharacters[
                Math.floor(
                    Math.random() *
                    matrixCharacters.length
                )
            ];


        backgroundContext.fillText(
            character,
            i * backgroundFontSize,
            backgroundDrops[i] *
            backgroundFontSize
        );


        if (
            backgroundDrops[i] *
            backgroundFontSize >
            backgroundCanvas.height &&
            Math.random() > 0.98
        ) {

            backgroundDrops[i] = 0;

        }


        backgroundDrops[i]++;

    }

}


setInterval(drawBackgroundMatrix, 70);


/* ==========================================
   RESIZE
========================================== */

window.addEventListener(
    "resize",
    () => {

        resizeMatrixLoader();

        resizeBackground();


        loaderColumns =
            Math.floor(
                matrixCanvas.width /
                loaderFontSize
            );


        loaderDrops =
            Array(loaderColumns).fill(1);


        backgroundColumns =
            Math.floor(
                backgroundCanvas.width /
                backgroundFontSize
            );


        backgroundDrops =
            Array(backgroundColumns).fill(1);

    }
);


/* ==========================================
   MENÚ MÓVIL
========================================== */

const menuButton =
    document.getElementById("menuButton");


const navigation =
    document.getElementById("navigation");


menuButton.addEventListener(
    "click",
    () => {

        navigation.classList.toggle("open");

    }
);


document.querySelectorAll(".nav-link")
.forEach(link => {

    link.addEventListener(
        "click",
        () => {

            navigation.classList.remove("open");

        }
    );

});


/* ==========================================
   FAQ
========================================== */

const faqItems =
    document.querySelectorAll(".faq-item");


faqItems.forEach(item => {

    const button =
        item.querySelector("button");


    button.addEventListener(
        "click",
        () => {

            const isActive =
                item.classList.contains("active");


            faqItems.forEach(otherItem => {

                otherItem.classList.remove("active");

            });


            if (!isActive) {

                item.classList.add("active");

            }

        }
    );

});


/* ==========================================
   DATOS DE SERVICIOS
========================================== */

const services = {

    residencial: {

        icon: "fa-house-lock",

        title: "SEGURIDAD RESIDENCIAL",

        description:
            "Servicio orientado a conjuntos residenciales, urbanizaciones, edificios y propiedades privadas. El objetivo es apoyar la prevención mediante control, supervisión y procedimientos organizados.",

        features: [

            "Control y registro de accesos",

            "Validación de visitantes",

            "Control de proveedores",

            "Registro y control de vehículos",

            "Rondas preventivas",

            "Supervisión de áreas comunes",

            "Verificación de instalaciones",

            "Reporte de novedades",

            "Comunicación según protocolos establecidos"

        ]

    },


    empresarial: {

        icon: "fa-building-shield",

        title: "SEGURIDAD EMPRESARIAL",

        description:
            "Servicio diseñado para apoyar la protección y supervisión de empresas, oficinas, negocios e instalaciones corporativas mediante procedimientos de prevención y control.",

        features: [

            "Control de ingreso del personal",

            "Registro de visitantes",

            "Control de proveedores",

            "Supervisión de instalaciones",

            "Rondas preventivas",

            "Control de áreas restringidas",

            "Reporte de novedades",

            "Apoyo en procedimientos internos",

            "Comunicación operativa"

        ]

    },


    cctv: {

        icon: "fa-video",

        title: "MONITOREO CCTV",

        description:
            "La videovigilancia permite apoyar la supervisión visual de sectores estratégicos y facilitar la identificación y registro de situaciones relevantes.",

        features: [

            "Supervisión visual de cámaras",

            "Monitoreo de sectores estratégicos",

            "Apoyo en detección de novedades",

            "Registro de incidentes",

            "Control visual de accesos",

            "Seguimiento conforme a procedimientos",

            "Comunicación de novedades",

            "Apoyo para revisión de eventos registrados"

        ]

    },


    accesos: {

        icon: "fa-id-card-clip",

        title: "CONTROL DE ACCESOS",

        description:
            "Servicio enfocado en organizar y supervisar el ingreso y salida de personas, vehículos, visitantes y proveedores de acuerdo con los procedimientos establecidos.",

        features: [

            "Registro de visitantes",

            "Validación de autorizaciones",

            "Control de proveedores",

            "Registro de vehículos",

            "Verificación de ingresos",

            "Comunicación con responsables",

            "Aplicación de protocolos internos",

            "Reporte de novedades"

        ]

    },


    rondas: {

        icon: "fa-person-walking",

        title: "RONDAS PREVENTIVAS",

        description:
            "Recorridos programados para verificar las diferentes áreas de una instalación, identificar situaciones inusuales y comunicar oportunamente cualquier novedad.",

        features: [

            "Recorridos por el perímetro",

            "Supervisión de instalaciones",

            "Verificación de áreas comunes",

            "Control de parqueaderos",

            "Revisión visual de sectores",

            "Detección preventiva de novedades",

            "Registro de rondas",

            "Reporte de situaciones identificadas"

        ]

    },


    eventos: {

        icon: "fa-users-viewfinder",

        title: "SEGURIDAD PARA EVENTOS",

        description:
            "Apoyo preventivo para eventos y actividades que requieren control de accesos, supervisión de espacios y organización de medidas de seguridad.",

        features: [

            "Control de ingreso",

            "Supervisión preventiva",

            "Control de áreas restringidas",

            "Apoyo en organización",

            "Control de accesos",

            "Comunicación de novedades",

            "Supervisión del desarrollo del evento",

            "Coordinación conforme a requerimientos"

        ]

    }

};


/* ==========================================
   MODAL SERVICIOS
========================================== */

const modal =
    document.getElementById("serviceModal");


const modalContent =
    document.getElementById("modalContent");


const closeModalButton =
    document.getElementById("closeModal");


const serviceButtons =
    document.querySelectorAll(".service-card");


serviceButtons.forEach(card => {

    card.addEventListener(
        "click",
        () => {

            const serviceName =
                card.dataset.service;


            const service =
                services[serviceName];


            let featuresHTML = "";


            service.features.forEach(feature => {

                featuresHTML +=
                    `<li>${feature}</li>`;

            });


            modalContent.innerHTML = `

                <div class="modal-icon">

                    <i class="fa-solid ${service.icon}"></i>

                </div>

                <h2 class="modal-title">
                    ${service.title}
                </h2>

                <p class="modal-description">
                    ${service.description}
                </p>

                <h3 class="modal-subtitle">
                    COMPONENTES DEL SERVICIO
                </h3>

                <ul class="modal-list">

                    ${featuresHTML}

                </ul>

            `;


            modal.classList.add("active");

            document.body.style.overflow = "hidden";

        }
    );

});


function closeModal() {

    modal.classList.remove("active");

    document.body.style.overflow = "";

}


closeModalButton.addEventListener(
    "click",
    closeModal
);


modal.addEventListener(
    "click",
    event => {

        if (event.target === modal) {

            closeModal();

        }

    }
);


document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape" &&
            modal.classList.contains("active")
        ) {

            closeModal();

        }

    }
);


/* ==========================================
   FORMULARIO
========================================== */

const contactForm =
    document.getElementById("contactForm");


const formStatus =
    document.getElementById("formStatus");


contactForm.addEventListener(
    "submit",
    event => {

        event.preventDefault();


        const nombre =
            document.getElementById("nombre").value.trim();


        const telefono =
            document.getElementById("telefono").value.trim();


        const correo =
            document.getElementById("correo").value.trim();


        const servicio =
            document.getElementById("servicio").value;


        const mensaje =
            document.getElementById("mensaje").value.trim();


        if (
            nombre === "" ||
            telefono === "" ||
            correo === "" ||
            servicio === "" ||
            mensaje === ""
        ) {

            formStatus.textContent =
                "ERROR: COMPLETE TODOS LOS CAMPOS.";

            formStatus.style.color =
                "#ff5c5c";

            return;

        }


        const formData = {

            nombre: nombre,

            telefono: telefono,

            correo: correo,

            servicio: servicio,

            mensaje: mensaje

        };


        console.log(
            "SCORPIO SECURITY - NUEVA SOLICITUD:",
            formData
        );


        formStatus.style.color =
            "#00ff88";


        formStatus.textContent =
            "✓ SOLICITUD REGISTRADA CORRECTAMENTE.";


        contactForm.reset();


        setTimeout(() => {

            formStatus.textContent = "";

        }, 5000);

    }
);


/* ==========================================
   AÑO AUTOMÁTICO
========================================== */

document.getElementById("year").textContent =
    new Date().getFullYear();


/* ==========================================
   NAV ACTIVE AL HACER SCROLL
========================================== */

const sections =
    document.querySelectorAll(
        "main section[id]"
    );


const navLinks =
    document.querySelectorAll(".nav-link");


window.addEventListener(
    "scroll",
    () => {

        let current = "";


        sections.forEach(section => {

            const sectionTop =
                section.offsetTop - 150;


            const sectionHeight =
                section.offsetHeight;


            if (
                window.scrollY >= sectionTop &&
                window.scrollY <
                sectionTop + sectionHeight
            ) {

                current =
                    section.getAttribute("id");

            }

        });


        navLinks.forEach(link => {

            link.classList.remove("active");


            if (
                link.getAttribute("href") ===
                "#" + current
            ) {

                link.classList.add("active");

            }

        });

    }
);