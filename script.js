/* =========================================================
   DULCE INVITACIÓN
   JAVASCRIPT PRINCIPAL
========================================================= */


/* =========================================================
   CONFIGURACIÓN
========================================================= */

const WHATSAPP_NUMBER = "528443841681";

const FACEBOOK_URL =
    "https://www.facebook.com/share/1FMc82JMA4/";


/* =========================================================
   CATÁLOGO DE INVITACIONES
========================================================= */

const invitations = [

    {
        id: 1,

        title: "Star Wars",

        category: "boda",

        categoryName: "Boda",

        subtitle: "Una boda de otra galaxia",

        url:
            "https://dvidblpz.github.io/invitacion-starwars/",

        icon: "fa-jedi",

        image:
            "./images/starwars.jpg",

        message:
            "Hola Dulce Invitación, me interesa una invitación digital como la de Star Wars que vi en su catálogo."
    },


    {
        id: 2,

        title: "Back to the 90s",

        category: "cumpleanos",

        categoryName: "Cumpleaños",

        subtitle: "Una celebración llena de nostalgia",

        url:
            "https://dvidblpz.github.io/cumplea-os-90s/",

        icon: "fa-compact-disc",

        image:
            "./images/90s.jpg",

        message:
            "Hola Dulce Invitación, me interesa una invitación digital estilo Back to the 90s."
    },


    {
        id: 3,

        title: "Baby Shower",

        category: "baby-shower",

        categoryName: "Baby Shower",

        subtitle: "Un momento lleno de ternura",

        url:
            "https://dvidblpz.github.io/babyshower/",

        icon: "fa-baby",

        image:
            "./images/babyshower.jpg",

        message:
            "Hola Dulce Invitación, me interesa una invitación digital para Baby Shower como la de su catálogo."
    },


    {
        id: 4,

        title: "Boda",

        category: "boda",

        categoryName: "Boda",

        subtitle: "El comienzo de una nueva historia",

        url:
            "https://dvidblpz.github.io/Boda_HW/",

        icon: "fa-heart",

        image:
            "./images/boda.jpg",

        message:
            "Hola Dulce Invitación, me interesa una invitación digital de boda como la que vi en su catálogo."
    },

    {

    id: 5,

    title: "XV Años",
    
    category: "xv",

    categoryName: "XV Años",

    subtitle: "Una celebración llena de magia y elegancia",

    url: "https://dvidblpz.github.io/invitacion_XV/",

    icon: "fa-crown",

    image: "./images/xv.jpg",

    message: "Hola Dulce Invitación, me interesa una invitación digital de XV Años como la que vi en su catálogo."
},

{
    id: 6,
    title: "Revelación de Bebé",

    category: "revelacion",

    categoryName: "Revelación",

    subtitle: "Una sorpresa que estamos a punto de revelar",

    url: "https://dvidblpz.github.io/invitacion_revelacion/",

    icon: "fa-baby",

    image: "./images/revelacion.jpg",

    message: "Hola Dulce Invitación, me interesa una invitación digital para revelación de bebé como la que vi en su catálogo."
},

{
    id: 7,

    title: "Baby Shower Osito",

    category: "baby-shower",

    categoryName: "Baby Shower",

    subtitle: "Érase una vez una historia llena de amor",

    url: "https://dvidblpz.github.io/invitacion_osito/",

    icon: "fa-paw",

    image: "./images/babyshower-osito.jpg",

    message: "Hola Dulce Invitación, me interesa una invitación digital de Baby Shower estilo osito como la que vi en su catálogo."
}, 

   {
    id: 8,

    title: "Cumpleaños Western",

    category: "cumpleanos",

    categoryName: "Cumpleaños",

    subtitle: "Ensilla tu caballo, ajusta tu sombrero y ven a celebrar.",

    url: "https://dvidblpz.github.io/invitacion_western/",

    icon: "fa-paw",

    image: "./images/western.jpg",

    message: "Hola Dulce Invitación, me interesa una invitación digital de Cumpleaños estilo Western como la que vi en su catálogo."
}, 
   {
        id: 9,

        title: "Baby Shower Tematica Pooh",

        category: "baby-shower",

        categoryName: "Baby Shower",

        subtitle: "El comienzo de una nueva historia",

        url:
            "https://dvidblpz.github.io/invitacion_pooh/",

        icon: "fa-heart",

        image:
            "./images/pooh.jpg",

        message:
            "Hola Dulce Invitación, me interesa una invitación digital de BabyShower Pooh como la que vi en su catálogo."
    },

   {
        id: 10,

        title: "Fiesta Disfraces",

        category: "otros",

        categoryName: "Otros",

        subtitle: "Cuando caiga la noche y los secretos despierten, solo los más valientes se atreverán a cruzar el umbral. ¿Te atreves a vivir una noche de pesadilla?",

        url:
            "https://dvidblpz.github.io/Halloween/",

        icon: "fa-heart",

        image:
            "./images/halloween.jpg",

        message:
            "Hola Dulce Invitación, me interesa una invitación digital de Fiesta de Halloween como la que vi en su catálogo."
    }


];


