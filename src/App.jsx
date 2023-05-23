import Navbar from "./Layout/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Study from "./components/Study";
import Skill from "./components/Skill";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Preloader from "./Layout/Preloader";
import { useEffect, useState } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  });
  return (
    <>
      {isLoading ? (
        <Preloader />
      ) : (
        <div>
          <Navbar />
          <Hero />
          <About />
          <Study />
          <Skill />
          <Project />
          <Contact />
        </div>
      )}
    </>
  );
}

export default App;
