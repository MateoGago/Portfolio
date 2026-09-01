import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ScrollToTop from "./components/ScrollToTop";
import { Analytics } from "@vercel/analytics/react";
function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <hr className="border-gray-200 max-w-4x1 mx-auto" />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <ScrollToTop />
      <Analytics />
    </>
  );
}

export default App;
