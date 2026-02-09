import Navbar from "../components/Navbar";
import About from "../components/About";
import Hero from "../components/Hero";
import Project from "../components/Project";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="bg-[#121212] min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Project />
      <Contact />
      <Footer />
    </main>
  );
}