/*
=========================================================
PARA AGREGAR OTRA INVITACIÓN:

{
    id: 5,
    title: "XV Años",
    category: "xv",
    categoryName: "XV Años",
    subtitle: "Una noche para recordar",
    url: "https://...",
    icon: "fa-crown",
    image: "./images/xv.jpg",
    message: "Hola Dulce Invitación, me interesa una invitación de XV años."
}

Solo agrega el objeto anterior a este arreglo.
=========================================================
*/


/* =========================================================
   DOM
========================================================= */

const invitationsGrid =
    document.getElementById("invitationsGrid");

const noResults =
    document.getElementById("noResults");

const filterButtons =
    document.querySelectorAll(".filter-button");

const siteHeader =
    document.getElementById("siteHeader");

const backToTop =
    document.getElementById("backToTop");

const currentYear =
    document.getElementById("currentYear");

const mobileMenuButton =
    document.getElementById("mobileMenuButton");

const mobileNav =
    document.getElementById("mobileNav");

const preloader =
    document.getElementById("preloader");

const privacyModal =
    document.getElementById("privacyModal");

const cookieModal =
    document.getElementById("cookieModal");

const cookieBanner =
    document.getElementById("cookieBanner");

const preferencesToggle =
    document.getElementById("preferencesToggle");


/* =========================================================
   UTILIDADES
========================================================= */

function escapeHTML(value) {

    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}


/* =========================================================
   WHATSAPP
========================================================= */

function createWhatsAppURL(message) {

    return (
        "https://wa.me/" +
        WHATSAPP_NUMBER +
        "?text=" +
        encodeURIComponent(message)
    );

}


/* =========================================================
   CREAR TARJETA
========================================================= */

function createInvitationCard(invitation) {

    const card =
        document.createElement("article");

    card.className =
        "invitation-card";

    card.dataset.category =
        invitation.category;


    const safeTitle =
        escapeHTML(invitation.title);

    const safeCategory =
        escapeHTML(invitation.categoryName);

    const safeSubtitle =
        escapeHTML(invitation.subtitle);

    const safeImage =
        escapeHTML(invitation.image);

    const safeURL =
        escapeHTML(invitation.url);

    const whatsappURL =
        createWhatsAppURL(invitation.message);


    card.innerHTML = `

        <div class="card-preview">

            <div class="card-fallback">

                <i class="fa-solid ${escapeHTML(invitation.icon)}"></i>

                <span>
                    ${safeCategory}
                </span>

                <strong>
                    ${safeTitle}
                </strong>

            </div>


            <img
                class="card-preview-image"
                src="${safeImage}"
                alt="${safeTitle} - Invitación digital"
                loading="lazy"
                draggable="false"
            >


            <div class="card-overlay"></div>


            <span class="card-category">
                ${safeCategory}
            </span>

        </div>


        <div class="card-content">

            <h3>
                ${safeTitle}
            </h3>

            <p>
                ${safeSubtitle}
            </p>


            <div class="card-actions">

                <a
                    href="${safeURL}"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="card-button primary"
                >
                    <i class="fa-solid fa-arrow-up-right-from-square"></i>

                    VER INVITACIÓN
                </a>


                <a
                    href="${whatsappURL}"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="card-button secondary"
                >
                    <i class="fa-brands fa-whatsapp"></i>

                    QUIERO UNA ASÍ
                </a>

            </div>

        </div>

    `;


    const image =
        card.querySelector(".card-preview-image");


    /*
    Si la imagen no existe,
    mostramos automáticamente el fallback.
    */

    image.addEventListener("error", function () {

        this.style.opacity = "0";

        console.error(
            "No se pudo cargar la imagen:",
            invitation.image
        );

    });


    image.addEventListener("load", function () {

        this.style.opacity = "1";

        console.log(
            "Imagen cargada correctamente:",
            invitation.image
        );

    });


    return card;

}


