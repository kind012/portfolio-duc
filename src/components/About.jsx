import React from "react";
import icon1 from "../assets/images/javascript.svg";
import icon2 from "../assets/images/reactjs.svg";
import icon3 from "../assets/images/typescript.svg";
import icon4 from "../assets/images/tailwind-css.svg";
import img1 from "../assets/images/programing.svg";

import { useRef } from "react";
import { useInView } from "framer-motion";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <section className="min-h-screen " id="about">
      <div className="px-5 md:container py-14">
        <p className="text-2xl font-normal md:text-3xl text-gray">
          Introduction
        </p>
        <div
          ref={ref}
          style={{
            transform: isInView ? "none" : "translateX(-200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          <h2 className="text-[#06223F] ">
            Over<span className="text-blue-500">view</span>
          </h2>
        </div>
        <br />
        <div className="mb-10">
          <p className="w-[65%] text-base font-medium  ">
            {" "}
            Hi I'm Duc, i'm Front-End Developer , my interest is web
            development, my passion is building user interface, i started my in
            depth front-end programming in late 2021 and always kept upgrading
            my skills, so I want to become a front-end developer .
          </p>
        </div>
        <div
          className="flex gap-[50px] justify-center items-center"
          // ref={ref}
          // style={{
          //   transform: isInView ? "none" : "translateX(-200px)",
          //   opacity: isInView ? 1 : 0,
          //   transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          // }}
        >
          <div>
            <img src={img1} alt="" className="w-full max-w-[530px] " />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
