import { IoMdArrowBack } from "react-icons/io";
import { FaGithub } from "react-icons/fa";

function TableProjects() {
  const PROJECTS = [
    {
      id: 1,
      año: 2024,
      proyecto: "Comentarios interactivos",
      link: "https://exquisite-arithmetic-7a422c.netlify.app/",
      github: "https://github.com/davidG199/comentarios-interactivos",
      tecnologias: ["Html", "Javascript", "Tailwind"],
    },
    {
      id: 2,
      año: 2024,
      proyecto: "Acortador de urls",
      link: "https://splendorous-macaron-44c4d3.netlify.app/",
      github: "https://github.com/davidG199/acortador-de-urls",
      tecnologias: ["Html", "React", "Tailwind", "Api"],
    },
    {
      id: 3,
      año: 2024,
      proyecto: "App movil- libreria",
      link: "",
      github: "https://github.com/davidG199/app-java-movil",
      tecnologias: ["Java", "Retrofit", "Xml", "Android-studio"],
    },
    {
      id: 4,
      año: 2024,
      proyecto: "Recipe page",
      link: "https://davidg199.github.io/recipe-page-main/",
      github: "https://github.com/davidG199/recipe-page-main",
      tecnologias: ["Html", "Css"],
    },
    {
      id: 5,
      año: 2024,
      proyecto: "App-library",
      link: "",
      github: "https://github.com/davidG199/app-library",
      tecnologias: ["Java", "Firebase", "Xml", "Android-studio"],
    },
    {
      id: 6,
      año: 2024,
      proyecto: "Project-Bank",
      link:"",
      github: "https://github.com/jefer9/Project_Bank",
      tecnologias: ["Python", "Mysql"],
    },
    {
      id: 7,
      año: 2024,
      proyecto: "Practica consumo de apis",
      link: "",
      github: "https://github.com/davidG199/consumo-de-apis",
      tecnologias: ["Html", "Javascript", "Boostrap"],
    },
    {
      id: 8,
      año: 2024,
      proyecto: "Clipboard-landing-page",
      link: "https://davidg199.github.io/Clipboard-landing-page/src/index.html",
      github: "https://github.com/davidG199/Clipboard-landing-page",
      tecnologias: ["Html", "Tailwind", "Css"],
    },
    {
      id: 9,
      año: 2023,
      proyecto: "Todo-Machine",
      link: "https://davidg199.github.io/ToDo-machine-react/",
      github: "https://github.com/davidG199/ToDo-machine-react",
      tecnologias: ["Html", "React", "Css"],
    },
    {
      id: 10,
      año: 2023,
      proyecto: "SGDP",
      link: "https://davidg199.github.io/SGDP/modulos/inicio/menu",
      github: "https://github.com/davidG199/SGDP",
      tecnologias: ["Html", "Boostrap", "Css"],
    },
    {
      id: 11,
      año: 2024,
      proyecto: "Weather-api",
      link: "",
      github: "https://github.com/davidG199/weather-api",
      tecnologias: ["Python", "Redis", "Api", "Fastapi"],
    },
    {
      id:12,
      año: 2024,
      proyecto: "Temperature-converter",
      link: "https://temperature-converter-nine-ebon.vercel.app/",
      github: "https://github.com/davidG199/temperature-converter",
      tecnologias: ["Html", "Css", "Javascript"],
    },
    {
      id: 13,
      año: 2024,
      proyecto: "Github-user-activity",
      link: "",
      github: "https://github.com/davidG199/github-user-activity",
      tecnologias: ["Python", "Githu-api"],
    },
    {
      id: 14,
      año: 2024,
      proyecto: "Personal-blog",
      link: "",
      github: "https://github.com/davidG199/Personal-blog",
      tecnologias: ["React", "tailwind", "Fastapi"]
    }
    
  ];

  return (
    <>
      <table id="content" className="mt-12 w-full border-collapse text-left">
        <thead className=" sticky top-0 z-10 border-b border-slate-300/10 px-6 py-5 backdrop-blur">
          <tr>
            <th scope="col" className="py-4 pr-8 text-sm font-semibold">
              Año
            </th>
            <th scope="col" className="py-4 pr-8 text-sm font-semibold">
              Proyecto
            </th>
            <th scope="col" className="hidden md:table-cell py-4 pr-8"></th>
            <th
              scope="col"
              className="hidden lg:table-cell py-4 pr-8 text-sm font-semibold"
            >
              Tecnologias
            </th>

            <th
              scope="col"
              className="hidden sm:table-cell py-4 pr-8 text-sm font-semibold"
            >
              Link
            </th>
          </tr>
        </thead>
        <tbody>
          {PROJECTS.map(({ id, año, proyecto, link, github, tecnologias }) => (
            <tr
              key={id}
              className="border-b border-slate-300/10 last:border-none"
            >
              <td className="py-4 pr-4 align-top text-sm">
                <div className="translate-y-px text-gray-400">{año}</div>
              </td>

              <td className="py-4 pr-4 align-top font-semibold leading-snug">
                <div>{proyecto}</div>
              </td>

              <td className="hidden md:table-cell">
                <a className=" inline-block opacity-50 hover:opacity-100" href={github} target="_blank">
                  <FaGithub />
                </a>
              </td>

              <td className="hidden py-4 pr-4 align-top lg:table-cell">
                <ul className="flex -translate-y-1.5 flex-wrap">
                  {tecnologias.map((tech, index) => (
                    <li
                      key={index}
                      className="text-sm text-yellow-200 my-1 mr-1.5"
                    >
                      <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                        {tech}
                      </div>
                    </li>
                  ))}
                </ul>
              </td>
              {link.length > 0 ? (
                <td className="hidden py-4 align-top sm:table-cell">
                  <a
                    href={link}
                    className="text-gray-400 inline-flex font-medium leading-tight hover:text-yellow-200/90 focus-visible:text-yellow-200 text-sm group/link"
                    target="_blank"
                  >
                    <span className=" inline-block">
                      {link}
                      <IoMdArrowBack className=" inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-0.5 rotate-[125deg]" />
                    </span>
                  </a>
                </td>
              ) : (
                ""
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default TableProjects;
