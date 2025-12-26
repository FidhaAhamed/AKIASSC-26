import Navbar from "./components/Navbar";
import LogoHero from "./components/LogoHero";
import ScrollSections from "./components/ScrollSections";
import Hero from "./components/Hero";
import About from "./components/About";
import Tickets from "./components/Tickets";
import Countdown from "./components/Countdown";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ParticlesBackground from "./components/ParticlesBackground";

export default function App() {
  return (
    <div className="relative min-h-screen">
      <ParticlesBackground />
      <Navbar />
      {/* <LogoHero /> */}
      {/* <ScrollSections /> */}
      <Hero />
      <About />
      <Tickets />
      <Countdown />
      <Contact />
      <Footer />
    </div>
  );
}