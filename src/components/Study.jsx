import { React, useState } from "react";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { content } from "../Content";
import { useRef } from "react";
import { useInView } from "framer-motion";

import "swiper/css";
import "swiper/css/pagination";

const Study = () => {
  const { Study } = content;
  const [activeIndex, setActiveIndex] = useState(0);
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

        <Swiper
          direction={"vertical"}
          pagination={{
            clickable: true,
          }}
          loop={true}
          spaceBetween={40}
          slidesPerView={1.7}
          onSlideChange={(e) => {
            console.log(e.realIndex);
            setActiveIndex(e.realIndex);
          }}
          modules={[Pagination]}
          className="md:h-96 h-[640px] max-w-3xl"
        >
          {Study.study_content.map((content, i) => (
            <SwiperSlide key={i}>
              <div
                className={`duration-500 bg-bg_light_primary mx-8 border-2 p-8 h-full rounded-2xl flex items-center gap-6 border-slate-200 md:flex-row ${
                  activeIndex !== i && "scale-75 blur-sm"
                }`}
              >
                <img src={content.img} alt="" className="h-24" />
                <div>
                  <p className="text-sm sm:text-base">{content.timeline}</p>
                  <h6 className="mt-[20px]">{content.title}</h6>
                  <p className="mb-5">{content.name}</p>
                  <p>{content.desc}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Study;
