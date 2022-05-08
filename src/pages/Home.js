import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import image from "./img/me.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import HeroSection from "../components/home/HeroSection";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 600,
    });
  }, []);

  const Navigate = useNavigate();
  return (
    <div className="m-0 overflow-hidden">
      {/* Section 1 500px  */}
      <section>
        {" "}
        <div className=" bg-[#B9C9EA]  font-oxygen shapes-bg ">
          <div className=" grid grid-cols-1 gap-16 md:gap-10 justify-center md:flex md:justify-center  ">
            <div className="flex justify-center  ">
              <div className=" pt-10 md:pt-8 w-64 h-64 md:w-[500px] md:h-64  ">
                <img
                  data-aos="zoom-in"
                  className=" z-0 grayscale rounded-full border-8 border-white  bg-slate-200 shadow-2xl"
                  src={image}
                  alt=""
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-10  ">
              <div className="grid justify-center p-4 ">
                <h1 className="text-shadow font-bold text-5xl mt-10 md:text-8xl text-white ">
                  Hello
                </h1>
                <h2 className=" font-bold md:pl-10 text-4xl text-[#3C517A]">
                  A bit about me{" "}
                </h2>
                <p
                  data-aos="fade-right"
                  data-aos-offset="300"
                  data-aos-easing="ease-in-sine"
                  className="pl-15 md:pl-10 text-lg w:[300px] font-bold font-oxygen  md:w-[450px] text-[#3C517A]"
                >
                  Highly driven recent web and information system graduate. With
                  a flair for creating elegant solutions in the least amount of
                  time. Proven record of managing computer hardware repair at
                  university. Comes with successful experience in Front-End &
                  Back-End Web development. Bringing deep knowledge of Digital
                  Marketing and Sales Software Proficiency.
                </p>
              </div>
              <div
                data-aos="zoom-in"
                className="flex justify-center gap-2 md:gap-5 bg-transparent"
              >
                <span
                  onClick={() => Navigate("/resume")}
                  className="rounded-full min-w-[100px] min-h-[100px] md:w-32 md:h-32  shadow-2xl transition duration-300 md:duration-300 text-gray-900 border-2 border-white  bg-red-500 hover:bg-transparent hover:border-gray-900  hover:border-dashed"
                >
                  <button className="h-full w-full  font-bold align-middle hover:text-gray-900 text-white text-center">
                    Resume
                  </button>
                </span>
                <span
                  onClick={() => Navigate("/project")}
                  className="rounded-full min-w-[101px] min-h-[100px] md:w-32 md:h-32  shadow-2x transition duration-300 md:duration-300 text-gray-900 border-2 border-white  bg-cyan-500 hover:bg-transparent  hover:border-gray-900   hover:border-dashed"
                >
                  <button className="h-full w-full font-bold align-middle  hover:text-gray-900 text-white">
                    Projects
                  </button>
                </span>{" "}
                <span
                  onClick={() => Navigate("/contact")}
                  className="rounded-full min-w-[100px] min-h-[100px] md:w-32 md:h-32 shadow-2xl transition duration-300 md:duration-300 text-gray-90 border-2 border-white  bg-yellow-500 hover:bg-transparent hover:border-gray-900  hover:border-dashed"
                >
                  <button className="h-full  font-bold w-full align-middle hover:text-gray-900 text-white">
                    Contact
                  </button>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[150px] bg-[#0a094f] ">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#B9C9EA"
              fillOpacity="1"
              d="M0,64L48,64C96,64,192,64,288,80C384,96,480,128,576,117.3C672,107,768,53,864,64C960,75,1056,149,1152,170.7C1248,192,1344,160,1392,144L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
            ></path>
          </svg>
        </div>
      </section>
      {/* Section 2 */}
      <HeroSection />
    </div>
  );
};

export default Home;
