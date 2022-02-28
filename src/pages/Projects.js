import React from "react";
import { Link } from "react-router-dom";
import { projects } from "./content/ProjectsP";
const Project = () => {
  return (
    <div className=" bg-[#B9C9EA]  md:h-[1500px]  font-oxygen  ">
      <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
        <div className="mb-10 md:mb-16">
          <h2 className="text-white text-7xl lg:text-7xl font-bold text-center mb-4 md:mb-6">
            Projects
          </h2>

          <p className="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">
            This is a section of some simple filler text, also known as
            placeholder text. It shares some characteristics of a real written
            text but is random or otherwise generated.
          </p>

          <div className="grid grid-cols-1 my-10  md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 xl:gap-8">
            {projects.map((i, index) => {
              return (
                <div key={index} className="grid ">
                  <span className="group h-48 md:h-96 flex justify-end items-end bg-gray-100 overflow-hidden rounded-lg shadow-lg relative">
                    <img
                      src={i.PictureSRC}
                      loading="lazy"
                      alt="PhotoPham"
                      className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"
                    />
                    <div className="bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50 absolute inset-0 pointer-events-none"></div>

                    <span className="inline-block text-gray-200 text-xs md:text-sm border border-gray-500 rounded-lg backdrop-blur hover:bg-gray-300 transition duration-300 ease-in-out relative px-2 md:px-3 py-1 mr-3 mb-3">
                      <img
                        src="https://img.icons8.com/stickers/100/000000/visible.png"
                        alt=""
                        className="h-8"
                      />
                    </span>
                  </span>
                  <h1 className="text-2xl pt-4 font-bold ">{i.Title}</h1>
                  <p>{i.Minidescription}</p>
                  <Link
                    to={`${i.id}`}
                    className="underline decoration-4 font-bold decoration-cyan-200  hover:decoration-0 hover:decoration-cyan-200 hover:text-gray-700"
                  >
                    Description
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
