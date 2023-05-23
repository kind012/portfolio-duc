import React from "react";
import { motion } from "framer-motion";
import { useView } from "../hooks/useView";

import portfolio from "../assets/images/bg1.png";
import github from "../assets/images/icons8-github-48.svg";
import blog from "../assets/images/blog.png";

const Project = () => {
  const { ref, isInView } = useView();
  return (
    <section className="mb-10" id="project">
      <div className="min-h-screen px-5 md:container pt-14">
        <div>
          <p className="text-2xl font-normal md:text-3xl text-gray">Project</p>
          <div
            ref={ref}
            style={{
              transform: isInView ? "none" : "translateX(-200px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
          >
            <h2 className="text-[#06223F] ">
              Oder<span className="text-blue-500">project</span>
            </h2>
          </div>

          <br />
          <div className="mb-10">
            <p className="max-w-3xl text-[17px] leading-[30px] font-medium ">
              {" "}
              Applying the knowledge learned and applied to real projects, I
              have made the following projects, each project will come with a
              github link you can see my code, below has detailed information on
              the page. What is my website made for, what technology do I use
            </p>
          </div>

          <div className="flex flex-wrap mt-20 gap-7">
            <div className="opacity:1 transform-none">
              <motion.div
                whileHover={{ scale: 1.2 }}
                onHoverStart={(e) => {}}
                onHoverEnd={(e) => {}}
                className="bg-[#151031] p-5 rounded-2xl sm:w-[360px] w-full"
              >
                <div className="relative w-full h-[230px]">
                  <img src={portfolio} alt="" className="rounded-2xl" />
                  <div className="absolute inset-0 flex justify-end m-2">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full cursor-pointer">
                      <a href="https://github.com/kind012/portfolio-duc/tree/main">
                        <img
                          src={github}
                          alt=""
                          className="object-contain w-8 h-8"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="mt-1">
                  <h3 className="text-white font-bold text-[24px] ">
                    Duc Portfolio
                  </h3>
                  <p className="mt-2 text-[14px] text-gray">
                    This is my personal portfolio, mainly this project I use
                    ReactJS and style with Tailwind and Framer Motion do
                    animation and hooks in ReactJS
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  <p className="text-[14px] text-blue-500"># ReactJS</p>
                  <p className="text-[14px] text-cyan-500"># Tailwindcss</p>
                </div>
              </motion.div>
            </div>
            <div className="opacity:1 transform-none">
              <motion.div
                whileHover={{ scale: 1.2 }}
                onHoverStart={(e) => {}}
                onHoverEnd={(e) => {}}
                className="bg-[#151031] p-5 rounded-2xl sm:w-[360px] w-full"
              >
                <div className="relative w-full h-[230px]">
                  <img src={blog} alt="" className="rounded-2xl" />
                  <div className="absolute inset-0 flex justify-end m-2">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full cursor-pointer">
                      <a href="https://github.com/kind012/blog-duc">
                        <img
                          src={github}
                          alt=""
                          className="object-contain w-8 h-8"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="mt-1">
                  <h3 className="text-white font-bold text-[24px] ">Bloger</h3>
                  <p className="mt-2 text-[14px] text-gray line-clamp-3">
                    This is my basic blog, mainly this project I use ReactJS and
                    style with Tailwind , store data on Firebase , hooks in
                    ReactJS, this is simply show newly created blogs, blogger
                    creation page with tags, and a detail blog page
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  <p className="text-[14px] text-blue-500"># ReactJS</p>
                  <p className="text-[14px] text-cyan-500"># Tailwindcss</p>
                  <p className="text-[14px] text-orange-500"># Firebase</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
