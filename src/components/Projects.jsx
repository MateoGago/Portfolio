import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import listorti from "../assets/icon-192.png";
import { useLanguage } from "../context/LanguageContext";
function Projects() {
  const { language } = useLanguage();
  return (
    <section id="projects" className="py-16 px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          {" "}
          {language === "es" ? "Proyectos" : "Projects"}
        </h2>
        <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
          <div className="flex items-center gap-4 mb-4">
            <img
              src={listorti}
              alt="Listorti"
              className="w-16 h-16 rounded-2xl shadow-md"
            />
            <div>
              <h3 className="text-xl font-bold text-gray-900">Listorti.app</h3>
              <span className="bg-blue-50 text-blue-700 text-sm px-3 py-1 rounded-full">
                PWA
              </span>
            </div>
          </div>
          <p className="text-gray-600 mb-6">
            {" "}
            {language === "es"
              ? `PWA para gestionar tareas, días y semanas, desarrollada con HTML, CSS y JavaScript vanilla sin frameworks. 
    Incluye funcionamiento offline, recordatorios, timer en tiempo real e instalable en iOS, Android y desktop.`
              : `PWA to manage tasks, days and weeks, developed with HTML, CSS and JavaScript vanilla without frameworks.
includes offline operation, reminders, real-time timer and installable on iOS, Android and desktop.`}
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://mateogago.github.io/Listorti.app/"
              target="_blank"
              className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
            >
              <FiExternalLink /> Demo
            </a>
            <a
              href="https://github.com/MateoGago/Listorti.app"
              target="_blank"
              className="flex items-center gap-2 border border-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium"
            >
              <FaGithub /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/posts/mateo-gago-866108213_javascript-webdevelopment-pwa-activity-7449440319999234048-EFa-"
              target="_blank"
              className="flex items-center gap-2 border border-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium"
            >
              <FaLinkedin /> LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Projects;
