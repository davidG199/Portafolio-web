import { IoMdArrowBack } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import { useEffect, useState } from "react";
import { Modal } from "./Modal";
import { motion } from "framer-motion";

function TableProjects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalData, setModalData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("Todos");
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

  const languages = [
    "Todos",
    ...new Set(projects.flatMap((project) => project.languages || [])),
  ];
  const filteredProjects = projects.filter((project) => {
    const search = searchTerm.toLowerCase().trim();
    const matchesSearch =
      !search ||
      project.name.toLowerCase().includes(search) ||
      project.description?.toLowerCase().includes(search);
    const matchesLanguage =
      selectedLanguage === "Todos" ||
      project.languages?.includes(selectedLanguage);

    return matchesSearch && matchesLanguage;
  });

  // Reset the page when filters change so the result never opens on an empty page.
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedLanguage]);

  const indexOfLastProject = currentPage * PROJECTSPERPAGE;
  const indexOfFirstProject = indexOfLastProject - PROJECTSPERPAGE;
  const currentProjects = filteredProjects.slice(
    indexOfFirstProject,
    indexOfLastProject
  );
  const totalPages = Math.ceil(filteredProjects.length / PROJECTSPERPAGE);

  // funciones para cambiar de pagina
  const nextPage = () => {
    if (currentPage < totalPages) {
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
      <div className="mt-12 flex flex-col gap-5 border-y border-zinc-800/80 py-5 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-yellow-300/70">
            Archivo de proyectos
          </p>
          <p className="mt-2 text-sm text-zinc-500">
            {filteredProjects.length} repositorio{filteredProjects.length === 1 ? "" : "s"} encontrado{filteredProjects.length === 1 ? "" : "s"}
          </p>
        </div>
        <label className="flex w-full max-w-sm items-center gap-3 border-b border-zinc-700 pb-2 text-sm text-zinc-400 focus-within:border-yellow-300">
          <span className="text-yellow-300/70" aria-hidden="true">⌕</span>
          <input
            type="search"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            placeholder="Buscar proyecto..."
            className="w-full bg-transparent outline-none placeholder:text-zinc-600"
          />
        </label>
      </div>
      <div className="mt-5 flex flex-wrap gap-2">
        {languages.slice(0, 9).map((language) => (
          <button
            key={language}
            type="button"
            onClick={() => setSelectedLanguage(language)}
            className={`border px-3 py-1.5 text-xs transition-colors ${
              selectedLanguage === language
                ? "border-yellow-300/70 text-yellow-200"
                : "border-zinc-800 text-zinc-500 hover:border-zinc-600 hover:text-zinc-300"
            }`}
          >
            {language}
          </button>
        ))}
      </div>

      <table id="content" className="mt-8 hidden w-full border-collapse text-left md:table">
        <thead className="sticky top-0 z-10 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur">
          <tr className="text-xs uppercase tracking-[0.16em] text-zinc-500">
            <th scope="col" className="py-4 font-medium">Proyecto</th>
            <th scope="col" className="hidden py-4 font-medium md:table-cell">Lenguajes</th>
            <th scope="col" className="hidden py-4 font-medium lg:table-cell">Topics</th>
            <th scope="col" className="py-4 font-medium">Enlaces</th>
            <th scope="col" className="py-4 font-medium">Detalle</th>
          </tr>
        </thead>
        <tbody>
          {currentProjects.map((project, index) => (
            <motion.tr
              key={project.id || project.name}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.04 }}
              className="group border-b border-zinc-800/70 align-middle transition-colors hover:bg-zinc-900/60"
            >
              <td className="relative py-5 pl-4 text-sm text-zinc-200 before:absolute before:left-0 before:top-0 before:h-full before:w-0.5 before:bg-transparent before:transition-colors group-hover:before:bg-yellow-300">
                <span className="mr-3 text-xs tabular-nums text-zinc-600">{String(index + 1).padStart(2, "0")}</span>
                {project.name}
              </td>
              <td className="hidden py-5 md:table-cell">
                <div className="flex flex-wrap gap-x-2 gap-y-1 text-xs text-zinc-500">
                  {(project.languages || []).map((lang) => <span key={lang}>{lang}</span>)}
                </div>
              </td>
              <td className="hidden py-5 lg:table-cell">
                <span className="text-xs text-zinc-600">{project.topics?.slice(0, 2).join(" · ") || "—"}</span>
              </td>
              <td className="py-5">
                <div className="flex items-center gap-3 text-zinc-500">
                  <a href={project.html_url} target="_blank" rel="noopener noreferrer" aria-label={`Código de ${project.name}`} className="transition-colors hover:text-zinc-100"><FaGithub /></a>
                  {project.homepage && <a href={project.homepage} target="_blank" rel="noopener noreferrer" aria-label={`Demo de ${project.name}`} className="transition-colors hover:text-yellow-200"><FaExternalLinkAlt /></a>}
                </div>
              </td>
              <td className="py-5">
                <button onClick={() => setModalData(project)} className="text-xs uppercase tracking-[0.14em] text-yellow-200/80 transition-colors hover:text-yellow-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-yellow-300">
                  Ver más
                </button>
              </td>
            </motion.tr>
          ))}
        </tbody>
      </table>

      <div className="mt-8 flex flex-col gap-4 md:hidden">
        {currentProjects.map((project, index) => (
          <div
            key={index}
            className="border border-zinc-800/80 bg-zinc-900/40 p-4 transition-colors hover:border-yellow-300/30"
          >
            <div className="flex items-center justify-between gap-2">
              <h3 className="text-lg font-semibold text-zinc-100">
                {project.name}
              </h3>
              <p className="text-xs tabular-nums text-zinc-600">
                {new Date(project.created_at).getFullYear()}
              </p>
            </div>
            <div className="flex flex-col flex-wrap gap-2 mt-2">
              <p className="text-sm text-zinc-500">Lenguajes:</p>
              <div className="flex gap-2">
                {project.languages.map((lang, i) => (
                  <span
                    key={i}
                    className="text-xs text-zinc-400"
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
                className="ml-auto text-xs font-bold uppercase tracking-[0.14em] text-zinc-400 transition-colors hover:text-yellow-200"
              >
                Ver más
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* paginacion */}
      <div className="mt-8 flex items-center justify-center gap-6 text-yellow-200/90">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          aria-label="Página anterior"
          className="disabled:cursor-not-allowed disabled:opacity-30"
        >
          <IoMdArrowBack className="h-6 w-6 transition-transform hover:scale-110" />
        </button>
        <span className="text-sm text-zinc-400">
          {currentPage} <span className="text-zinc-700">/</span> {totalPages || 1}
        </span>
        <button
          onClick={nextPage}
          disabled={currentPage >= totalPages}
          aria-label="Página siguiente"
          className="disabled:cursor-not-allowed disabled:opacity-30"
        >
          <IoMdArrowBack className="h-6 w-6 rotate-180 transition-transform hover:scale-110" />
        </button>
      </div>
      {/* modal */}
      <Modal project={modalData} onClose={() => setModalData(null)} />
    </>
  );
}

export default TableProjects;
