import About from "./Components/About";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import SocialLinks from "./Components/SocialLinks";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";
import Project from "./Components/Project";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <SocialLinks />
      <About />
      <Skills />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
