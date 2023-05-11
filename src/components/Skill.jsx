import React from "react";
import { content } from "../Content";
import { useRef } from "react";
import { useInView } from "framer-motion";

const Skill = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { Skills } = content;
  return (
    <section className="min-h-screen bg-bg_light_primary" id="skill">
      <div className="px-5 md:container pt-14">
        <p className="mb-2 text-2xl font-normal md:text-3xl text-gray">Skill</p>
        <div ref={ref}>
          <h2
            className="text-[#06223F] mb-[120px]"
            style={{
              transform: isInView ? "none" : "translateX(-200px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
          >
            My <span className="text-blue-500">Skills</span>
          </h2>
        </div>

        <div className="grid items-center grid-cols-5 gap-4 ml-7 ">
          {Skills.skill_content.map((skill, i) => (
            <div key={i} className="  w-full max-w-[12rem] gap-5 p-5 ">
              <img src={skill.logo} alt="" className="h-[80px] md:h-[80px]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
