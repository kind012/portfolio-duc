import { React, useState } from "react";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { content } from "../Content";

import "swiper/css";
import "swiper/css/pagination";

const Work = () => {
  const { Work } = content;
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <section id="work">
      <div className="px-5 md:container pt-14">
        <p className="text-2xl font-normal md:text-3xl text-gray">
          What i have do so far
        </p>
        <h2 className="text-[#06223F] ">
          <span className="text-blue-500">Study</span>
        </h2>
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
          {Work.work_content.map((content, i) => (
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

export default Work;
