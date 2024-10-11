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
      class: "bg-[#f7df1e] text-white",
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
    }
  };

  const PROJECTS = [
    {
      id: 1,
      title: "Renta-Car",
      description:
        "Sitio web para la renta de autos, desde la vista del cliente y el administrador, permite rentar autos y devolverlos, tambien permite registrar usuarios y logearse, mediante el uso del localStorage para la persistencia de datos.",
      image: "../projects/renta-car.webp",
      link: "https://renta-car-ser.netlify.app/",
      github: "https://github.com/davidG199/RentaCar-localStorage",
      tags: [TAGS.BOOSTRAP, TAGS.RESPONSIVE, TAGS.JAVASCRIPT, TAGS.HTML, TAGS.CSS],
    },
    {
      id: 2,
      title: "Project Athena",
      description:
        "Sitio web para administrar una biblioteca, permite guardar, buscar, eliminar y editar libros, tambien regitra y permite iniciar sesion. se utiliza una api creada con fastapi y sql server para guardar los datos.",
      link: "https://github.com/jefer9/Proyecto-Integrador",
      github: "https://github.com/jefer9/Proyecto-Integrador",
      image: "../projects/proyecto-integrador.webp",
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
      tags: [TAGS.REACT, TAGS.TAILWIND, TAGS.RESPONSIVE, TAGS.PLATZI, TAGS.HTML],
    },
  ];

  return (
    <section
      id="projects"
      className="scroll-mt-16 mb-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="font-bold uppercase tracking-widest text-yellow-100">
          Projects
        </h2>
      </div>
      <div>
        <ul className="projects-list">
          {PROJECTS.map(
            ({ id, title, description, image, link, github, tags }) => (
              <li key={id} className="mb-12">
                <div className=" grid relative gap-4 py-3 transition sm:grid-cols-8 sm:gap-8 md:gap-4 rounded-md  motion-reduce:transition-none lg:-inset-x-6 lg:hover:bg-[var(--bg-color-transparent)] lg:shadow-[inset_0_1px_0_0_rgba(148,163,204,0.01)] hover:drop-shadow-lg">

                  {/* <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:hover:bg-[var(--bg-color-transparent)] lg:shadow-[inset_0_1px_0_0_rgba(148,163,204,0.01)] hover:drop-shadow-lg"></div> */}

                  <div className="order-2 w-4/5 mx-auto relative sm:order-1 sm:col-span-2 lg:col-span-3">
                    <img
                      src={image}
                      alt={title}
                      className=" rounded-md border-2 border-gray-800"
                    />
                    <a
                      href={github}
                      target="_blank"
                      className="absolute top-4 right-2 bg-gray-800 p-2 rounded-full text-white opacity-80 hover:bg-gray-700 transition-colors hover:opacity-100"
                    >
                      <FaGithub className=" inline-block mr-1 lg:mr-0" />
                      <p className="block lg:hidden">codigo</p>
                    </a>
                  </div>
                  <div className="sm:order-2 sm:col-span-5 z-10">
                    <h3>
                      <a
                        href={link}
                        className=" inline-flex items-baseline font-medium leading-tight text-base gap-2 "
                        target="_blank"
                      >
                        <p className="font-bold text-white">{title}</p>
                        <span className=" inline-block">
                          {/* arreglar la animacion del icono */}
                          <MdArrowOutward className=" inline-block h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-1" />
                        </span>
                      </a>
                    </h3>
                    <p className="text-gray-400 mt-4 leading-normal text-sm">
                      {description}
                    </p>
                    <ul className="flex items-center gap-2 justify-center my-4 flex-wrap">
                      {tags.map((tag, key) => (
                        <li key={key}>
                          <span
                            className={
                              tag.class +
                              " p-2 flex items-center rounded-lg opacity-90"
                            }
                          >
                            <tag.icon className="mr-1 size-4" />
                            <p className="text-xs">{tag.name}</p>
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </li>
            )
          )}
        </ul>

        <div>
          <Link
            to="/ProjectsPage"
            className="flex items-center text-white font-bold uppercase tracking-widest hover:text-yellow-200"
          >
            Ver más proyectos
            <span className=" inline-block">
              <FaArrowRight className="ml-2 " />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Projects;
