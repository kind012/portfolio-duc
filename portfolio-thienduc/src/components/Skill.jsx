import React from "react";
import { content } from "../Content";

const Skill = () => {
  const { Skills } = content;
  return (
    <section className="min-h-screen bg-bg_light_primary" id="skill">
      <div className="px-5 md:container pt-14">
        <p className="mb-5 text-2xl font-normal md:text-3xl text-gray">Skill</p>
        <h2 className="text-[#06223F] mb-[120px]">
          My <span className="text-blue-500">Skills</span>
        </h2>
        <br />
        <div className="flex flex-wrap items-center justify-center gap-4 ">
          {Skills.skill_content.map((skill, i) => (
            <div
              key={i}
              className="relative flex justify-center items-center w-full max-w-[12rem] gap-5 p-5 bg-white group rounded-3xl"
            >
              <div className="">
                <img
                  src={skill.logo}
                  alt=""
                  className="w-10 duration-200 group-hover:scale-125"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
