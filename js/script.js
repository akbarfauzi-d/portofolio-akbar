/* =========================
   RESET
========================= */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: "Segoe UI", sans-serif;
    background: #0f172a;
    color: #f8fafc;
    line-height: 1.6;
}

/* =========================
   CONTAINER
========================= */

section {
    max-width: 1100px;
    margin: auto;
    padding: 100px 20px;
}

h1,
h2,
h3 {
    line-height: 1.2;
}

h2 {
    text-align: center;
    margin-bottom: 50px;
    font-size: 2rem;
}

/* =========================
   HEADER
========================= */

header {
    position: fixed;
    top: 0;
    width: 100%;
    background: rgba(15, 23, 42, 0.95);
    backdrop-filter: blur(10px);
    z-index: 1000;
    border-bottom: 1px solid rgba(255,255,255,.08);
}

nav {
    max-width: 1100px;
    margin: auto;
    padding: 18px 20px;

    display: flex;
    justify-content: space-between;
    align-items: center;
}

nav h2 {
    margin: 0;
    font-size: 1.5rem;
    color: #8b5cf6;
}

nav ul {
    display: flex;
    list-style: none;
    gap: 24px;
}

nav a {
    text-decoration: none;
    color: #e2e8f0;
    transition: .3s;
}

nav a:hover {
    color: #8b5cf6;
}

/* =========================
   HERO
========================= */

#hero {
    min-height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.hero-content {
    max-width: 700px;
}

.hero-content h1 {
    font-size: 4rem;
    margin-bottom: 10px;
}

.hero-content h3 {
    color: #8b5cf6;
    margin-bottom: 20px;
    font-weight: 500;
}

.hero-content p {
    color: #cbd5e1;
    margin-bottom: 35px;
}

.hero-buttons {
    display: flex;
    justify-content: center;
    gap: 15px;
}

.hero-buttons a {
    text-decoration: none;
    padding: 12px 24px;
    border-radius: 10px;
    transition: .3s;
}

.hero-buttons a:first-child {
    background: #8b5cf6;
    color: white;
}

.hero-buttons a:last-child {
    border: 1px solid #8b5cf6;
    color: #8b5cf6;
}

.hero-buttons a:hover {
    transform: translateY(-3px);
}

/* =========================
   ABOUT
========================= */

#about p {
    max-width: 800px;
    margin: auto;
    text-align: center;
    color: #cbd5e1;
}

/* =========================
   SKILLS
========================= */

.skills-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 25px;
}

.skill-group {
    background: #1e293b;
    padding: 25px;
    border-radius: 18px;
    border: 1px solid rgba(255,255,255,.05);
}

.skill-group h3 {
    margin-bottom: 15px;
    color: #8b5cf6;
}

.skill-group ul {
    list-style: none;
}

.skill-group li {
    padding: 8px 0;
    border-bottom: 1px solid rgba(255,255,255,.05);
}

.skill-group li:last-child {
    border: none;
}

/* =========================
   PROJECTS
========================= */

.project-card {
    background: #1e293b;
    padding: 30px;
    border-radius: 20px;
    border: 1px solid rgba(255,255,255,.05);

    max-width: 700px;
    margin: auto;
}

.project-card h3 {
    margin-bottom: 15px;
    color: #8b5cf6;
}

.project-card p {
    color: #cbd5e1;
    margin-bottom: 20px;
}

.project-links {
    display: flex;
    gap: 12px;
}

.project-links a {
    text-decoration: none;
    padding: 10px 18px;
    border-radius: 10px;
    background: #8b5cf6;
    color: white;
    transition: .3s;
}

.project-links a:hover {
    opacity: .85;
}

/* =========================
   CERTIFICATIONS
========================= */

#certifications ul {
    max-width: 700px;
    margin: auto;
    list-style: none;
}

#certifications li {
    background: #1e293b;
    margin-bottom: 12px;
    padding: 18px;
    border-radius: 12px;
}

/* =========================
   CONTACT
========================= */

#contact {
    text-align: center;
}

#contact p {
    margin-bottom: 10px;
}

#contact a {
    display: inline-block;
    margin-top: 15px;
    color: #8b5cf6;
    text-decoration: none;
}

/* =========================
   FOOTER
========================= */

footer {
    text-align: center;
    padding: 30px 20px;
    color: #94a3b8;
    border-top: 1px solid rgba(255,255,255,.05);
}

/* =========================
   RESPONSIVE
========================= */

@media (max-width: 768px) {

    nav {
        flex-direction: column;
        gap: 15px;
    }

    nav ul {
        flex-wrap: wrap;
        justify-content: center;
    }

    .hero-content h1 {
        font-size: 2.7rem;
    }

    .hero-buttons {
        flex-direction: column;
    }

    .project-links {
        flex-direction: column;
    }
}