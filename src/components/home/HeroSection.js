import React from "react";
import CountUp from "react-countup";

const HeroSection = () => {
  return (
    <>
      <section className=" font-oxygen  h-fit pb-10 bg-[#0a094f]">
        <div className="relative z-10">
          {" "}
          <div className="h-20 w-20 rounded-ful blur-[50px] bg-yellow-500 absolute left-28 top-96"></div>
          <div className="h-40 w-40 rounded-ful blur-[100px] bg-cyan-500 absolute  right-0 top-36 "></div>
          <div className="h-40 w-40 rounded-ful blur-[100px] bg-red-500 absolute  left-8 top-10  "></div>
          <div className="h-40 w-40 rounded-ful blur-[80px] bg-purple-700 absolute  left-[900px]  top-[300px] "></div>
          <div className="h-40 w-40 rounded-ful blur-[50px] bg-blue-700 absolute  left-[700px] top-[300px]  "></div>
          <div className="h-40 w-40 rounded-ful blur-[150px] bg-blue-400 absolute  left-[600px]   top-[300px]"></div>
        </div>

        {/* Title and description*/}
        <div className="grid grid-cols-1 gap-3 text-center  w-full  mb-10 z-30">
          <h3 className=" font-bold text-blue-100">SERVICES</h3>
          <h1 className="xl:text-5xl md:text-4xl text-3xl font-bold  font-oxygen text-white ">
            What i'am great at
          </h1>
          <div className="text-center mx-auto">
            <p className=" text-center xl:w-[550px] md:w-[450px] w-[400px] text-blue-200 ">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupida non proident, sunt in culpa qui officia
            </p>
          </div>
        </div>
        {/* Card */}
        <div className="flex justify-center w-full  z-30">
          <div className="xl:grid grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10 text-[#3C517A] ">
            <div className="grid-cols-1 grid gap-14 ">
              {/* cards 1 */}
              <div className="grid grid-cols-1  w-[250px] h-[250px] shadow-lg hover:scale-105 hover:shadow-yellow-200  z-30 transition duration-150  rounded-lg text-center bg-card text-white">
                <div className="flex justify-center relative top-8   ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-20 w-20 bg-yellow-400 text-white shadow-lg shadow-yellow-300 rounded-full p-4 "
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  </svg>
                </div>
                <div className="grid grid-cols-1">
                  <span className="text-xl  font-bold">Frontend</span>
                  <span className="text-base text-[#3C517A] font-bold">
                    <span className="text-orange-500 z-30">25</span> Projects
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-1 text-center">
                <CountUp
                  className="text-4xl font-bold text-yellow-300"
                  duration={2.75}
                  end={23}
                ></CountUp>
                <span className="text-2xl text-white">Lorem, ipsum.</span>
              </div>
            </div>
            {/* card 2 */}
            <div className="grid-cols-1 grid gap-14">
              <div className="grid grid-cols-1  w-[250px] h-[250px] shadow-lg hover:scale-105 hover:shadow-blue-200 z-30  transition duration-150  rounded-lg text-center bg-card text-white">
                <div className="flex justify-center relative top-8   ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-20 w-20 bg-blue-400 text-white shadow-lg shadow-blue-300 rounded-full p-4 "
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3s-7-1.343-7-3z" />
                    <path d="M3 7v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7c0 1.657-3.134 3-7 3S3 8.657 3 7z" />
                    <path d="M17 5c0 1.657-3.134 3-7 3S3 6.657 3 5s3.134-3 7-3 7 1.343 7 3z" />
                  </svg>
                </div>
                <div className="grid grid-cols-1">
                  <span className="text-xl  font-bold">DataBase</span>
                  <span className="text-base text-[#3C517A] font-bold">
                    <span className="text-orange-500">25</span> Projects
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-1 text-center">
                <CountUp
                  className="text-4xl font-bold text-blue-500"
                  duration={2.75}
                  end={54}
                ></CountUp>
                <span className="text-2xl text-white">Lorem, ipsum.</span>
              </div>
            </div>
            {/* card 3 */}
            <div className="grid-cols-1 grid gap-14">
              <div className="grid grid-cols-1  w-[250px] h-[250px] shadow-lg hover:scale-105 hover:shadow-red-200  z-30 transition duration-150  rounded-lg text-center bg-card text-white">
                <div className="flex justify-center relative top-8   ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-20 w-20 bg-red-400 text-white shadow-lg shadow-red-300 rounded-full p-4 "
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                    />
                  </svg>
                </div>
                <div className="grid grid-cols-1">
                  <span className="text-xl  font-bold">Backend</span>
                  <span className="text-base text-[#3C517A] font-bold">
                    <span className="text-orange-500">25</span> Projects
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-1 text-center">
                <CountUp
                  className="text-4xl font-bold text-red-600"
                  duration={2.75}
                  end={13}
                ></CountUp>
                <span className="text-2xl text-white">Lorem, ipsum.</span>
              </div>
            </div>
            {/* card 4 */}
            <div className="grid-cols-1 grid gap-14">
              <div className="grid grid-cols-1  w-[250px] h-[250px] shadow-lg hover:scale-105 hover:shadow-orange-200 z-30  transition duration-150  rounded-lg text-center bg-card text-white">
                <div className="flex justify-center relative top-8   ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-20 w-20 bg-orange-400 text-white shadow-lg shadow-orange-300 rounded-full p-4 "
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
                <div className="grid grid-cols-1">
                  <span className="text-xl  font-bold">Problem Solving</span>
                  <span className="text-base text-[#3C517A] font-bold">
                    <span className="text-orange-500">25</span> Projects
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-1 text-center">
                <CountUp
                  className="text-4xl font-bold text-orange-500"
                  duration={2.75}
                  end={33}
                ></CountUp>
                <span className="text-2xl text-white">Lorem, ipsum.</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
