import React, { useEffect } from "react";
import { education, Skills, workExperience } from "./content/resumeP";
import AOS from "aos";
import "aos/dist/aos.css";

const Resume = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div id="resume" className=" bg-[#292D99]  px-2 md:px-0 py-20 font-oxygen arrows ">
      <h1 className="font-bold text-white text-4xl  md:text-6xl md:pl-44 md:py-16">
        Resume
      </h1>
      <div className="text-[#3C517A] px-[20px] md:px-0">
        {/* md:grid md:grid-cols-2 */}
        <div className="md:flex">
          <h1 className="font-bold md:pl-40 md:text-3xl text-gray-100 md:w-[600px]">
            Work Experience
          </h1>
          <ul className="grid grid-cols-1 gap-10 mt-6">
            {workExperience.map((i, index) => {
              return (
                <li
                  key={index}
                  data-aos="fade-up"
                  className="md:flex md:gap-10 "
                >
                  <div className="font-bold text-white"> {i.date}</div>
                  <div>
                    <div className="font-bold text-white">{i.title}</div>
                    <div className="font-sans text-xs text-gray-100 pb-3">
                      {i.discription}
                    </div>
                    <div className="md:max-w-[600px] text-sm leading-6 text-gray-300">{i.paragraph}</div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex justify-center">
          <div className="border-t-2  flex justify-center items-center min-w-[200px] md:w-[1200px] my-4"></div>
        </div>

        <div className="md:flex">
          <h1 className="font-bold md:pl-48 md:text-3xl text-gray-100 md:w-[600px]">
            Education
          </h1>
          <ul className="grid grid-cols-1 gap-10 mt-6 ">
            {education.map((i, index) => {
              return (
                <li
                  key={index}
                  data-aos="fade-up"
                  className="md:flex md:gap-10"
                >
                  <div className="font-bold text-white"> {i.date}</div>
                  <div>
                    <div className="font-bold pb-3 text-gray-50">{i.title}</div>
                    <div className="md:max-w-[400px] text-gray-300">{i.paragraph}</div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="flex justify-center">
          <div className="border-t-2  flex justify-center items-center min-w-[200px] md:w-[1200px] my-4"></div>
        </div>

        <div className="md:grid md:grid-cols-2  ">
          <h1 className="font-bold text-gray-50   lg:pl-48 lg:text-3xl">Skills & Expertise</h1>
          <ul className="grid grid-cols-1 gap-10 mt-6  list-none ">
            {Skills.map((i, index) => {
              return (
                <li
                  key={index}
                  data-aos="fade-up"
                  className="md:flex md:gap-10"
                >
                  <div className="md:max-w-[400px] text-gray-100 ml-10">
                    {i.paragraph}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Resume;
