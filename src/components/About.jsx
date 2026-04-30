import { useLanguage } from "../context/LanguageContext";
function About() {
  const { language } = useLanguage();
  return (
    <section id="about" className="py-16 px-8 max-w-3xl mx-auto text-center">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">
        {language === "es" ? "Sobre mí" : "About me"}
      </h2>
      <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 text-left">
        <p className="text-gray-600 text-lg leading-relaxed mb-4">
          {language === "es"
            ? "Soy Mateo, desarrollador Full Stack en formación y estudiante de último año de Analista en Sistemas en ORT Buenos Aires."
            : "I'm Mateo, a Full Stack developer in training and final-year Systems Analyst student at ORT Buenos Aires."}
        </p>
        <p className="text-gray-600 text-lg leading-relaxed mb-4">
          {language === "es"
            ? "Me apasiona construir productos digitales reales - desde una PWA instalable hasta un e-commerce propio que gestioné de principio a fin. Tengo experiencia práctica con JavaScript, React, Node.js, SQL, MongoDB y Java."
            : "I build real digital products — from installable PWAs to end-to-end e-commerce projects. Hands-on experience with JavaScript, React, Node.js, SQL, MongoDB and Java."}
        </p>
        <p className="text-gray-600 text-lg leading-relaxed">
          {language === "es"
            ? "Soy autodidacta, organizado y con visión de negocio. Estoy en busqueda de mi primera oportunidad formal en tech y listo para empezar a desarrollarme, crecer y ser parte de un equipo."
            : "Self-taught, organized, and business-minded. Looking for my first opportunity in tech to grow, contribute, and be part of a team."}
        </p>
      </div>
    </section>
  );
}
export default About;
