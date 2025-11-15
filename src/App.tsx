import Header from "./components/Header";
import AboutSection from "./sections/AboutSection";
import ContactSection from "./sections/ContactSection";
import Footer from "./sections/Footer";
import HeroSection from "./sections/HeroSection";
import ProjectSection from "./sections/ProjectSection";
import TapeSection from "./sections/TapeSection";

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <ProjectSection />
      <TapeSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </>
  );
}

export default App;
