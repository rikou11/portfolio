import React, { useState } from "react";
import { Routes, useParams, Route, useNavigate } from "react-router-dom";
import AboutProject from "./AboutProject";
import { projects } from "./content/ProjectsP";

const ProjectId = () => {
  const { id } = useParams();
  const obj = { id };

  var result = "";
  // eslint-disable-next-line array-callback-return
  projects.map((i) => {
    // eslint-disable-next-line eqeqeq
    if (i.id == obj.id) {
      return (result = i);
    }
  });

  console.log(result);

  const [display, setDisplay] = useState(true);

  const Navigate = useNavigate();
  return (
    <div>
      <div className="bg-blue-50 text-[#3C517A] py-6 sm:py-8 lg:py-12">
        <div className="max-w-screen-xl px-4 md:px-8 mx-auto">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <div>
              <div className="h-64 md:h-auto bg-gray-100 overflow-hidden rounded-lg shadow-lg">
                <img
                  src={result.PictureSRC}
                  loading="lazy"
                  alt="Photos"
                  className="w-full h-full object-cover object-center hover:contrast-75 transition duration-150 ease-in-outù"
                />
              </div>
            </div>

            <div className="md:pt-8 text-[#3C517A]">
              <p className="text-indigo-500 font-bold text-center md:text-left ">
                what's
              </p>

              <h1 className="text-[#3C517A] text-2xl sm:text-3xl font-bold text-center md:text-left mb-4 md:mb-6">
                {result.Title}
              </h1>

              <p className="text-[#3C517A] sm:text-lg mb-6 md:mb-8">
                {result.Description}
                <br />
                <a
                  href="#_"
                  className="text-indigo-500 hover:text-indigo-600 active:text-indigo-700 underline transition duration-100"
                >
                  random
                </a>{" "}
                or otherwise generated. It may be used to display a sample of
                fonts or generate text for testing. Filler text is dummy text
                which has no meaning however looks very similar to real text.
              </p>

              {display && (
                <div className="w-full flex justify-center">
                  <button
                    onClick={() => {
                      setDisplay(false);

                      Navigate("about");
                    }}
                    className="rounded-full  min-w-[100px] min-h-[100px] md:w-32 md:h-32  shadow-2xl transition duration-0 md:duration-300 text-white font-bold border-4 border-[#B9C9EA] hover:border-2 bg-cyan-500 hover:bg-transparent hover:text-gray-800  hover:border-gray-900  "
                  >
                    More
                  </button>
                </div>
              )}

              <Routes>
                <Route
                  path="/about"
                  element={<AboutProject setDisplay={setDisplay} />}
                />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectId;
