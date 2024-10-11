import { IoMdArrowBack } from "react-icons/io";

function TableProjects() {
  const PROJECTS = [
    {
      id: 1,
      año: 2024,
      proyecto: "testttttttttttttttttt",
      link: "link",
      tecnologias: ["React", "Node", "Express"],
    },
    {
      id: 2,
      año: 2024,
      proyecto: "testttttttttttttttttt",
      link: "link",
      tecnologias: ["React", "Node", "Express"],
    },
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
            <th
              scope="col"
              className="hidden md:table-cell py-4 pr-8 text-sm font-semibold"
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
          {PROJECTS.map(({ id, año, proyecto, link, tecnologias }) => (
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
              <td className="hidden py-4 pr-4 align-top lg:table-cell">
                <ul className="flex -translate-y-1.5 flex-wrap">
                  {tecnologias.map((tech, index) => (
                    <li
                      key={index}
                      className="text-sm text-slate-400 my-1 mr-1.5"
                    >
                      <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                        {tech}
                      </div>
                    </li>
                  ))}
                </ul>
              </td>
              <td className="hidden py-4 align-top sm:table-cell">
                <a href={link} className="text-gray-400 inline-flex font-medium leading-tight hover:text-yellow-200/90 focus-visible:text-yellow-200 text-sm group/link" target="_blank">
                <span className=" inline-block">
                  {link}
                    <IoMdArrowBack className=" inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-0.5 rotate-[125deg]" />
                </span>
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default TableProjects;
