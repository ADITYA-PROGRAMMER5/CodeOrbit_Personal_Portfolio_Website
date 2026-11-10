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

