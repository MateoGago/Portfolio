import { MdEmail } from "react-icons/md";
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";

function Contact() {
  const { language } = useLanguage();
  return (
    <section id="contact" className="py-16 px-8 bg-gray-50">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          {language === "es" ? `Contacto` : `Contact`}
        </h2>
        <p className="text-gray-600 mb-12">
          {" "}
          {language === "es"
            ? `¿Tenés un proyecto o propuesta? Escribime`
            : `Have a project or proposal? Let's talk`}
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <a
            href="mailto:mateogago22@gmail.com"
            className="flex items-center gap-2 bg-white border border-gray-200 text-gray-700 px-6 py-3 rounded-xl hover:border-blue-500 hover:text-blue-600 transition-all shadow-sm font-medium"
          >
            <MdEmail size={20} /> Email
          </a>
          <a
            href="http://www.linkedin.com/in/mateo-gago-866108213"
            target="_blank"
            className="flex items-center gap-2 bg-white border border-gray-200 text-gray-700 px-6 py-3 rounded-xl hover:border-blue-500 hover:text-blue-600 transition-all shadow-sm font-medium"
          >
            <FaLinkedin size={20} /> LinkedIn
          </a>
          <a
            href="https://github.com/MateoGago"
            target="_blank"
            className="flex items-center gap-2 bg-white border border-gray-200 text-gray-700 px-6 py-3 rounded-xl hover:border-blue-500 hover:text-blue-600 transition-all shadow-sm font-medium"
          >
            <FaGithub size={20} /> GitHub
          </a>
          <a
            href="https://wa.me/5492804990430"
            target="_blank"
            className="flex items-center gap-2 bg-white border border-gray-200 text-gray-700 px-6 py-3 rounded-xl hover:border-blue-500 hover:text-blue-600 transition-all shadow-sm font-medium"
          >
            <FaWhatsapp size={20} /> WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
export default Contact;
