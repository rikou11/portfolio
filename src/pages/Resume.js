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
    <div className=" bg-[#B9C9EA] md:max-h-fit px-14 md:px-0  font-oxygen arrows ">
      <h1 className="font-bold text-white text-4xl  md:text-6xl md:pl-44 md:py-16">
        Resume
      </h1>

      <div className="text-[#3C517A] px-[20px] md:px-0">
        {/* md:grid md:grid-cols-2 */}
        <div className="   md:flex">
          {" "}
          <h1 className="font-bold md:pl-40 md:text-3xl  md:w-[600px] ">
            Work Experience
          </h1>
          <ul className="grid grid-cols-1 gap-10 mt-6">
            {workExperience.map((i, index) => {
              return (
                <li
                  key={index}
                  data-aos="fade-up"
                  className="md:flex md:gap-10"
                >
                  <div className="font-bold"> {i.date}</div>
                  <div>
                    <div className="font-bold">{i.title}</div>
                    <div className="font-semibold text-xs text-blue-50 pb-3">
                      {i.discription}
                    </div>
                    <div className="md:max-w-[400px]">{i.paragraph}</div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex justify-center">
          <div className="border-t-2 border-[] flex justify-center items-center min-w-[500px] md:w-[1200px] my-4"></div>
        </div>

        <div className="md:flex">
          <h1 className="font-bold md:pl-48 md:text-3xl  md:w-[600px]">
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
                  <div className="font-bold"> {i.date}</div>
                  <div>
                    <div className="font-bold pb-3">{i.title}</div>
                    <div className="md:max-w-[400px]">{i.paragraph}</div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="flex justify-center">
          <div className="border-t-2 border-[] flex justify-center items-center min-w-[500px] md:w-[1200px] my-4"></div>
        </div>

        <div className="md:grid md:grid-cols-2  ">
          <h1 className="font-bold md:pl-48 md:text-3xl">Skills & Expertise</h1>
          <ul className="grid grid-cols-1 gap-10 mt-6 marker:text-sky-400 list-disc ">
            {Skills.map((i, index) => {
              return (
                <li
                  key={index}
                  data-aos="fade-up"
                  className="md:flex md:gap-10"
                >
                  <div className="md:max-w-[400px]  md:mx-28">
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
