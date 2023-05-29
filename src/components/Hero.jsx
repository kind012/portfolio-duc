import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";

const Hero = () => {
  const [text] = useTypewriter({
    words: ["Hi! My name is Thien Duc", "I'm Fresher FrontEnd Developer"],
    loop: true,
    delaySpeed: 2000,
  });

  const ContactMe = () => {
    const a = document.createElement("a");
    // Duong dan file pdf  tranthienduc-FrontEndDev-12345.pdf
    a.href = "https://www.facebook.com/tranthienduc1001";
    a.click();
  };

  return (
    <section id="hero">
      <div className="flex flex-col items-center justify-center w-full h-screen space-y-8 overflow-hidden text-center bg-bg_light_primary">
        <div className="relative -top-36">
          <h2 className="tracking-[15px] text-sm uppercase text-gray pb-5 select-none">
            Frontend Developer
          </h2>

          <h1 className="text-[50px] font-semibold px-10 select-none mb-[50px]">
            <span className="text-blue-500">{text}</span>
            <Cursor cursorColor="#38bdf8" />
          </h1>

          <div>
            <button
              className="relative w-48 h-12 overflow-hidden text-lg bg-white rounded-lg shadow group "
              onClick={ContactMe}
            >
              <div className="absolute inset-0 w-0 bg-gradient-to-br from-purple-600 to-blue-500  focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 transition-all duration-[250ms] ease-out group-hover:w-full "></div>
              <span className="relative text-black group-hover:text-white">
                Contact Me
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
