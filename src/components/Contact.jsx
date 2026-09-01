import { MdEmail } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";

function Contact() {
  const { language } = useLanguage();
  return (
    <section id="contact" className="py-16 px-8 bg-gray-50 dark:bg-[#0c1424] transition-colors">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-slate-50 mb-4">
          {language === "es" ? `Contacto` : `Contact`}
        </h2>
        <p className="text-gray-600 dark:text-[#b8c4d6] mb-12">
          {" "}
          {language === "es"
            ? `¿Tenés un proyecto o propuesta? Escribime`
            : `Have a project or proposal? Let's talk`}
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <a
            href="mailto:mateogago22@gmail.com"
            className="flex items-center gap-2 bg-white dark:bg-[#111b2d] border border-gray-200 dark:border-white/10 text-gray-700 dark:text-slate-200 px-6 py-3 rounded-xl hover:border-blue-500 dark:hover:border-blue-400/40 hover:text-blue-600 dark:hover:text-blue-300 transition-all shadow-sm dark:shadow-black/20 font-medium"
          >
            <MdEmail size={20} /> Email
          </a>
          <a
            href="http://www.linkedin.com/in/mateo-gago-866108213"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 bg-white dark:bg-[#111b2d] border border-gray-200 dark:border-white/10 text-gray-700 dark:text-slate-200 px-6 py-3 rounded-xl hover:border-blue-500 dark:hover:border-blue-400/40 hover:text-blue-600 dark:hover:text-blue-300 transition-all shadow-sm dark:shadow-black/20 font-medium"
          >
            <FaLinkedin size={20} /> LinkedIn
          </a>
          <a
            href="https://github.com/MateoGago"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 bg-white dark:bg-[#111b2d] border border-gray-200 dark:border-white/10 text-gray-700 dark:text-slate-200 px-6 py-3 rounded-xl hover:border-blue-500 dark:hover:border-blue-400/40 hover:text-blue-600 dark:hover:text-blue-300 transition-all shadow-sm dark:shadow-black/20 font-medium"
          >
            <FaGithub size={20} /> GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
export default Contact;