/* =========================================================
   RENDERIZAR CATALOGO
========================================================= */

function renderInvitations(filter = "all") {

    invitationsGrid.innerHTML = "";

    let visibleCount = 0;


    invitations.forEach((invitation) => {

        const matches =
            filter === "all" ||
            invitation.category === filter;


        if (!matches) {
            return;
        }


        const card =
            createInvitationCard(invitation);


        invitationsGrid.appendChild(card);

        visibleCount++;

    });


    if (visibleCount === 0) {

        noResults.hidden = false;

    } else {

        noResults.hidden = true;

    }


    animateCards();

}


/* =========================================================
   FILTROS
========================================================= */

filterButtons.forEach((button) => {

    button.addEventListener("click", () => {

        filterButtons.forEach((item) => {

            item.classList.remove("active");

        });


        button.classList.add("active");


        const filter =
            button.dataset.filter;


        renderInvitations(filter);

    });

});


/* =========================================================
   ANIMACIÓN TARJETAS
========================================================= */

function animateCards() {

    const cards =
        document.querySelectorAll(".invitation-card");


    cards.forEach((card, index) => {

        card.style.opacity = "0";

        card.style.transform =
            "translateY(25px)";


        setTimeout(() => {

            card.style.transition =
                "opacity .6s ease, transform .6s ease";

            card.style.opacity = "1";

            card.style.transform =
                "translateY(0)";

        }, index * 90);

    });

}


/* =========================================================
   HEADER AL HACER SCROLL
========================================================= */

function handleHeaderScroll() {

    if (window.scrollY > 50) {

        siteHeader.classList.add("scrolled");

    } else {

        siteHeader.classList.remove("scrolled");

    }

}


/* =========================================================
   BACK TO TOP
========================================================= */

function handleBackToTop() {

    if (window.scrollY > 500) {

        backToTop.classList.add("visible");

    } else {

        backToTop.classList.remove("visible");

    }

}


backToTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* =========================================================
   MENU MOVIL
========================================================= */

mobileMenuButton.addEventListener("click", () => {

    const isOpen =
        mobileNav.classList.toggle("open");


    mobileMenuButton.setAttribute(
        "aria-expanded",
        isOpen ? "true" : "false"
    );

});


/* Cerrar menú al seleccionar */

mobileNav
    .querySelectorAll("a")
    .forEach((link) => {

        link.addEventListener("click", () => {

            mobileNav.classList.remove("open");

            mobileMenuButton.setAttribute(
                "aria-expanded",
                "false"
            );

        });

    });


/* =========================================================
   AÑO
========================================================= */

if (currentYear) {

    currentYear.textContent =
        new Date().getFullYear();

}


/* =========================================================
   PRIVACIDAD MODAL
========================================================= */

function openPrivacyModal() {

    privacyModal.classList.add("active");

    privacyModal.setAttribute(
        "aria-hidden",
        "false"
    );

    document.body.style.overflow =
        "hidden";

}


