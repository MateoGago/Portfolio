import { useLanguage } from "../context/LanguageContext";
function Skills() {
  const { language } = useLanguage();
  const skills = [
    {
      category: language === "es" ? "Frontend" : "Frontend",
      items: ["HTML", "CSS", "React"],
    },
    {
      category: language === "es" ? "Backend" : "Backend",
      items: ["Node.js", "Express"],
    },
    {
      category: language === "es" ? "Lenguajes" : "Languages",
      items: ["JavaScript", "Java", "C#", "JSON"],
    },
    {
      category: language === "es" ? "Base de datos" : "Databases",
      items: ["MySQL", "SQL Server", "MongoDB"],
    },
    {
      category: language === "es" ? "Metodologías" : "Methodologies",
      items: ["Scrum", "Kanban"],
    },
    {
      category: language === "es" ? "Herramientas" : "Tools",
      items: ["Git", "Microsoft Office", "Vite"],
    },
    {
      category: language === "es" ? "Idiomas" : "Spoken Languages",
      items: [
        language === "es" ? "Español - Nativo" : "Spanish - Native",
        language === "es" ? "Inglés - Intermedio" : "English - Intermediate",
      ],
    },
    { category: "Testing / APIs", items: ["Postman"] },
    { category: "Deploy", items: ["GitHub Pages", "Vercel"] },
  ];

  return (
    <section id="skills" className="py-16 px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          {language === "es" ? `Habilidades` : `Skills`}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.category}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
            >
              <h3 className="text-blue-600 font-semibold mb-3">
                {skill.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="bg-blue-50 text-blue-700 text-sm px-3 py-1 rounded-full"
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
