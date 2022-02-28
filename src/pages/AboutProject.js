import React from "react";
import { useNavigate } from "react-router-dom";

const AboutProject = ({ setDisplay }) => {
  const Navigate = useNavigate();
  setDisplay(false);
  return (
    <div>
      <h2 className="text-[#3C517A] text-xl sm:text-2xl font-semibold text-center md:text-left mb-2 md:mb-4">
        About us
      </h2>

      <p className="text-[#3C517A] sm:text-lg mb-6 md:mb-8">
        This is a section of some simple filler text, also known as placeholder
        text. It shares some characteristics of a real written text but is
        random or otherwise generated. It may be used to display a sample of
        fonts or generate text for testing. Filler text is dummy text which has
        no meaning however looks very similar to real text.
      </p>

      <div className="flex justify-center max-w-full  ">
        <button
          onClick={() => Navigate("/project")}
          className="rounded-full min-w-[140px] hover:text-gray-800  min-h-[140px] md:w-32 md:h-32 shadow-2xl transition duration-0 md:duration-300 text-gray-90 border-2 border-white  bg-blue-800 text-white text-lg font-bold hover:bg-transparent hover:border-gray-900 "
        >
          Back <br />
          to projects
        </button>
        <button
          onClick={() => Navigate("/contact")}
          className="rounded-full min-w-[140px] hover:text-gray-800  min-h-[140px] md:w-32 md:h-32 shadow-2xl transition duration-0 md:duration-300 text-gray-90 border-2 border-white  bg-yellow-500 text-white text-lg font-bold hover:bg-transparent hover:border-gray-900 "
        >
          Contact me
        </button>
      </div>
    </div>
  );
};

export default AboutProject;
