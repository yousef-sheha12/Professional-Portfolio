import "animate.css";
import Navbar from "./pages/Navbar";
import LandingPage from "./pages/LandingPage";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
function App() {
  return (
    <>
      <div className="h-dvh">
        <Navbar />
        <LandingPage />
      </div>
      <div className="h-dvh">
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </>
  );
}

export default App;
