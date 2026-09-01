import { useLanguage } from "../context/LanguageContext";
function Skills() {
  const { language } = useLanguage();
  const skills = [
    {
      category: language === "es" ? "Frontend" : "Frontend",
      items: ["HTML", "CSS", "React", "Next.js", "Tailwind CSS", "Responsive Design"],
    },
    {
      category: language === "es" ? "Backend" : "Backend",
      items: ["Node.js", "Express", "Supabase Auth", "Row Level Security"],
    },
    {
      category: language === "es" ? "Lenguajes" : "Languages",
      items: ["JavaScript", "TypeScript", "Java", "C#", "JSON"],
    },
    {
      category: language === "es" ? "Base de datos" : "Databases",
      items: ["MySQL", "SQL Server", "MongoDB", "PostgreSQL", "Supabase"],
    },
    {
      category: language === "es" ? "Metodologías" : "Methodologies",
      items: ["Scrum", "Kanban", "Feature Branches", "Pull Requests", "Code Review"],
    },
    {
      category: language === "es" ? "Herramientas" : "Tools",
      items: ["Git", "GitHub", "Docker", "Biome", "Microsoft Office", "Vite"],
    },
    {
      category: language === "es" ? "Idiomas" : "Spoken Languages",
      items: [
        language === "es" ? "Español - Nativo" : "Spanish - Native",
        language === "es" ? "Inglés - Intermedio" : "English - Intermediate",
      ],
    },
    { category: "Testing / APIs", items: ["Postman"] },
    {
      category: "PWA",
      items: ["Service Workers", "Web App Manifest", "Offline Support"],
    },
    { category: "Deploy", items: ["GitHub Pages", "Vercel"] },
  ];

  return (
    <section id="skills" className="py-16 px-8 bg-gray-50 dark:bg-[#0c1424] transition-colors">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-slate-50 mb-12 text-center">
          {language === "es" ? `Habilidades` : `Skills`}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.category}
              className={`bg-white dark:bg-[#111b2d] rounded-xl p-6 shadow-sm dark:shadow-lg dark:shadow-black/15 border border-gray-100 dark:border-white/10 transition-all dark:hover:border-blue-400/25 dark:hover:-translate-y-0.5 ${
                skill.category === "Deploy" ? "md:col-start-2" : ""
              }`}
            >
              <h3 className="text-gray-700 dark:text-slate-100 font-semibold mb-3">
                {skill.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="bg-blue-50 dark:bg-blue-400/10 text-blue-700 dark:text-blue-200 dark:border dark:border-blue-400/15 text-sm px-3 py-1 rounded-full"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Skills;
