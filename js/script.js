// =========================
// THEME TOGGLE
// =========================

const themeBtn = document.getElementById("theme-toggle");
const themeIcon = themeBtn.querySelector("i");

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
    document.body.classList.add("light");

    themeIcon.classList.remove("fa-moon");
    themeIcon.classList.add("fa-sun");
}

themeBtn.addEventListener("click", () => {

    document.body.classList.add("theme-changing");

    document.body.classList.toggle("light");

    const isLight =
        document.body.classList.contains("light");

    if (isLight) {

        localStorage.setItem("theme", "light");

        themeIcon.classList.remove("fa-moon");
        themeIcon.classList.add("fa-sun");

    } else {

        localStorage.setItem("theme", "dark");

        themeIcon.classList.remove("fa-sun");
        themeIcon.classList.add("fa-moon");

    }

    setTimeout(() => {

        document.body.classList.remove("theme-changing");

    }, 600);

});


// =========================
// SMOOTH SCROLL
// =========================

document
.querySelectorAll('.nav-links a')
.forEach(link => {

    link.addEventListener('click', e => {

        e.preventDefault();

        const target =
            document.querySelector(
                link.getAttribute('href')
            );

        if (!target) return;

        target.scrollIntoView({
            behavior: 'smooth'
        });

    });

});


// =========================
// ACTIVE NAVBAR
// =========================

const sections =
    document.querySelectorAll("section");

const navLinks =
    document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

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
            current = section.id;
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href")
            === `#${current}`
        ) {
            link.classList.add("active");
        }

    });

});


// =========================
// NAVBAR SCROLL EFFECT
// =========================

const navbar =
    document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        navbar.style.padding =
            "14px 28px";

        navbar.style.boxShadow =
            "0 10px 30px rgba(0,0,0,.2)";

    } else {

        navbar.style.padding =
            "18px 30px";

        navbar.style.boxShadow =
            "none";

    }

});


// =========================
// SKILL BAR ANIMATION
// =========================

const skillBars =
    document.querySelectorAll(".skill-progress");

const skillObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (
                    entry.isIntersecting
                ) {

                    const targetWidth =
                        entry.target.dataset.width;

                    entry.target.style.width =
                        targetWidth + "%";

                }

            });

        },
        {
            threshold: 0.4
        }
    );

skillBars.forEach(bar => {

    bar.style.width = "0";

    skillObserver.observe(bar);

});


// =========================
// REVEAL ANIMATION
// =========================

const revealElements =
    document.querySelectorAll(
        ".section-title, .about-container, .skill-item, .timeline-item, .project-card, .contact-card, .contact-form"
    );

revealElements.forEach(el => {

    el.style.opacity = "0";
    el.style.transform =
        "translateY(40px)";
    el.style.transition =
        "all .8s ease";

});

const revealObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (
                    entry.isIntersecting
                ) {

                    entry.target.style.opacity =
                        "1";

                    entry.target.style.transform =
                        "translateY(0)";

                }

            });

        },
        {
            threshold: 0.15
        }
    );

revealElements.forEach(el => {

    revealObserver.observe(el);

});


// =========================
// HERO TYPING EFFECT
// =========================

const heroTitle =
    document.querySelector(".hero h1 span");

if (heroTitle) {

    const originalText =
        heroTitle.textContent;

    heroTitle.textContent = "";

    let index = 0;

    function typeText() {

        if (
            index <
            originalText.length
        ) {

            heroTitle.textContent +=
                originalText.charAt(index);

            index++;

            setTimeout(
                typeText,
                100
            );
        }

    }

    window.addEventListener(
        "load",
        typeText
    );

}