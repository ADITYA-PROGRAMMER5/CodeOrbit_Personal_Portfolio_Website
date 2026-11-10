const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function () {

    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {
        menuBtn.textContent = "✕";
    } else {
        menuBtn.textContent = "☰";
    }

});

const navItems = document.querySelectorAll(".nav-link");

navItems.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");
        menuBtn.textContent = "☰";

    });

});

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function () {

    document.body.classList.toggle("light-theme");

    if (document.body.classList.contains("light-theme")) {
        themeBtn.textContent = "☾";
    } else {
        themeBtn.textContent = "☀";
    }

});

const progressBars = document.querySelectorAll(".progress-bar");

const skillObserver = new IntersectionObserver(function (entries) {

    entries.forEach(function (entry) {

        if (entry.isIntersecting) {
            const bar = entry.target;
            const width = bar.getAttribute("data-width");

            bar.style.width = width + "%";
            skillObserver.unobserve(bar);

        }

    });

}, {
    threshold: 0.5
});

progressBars.forEach(function (bar) {
    skillObserver.observe(bar);
});

const sections = document.querySelectorAll(".section");
const revealObserver = new IntersectionObserver(function (entries) {

    entries.forEach(function (entry) {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
            revealObserver.unobserve(entry.target);

        }

    });

}, {
    threshold: 0.1
});

sections.forEach(function (section) {

    if (section.id !== "home") {
        section.classList.add("reveal");
    }

    revealObserver.observe(section);

});

const allSections = document.querySelectorAll("section[id]");
const navObserver = new IntersectionObserver(function (entries) {

    entries.forEach(function (entry) {

        if (entry.isIntersecting) {
            const currentId = entry.target.getAttribute("id");
            navItems.forEach(function (link) {

                link.classList.remove("active");

                if (link.getAttribute("href") === "#" + currentId) {
                    link.classList.add("active");
                }

            });

        }

    });

}, {
    threshold: 0.4
});

allSections.forEach(function (section) {
    navObserver.observe(section);
});

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {

        formMessage.textContent = "Please fill in all fields.";
        return;

    }

    formMessage.textContent = "Thank you! Your message has been validated.";

    contactForm.reset();

});
