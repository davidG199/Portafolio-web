import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { CiServer } from "react-icons/ci";
import { MdArrowOutward } from "react-icons/md";
import { FaHtml5 } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { CiDesktop } from "react-icons/ci";
import { SiPlatzi } from "react-icons/si";
import { FaArrowRight } from "react-icons/fa6";
import { FaBootstrap } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaPython } from "react-icons/fa";
import { SiFastapi } from "react-icons/si";
import { DiMsqlServer } from "react-icons/di";
import { Link } from "react-router-dom";
import { FaCss3Alt } from "react-icons/fa";
import { SiDialogflow } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import cvPdf from "../assets/cv-David-Gomez.pdf";
import { motion } from "framer-motion";

function Projects() {
  const TAGS = {
    TAILWIND: {
      name: "Tailwind",
      class: "bg-[#003159] text-white",
      icon: RiTailwindCssFill,
    },
    REACT: {
      name: "React",
      class: "bg-[#61DAFB] text-white",
      icon: FaReact,
    },
    CLEANURI_API: {
      name: "API Cleanuri",
      class: "bg-[#192635] text-white",
      icon: CiServer,
    },
    HTML: {
      name: "Html",
      class: " bg-[#e34c25] text-white",
      icon: FaHtml5,
    },
    RESPONSIVE: {
      name: "Responsive",
      class: "bg-white text-black",
      icon: CiDesktop,
    },
    PLATZI: {
      name: "Fake Store API",
      class: "bg-[#09e989] text-white",
      icon: SiPlatzi,
    },
    BOOSTRAP: {
      name: "Bootstrap",
      class: "bg-[#7952b3] text-white",
      icon: FaBootstrap,
    },
    JAVASCRIPT: {
      name: "Javascript",
      class: "bg-[#bfaa00] text-white",
      icon: IoLogoJavascript,
    },
    PYTHON: {
      name: "Python",
      class: "bg-[#377eb8] text-white",
      icon: FaPython,
    },
    SQL: {
      name: "SQL Server",
      class: "bg-[#b32828] text-white",
      icon: DiMsqlServer,
    },
    FASTAPI: {
      name: "FastAPI",
      class: "bg-[#009485] text-white",
      icon: SiFastapi,
    },
    CSS: {
      name: "CSS",
      class: "bg-[#317bc7fc] text-white",
      icon: FaCss3Alt,
    },
    DIALOGFLOW: {
      name: "DialogFlow",
      class: "bg-[#ff3500] text-white",
      icon: SiDialogflow,
    },
    EXPRESS: {
      name: "Express",
      class: "bg-[#000000] text-white",
      icon: SiExpress,
    },
    NODE: {
      name: "Node js",
      class: "bg-[#00d740] text-white",
      icon: FaNodeJs,
    },
  };

  const PROJECTS = [
    {
      id: 1,
      title: "Renta-Car",
      description:
        "Sitio web para la renta de autos, desde la vista del cliente y el administrador, permite rentar autos y devolverlos, tambien permite registrar usuarios y logearse, mediante el uso del localStorage para la persistencia de datos.",
      image: "/projects/renta-car.webp",
      link: "https://renta-car-ser.netlify.app/",
      github: "https://github.com/davidG199/RentaCar-localStorage",
      tags: [
        TAGS.BOOSTRAP,
        TAGS.RESPONSIVE,
        TAGS.JAVASCRIPT,
        TAGS.HTML,
        TAGS.CSS,
      ],
    },
    {
      id: 2,
      title: "Project Athena",
      description:
        "Sitio web para administrar una biblioteca, permite guardar, buscar, eliminar y editar libros, tambien regitra y permite iniciar sesion. se utiliza una api creada con fastapi y sql server para guardar los datos.",
      link: "https://github.com/jefer9/Proyecto-Integrador",
      github: "https://github.com/jefer9/Proyecto-Integrador",
      image: "/projects/proyecto-integrador.webp",
      tags: [
        TAGS.TAILWIND,
        TAGS.HTML,
        TAGS.RESPONSIVE,
        TAGS.PYTHON,
        TAGS.SQL,
        TAGS.REACT,
        TAGS.FASTAPI,
      ],
    },
    {
      id: 3,
      title: "Ecommerce",
      description:
        "Ecommerce para buscar elementos, filtrarlos segun su categoria, agregarlos al carrito y ver el historial de las ordenes del usuario, fue creado con react y tailwind consumiendo la FakeStore API de platzi para manipular los articulos.",
      link: "https://peaceful-meerkat-e812e6.netlify.app/",
      github: "https://github.com/davidG199/Ecommerce-react-vite-and-tailwind",
      image: "/projects/project1.webp",
      tags: [
        TAGS.REACT,
        TAGS.TAILWIND,
        TAGS.RESPONSIVE,
        TAGS.PLATZI,
        TAGS.HTML,
      ],
    },
    {
      id: 4,
      title: "Chatbot hackaton",
      description: `Chatbot inteligente orientado a responder preguntas frecuentes sobre el proyecto INGELEAN, como parte de una hackatón nacional. El sistema utiliza Dialogflow como motor de procesamiento de lenguaje natural (NLP), una API propia construida con Node.js + Express y una interfaz frontend en React con modo oscuro y diseño responsive.
      El proyecto fue desplegado utilizando Vercel y Render.`,
      link: "https://chatbot-hackaton-talento-tech.vercel.app/",
      github:
        "https://github.com/davidG199/chatbot-hackaton-talento-tech/tree/main",
      image: "/projects/chatbot-project.webp",
      tags: [
        TAGS.REACT,
        TAGS.TAILWIND,
        TAGS.JAVASCRIPT,
        TAGS.HTML,
        TAGS.DIALOGFLOW,
        TAGS.EXPRESS,
        TAGS.NODE,
      ],
    },
  ];

  return (
    <section
      id="projects"
      className="scroll-mt-16 mb-8 lg:scroll-mt-24"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="font-bold uppercase tracking-[0.25em] text-yellow-100">
          Proyectos
        </h2>
      </div>
      <div>
        <ul className="projects-list">
          {PROJECTS.map(
            ({ id, title, description, image, link, github, tags }, index) => (
              <motion.li
                key={id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: index * 0.06 }}
                className="mb-10 sm:mb-14"
              >
                <article
                  className="group relative grid w-full gap-6 rounded-lg border border-zinc-800/80 bg-zinc-900/30 p-4 transition-all duration-300 hover:bg-zinc-900/70 hover:shadow-[0_16px_40px_rgba(0,0,0,0.22)] motion-reduce:transition-none sm:grid-cols-8 sm:gap-8 sm:p-5 lg:grid-cols-12"
                >
                  <div
                    className={`relative order-2 mx-auto w-full overflow-hidden border border-zinc-800/90 bg-zinc-950/70 sm:order-1 sm:w-11/12 lg:col-span-5 ${
                      index % 2 === 1 ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <div className="relative flex min-h-[220px] items-center justify-center bg-gradient-to-b from-zinc-900/30 to-transparent p-3 sm:min-h-[260px] sm:p-5">
                      <img
                        src={image}
                        alt={title}
                        className="max-h-[250px] w-auto max-w-full object-contain grayscale-[25%] transition duration-500 group-hover:grayscale-0"
                      />
                    </div>
                    <div className="pointer-events-none select-none border-t border-zinc-800/80 bg-zinc-950/90 px-3 py-3">
                      <div className="flex flex-wrap justify-center items-center gap-x-2 gap-y-1">
                        <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-yellow-300/70">
                        </span>
                        {tags.map((tag, key) => (
                          <span
                            key={tag.name}
                            className="inline-flex items-center gap-1 text-[11px] text-zinc-400"
                          >
                            {key > 0 && (
                              <span className="text-zinc-700" aria-hidden="true">
                                ·
                              </span>
                            )}
                            {tag.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div
                    className={`flex flex-col justify-around z-10 sm:order-2 sm:col-span-5 lg:col-span-7 ${
                      index % 2 === 1 ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    <h3>
                      <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/link inline-flex items-baseline gap-2 pr-8 text-lg font-medium leading-tight text-zinc-100 hover:text-yellow-200/90 focus-visible:text-yellow-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-yellow-300"
                      >
                        <span className="font-semibold">{title}</span>
                        <span className=" inline-block">
                          <MdArrowOutward className=" inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none" />
                        </span>
                      </a>
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed text-zinc-400">
                      {description}
                    </p>
                    <div className="mt-6 flex items-center justify-center gap-5 border-t border-zinc-800/80 pt-4">
                      <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/action inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-yellow-200 transition-colors hover:text-yellow-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-yellow-300"
                      >
                        Ver proyecto
                        <MdArrowOutward className="transition-transform group-hover/action:-translate-y-0.5 group-hover/action:translate-x-0.5" />
                      </a>
                      <a
                        href={github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-zinc-500 transition-colors hover:text-zinc-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-400"
                      >
                        <FaGithub />
                        Código
                      </a>
                    </div>
                  </div>
                </article>
              </motion.li>
            )
          )}
        </ul>

        <div>
          <Link
            to="/ProjectsPage"
            className="inline-flex items-baseline font-bold uppercase tracking-widest gap-2 hover:text-yellow-200 focus-visible:text-yellow-200 group/link"
          >
            Ver todos mis proyectos
            <span className=" inline-block">
              <FaArrowRight className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:translate-x-2 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none" />
            </span>
          </Link>
        </div>
        <div className="mt-8">
          <a
            href={cvPdf}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center   text-white font-bold uppercase tracking-widest hover:text-yellow-200"
          >
            {/* <FaFilePdf className="mr-2" /> */}
            ver cv
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
