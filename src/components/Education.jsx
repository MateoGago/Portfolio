import { FaGraduationCap, FaLinkedin } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";

function Education() {
  const { language } = useLanguage();

  return (
    <section id="education" className="py-16 px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          {language === "es" ? "Formación complementaria" : "Additional education"}
        </h2>

        <article className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
          <div className="flex flex-col sm:flex-row sm:items-start gap-5">
            <div className="w-14 h-14 shrink-0 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center">
              <FaGraduationCap size={26} aria-hidden="true" />
            </div>
            <div className="flex-1">
              <span className="text-sm font-semibold uppercase tracking-wide text-blue-600">
                {language === "es" ? "Curso intensivo finalizado" : "Completed intensive course"}
              </span>
              <h3 className="text-xl font-bold text-gray-900 mt-1">
                {language === "es" ? "Agente de Transporte Aduanero" : "Customs Transport Agent"}
              </h3>
              <p className="text-gray-500 font-medium mt-1">
                Instituto de Capacitación Aduanera (ICA)
              </p>
              <p className="text-gray-600 leading-relaxed mt-4 mb-6">
                {language === "es"
                  ? "Formación en operatoria aduanera, documentación de importación y exportación, transporte internacional y normativa aplicada al comercio exterior."
                  : "Training in customs operations, import and export documentation, international transportation, and foreign trade regulations."}
              </p>
              <a
                href="https://lnkd.in/p/d-kkeSwD"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 border border-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium"
              >
                <FaLinkedin />
                {language === "es" ? "Ver publicación" : "View post"}
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Education;
