import { useEffect, useState } from "react";
import ContentIcons from "./contentIcons";

function Header() {
  // Estado para controlar qué sección está activa
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Actualiza el estado con el id de la sección visible
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 } // Ajusta el umbral para detectar cuando la sección está al 60% en vista
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    // Limpia el observer al desmontar el componente
    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div>
        <h1 className="text-slate-200 text-3xl lg:text-5xl font-bold">David Gómez</h1>
        <p className="text-yellow-100 text-lg font-medium mt-2 ">
          Desarrollador junior
        </p>
        <p className="text-gray-400/50 text-md mt-4 max-w-xs leading-normal">
          Construyo aplicaciones web y tipo movil, accesibles y intuitivas para
          cada usuario
        </p>
        <nav className="nav hidden lg:block ">
          <ul className="w-max mt-16">
            <li>
              <a
                href="#about"
                className={`group flex items-center py-3 ${
                  activeSection === "about"
                    ? "text-slate-200"
                    : "text-slate-500"
                }`}
              >
                <span
                  className={`nav-indicator mr-4 h-px w-8 ${
                    activeSection === "about"
                      ? "bg-slate-200 w-16"
                      : "bg-slate-500"
                  } transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none`}
                ></span>
                <span className="nav-text text-xs font-bold uppercase tracking-widest transition-all">
                  Sobre mi
                </span>
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className={`group flex items-center py-3 ${
                  activeSection === "projects"
                    ? "text-slate-200"
                    : "text-slate-500"
                }`}
              >
                <span
                  className={`nav-indicator mr-4 h-px w-8 ${
                    activeSection === "projects"
                      ? "bg-slate-200 w-16"
                      : "bg-slate-500"
                  } transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none`}
                ></span>
                <span className="nav-text text-xs font-bold uppercase tracking-widest transition-all">
                  Projectos
                </span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <ContentIcons />
    </header>
  );
}

export default Header;
