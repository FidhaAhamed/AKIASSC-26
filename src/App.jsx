import Navbar from "./components/Navbar";
import LogoHero from "./components/LogoHero";
import ScrollSections from "./components/ScrollSections";
import Hero from "./components/Hero";
import About from "./components/About";
import EventHighlights from "./components/EventHighlights";
import Tickets from "./components/Tickets";
import EventSchedule from "./components/EventSchedule";
import Gallery from "./components/Gallery";
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
      <EventHighlights />
      <Tickets />
      <EventSchedule />
      <Gallery />
      <Countdown />
      <Contact />
      <Footer />
    </div>
  );
}