import AboutMe from "./aboutMe";
import Projects from "./projects";
import { motion } from "framer-motion";
import { useState } from "react";

const WORKFLOW = [
  {
    number: "01",
    title: "Explorar",
    description: "Entiendo el problema, las personas y el contexto antes de escribir código.",
  },
  {
    number: "02",
    title: "Construir",
    description: "Convierto ideas en interfaces claras, rápidas y fáciles de mantener.",
  },
  {
    number: "03",
    title: "Refinar",
    description: "Pruebo, documento y pulo cada detalle hasta que la experiencia se sienta natural.",
  },
];

const TOOL_GROUPS = [
  {
    id: "frontend",
    number: "01",
    title: "Frontend",
    summary: "Interfaces que convierten una idea compleja en una experiencia clara.",
    tools: ["React", "Bootstrap", "Tailwind", "JavaScript", "TypesCript"],
    level: "Dominio principal",
    progress: "w-[88%]",
  },
  {
    id: "backend",
    number: "02",
    title: "Backend",
    summary: "Servicios y APIs que conectan la experiencia con una lógica confiable.",
    tools: ["Python", "FastAPI", "Node.js", "Express", "Spring Boot"],
    level: "Experiencia práctica",
    progress: "w-[72%]",
  },
  {
    id: "data",
    number: "03",
    title: "Datos",
    summary: "Estructuras que mantienen la información ordenada, disponible y útil.",
    tools: ["SQL Server", "MySQL", "MongoDB", "Git", "Firebase"],
    level: "Base sólida",
    progress: "w-[64%]",
  },
];

function Main() {
  const [activeToolGroup, setActiveToolGroup] = useState(TOOL_GROUPS[0]);

  return (
    <main className="w-full pt-16 lg:w-[64%] lg:py-24 lg:pt-44">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="will-change-transform"
      >
        <AboutMe />
        <motion.section
          id="process"
          className="mb-28 scroll-mt-16 lg:scroll-mt-24"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-6 flex items-end justify-between border-b border-zinc-800 pb-4">
            <h2 className="text-xs font-bold uppercase tracking-[0.25em] text-yellow-100">
              Cómo trabajo
            </h2>
            <span className="text-xs text-zinc-600">El proceso importa</span>
          </div>
          <div className="divide-y divide-zinc-800/80">
            {WORKFLOW.map(({ number, title, description }) => (
              <div
                key={number}
                className="grid items-center gap-3 py-5 sm:grid-cols-[4rem_8rem_1fr] sm:gap-5"
              >
                <span className="text-xs tabular-nums text-yellow-300/70">
                  {number}
                </span>
                <h3 className="font-medium text-zinc-100">{title}</h3>
                <p className="max-w-md text-sm leading-relaxed text-zinc-500">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </motion.section>
        <motion.section
          id="tools"
          className="mb-28 scroll-mt-16 lg:scroll-mt-24"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.9 }}
        >
          <div className="mb-8 border-b border-zinc-800 pb-4">
            <h2 className="text-xs font-bold uppercase tracking-[0.25em] text-yellow-100">
              Herramientas
            </h2>
          </div>
          <div className="grid gap-8 sm:grid-cols-[minmax(9rem,0.65fr)_1fr] sm:gap-12">
            <div className="flex flex-row justify-between gap-2 sm:flex-col">
              {TOOL_GROUPS.map(({ id, number, title }) => {
                const isActive = activeToolGroup.id === id;

                return (
                  <button
                    key={id}
                    type="button"
                    onClick={() =>
                      setActiveToolGroup(
                        TOOL_GROUPS.find((group) => group.id === id)
                      )
                    }
                    className={`group flex items-center gap-2 sm:gap-3 border-b py-3.5 text-left text-xs font-bold uppercase tracking-[0.18em] transition-colors sm:border-b-0 sm:border-l-2 sm:pl-4 ${
                      isActive
                        ? "border-yellow-300 text-zinc-100"
                        : "border-zinc-800 text-zinc-600 hover:border-zinc-500 hover:text-zinc-300"
                    }`}
                    aria-pressed={isActive}
                  >
                    <span className="tabular-nums text-yellow-300/70">
                      {number}
                    </span>
                    <span>{title}</span>
                  </button>
                );
              })}
            </div>
            <motion.div
              key={activeToolGroup.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="min-h-44 border-t border-zinc-800 pt-5 sm:border-t-0 sm:pt-0"
            >
              <p className="max-w-md text-center text-base leading-relaxed text-zinc-300">
                {activeToolGroup.summary}
              </p>
              <div className="mt-7 flex justify-center flex-wrap gap-2">
                {activeToolGroup.tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded border border-zinc-700 bg-zinc-900/60 px-3 py-1.5 text-xs text-zinc-400"
                  >
                    {tool}
                  </span>
                ))}
              </div>
              <div className="mt-8 flex items-center gap-4">
                <span className="text-xs text-zinc-600">{activeToolGroup.level}</span>
                <span className="h-px flex-1 bg-zinc-800">
                  <span
                    className={`block h-px bg-yellow-300/80 ${activeToolGroup.progress}`}
                  />
                </span>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* componente de proyectos */}
        <Projects />

        <motion.section
          id="contact"
          className="mt-20 sm:mt-32 border-t border-zinc-800 pt-8"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-yellow-100">
            Disponible para colaborar
          </p>
          <h2 className="max-w-lg text-2xl font-medium leading-tight text-zinc-100 sm:text-3xl">
            ¿Tienes una idea que necesita forma?
          </h2>
          <a
            href="https://github.com/davidG199"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex text-sm text-zinc-400 underline decoration-zinc-700 underline-offset-8 transition-colors hover:text-yellow-200 hover:decoration-yellow-200"
          >
            Conectemos en GitHub
          </a>
        </motion.section>
      </motion.div>
    </main>
  );
}

export default Main;
