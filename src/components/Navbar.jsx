import { useEffect, useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import foto from "../assets/yo.png";
import { FaBars, FaMoon, FaSun, FaTimes } from "react-icons/fa";

function Navbar() {
  const { language, toggleLanguage } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme
      ? savedTheme === "dark"
      : window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  const toggleDarkMode = () => {
    const nextMode = !darkMode;
    setDarkMode(nextMode);
    document.documentElement.classList.toggle("dark", nextMode);
    localStorage.setItem("theme", nextMode ? "dark" : "light");
  };

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <nav className="fixed top-0 w-full bg-white/95 dark:bg-[#0b1220]/90 backdrop-blur-xl border-b border-gray-200 dark:border-white/10 shadow-sm dark:shadow-black/20 z-50 transition-colors">
      <div className="flex justify-between items-center px-6 py-4">
        <div className="flex items-center gap-3">
          <img
            src={foto}
            alt="Mateo Gago"
            className="w-8 h-8 rounded-full object-cover object-[center_42%]"
          />
          <h1 className="text-gray-900 dark:text-slate-50 text-xl font-bold">Mateo Gago</h1>
        </div>

        {/* Links desktop */}
        <ul className="hidden md:flex gap-8 list-none items-center">
          <li>
            <a
              href="#about"
              className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
            >
              {language === "es" ? "Sobre mí" : "About"}
            </a>
          </li>
          <li>
            <a
              href="#education"
              className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
            >
              {language === "es" ? "Formación" : "Education"}
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
            >
              {language === "es" ? "Proyectos" : "Projects"}
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
            >
              {language === "es" ? "Habilidades" : "Skills"}
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
            >
              {language === "es" ? "Contacto" : "Contact"}
            </a>
          </li>
          <li>
            <button
              onClick={toggleDarkMode}
              aria-label={darkMode ? "Activar modo claro" : "Activar modo oscuro"}
              className="text-gray-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-300 transition-all p-2.5 rounded-xl dark:bg-white/5 dark:hover:bg-white/10 dark:border dark:border-white/10"
            >
              {darkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
            </button>
          </li>
          <li>
            <button
              onClick={toggleLanguage}
              className="bg-blue-600 text-white px-3 py-1 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
            >
              {language === "es" ? "EN" : "ES"}
            </button>
          </li>
        </ul>

        {/* Botón hamburguesa móvil */}
        <button
          className="md:hidden text-gray-700 dark:text-slate-200"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </div>

      {/* Menú móvil */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col gap-4 px-6 pb-6 list-none">
          <li>
            <a
              href="#about"
              onClick={() => setMenuOpen(false)}
              className="text-gray-600 hover:text-blue-600 font-medium"
            >
              {language === "es" ? "Sobre mí" : "About"}
            </a>
          </li>
          <li>
            <a
              href="#education"
              onClick={() => setMenuOpen(false)}
              className="text-gray-600 hover:text-blue-600 font-medium"
            >
              {language === "es" ? "Formación" : "Education"}
            </a>
          </li>
          <li>
            <a
              href="#projects"
              onClick={() => setMenuOpen(false)}
              className="text-gray-600 hover:text-blue-600 font-medium"
            >
              {language === "es" ? "Proyectos" : "Projects"}
            </a>
          </li>
          <li>
            <a
              href="#skills"
              onClick={() => setMenuOpen(false)}
              className="text-gray-600 hover:text-blue-600 font-medium"
            >
              {language === "es" ? "Habilidades" : "Skills"}
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="text-gray-600 hover:text-blue-600 font-medium"
            >
              {language === "es" ? "Contacto" : "Contact"}
            </a>
          </li>
          <li>
            <button
              onClick={toggleDarkMode}
              className="flex items-center gap-2 text-gray-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-300 font-medium"
            >
              {darkMode ? <FaSun /> : <FaMoon />}
              {darkMode
                ? language === "es" ? "Modo claro" : "Light mode"
                : language === "es" ? "Modo oscuro" : "Dark mode"}
            </button>
          </li>
          <li>
            <button
              onClick={toggleLanguage}
              className="bg-blue-600 text-white px-3 py-1 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
            >
              {language === "es" ? "EN" : "ES"}
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
}
export default Navbar;
