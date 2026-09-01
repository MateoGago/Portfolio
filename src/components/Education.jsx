import { FaGraduationCap, FaLinkedin } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";

function Education() {
  const { language } = useLanguage();

  return (
    <section id="education" className="py-16 px-8 bg-gray-50 dark:bg-[#0c1424] transition-colors">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-slate-50 mb-12 text-center">
          {language === "es" ? "Formación complementaria" : "Additional education"}
        </h2>

        <article className="bg-white dark:bg-[#111b2d] rounded-xl p-8 shadow-sm dark:shadow-xl dark:shadow-black/20 border border-gray-100 dark:border-white/10 transition-colors">
          <div className="flex flex-col sm:flex-row sm:items-start gap-5">
            <div className="w-14 h-14 shrink-0 rounded-2xl bg-blue-50 dark:bg-blue-400/10 text-blue-600 dark:text-blue-300 dark:border dark:border-blue-400/20 flex items-center justify-center">
              <FaGraduationCap size={26} aria-hidden="true" />
            </div>
            <div className="flex-1">
              <span className="text-sm font-semibold uppercase tracking-wide text-blue-600">
                {language === "es" ? "Curso intensivo finalizado" : "Completed intensive course"}
              </span>
              <h3 className="text-xl font-bold text-gray-900 dark:text-slate-50 mt-1">
                {language === "es" ? "Agente de Transporte Aduanero" : "Customs Transport Agent"}
              </h3>
              <p className="text-gray-500 dark:text-[#8f9db0] font-medium mt-1">
                Instituto de Capacitación Aduanera (ICA)
              </p>
              <p className="text-gray-600 dark:text-[#b8c4d6] leading-relaxed mt-4 mb-6">
                {language === "es"
                  ? "Formación en operatoria aduanera, documentación de importación y exportación, transporte internacional y normativa aplicada al comercio exterior."
                  : "Training in customs operations, import and export documentation, international transportation, and foreign trade regulations."}
              </p>
              <a
                href="https://lnkd.in/p/d-kkeSwD"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 border border-gray-200 dark:border-white/10 text-gray-700 dark:text-slate-200 px-4 py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-white/5 transition-colors text-sm font-medium"
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
