import React from "react";
import images from "./content/photo";
const Experience = () => {
  const skills = [
    { name: "React JS", icon: images.react },
    { name: "Node Express JS", icon: images.node },
    { name: "JavaScript", icon: images.js },
    { name: "CSS", icon: images.css },
    { name: "GITHUB", icon: images.github },
    { name: "MySQL + MongoDB", icon: images.db },
    { name: "Adobe XD", icon: images.xd },
    { name: "HTML", icon: images.html },
  ];

  return (
    <div id="skills" className=" py-20 font-oxygen  ">
      <div className="flex justify-center pt-10 mb-10">
        <h1 className="text-6xl font-bold text-white">Skills</h1>
      </div>
      <div className="grid grid-col-1 md:grid-cols-2 sm:max-w-xl md:max-w-full lg:max-w-screen-xl mx-auto lg:grid-cols-4 gap-2 justify-items-center h-fit py-10 ">
        {skills.map((i) => {
          return (
            <div className="grid grid-cols-1 gap-3 justify-items-center">
              <img
                className="  h-40 w-40 lg:h-20 lg:w-20 "
                src={i.icon}
                alt="logo"
              />
              <p className="text-gray-200 text-base text-center mb-10 font-mono">
                {i.name}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;
