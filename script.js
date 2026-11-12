const menuBtn = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", function () {

        navLinks.classList.toggle("active");

        if (navLinks.classList.contains("active")) {
            menuBtn.textContent = "✕";
            menuBtn.setAttribute("aria-expanded", "true");
        } else {
            menuBtn.textContent = "☰";
            menuBtn.setAttribute("aria-expanded", "false");
        }

    });

}

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(function (link) {

    link.addEventListener("click", function () {

        if (navLinks) {
            navLinks.classList.remove("active");
        }

        if (menuBtn) {
            menuBtn.textContent = "☰";
            menuBtn.setAttribute("aria-expanded", "false");
        }

    });

});

const sections = document.querySelectorAll(".section");

const revealObserver = new IntersectionObserver(
    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                revealObserver.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.1
    }
);

sections.forEach(function (section) {

    if (section.id !== "home") {
        section.classList.add("reveal");
    }

    revealObserver.observe(section);

});

const allSections = document.querySelectorAll("section[id]");

const navObserver = new IntersectionObserver(
    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                const currentId = entry.target.id;

                navItems.forEach(function (link) {

                    link.classList.remove("active");

                    if (link.getAttribute("href") === "#" + currentId) {
                        link.classList.add("active");
                    }

                });

            }

        });

    },
    {
        threshold: 0.4
    }
);

allSections.forEach(function (section) {
    navObserver.observe(section);
});

const currentYear = document.getElementById("currentYear");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}
