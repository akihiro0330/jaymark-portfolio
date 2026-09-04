import {
  useCallback,
  useState,
} from "react";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Experience from "./components/sections/Experience";
import Projects from "./components/sections/Projects";
import Credentials from "./components/sections/Credentials";
import Contact from "./components/sections/Contact";

import AuroraBackground from "./components/ui/AuroraBackground";
import SystemStatusHUD from "./components/ui/SystemStatusHUD";

import PageIntro from "./components/effects/PageIntro";
import CyberBackground from "./components/effects/CyberBackground";
import CyberInterface from "./components/effects/CyberInterface";
import ScrollCyberSystem from "./components/effects/ScrollCyberSystem";

import {
  ProjectTelemetryProvider,
} from "./context/ProjectTelemetryContext";

function App() {
  const [introComplete, setIntroComplete] = useState(false);

  const handleIntroComplete = useCallback(() => {
    setIntroComplete(true);
  }, []);

  return (
    <>
      {!introComplete && (
        <PageIntro onComplete={handleIntroComplete} />
      )}

      <main
        className="relative min-h-screen overflow-hidden bg-[#050816] text-white"
      >
        <ProjectTelemetryProvider>
          <AuroraBackground />
          <CyberBackground />

          {introComplete && (
            <>
              <CyberInterface />
              <ScrollCyberSystem />
            </>
          )}

          <div
            className={`
              relative z-10 transition-all duration-1000 ease-out
              ${
                introComplete
                  ? "translate-y-0 scale-100 opacity-100 blur-0"
                  : "translate-y-3 scale-[1.01] opacity-90 blur-[2px]"
              }
            `}
          >
            <Navbar />
            <Hero introReady={introComplete} />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Credentials />
            <Contact />
            <Footer />
          </div>

          {introComplete && <SystemStatusHUD />}
        </ProjectTelemetryProvider>
      </main>
    </>
  );
}

export default App;
