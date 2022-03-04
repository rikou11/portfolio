import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import image from "./img/me.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 500,
    });
  }, []);

  const Navigate = useNavigate();
  return (
    <div className=" bg-[#B9C9EA] md:h-[570px]  font-oxygen shapes-bg ">
      <div className=" grid grid-cols-1 gap-28 md:gap-10 justify-center md:flex md:justify-center  ">
        <div className="flex justify-center  ">
          <div className=" pt-40 md:pt-8 w-64 h-64 md:w-[500px] md:h-64  ">
            <img
              data-aos="zoom-in"
              className=" z-0 grayscale rounded-full border-8 border-white  bg-slate-200 shadow-2xl"
              src={image}
              alt=""
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-10  ">
          <div className="grid justify-center">
            <h1 className="text-shadow font-bold text-5xl mt-10 md:text-8xl text-white ">
              Hello
            </h1>
            <h2 className=" font-bold md:pl-10 text-4xl text-[#3C517A]">
              A bit about me{" "}
            </h2>
            <p className=" md:pl-10 text-lg w-[450px] text-[#3C517A]">
              Highly driven recent web and information system graduate. With a
              flair for creating elegant solutions in the least amount of time.
              Proven record of managing computer hardware repair at university.
              Comes with successful freelance experience in Front-End & Back-End
              Web development. Bringing deep knowledge of Digital Marketing and
              Sales Software Proficiency.
            </p>
          </div>
          <div
            data-aos="zoom-in"
            className="flex justify-center md:gap-5 bg-transparent"
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
              className="rounded-full min-w-[100px] min-h-[100px] md:w-32 md:h-32  shadow-2x transition duration-300 md:duration-300 text-gray-900 border-2 border-white  bg-cyan-500 hover:bg-transparent  hover:border-gray-900   hover:border-dashed"
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
  );
};

export default Home;