function closePrivacyModal() {

    privacyModal.classList.remove("active");

    privacyModal.setAttribute(
        "aria-hidden",
        "true"
    );

    if (
        !cookieModal.classList.contains("active")
    ) {

        document.body.style.overflow = "";

    }

}


/* Abrir desde links */

document
    .querySelectorAll(
        'a[href="./privacidad.html"]'
    )
    .forEach((link) => {

        /*
        En escritorio permitimos abrir el documento
        normalmente. El modal se abre mediante elementos
        específicos si se requiere.
        */

    });


/* Cerrar modal */

document
    .querySelectorAll("[data-close-modal]")
    .forEach((element) => {

        element.addEventListener(
            "click",
            closePrivacyModal
        );

    });


/* =========================================================
   COOKIES / PREFERENCIAS
========================================================= */

const COOKIE_STORAGE_KEY =
    "dulceInvitacionCookiePreferences";


function getCookiePreferences() {

    try {

        const saved =
            localStorage.getItem(
                COOKIE_STORAGE_KEY
            );


        if (!saved) {

            return null;

        }


        return JSON.parse(saved);

    } catch (error) {

        console.warn(
            "No se pudieron leer las preferencias.",
            error
        );

        return null;

    }

}


function saveCookiePreferences(preferences) {

    try {

        localStorage.setItem(
            COOKIE_STORAGE_KEY,
            JSON.stringify(preferences)
        );

    } catch (error) {

        console.warn(
            "No se pudieron guardar las preferencias.",
            error
        );

    }

}


function hideCookieBanner() {

    cookieBanner.style.display =
        "none";

}


function showCookieBanner() {

    cookieBanner.style.display =
        "block";

}


function openCookieModal() {

    const preferences =
        getCookiePreferences();


    if (preferences) {

        preferencesToggle.checked =
            Boolean(
                preferences.preferences
            );

    } else {

        preferencesToggle.checked =
            false;

    }


    cookieModal.classList.add("active");

    cookieModal.setAttribute(
        "aria-hidden",
        "false"
    );

    document.body.style.overflow =
        "hidden";

}


function closeCookieModal() {

    cookieModal.classList.remove("active");

    cookieModal.setAttribute(
        "aria-hidden",
        "true"
    );


    if (
        !privacyModal.classList.contains("active")
    ) {

        document.body.style.overflow = "";

    }

}


/* =========================================================
   ACEPTAR COOKIES
========================================================= */

const acceptCookies =
    document.getElementById("acceptCookies");


acceptCookies.addEventListener("click", () => {

    saveCookiePreferences({

        necessary: true,

        preferences: true,

        timestamp:
            new Date().toISOString()

    });


    hideCookieBanner();

});


/* =========================================================
   MÁS INFORMACIÓN
========================================================= */

const cookieMoreInfo =
    document.getElementById("cookieMoreInfo");


cookieMoreInfo.addEventListener(
    "click",
    openCookieModal
);


/* =========================================================
   PREFERENCIAS DESDE FOOTER
========================================================= */

const openCookieSettings =
    document.getElementById(
        "openCookieSettings"
    );


openCookieSettings.addEventListener(
    "click",
    openCookieModal
);


/* =========================================================
   GUARDAR PREFERENCIAS
========================================================= */

const saveCookiePreferencesButton =
    document.getElementById(
        "saveCookiePreferences"
    );


saveCookiePreferencesButton.addEventListener(
    "click",
    () => {

        saveCookiePreferences({

            necessary: true,

            preferences:
                preferencesToggle.checked,

            timestamp:
                new Date().toISOString()

        });


        hideCookieBanner();

        closeCookieModal();

    }
);


/* =========================================================
   CERRAR COOKIE MODAL
========================================================= */

document
    .querySelectorAll("[data-close-cookie]")
    .forEach((element) => {

        element.addEventListener(
            "click",
            closeCookieModal
        );

    });


/* =========================================================
   COMPROBAR PREFERENCIAS AL CARGAR
========================================================= */

function initializeCookieBanner() {

    const preferences =
        getCookiePreferences();


    if (preferences) {

        hideCookieBanner();

    } else {

        showCookieBanner();

    }

}


