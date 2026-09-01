import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import listorti from "../assets/icon-192.png";
import proDebatesIcon from "../assets/prodebates-icon.png";
import { useLanguage } from "../context/LanguageContext";

const projects = [
  {
    name: "ProDebates",
    badge: "Full Stack · PWA",
    image: proDebatesIcon,
    description: {
      es: "Webapp para jugar al prode del Mundial 2026 con amigos. Permite crear grupos privados, invitar participantes, cargar pronósticos y competir en una tabla de posiciones. Incluye autenticación, reglas de acceso, diseño responsive e instalación como PWA.",
      en: "A web app for playing a 2026 World Cup prediction game with friends. Create private groups, invite participants, submit match predictions, and compete on group leaderboards. Includes authentication, access rules, responsive design, and PWA installation.",
    },
    technologies: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS", "PWA"],
    demo: "https://lnkd.in/dma_hwuX",
    github: "https://lnkd.in/debQyzN2",
    linkedin: "https://lnkd.in/p/djJgQ_VH",
  },
  {
    name: "Listorti.app",
    badge: "PWA",
    image: listorti,
    description: {
      es: "PWA para gestionar tareas, días y semanas, desarrollada con HTML, CSS y JavaScript vanilla sin frameworks. Incluye funcionamiento offline, recordatorios, timer en tiempo real e instalación en iOS, Android y desktop.",
      en: "PWA for managing tasks, days, and weeks, built with HTML, CSS, and vanilla JavaScript. Includes offline support, reminders, a real-time timer, and installation on iOS, Android, and desktop.",
    },
    technologies: ["JavaScript", "HTML", "CSS", "PWA"],
    demo: "https://mateogago.github.io/Listorti.app/",
    github: "https://github.com/MateoGago/Listorti.app",
    linkedin: "https://www.linkedin.com/posts/mateo-gago-866108213_javascript-webdevelopment-pwa-activity-7449440319999234048-EFa-",
  },
];

function Projects() {
  const { language } = useLanguage();

  return (
    <section id="projects" className="py-16 px-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-slate-50 mb-12 text-center">
          {language === "es" ? "Proyectos" : "Projects"}
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <article key={project.name} className="bg-white dark:bg-[#111b2d] rounded-xl p-8 shadow-sm dark:shadow-xl dark:shadow-black/20 border border-gray-100 dark:border-white/10 flex flex-col transition-all dark:hover:border-blue-400/25">
              <div className="flex items-center gap-4 mb-4">
                {project.image ? (
                  <img src={project.image} alt={`Logo de ${project.name}`} className="w-16 h-16 rounded-2xl object-cover shadow-md" />
                ) : (
                  <div aria-hidden="true" className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-md flex items-center justify-center text-xl font-bold">
                    {project.initials}
                  </div>
                )}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-slate-50">{project.name}</h3>
                  <span className="inline-block bg-blue-50 dark:bg-blue-400/10 text-blue-700 dark:text-blue-200 dark:border dark:border-blue-400/15 text-sm px-3 py-1 rounded-full mt-1">{project.badge}</span>
                </div>
              </div>
              <p className="text-gray-600 dark:text-[#b8c4d6] mb-5 leading-relaxed">{project.description[language]}</p>
              <ul className="flex flex-wrap gap-2 mb-6" aria-label="Tecnologías">
                {project.technologies.map((technology) => (
                  <li key={technology} className="text-xs font-medium text-gray-600 dark:text-[#b8c4d6] bg-gray-100 dark:bg-white/5 dark:border dark:border-white/10 px-2.5 py-1 rounded-md">{technology}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-3 mt-auto">
                <a href={project.demo} target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"><FiExternalLink /> Demo</a>
                <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 border border-gray-200 dark:border-white/10 text-gray-700 dark:text-slate-200 px-4 py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-white/5 transition-colors text-sm font-medium"><FaGithub /> GitHub</a>
                <a href={project.linkedin} target="_blank" rel="noreferrer" aria-label={`${project.name} en LinkedIn`} className="flex items-center gap-2 border border-gray-200 dark:border-white/10 text-gray-700 dark:text-slate-200 px-4 py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-white/5 transition-colors text-sm font-medium"><FaLinkedin /> LinkedIn</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
