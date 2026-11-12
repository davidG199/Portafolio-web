import { useEffect, useState } from "react";
import ContentIcons from "./contentIcons";

function Header() {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const sectionIds = ["about", "process", "tools", "projects", "contact"];
    let frameId;

    const updateActiveSection = () => {
      frameId = undefined;
      const marker = window.scrollY + Math.min(window.innerHeight * 0.35, 260);
      let currentSection = "about";

      sectionIds.forEach((id) => {
        const section = document.getElementById(id);

        const sectionTop = section?.getBoundingClientRect().top + window.scrollY;

        if (section && sectionTop <= marker) {
          currentSection = id;
        }
      });

      const isAtPageEnd =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 8;

      if (isAtPageEnd) {
        currentSection = "contact";
      }

      setActiveSection((previousSection) =>
        previousSection === currentSection ? previousSection : currentSection
      );
    };

    const handleScroll = () => {
      if (frameId === undefined) {
        frameId = window.requestAnimationFrame(updateActiveSection);
      }
    };

    updateActiveSection();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      if (frameId !== undefined) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, []);

  const navigationItems = [
    { id: "about", label: "Sobre mí" },
    { id: "process", label: "Proceso" },
    { id: "tools", label: "Herramientas" },
    { id: "projects", label: "Proyectos" },
    { id: "contact", label: "Contacto" },
  ];

  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-[36%] lg:shrink-0 lg:flex-col lg:justify-between lg:py-24 lg:pt-44">
      <div>
        <p className="mb-5 text-xs font-medium uppercase tracking-[0.3em] text-zinc-500">
          Portafolio
        </p>
        <h1 className="text-4xl font-semibold tracking-[-0.04em] text-zinc-100 lg:text-6xl">
          David Gómez
        </h1>
        <p className="mt-4 text-lg font-medium text-yellow-200">
          Desarrollador junior
        </p>
        <p className="mt-5 max-w-xs text-sm leading-7 text-zinc-400">
          Construyo aplicaciones <span className="text-yellow-200">web</span> y
          móviles accesibles, intuitivas y pensadas para personas reales.
        </p>
        <nav className="nav mt-16 hidden lg:block">
          <ul className="mt-16 w-max">
            {navigationItems.map(({ id, label }) => {
              const isActive = activeSection === id;

              return (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    aria-current={isActive ? "location" : undefined}
                    className={`group flex items-center py-3 transition-colors motion-reduce:transition-none ${
                      isActive
                        ? "text-slate-200"
                        : "text-slate-500 hover:text-slate-200 focus-visible:text-slate-200"
                    }`}
                  >
                    <span
                      className={`nav-indicator mr-4 h-px transition-all motion-reduce:transition-none ${
                        isActive
                          ? "w-16 bg-slate-200"
                          : "w-8 bg-slate-500 group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200"
                      }`}
                    />
                    <span className="nav-text text-xs font-bold uppercase tracking-[0.25em] transition-all">
                      {label}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
      <ContentIcons />
    </header>
  );
}

export default Header;
