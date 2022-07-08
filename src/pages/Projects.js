import React from "react";
import { Link } from "react-router-dom";
import { projects } from "./content/ProjectsP";
const Project = () => {
  return (
    <div className=" bg-[#292D99]  pt-10 pb-20   font-oxygen  ">
      <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
        <div className="mb-10 md:mb-16">
          <h2 className="text-white text-7xl lg:text-7xl font-bold text-center mb-4 md:mb-6">
            Projects
          </h2>

          <p className="max-w-screen-md text-gray-200 md:text-lg text-center mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            rerum quibusdam earum, nostrum placeat nihil iusto similique iste
            harum eum mollitia numquam eius!
          </p>

          <div className="grid grid-cols-1 my-10  md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 xl:gap-8">
            {projects.map((i, index) => {
              return (
                <div key={index} className="grid ">
                  <span className="group h-72 md:h-96 flex justify-end items-end bg-gray-100 overflow-hidden rounded-lg shadow-lg relative">
                    <img
                      src={i.PictureSRC}
                      loading="lazy"
                      alt="PhotoPham"
                      className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"
                    />
                    <div className="bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50 absolute inset-0 pointer-events-none"></div>

                    <a
                      href={i.DemoLink}
                      className="inline-block text-gray-200 text-xs md:text-sm border border-gray-500 rounded-lg backdrop-blur hover:bg-gray-300 transition duration-300 ease-in-out relative px-2 md:px-3 py-1 mr-3 mb-3"
                    >
                      <img
                        src="https://img.icons8.com/stickers/100/000000/visible.png"
                        alt=""
                        className="h-8"
                      />
                    </a>
                  </span>
                  <h1 className="text-2xl text-white pt-4 font-bold ">{i.Title}</h1>
                  <p className="text-gray-300">{i.Minidescription}</p>
                  <Link
                    to={`${i.id}`}
                    className="underline decoration-4 font-bold decoration-cyan-200 text-gray-400  hover:decoration-0 hover:decoration-cyan-200 hover:text-green-400"
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
