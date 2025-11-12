import { IoMdArrowBack } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import { useEffect, useState } from "react";
import { Modal } from "./Modal";

function TableProjects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalData, setModalData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const PROJECTSPERPAGE = 10;

  useEffect(() => {
    // let isActive = true;

    const checkLocalStorage = () => {
      const data = localStorage.getItem("github_projects");
      if (data) {
        setProjects(JSON.parse(data));
        setLoading(false);
        return true;
      }
      return false;
    };

    if (!checkLocalStorage()) {
      const interval = setInterval(() => {
        if (checkLocalStorage()) {
          clearInterval(interval);
        }
      }, 300); // cada 300ms revisa

      return () => clearInterval(interval);
    }
  }, []);

  // logica de paginacion
  const indexOfLastProject = currentPage * PROJECTSPERPAGE;
  const indexOfFirstProject = indexOfLastProject - PROJECTSPERPAGE;
  const currentProjects = projects.slice(
    indexOfFirstProject,
    indexOfLastProject
  );

  // funciones para cambiar de pagina
  const nextPage = () => {
    if (currentPage < Math.ceil(projects.length / PROJECTSPERPAGE)) {
      setCurrentPage(currentPage + 1);
    }
  };

  //funcion para ir a la pagina anterior
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // si esta cargando, renderizar spinner
  if (loading) {
    return (
      <div className="flex justify-center items-center h-40">
        <div className="w-8 h-8 border-4 border-yellow-300 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <>
      {/* table para escritorio */}
      <table
        id="content"
        className="hidden md:table mt-12 w-full border-collapse text-left"
      >
        <thead className=" sticky top-0 z-10 border-b border-slate-300/10 backdrop-blur">
          <tr>
            <th scope="col" className="py-4 text-sm font-semibold">
              Proyecto
            </th>
            <th
              scope="col"
              className="hidden md:table-cell py-4 text-sm font-semibold"
            >
              Lenguajes
            </th>
            <th
              scope="col"
              className="hidden lg:table-cell py-4 text-sm font-semibold"
            >
              Topics
            </th>
            <th
              scope="col"
              className="hidden sm:table-cell py-4 text-sm font-semibold"
            >
              Links
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {currentProjects.map((project, index) => (
            <tr
              key={index}
              className="border-b border-slate-300/10 last:border-none align-middle"
            >
              <td className="py-3">
                <p className=" text-gray-400">{project.name}</p>
              </td>

              <td className="py-3 hidden md:table-cell">
                <div className="flex flex-col gap-1">
                  <ul className="flex flex-wrap gap-1">
                    {project.languages.map((lang, i) => (
                      <li
                        key={i}
                        className="text-xs bg-yellow-200/20 text-yellow-300 px-2 py-1 rounded"
                      >
                        {lang}
                      </li>
                    ))}
                  </ul>
                </div>
              </td>

              <td className="py-3 hidden lg:table-cell">
                {project.topics && project.topics.length > 0 && (
                  <ul className="flex flex-wrap gap-1 mt-1">
                    {project.topics.map((topic, i) => (
                      <li
                        key={i}
                        className="text-xs bg-purple-200/20 text-purple-300 px-2 py-1 rounded"
                      >
                        {topic}
                      </li>
                    ))}
                  </ul>
                )}
              </td>

              <td className="px-2">
                <div className="flex items-center gap-2 h-full">
                  <a
                    href={project.html_url}
                    target="_blank"
                    className="text-gray-400 hover:text-gray-200"
                  >
                    <FaGithub />
                  </a>
                  {project.homepage && (
                    <a
                      href={project.homepage}
                      target="_blank"
                      className="text-gray-400 hover:text-yellow-200"
                    >
                      <FaExternalLinkAlt />
                    </a>
                  )}
                </div>
              </td>

              <td className="py-3">
                <button
                  onClick={() => setModalData(project)}
                  className="ml-2 text-sm text-teal-300 hover:underline"
                >
                  Ver más
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* tarjetas para version mobil */}
      <div className="md:hidden mt-8 flex flex-col gap-4">
        {currentProjects.map((project, index) => (
          <div
            key={index}
            className="bg-[var(--bg-card-color)] p-4 rounded-lg shadow"
          >
            <div className="flex items-center justify-between gap-2">
              <h3 className="text-yellow-200/90 font-bold text-lg">
                {project.name}
              </h3>
              <p className="text-sm text-gray-400">
                {new Date(project.created_at).getFullYear()}
              </p>
            </div>
            <div className="flex flex-col flex-wrap gap-2 mt-2">
              <p className="text-sm text-gray-400">Lenguajes:</p>
              <div className="flex gap-2">
                {project.languages.map((lang, i) => (
                  <span
                    key={i}
                    className="text-xs bg-yellow-200/20 text-yellow-300 px-2 py-1 rounded"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-3 flex gap-4 items-center">
              {project.homepage && (
                <a
                  href={project.homepage}
                  target="_blank"
                  className="text-sm text-yellow-300 font-bold inline-flex focus-visible:text-yellow-200 group/link"
                >
                  <span className="inline-block">
                    Ver Web
                    <IoMdArrowBack className="inline-block h-4 w-4 ml-2 shrink-0 transition-transform group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none rotate-[180deg]" />
                  </span>
                </a>
              )}
              <a
                href={project.html_url}
                target="_blank"
                className=" opacity-50 hover:opacity-100 inline-flex items-center gap-2"
              >
                Github
                <FaGithub />
              </a>
              <button
                onClick={() => setModalData(project)}
                className="text-sm text-teal-300 hover:underline ml-auto font-semibold"
              >
                Ver más
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* paginacion */}
      <div className="flex justify-center text-yellow-200/90 items-center gap-6 mt-8">
        <button onClick={prevPage}>
          <IoMdArrowBack className="h-6 w-6 hover:text-yellow-200 hover:scale-110 transform" />
        </button>
        <span className=" text-sm">{currentPage}</span>
        <button onClick={nextPage}>
          <IoMdArrowBack className="h-6 w-6 rotate-180 hover:text-yellow-200 hover:scale-110 transform" />
        </button>
      </div>
      {/* modal */}
      <Modal project={modalData} onClose={() => setModalData(null)} />
    </>
  );
}

export default TableProjects;
