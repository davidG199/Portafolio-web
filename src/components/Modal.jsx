import { FaGithub } from "react-icons/fa";
import { FaArrowUpRightFromSquare, FaXmark } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

export const Modal = ({ project, onClose }) => {
  useEffect(() => {
    if (!project) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-950/80 p-4 backdrop-blur-md sm:p-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onMouseDown={(event) => {
          if (event.target === event.currentTarget) onClose();
        }}
        role="presentation"
      >
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
          className="relative max-h-[min(44rem,calc(100vh-2rem))] w-full max-w-2xl overflow-y-auto border border-zinc-700/80 bg-zinc-950 text-zinc-100 shadow-2xl shadow-black/50 sm:max-h-[min(44rem,calc(100vh-3rem))]"
          initial={{ opacity: 0, y: 18, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 12, scale: 0.98 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="border-b border-zinc-800 px-5 py-5 sm:px-8 sm:py-6">
            <div className="flex items-start justify-between gap-6">
              <div>
                <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-yellow-300/70">
                  Proyecto // Repositorio
                </p>
                <h2
                  id="project-modal-title"
                  className="break-words text-2xl font-semibold tracking-tight text-zinc-100 sm:text-3xl"
                >
                  {project.name}
                </h2>
              </div>
              <button
                onClick={onClose}
                type="button"
                aria-label="Cerrar detalle del proyecto"
                className="shrink-0 border border-zinc-800 p-2 text-zinc-500 transition-colors hover:border-yellow-300/60 hover:text-yellow-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-300"
              >
                <FaXmark />
              </button>
            </div>
          </div>

          <div className="px-5 py-6 sm:px-8 sm:py-8">
            <p className="max-w-xl text-sm leading-7 text-zinc-400">
              {project.description || "Sin descripción disponible."}
            </p>

            <div className="mt-8 grid gap-6 border-y border-zinc-800 py-6 sm:grid-cols-2">
              <div>
                <h3 className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">
                  Lenguajes
                </h3>
                <div className="flex flex-wrap gap-x-3 gap-y-2 text-sm text-zinc-300">
                  {(project.languages || []).map((language) => (
                    <span key={language} className="flex items-center gap-2">
                      <span className="h-1 w-1 bg-yellow-300/80" />
                      {language}
                    </span>
                  ))}
                </div>
              </div>
              {project.topics?.length > 0 && (
                <div>
                  <h3 className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">
                    Topics
                  </h3>
                  <div className="flex flex-wrap gap-x-3 gap-y-2 text-sm text-zinc-500">
                    {project.topics.map((topic) => (
                      <span key={topic}>#{topic}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="flex flex-wrap items-center gap-5">
              {project.homepage && (
                <a
                  href={project.homepage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-yellow-300/70 bg-yellow-300 px-4 py-2.5 text-xs font-bold uppercase tracking-[0.14em] text-zinc-950 transition-colors hover:bg-yellow-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-300"
                >
                  Ver web
                  <FaArrowUpRightFromSquare />
                </a>
              )}
              <a
                href={project.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-zinc-700 px-4 py-2.5 text-xs font-bold uppercase tracking-[0.14em] text-zinc-300 transition-colors hover:border-zinc-400 hover:text-zinc-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-300"
              >
                Código en GitHub
                <FaGithub />
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
