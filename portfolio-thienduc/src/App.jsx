import Navbar from "./Layout/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Work from "./components/Work";
import Skill from "./components/Skill";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Preloader from "./components/Preloader";
import { useEffect, useState } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  });
  return (
    <div>
      {isLoading ? (
        <Preloader />
      ) : (
        <div>
          <Navbar />
          <Hero />
          <About />
          <Work />
          <Skill />
          <Project />
          <Contact />
        </div>
      )}
    </div>
  );
}

export default App;
