import React, { useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import Aos from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    Aos.init({
      duration: 1800,
      offset: 100,
    });
  });

  return (
    <section id="hero">
      <div className="relative min-h-screen md:items-end md:flex-col">
        <div
          data-aos="slide-left"
          data-aos-delay="1200"
          className="absolute h-[93%] md:w-3/12 w-8/12 top-0 right-0  bg-primaryLinear bottom-0 rounded-lg "
        >
          <h1 className="rotate-90 absolute top-[30%] right-[-15%] text-[#EAF2FA]">
            THIEN {""}
            <span className="text-emerald-950">DUC</span>
          </h1>
        </div>

        {/* First-col */}
        <div
          className="absolute top-[290px] left-[260px] items-center justify-center  "
          data-aos="fade-down"
        >
          <div>
            <h1 className="text-[50px] mb-5">Hi I'm Duc </h1>

            <h1 className="text-[50px] mb-3">
              <TypeAnimation
                sequence={[
                  "I'm FrontEnd Developer",
                  2000,
                  "And Designer",
                  2000,
                ]}
                className="text-blue-500 md:text-[37px]"
                speed={50}
                repeat={Infinity}
              />
            </h1>
            <p className="text-[20px] mb-3">Check out my portfolio</p>
            <div className="mb-5">
              <button className="bg-blue-500 shadow-lg shadow-blue-500/50 btn border-none text-[#fff] ">
                Contact me
              </button>
            </div>
            <div className="flex items-center gap-8 mt-10" data-aos="fade-down">
              <span className="text-base font-bold text-[#06223F] md:text-xl">
                Follow me
              </span>
              <div className="flex items-center gap-4 lg:gap-6">
                <a
                  href="https://www.facebook.com/tranthienduc1001"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-8 h-8 rounded-full lg:w-10 lh:h-10 "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 48 48"
                    width="48px"
                    height="48px"
                  >
                    <path
                      fill="#039be5"
                      d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"
                    />
                    <path
                      fill="#fff"
                      d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"
                    />
                  </svg>
                </a>
              </div>

              <div className="flex items-center gap-4 lg:gap-6">
                <a
                  href="https://github.com/kind012"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-8 h-8 rounded-full lg:w-10 lh:h-10 "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 30 30"
                    width="48px"
                    height="48px"
                  >
                    {" "}
                    <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z" />
                  </svg>
                </a>
              </div>
              <div className="flex items-center gap-4 lg:gap-6">
                <a
                  href="https://www.youtube.com/channel/UCjaavPlsqoyUN_XrzFcJe2w"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-8 h-8 rounded-full lg:w-10 lh:h-10 "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 48 48"
                    width="48px"
                    height="48px"
                  >
                    <path
                      fill="#FF3D00"
                      d="M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z"
                    />
                    <path fill="#FFF" d="M20 31L20 17 32 24z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
