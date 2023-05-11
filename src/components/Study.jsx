import { React } from "react";
import { content } from "../Content";
import { useRef } from "react";
import { useInView } from "framer-motion";

import "swiper/css";
import "swiper/css/pagination";

const Study = () => {
  const { Study } = content;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="study">
      <div className="px-5 md:container pt-14">
        <p className="text-2xl font-normal md:text-3xl text-gray">
          What i have do so far
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
            <span className="text-blue-500">Study</span>
          </h2>
        </div>
        <br />

        {Study.study_content.map((content, i) => (
          <div
            className="flex items-center h-full gap-6 p-8 mx-8 mb-5 border-2 bg-bg_light_primary rounded-2xl border-slate-200 md:flex-row lg:max-w-[900px]"
            key={i}
          >
            <img src={content.img} alt="" className="h-24" />
            <div>
              <p className="text-sm sm:text-base">{content.timeline}</p>
              <h6 className="mt-[20px]">{content.title}</h6>
              <p className="mb-5">{content.name}</p>
              <p>{content.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Study;
