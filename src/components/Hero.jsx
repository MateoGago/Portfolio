import { useLanguage } from "../context/LanguageContext";
import foto from "../assets/yo.png";

function Hero() {
  const { language } = useLanguage();

  return (
    <section className="hero-section py-32 flex flex-col justify-center items-center text-center px-8 transition-colors">
      <div className="relative w-60 h-60 rounded-full overflow-hidden shadow-lg mb-6 border-2 border-[#d8cbb8] bg-[#e8dece]">
        <img
          src={foto}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-[center_42%] scale-110 blur-md opacity-60"
        />
        <img
          src={foto}
          alt="Mateo Gago"
          className="absolute inset-0 w-full h-full object-cover object-[center_55%] scale-[1] rounded-full"
        />
      </div>
      <h1 className="text-5xl font-bold text-gray-900 dark:text-slate-50 mb-4">Mateo Gago</h1>
      <h2 className="text-2xl text-blue-600 font-medium mb-6">
        Full Stack Developer
      </h2>
      <p className="text-gray-500 dark:text-[#9aa9bd] mb-8">
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
          className="border border-blue-600 dark:border-blue-400/50 text-blue-600 dark:text-blue-300 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 dark:hover:bg-blue-400/10 transition-colors"
        >
          {language === "es" ? "Contacto" : "Contact"}
        </a>
      </div>
    </section>
  );
}
export default Hero;
