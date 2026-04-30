import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import foto from "../assets/yo.png";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const { language, toggleLanguage } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white border-b border-gray-200 shadow-sm z-50">
      <div className="flex justify-between items-center px-6 py-4">
        <div className="flex items-center gap-3">
          <img
            src={foto}
            alt="Mateo Gago"
            className="w-8 h-8 rounded-full object-cover"
          />
          <h1 className="text-gray-900 text-xl font-bold">Mateo Gago</h1>
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
              onClick={toggleLanguage}
              className="bg-blue-600 text-white px-3 py-1 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
            >
              {language === "es" ? "EN" : "ES"}
            </button>
          </li>
        </ul>

        {/* Botón hamburguesa móvil */}
        <button
          className="md:hidden text-gray-700"
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