/* =========================================================
   PROTECCIÓN CONTRA COPIAR
========================================================= */


/*
Bloquear menú contextual.
*/

document.addEventListener(
    "contextmenu",
    (event) => {

        event.preventDefault();

    }
);


/*
Bloquear copiar.
*/

document.addEventListener(
    "copy",
    (event) => {

        event.preventDefault();

    }
);


/*
Bloquear cortar.
*/

document.addEventListener(
    "cut",
    (event) => {

        event.preventDefault();

    }
);


/*
Bloquear pegar.
*/

document.addEventListener(
    "paste",
    (event) => {

        event.preventDefault();

    }
);


/*
Bloquear selección.
*/

document.addEventListener(
    "selectstart",
    (event) => {

        event.preventDefault();

    }
);


/*
Bloquear arrastrar.
*/

document.addEventListener(
    "dragstart",
    (event) => {

        event.preventDefault();

    }
);


/* =========================================================
   ATAJOS DE TECLADO
========================================================= */

document.addEventListener(
    "keydown",
    (event) => {

        const key =
            event.key.toLowerCase();


        /*
        Ctrl / CMD + C
        */

        if (
            (event.ctrlKey || event.metaKey) &&
            key === "c"
        ) {

            event.preventDefault();

        }


        /*
        Ctrl / CMD + X
        */

        if (
            (event.ctrlKey || event.metaKey) &&
            key === "x"
        ) {

            event.preventDefault();

        }


        /*
        Ctrl / CMD + V
        */

        if (
            (event.ctrlKey || event.metaKey) &&
            key === "v"
        ) {

            event.preventDefault();

        }


        /*
        Ctrl / CMD + A
        */

        if (
            (event.ctrlKey || event.metaKey) &&
            key === "a"
        ) {

            event.preventDefault();

        }


        /*
        Ctrl / CMD + S
        */

        if (
            (event.ctrlKey || event.metaKey) &&
            key === "s"
        ) {

            event.preventDefault();

        }


        /*
        Ctrl / CMD + U
        */

        if (
            (event.ctrlKey || event.metaKey) &&
            key === "u"
        ) {

            event.preventDefault();

        }


        /*
        F12
        */

        if (event.key === "F12") {

            event.preventDefault();

        }


        /*
        Ctrl + Shift + I
        */

        if (
            event.ctrlKey &&
            event.shiftKey &&
            key === "i"
        ) {

            event.preventDefault();

        }


        /*
        Ctrl + Shift + J
        */

        if (
            event.ctrlKey &&
            event.shiftKey &&
            key === "j"
        ) {

            event.preventDefault();

        }


        /*
        Ctrl + Shift + C
        */

        if (
            event.ctrlKey &&
            event.shiftKey &&
            key === "c"
        ) {

            event.preventDefault();

        }

    }
);


/* =========================================================
   VERIFICACIÓN DE IMÁGENES
========================================================= */

function verifyImages() {

    console.group(
        "Dulce Invitación - Verificación de imágenes"
    );


    invitations.forEach((invitation) => {

        const image =
            new Image();


        image.onload = () => {

            console.log(
                "✓ OK:",
                invitation.image
            );

        };


        image.onerror = () => {

            console.error(
                "✗ ERROR:",
                invitation.image
            );

        };


        image.src =
            invitation.image;

    });


    console.groupEnd();

}


/* =========================================================
   EVENTOS SCROLL
========================================================= */

window.addEventListener(
    "scroll",
    () => {

        handleHeaderScroll();

        handleBackToTop();

    },
    { passive: true }
);


/* =========================================================
   PRELOADER
========================================================= */

window.addEventListener(
    "load",
    () => {

        setTimeout(() => {

            preloader.classList.add(
                "hidden"
            );

        }, 500);

    }
);


/* =========================================================
   INICIALIZACIÓN
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        renderInvitations("all");

        initializeCookieBanner();

        handleHeaderScroll();

        handleBackToTop();

        verifyImages();

    }
);
