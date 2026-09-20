// ================================
// LUCIDE ICONS
// ================================

lucide.createIcons();


// ================================
// MOBILE MENU
// ================================

const menuButton = document.getElementById("menuButton");
const navMenu = document.getElementById("navMenu");

menuButton.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});


// Close mobile menu after clicking a link

document.querySelectorAll("#navMenu a").forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

    });

});


// ================================
// CONTACT FORM
// ================================

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {

        formMessage.textContent =
            "Please fill in all fields.";

        return;
    }

    formMessage.textContent =
        `Thanks ${name}! Your message has been received.`;

    contactForm.reset();

});


// ================================
// SCROLL REVEAL
// ================================

const revealElements = document.querySelectorAll(
    ".section-heading, .about-grid, .skill-card, .project-card, .service, .contact-container"
);

const revealObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("revealed");

                revealObserver.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);

revealElements.forEach(element => {

    element.classList.add("reveal");

    revealObserver.observe(element);

});


// ================================
// MOUSE EFFECT
// ================================

document.addEventListener("mousemove", (event) => {

    const x = event.clientX / window.innerWidth;
    const y = event.clientY / window.innerHeight;

    document.documentElement.style.setProperty(
        "--mouse-x",
        `${x * 100}%`
    );

    document.documentElement.style.setProperty(
        "--mouse-y",
        `${y * 100}%`
    );

});