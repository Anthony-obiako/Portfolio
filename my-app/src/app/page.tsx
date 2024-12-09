import Navigation from './components/navigation';
import About from "./pages/about";
import Projects from './pages/projects';
import Experience from './pages/experience';
import Contact from './pages/contact';

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </>
  );
}

