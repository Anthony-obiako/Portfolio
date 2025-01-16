import Navigation from './components/navigation';
import About from "./pages/about";
import Projects from './pages/projects';
import Experience from './pages/experience';
import Contact from './pages/contact';
import Profile from './pages/profile';

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Profile />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </>
  );
}

