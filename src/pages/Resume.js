import React from "react";
import { education, Skills, workExperience } from "./resumeP";
const Resume = () => {
  return (
    <div className=" bg-[#B9C9EA] md:max-h-fit  font-oxygen  ">
      <h1 className="font-bold text-white text-4xl  md:text-6xl md:pl-44 md:py-16">
        Resume
      </h1>
      <div className="text-[#3C517A]">
        <div className="md:grid md:grid-cols-2  ">
          <h1 className="font-bold md:pl-48 md:text-3xl ">Work Experience</h1>
          <ul className="grid grid-cols-1 gap-10 mt-6">
            {workExperience.map((i) => {
              return (
                <li key={i} className="md:flex md:gap-10">
                  <div> {i.date}</div>
                  <div>
                    <div className="font-bold">{i.title}</div>
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
          <h1 className="font-bold md:pl-48 md:text-3xl">Education</h1>
          <ul className="grid grid-cols-1 gap-10 mt-6">
            {education.map((i) => {
              return (
                <li key={i} className="md:flex md:gap-10">
                  <div> {i.date}</div>
                  <div>
                    <div className="font-bold">{i.title}</div>
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
          <ul className="grid grid-cols-1 gap-10 mt-6">
            {Skills.map((i) => {
              return (
                <li key={i} className="md:flex md:gap-10">
                  <div> {i.date}</div>
                  <div>
                    <div className="font-bold">{i.title}</div>
                    <div className="md:max-w-[400px]">{i.paragraph}</div>
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
