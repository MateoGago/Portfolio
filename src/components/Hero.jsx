import { useLanguage } from "../context/LanguageContext";
import foto from "../assets/yo.png";

function Hero() {
  const { language } = useLanguage();

  return (
    <section className="py-32 flex flex-col justify-center items-center text-center px-8">
      <img
        src={foto}
        alt="Mateo Gago"
        className="w-60 h-60 rounded-full object-cover shadow-lg mb-6 border-2 border-blue-600"
      />
      <h1 className="text-5xl font-bold text-gray-900 mb-4">Mateo Gago</h1>
      <h2 className="text-2xl text-blue-600 font-medium mb-6">
        Full Stack Developer
      </h2>
      <p className="text-gray-600 max-w-xl mb-4">
        {language === "es"
          ? "Desarrollador Full Stack en formación, último año de Analista en Sistemas en ORT. Construyo productos digitales reales con JavaScript, React, Node.js y SQL."
          : "Full Stack Developer in training, final year of Systems Analyst at ORT. I build real digital products using JavaScript, React, Node.js and SQL."}
      </p>
      <p className="text-gray-500 mb-8">
        React • Node.js • JavaScript • SQL • Git
      </p>
      <div className="flex gap-4">
        <a
          href="#projects"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
        >
          {language === "es" ? "Ver proyectos" : "View projects"}
        </a>
        <a
          href="#contact"
          className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors"
        >
          {language === "es" ? "Contacto" : "Contact"}
        </a>
      </div>
    </section>
  );
}
export default Hero;
