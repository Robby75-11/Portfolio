import { useState } from "react";
import "./App.css";
import {
  FaReact,
  FaNodeJs,
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaBootstrap,
  FaSass,
  FaGitAlt,
  FaGithub,
  FaDocker,
} from "react-icons/fa";
import {
  SiTypescript,
  SiRedux,
  SiPostgresql,
  SiSpringboot,
  SiTailwindcss,
} from "react-icons/si";
import { BsFiletypeSql } from "react-icons/bs";
//  the portfolio of Roberto
const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Hardcoded personal and project data
  const personalData = {
    name: "Roberto Albergo",
    title: "Sviluppatore Web Full Stack",
    bio: "Sviluppatore web con una passione per la creazione di soluzioni complete, dal design dell'interfaccia utente al backend. Esperto in sviluppo Full Stack con focus su tecnologie moderne e architetture scalabili.",
    linkedinUrl: "https://www.linkedin.com/in/roberto-albergo",
    githubUrl: "https://github.com/Robby75-11",
    profileImage: "/FOTOMIA.jpg",
  };

  const projects = [
    {
      title: "App Meteo",
      description:
        "Un'applicazione meteo interattiva che fornisce previsioni in tempo reale. Creata con React, si concentra sull'usabilità e sulla chiarezza dei dati.",
      imageUrl: "/2025-09-08 (9).png",
      projectUrl: "https://app-meteo-lemon.vercel.app/",
      githubUrl: "https://github.com/Robby75-11/App-meteo",
    },
    {
      title: "Travel Mate",
      description:
        "Una piattaforma per la pianificazione di viaggi, che aiuta gli utenti a esplorare destinazioni e organizzare itinerari. Sviluppata per offrire un'esperienza utente fluida e ricca di funzionalità.Realizzata con React, Bootstrap,Javascript, Api Google Maps, Java, Spring Boot, Database PostgreSQL. Attendete giusto il tempo di un caffè e l'app si aprirà completamente",
      imageUrl: "/Screenshot 2025-07-25 165206.png",
      projectUrl: "https://travel-mate-sand.vercel.app/",
      githubUrl: "https://github.com/Robby75-11/Travel-mate",
    },
    {
      title: "Netflix Movie",
      description:
        "Un clone dell'interfaccia di Netflix, che mostra una galleria di film e serie TV. Progettato per replicare l'estetica e l'esperienza di navigazione della popolare piattaforma di streaming.Realizzato con React, Bootstrap. ",
      imageUrl: "2025-09-08 (6).png",
      projectUrl: "https://netflix-movie-seven.vercel.app/",
      githubUrl: "https://github.com/Robby75-11/netflix-movie",
    },
    {
      title: "Apple Music",
      description:
        "Una riproduzione della pagina principale di Apple Music, con un'attenzione particolare al design minimalista e alla riproduzione musicale. L'obiettivo è stato replicare l'eleganza del layout originale.Realizzato con React, Bootstrap, Sass, Redux, Java, Spring Boot, PostgreSQL.",
      imageUrl: "/Screenshot 2025-08-03 010559.png",
      projectUrl: "https://apple-music-five.vercel.app/",
      githubUrl: "https://github.com/Robby75-11/Apple-music",
    },
    {
      title: "E-commerce-Tech",
      description:
        "Un sito e-commerce specializzato in prodotti tecnologici, con funzionalità complete per la gestione del catalogo prodotti e del carrello.Realizzato con React, Bootstrap, Redux.",
      imageUrl: "2025-09-08 (7).png",
      projectUrl: "https://e-commerce-pc-beta.vercel.app/",
      githubUrl: "https://github.com/Robby75-11/e-commerce-pc",
    },
    {
      title: "Spotify Homepage",
      description:
        "Una riproduzione fedele della homepage di Spotify, focalizzata sul design e sull'esperienza utente. Realizzato con Bootstrap, javascript, Css, HTML5.",
      imageUrl: "2025-09-08 (4).png",
      projectUrl: "https://spoti-team7-final.vercel.app",
      githubUrl: "#",
    },
  ];

  const contacts = {
    linkedinUrl: "https://www.linkedin.com/in/roberto-albergo",
    githubUrl: "https://github.com/Robby75-11",
    email: "ralbergo7@gmail.com",
    phone: "3476719062",
  };

  const skills = [
    { name: "React", icon: FaReact },
    { name: "Java", icon: FaJava },
    { name: "JavaScript", icon: FaJsSquare },
    { name: "HTML", icon: FaHtml5 },
    { name: "CSS", icon: FaCss3Alt },
    { name: "Bootstrap", icon: FaBootstrap },
    { name: "Sass", icon: FaSass },
    { name: "Redux", icon: SiRedux },
    { name: "Spring Boot", icon: SiSpringboot },
    { name: "PostgreSQL", icon: SiPostgresql },
    { name: "Node.js", icon: FaNodeJs },
    { name: "Git", icon: FaGitAlt },
    { name: "GitHub", icon: FaGithub },
    { name: "Docker", icon: FaDocker },
    { name: "TypeScript", icon: SiTypescript },
    { name: "SQL", icon: BsFiletypeSql },
    { name: "Tailwind", icon: SiTailwindcss },
  ];

  const professionalExperiences = [
    {
      title: 'Ditta di Trasporti "Sinesi Carmine"',
      role: "Magazziniere",
      period: "Maggio 2023 - Gennaio 2025",
      description:
        "Gestione magazzino, ricezione e stoccaggio merci, spedizioni.",
    },
    {
      title: "Entiende S.R.L.",
      role: "OPeratore Web e addetto inserimento dati ",
      period: "Marzo 2022 - Aprile 2023",
      description:
        "Consulente Energia e addetto allo sviluppo con  Css, HTML5.",
    },
    {
      title: "GRIP S.R.L.",
      role: "Consulente Energia",
      period: "Maggio 2021 - Marzo 2022",
      description:
        "Consulenza clienti, gestione contratti, soluzioni di risparmio energetico.",
    },
    {
      title: "Auchan S.P.A. Modugno (BA)",
      role: "Addetto vendita",
      period: "Febbraio 2004 – Novembre 2020",
      description:
        "Addetto vendita, allestimento scaffali, assistenza clienti, gestione cassa, promozioni.",
    },
  ];

  const education = [
    {
      title: "Full Stack Developer",
      school: "EPICODE Institute of Technology",
      year: "2025",
      description: [
        "Backend: Java, Spring Boot, JPA, REST API, PostgreSQL, JWT (autenticazione lato server).",
        "Frontend: React, Redux, TypeScript, HTML5, CSS3, Bootstrap, Vite.",
        "Tools/Versioning: Git, GitHub.",
        "Deployment: Vercel, Netlify, Railway, Render, Heroku, Koyeb.",
      ],
    },
    {
      title: "Corso AI & GitHub Copilot",
      school: "EPICODE Institute of Technology",
      year: "2025",
      description: [
        "LLM, Prompt Engineering, GitHub Copilot. Automazioni nello sviluppo software. Uso pratico di AI in ambito coding.",
      ],
    },
    {
      title: "Python Intermediate",
      school: "EPICODE Institute of Technology",
      year: "2025",
      description: [],
    },
  ];
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false); // Close menu after clicking a link
    }
  };

  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
        xintegrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
        crossOrigin="anonymous"
      />
      <div className="bg-dark text-white font-sans leading-relaxed">
        {/* Header Section */}
        <header
          className="fixed-top shadow-sm"
          style={{
            backgroundColor: "rgba(33, 37, 41, 0.8)",
            backdropFilter: "blur(5px)",
          }}
        >
          <nav className="navbar navbar-expand-md navbar-dark">
            <div className="container px-4 py-3">
              <a className="navbar-brand text-info fw-bold" href="#">
                Portfolio Roberto Albergo
              </a>
              <button
                className="navbar-toggler"
                type="button"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className={`collapse navbar-collapse${
                  isMenuOpen ? " show" : ""
                }`}
                id="navbarNav"
              >
                <ul className="navbar-nav ms-auto mb-2 mb-md-0">
                  <li className="nav-item">
                    <button
                      className="nav-link text-white-50"
                      onClick={() => scrollToSection("experiences")}
                    >
                      Esperienze
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      className="nav-link text-white-50"
                      onClick={() => scrollToSection("skills")}
                    >
                      Formazione
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      className="nav-link text-white-50"
                      onClick={() => scrollToSection("skills")}
                    >
                      Competenze
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      className="nav-link text-white-50"
                      onClick={() => scrollToSection("projects")}
                    >
                      Progetti
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      className="nav-link text-white-50"
                      onClick={() => scrollToSection("contacts")}
                    >
                      Contatti
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>

        {/* Contenuto principale */}
        <main>
          {/* Hero Section */}
          <section
            className="min-vh-100 d-flex align-items-center justify-content-center text-center p-5"
            id="home"
          >
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-12 col-md-10 col-lg-8">
                  <img
                    src={personalData.profileImage}
                    alt="Roberto Albergo"
                    className="img-fluid rounded-circle mb-4 border border-info border-4"
                    style={{
                      width: "128px",
                      height: "128px",
                      objectFit: "cover",
                    }}
                  />
                  <h1 className="display-4 fw-bold text-white mb-2">
                    Ciao, sono Roberto.
                  </h1>
                  <p className="lead text-secondary mb-3">
                    {personalData.title}
                  </p>
                  <p className="fs-6 text-white-50 mb-4">{personalData.bio}</p>
                  <div className="d-flex flex-wrap justify-content-center gap-3">
                    <button
                      onClick={() => scrollToSection("experiences")}
                      className="btn btn-secondary rounded-pill px-4 py-2"
                    >
                      Esperienze Professionali
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Esperienze lavorative */}
          <section className="py-5 bg-secondary" id="experiences">
            <div className="container px-4">
              <h2 className="text-center text-white mb-5">
                Esperienze Professionali
              </h2>
              <div className="row g-4 justify-content-center">
                {professionalExperiences.map((exp, index) => (
                  <div key={index} className="col-12 col-md-10 col-lg-8">
                    <div
                      className="card text-white bg-dark border-0 shadow-lg"
                      style={{ borderLeft: "4px solid #17a2b8" }}
                    >
                      <div className="card-body">
                        <h5 className="card-title fw-bold text-info">
                          {exp.role}
                        </h5>
                        <h6 className="card-subtitle mb-2 text-white-50">
                          {exp.title}
                        </h6>
                        <p className="card-text text-white-50 small mb-3">
                          {exp.period}
                        </p>
                        <p className="card-text">{exp.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Sezione Formazione */}
          <section className="py-5 bg-dark" id="education">
            <div className="container px-4">
              <h2 className="text-center text-white mb-5">Formazione</h2>
              <div className="row g-4 justify-content-center">
                {education.map((edu, index) => (
                  <div key={index} className="col-12 col-md-10 col-lg-8">
                    <div
                      className="card text-white bg-secondary border-0 shadow-lg"
                      style={{ borderLeft: "4px solid #17a2b8" }}
                    >
                      <div className="card-body">
                        <h5 className="card-title fw-bold text-info">
                          {edu.title}
                        </h5>
                        <h6 className="card-subtitle mb-2 text-white">
                          {edu.school}
                        </h6>
                        <p className="card-text text-white-50 small mb-3">
                          {edu.year}
                        </p>
                        {Array.isArray(edu.description) && (
                          <div className="card-text">
                            {edu.description.map((line, lineIndex) => (
                              <p key={lineIndex} className="m-0">
                                {line}
                              </p>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Competenze Tecniche */}
          <section className="py-5 bg-dark" id="skills">
            <div className="container px-4">
              <h2 className="text-center text-white mb-5">
                Competenze Tecniche
              </h2>
              <div className="d-flex flex-wrap justify-content-center gap-4">
                {skills.map((skill, index) => {
                  const IconComponent = skill.icon;
                  return (
                    <div
                      key={index}
                      className="text-center icon-container"
                      style={{ width: "80px" }}
                    >
                      <div
                        className="d-flex align-items-center justify-content-center rounded-circle border border-info border-2 mb-2 p-3"
                        style={{
                          width: "60px",
                          height: "60px",
                          margin: "0 auto",
                          transition: "transform 0.3s ease-in-out",
                          cursor: "pointer",
                          backgroundColor: "rgba(23, 162, 184, 0.1)",
                        }}
                      >
                        <IconComponent
                          className="icon-move"
                          style={{ fontSize: "2.5rem", color: "#17a2b8" }}
                        />
                      </div>
                      <span className="small text-white-50">{skill.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Progetti */}
          <section className="py-5 bg-secondary" id="projects">
            <div className="container px-4">
              <h2 className="text-center text-white mb-5">I miei progetti</h2>
              <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                {projects.map((project, index) => (
                  <div key={index} className="col">
                    <div className="card h-100 text-white bg-dark border-0 rounded-3 shadow-lg">
                      <img
                        src={project.imageUrl}
                        alt={`Screenshot del progetto ${project.title}`}
                        className="card-img-top"
                        style={{ height: "200px", objectFit: "cover" }}
                      />
                      <div className="card-body">
                        <h5 className="card-title text-info fw-bold">
                          {project.title}
                        </h5>
                        <p className="card-text text-white-50 small">
                          {project.description}
                        </p>
                      </div>
                      <div className="card-footer bg-dark border-0 pt-0">
                        <div className="d-flex justify-content-start gap-2">
                          <a
                            href={project.projectUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-info btn-sm rounded-pill"
                          >
                            Vedi Live
                          </a>
                          {project.githubUrl && project.githubUrl !== "#" && (
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn btn-secondary btn-sm rounded-pill"
                            >
                              GitHub
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Sezione Contatti */}
          <section className="py-5 bg-dark" id="contacts">
            <div className="container px-4 text-center">
              <h2 className="text-white mb-4">Contatti</h2>
              <p className="text-white-50 mb-4">
                Puoi raggiungermi attraverso i seguenti canali:
              </p>
              <div className="d-flex flex-wrap justify-content-center gap-3">
                <a
                  href={contacts.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-info rounded-pill px-4 py-2"
                >
                  LinkedIn
                </a>
                <a
                  href={contacts.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary rounded-pill px-4 py-2"
                >
                  GitHub
                </a>
                <a
                  href={`mailto:${contacts.email}`}
                  className="btn btn-secondary rounded-pill px-4 py-2"
                >
                  {contacts.email}
                </a>
                <a
                  href={`tel:${contacts.phone}`}
                  className="btn btn-secondary rounded-pill px-4 py-2"
                >
                  {contacts.phone}
                </a>
              </div>
            </div>
          </section>
        </main>

        {/* Footer  */}
        <footer className="bg-dark py-4 text-center text-white-50 small">
          <div className="container">
            <p className="mb-0">
              &copy; {new Date().getFullYear()} Roberto Albergo. Tutti i diritti
              riservati.
            </p>
          </div>
        </footer>
      </div>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
        xintegrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
        crossOrigin="anonymous"
      ></script>
    </>
  );
};

export default App;
