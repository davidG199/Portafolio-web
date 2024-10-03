import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { CiServer } from "react-icons/ci";
import { MdArrowOutward } from "react-icons/md";
import { FaHtml5 } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { CiDesktop } from "react-icons/ci";
import { SiPlatzi } from "react-icons/si";

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
  };

  const PROJECTS = [
    {
      id: 1,
      title: "Acortador de urls",
      description:
        "Landing page para acortar urls, utilizando la api de cleanuri",
      image: "../public/projects/acortador_url.png",
      link: "https://splendorous-macaron-44c4d3.netlify.app/",
      github: "https://github.com/davidG199/acortador-de-urls",
      tags: [TAGS.TAILWIND, TAGS.REACT, TAGS.CLEANURI_API, TAGS.RESPONSIVE],
    },
    {
      id: 2,
      title: "Landing page",
      description: "Landing page creada con html vanilla y tailwind ",
      link: "https://davidg199.github.io/Clipboard-landing-page/src/index.html",
      github:
        "https://github.com/davidG199/Clipboard-landing-page?tab=readme-ov-file",
      image: "../public/projects/project2.webp",
      tags: [TAGS.TAILWIND, TAGS.HTML, TAGS.RESPONSIVE],
    },
    {
      id: 3,
      title: "Ecommerce",
      description:
        "Ecommerce creado con React y tailwind, consumiendo la FakeStore API de platzi",
      link: "https://peaceful-meerkat-e812e6.netlify.app/",
      github: "https://github.com/davidG199/Ecommerce-react-vite-and-tailwind",
      image: "/projects/project1.webp",
      tags: [TAGS.REACT, TAGS.TAILWIND, TAGS.RESPONSIVE, TAGS.PLATZI],
    },
  ];

  return (
    <section id="projects">
      <div className="mb-12 sticky top-0 z-20 -mx-6 w-full px-6 py-5 backdrop-blur">
        <h2 className="font-bold uppercase tracking-widest text-yellow-100">
          Projects
        </h2>
      </div>
      <div>
        <ul className="projects-list">
          {PROJECTS.map(
            ({ id, title, description, image, link, github, tags }) => (
              <li key={id} className="mb-12">
                <div className=" grid relative gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8">
                  <div className="order-2 w-4/5 mx-auto relative sm:order-1 sm:col-span-2">
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
                      <FaGithub className=" inline-block mr-1" />
                      codigo
                    </a>
                  </div>
                  <div className="sm:order-2 sm:col-span-6">
                    <span>
                      <a
                        href={link}
                        className="flex gap-2 hover:text-yellow-200"
                      >
                        <p className="font-bold text-white">{title}</p>
                        <span className=" inline-block">
                          {/* arreglar la animacion del icono */}
                          <MdArrowOutward className=" inline-block h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-1" />
                        </span>
                      </a>
                    </span>
                    <p className="text-gray-400 mt-4">{description}</p>
                    <ul className="flex items-center gap-2 justify-center sm:justify-start my-4 flex-wrap">
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
          <a
            href="#contact"
            className="block text-white font-bold uppercase tracking-widest hover:text-yellow-200"
          >
            Ver más proyectos
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
