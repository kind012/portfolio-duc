import React from "react";
import icon1 from "../assets/images/javascript.svg";
import icon2 from "../assets/images/reactjs.svg";
import icon3 from "../assets/images/typescript.svg";
const About = () => {
  return (
    <section className="min-h-screen bg-bg_light_primary" id="about">
      <div className="px-5 md:container py-14">
        <p className="text-2xl font-normal md:text-3xl text-gray">
          Introduction
        </p>
        <h2 className="text-[#06223F] ">
          Over<span className="text-blue-500">view</span>
        </h2>
        <br />
        <div className="mb-10">
          <p className="w-[65%]  text-base font-medium  ">
            {" "}
            Hi I'm Duc, i'm new programmer my interest is web development,my
            passion is building user interface and website, I always want to
            create new interesting things, and always develop myself, so I want
            to become a front-end developer.Here are the languages,library and
            framework ​​I'm using and looking forward to in the near future:
          </p>
        </div>
        <div className="flex flex-wrap justify-between gap-5 group ">
          <div className="min-w[224px] duration-300 cursor-pointer border-2 border-slate-200 rounded-xl text-center bg-bg_light_primary p-6 flex-1 group-hover:blur-sm hover:!blur-none shadow-lg">
            <img src={icon1} alt="javascript" className="mx-auto" />
            <h6 className="my-3">Javascript</h6>
            <p className="leading-7">
              Javascript is an interpreted programming language developed from
              the concept of prototypes
            </p>
          </div>

          <div className="min-w[224px] duration-300 cursor-pointer border-2 border-slate-200 rounded-xl text-center bg-bg_light_primary p-6 flex-1 group-hover:blur-sm hover:!blur-none shadow-lg">
            <img src={icon2} alt="ReactJS" className="mx-auto" />
            <h6 className="my-3">ReactJS</h6>
            <p className="leading-7">
              React is a free and open source UI JavaScript library for building
              component-based user interfaces
            </p>
          </div>

          <div className="min-w[224px] duration-300 cursor-pointer border-2 border-slate-200 rounded-xl text-center bg-bg_light_primary p-6 flex-1 group-hover:blur-sm hover:!blur-none shadow-lg">
            <img src={icon3} alt="Typescript" className="mx-auto" />
            <h6 className="my-3">Typescript</h6>
            <p className="leading-7">
              Typescript is a programming language it is a strict superset of
              JavaScript and adds an optional static
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
