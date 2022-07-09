import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import image from "./img/mypic.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import HeroSection from "../components/home/HeroSection";
import { Typewriter } from 'react-simple-typewriter'
import About from "../components/home/About";
import Experience from "../components/home/Experience";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 600,
    });
  }, []);

  const Navigate = useNavigate();
  return (
    <div className="m-0 ">
      {/* Section 1 500px  */}
      <section>
        {/* {" "} shapes-bg */}
        <div className=" bg-[#292D99]  font-oxygen  ">
          <div className=" grid grid-cols-1 gap-16 lg:gap-10 justify-center lg:flex lg:justify-center  ">
            <div className="grid grid-cols-1 gap-10  ">
              <div className="grid justify-center p-4 gap-4 ">
                <h1 className="text-shadow font-mono text-sm  mt-10 lg:text-xl text-cyan-400 ">
                  Hi, my name is
                </h1>
                <h2 className="font-oxygen font-bold md:pl-10 text-4xl xl:text-6xl text-white">
                  <Typewriter
                    words={['Fares Bensaad.', 'A Web Developer', 'A Web Designer', 'Nice to meet you.']}
                    loop={2}
                    cursor
                    cursorStyle='_'


                  />
                </h2>
                <h2 className=" font-bold md:pl-10 text-3xl xl:text-5xl text-gray-300">
                  <Typewriter
                    words={['I build things for the web']}
                    cursor
                    cursorStyle='_' />
                </h2>
                <p className="pl-15 md:pl-10 text-xl w:[300px]  font-sans  lg:w-[500px] text-gray-300">
                  Highly driven recent web and information systems graduate. With
                  a flair for creating elegant solutions in the least amount of
                  time. Comes with successful experience in <span className="text-cyan-500 hover:underline cursor-pointer" >Frontend</span> & <span className="text-cyan-500 hover:underline cursor-pointer" >Backend </span>
                  Web development.
                </p>
              </div>
              <div
                data-aos="zoom-in"
                className="flex justify-center gap-2 md:gap-5 bg-transparent"
              >
                <span
                  onClick={() => Navigate("/resume")}
                  className="rounded-full min-w-[100px] min-h-[100px] md:w-32 md:h-32  shadow-2xl transition duration-300 md:duration-300 text-gray-50 border-2 border-white  bg-red-500 hover:bg-transparent hover:border-gray-50  hover:border-dashed"
                >
                  <button className="h-full w-full  font-bold align-middle hover:text-gray-50 text-white text-center">
                    Resume
                  </button>
                </span>
                <span
                  onClick={() => Navigate("/project")}
                  className="rounded-full min-w-[101px] min-h-[100px] md:w-32 md:h-32  shadow-2x transition duration-300 md:duration-300 text-gray-50 border-2 border-white  bg-cyan-500 hover:bg-transparent  hover:border-gray-50   hover:border-dashed"
                >
                  <button className="h-full w-full font-bold align-middle  hover:text-gray-50 text-white">
                    Projects
                  </button>
                </span>{" "}
                <span
                  onClick={() => Navigate("/contact")}
                  className="rounded-full min-w-[100px] min-h-[100px] md:w-32 md:h-32 shadow-2xl transition duration-300 md:duration-300 text-gray-90 border-2 border-white  bg-yellow-500 hover:bg-transparent hover:border-gray-50  hover:border-dashed"
                >
                  <button className="h-full  font-bold w-full align-middle hover:text-gray-50 text-white">
                    Contact
                  </button>
                </span>
              </div>
            </div>      <div className="flex justify-center  ">
              <div className=" align-middle md:pt-8 w-80 h-80 lg:w-[400px] lg:h-64  ">
                <img
                  data-aos="zoom-in"
                  className=" z-0 "
                  // grayscale rounded-full border-8 border-white  bg-slate-200 shadow-2xl
                  src={image}
                  alt=""
                />

              </div>
            </div>


          </div>
        </div>
        <div className="h-[150px] bg-[#0a094f] ">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#292D99"
              fillOpacity="1"
              d="M0,64L48,64C96,64,192,64,288,80C384,96,480,128,576,117.3C672,107,768,53,864,64C960,75,1056,149,1152,170.7C1248,192,1344,160,1392,144L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
            ></path>
          </svg>
        </div>
      </section>
      {/* Section 2 */}
      <HeroSection />
      <About />
      <Experience />
    </div>
  );
};

export default Home;
