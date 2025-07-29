import { FaGithub } from "react-icons/fa";

export const Modal = ({ project, onClose }) => {
  if (!project) return null;

  const { name, description, languages, homepage, html_url, topics } = project;

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm">
        <div className="bg-[var(--bg-card-color)] text-white rounded-xl p-6 w-[90%] md:w-[37.5rem] relative">
          <button
            onClick={onClose}
            className="absolute top-2 right-3 text-gray-400 hover:text-yellow-300 text-xl"
          >
            x
          </button>
          <h2 className="text-2xl text-yellow-200/90 font-bold mb-2">{name}</h2>
          <p className="text-sm text-gray-400 mb-4">
            {description || "Sin descripción."}
          </p>
          <h4 className="font-bold text-gray-400 mb-1">Lenguajes:</h4>
          <ul className="flex flex-wrap gap-2 mb-4">
            {languages.map((lang, i) => (
              <li
                key={i}
                className="text-xs bg-yellow-200/20 text-yellow-300 px-2 py-1 rounded"
              >
                {lang}
              </li>
            ))}
          </ul>

          {topics?.length > 0 && (
            <div>
              <h4 className="font-bold text-gray-400 mb-1">Topics:</h4>
              <ul className="flex flex-wrap gap-2 mb-4">
                {topics.map((topic, i) => (
                  <li
                    key={i}
                    className="text-xs bg-purple-200/20 text-purple-300 px-2 py-1 rounded"
                  >
                    {topic}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="flex flex-col gap-2">
            {homepage && (
              <a
                href={homepage}
                target="_blank"
                className="text-sm text-yellow-300 hover:underline inline"
              >
                Ver Web
              </a>
            )}
            <a
              href={html_url}
              target="_blank"
              className="text-sm text-gray-200/90 hover:underline inline-flex items-center gap-2"
            >
              Ver código en GitHub
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
