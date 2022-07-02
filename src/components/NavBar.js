import React from "react";
//  { useContext }
import { useState } from "react";
import { Link } from "react-router-dom";
// import ThemeContext from './Layout'
import cv from "../files/Bensaad-Fares Resume.pdf";
const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const darkTheme = useContext(ThemeContext);
  // const themeStyles = {
  //   backgroundColor: darkTheme ? "#B9C9EA" : "#3C517A",
  //   color: darkTheme ? "#fff" : "#000",
  // }
  return (
    // style={themeStyles}
    <div className="navbar font-oxygen bg-[#B9C9EA]">
      <div className="px-2 py-3 mx-auto  bg-[#B9C9EA] sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-20 lg:px-4 navbar ">
        <div className="relative flex items-center justify-between ">
          <Link
            to="/"
            aria-label="my name"
            title="my name"
            className="inline-flex items-center "
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 274 274">
              <g id="Layer_2" data-name="Layer 2" transform="translate(0.004 0.003)">
                <g id="Layer_1" data-name="Layer 1" transform="translate(-0.004 -0.003)">
                  <path id="Path_1" data-name="Path 1" d="M203.89.867l-25.132-.1c-18.724-.09-32.1,4.991-41.021,14.084C128.93,5.553,115.555.288,96.7.163L71.565,0C31.577-.261,1,29.787.687,78.182c-.11,18.306,7.59,46.233,38.082,58.56C8.137,148.595.108,176.417,0,194.728c-.284,48.409,29.967,78.852,69.955,79.1l25.132.165c39.669.26,55.393-22.533,55.573-57.961l.379-63.995,55.693.4c5.834.035,10.575-6.528,10.595-14.643a17.7,17.7,0,0,0-3.044-10.346,9.2,9.2,0,0,0-7.406-4.337l-55.558-.3.289-62.513c.055-18.57,9.676-28.447,28.445-28.417L202.343,32c26.214.1,42.768,15.291,42.643,45.54-.055,14.613-2.715,25.188-8.593,32.439a16.618,16.618,0,0,0-3.274,10.171v.035c-.07,11.279,10.16,18.306,17.871,12.057,18.055-14.662,22.956-37.624,23.006-52.4C274.185,31.439,243.883,1.061,203.89.867ZM122.347,214.531c-.11,18.605-9.731,28.472-28.485,28.347l-22.292-.145c-26.21-.175-42.738-15.421-42.563-45.639.195-33.283,13.729-45.734,48.407-45.5l45.233.294c.055,0,.08.035.08.1Zm.544-92c0,.065-.03.095-.08.095l-45.238-.294c-34.668-.23-48.047-12.851-47.853-46.1C29.9,45.977,46.6,30.94,72.818,31.115l22.292.15c18.754.12,28.261,10.146,28.151,28.716Z" transform="translate(0.004 0.003)" fill="#324588" />
                </g>
              </g>
            </svg>


            <span className="ml-2 flex tracking-wide  text-gray-100 ">
              <span className="tracking-wide text-2xl font-bold hover:text-white ">
                Fares Bensaad
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-blue-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              {/* <span
                aria-label="profession"
                title="profession"
                className="font-thin text-base items-end hover:text-gray-200 text-center"
              >
                web devloper
              </span> */}
            </span>
          </Link>
          <ul className="flex items-center hidden space-x-8 lg:flex">
            <li>
              <Link
                to="/"
                aria-label="Our Resume"
                title="Our Resume"
                className="font-medium flex tracking-wide text-gray-100 transition-colors duration-200 hover:text-[#9DABC7]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>{" "}
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/resume"
                aria-label="Our Resume"
                title="Our Resume"
                className="font-medium flex  tracking-wide text-gray-100 transition-colors duration-200 hover:text-[#9DABC7]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                  />
                </svg>{" "}
                Resume
              </Link>
            </li>
            <li>
              <Link
                to="/project"
                aria-label="Our Resume"
                title="Our Resume"
                className="font-medium flex tracking-wide text-gray-100 transition-colors duration-200 hover:text-[#9DABC7]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
                </svg>{" "}
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                aria-label="Resume Contact"
                title="Resume Contact"
                className="font-medium flex tracking-wide text-gray-100 transition-colors duration-200 hover:text-[#9DABC7]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                  />
                </svg>{" "}
                Contact
              </Link>
            </li>
            <li>
              <a
                href={cv}
                download="fares bensaad cv .pdf"
                aria-label="Resume Contact"
                title="Resume Contact"
                className="font-bold tracking-wide flex shadow-2xl text-blue-700 text-sm rounded-full py-2 px-3 border-dashed border-2 border-blue-900 hover:border-separate hover:border-white hover:bg-blue-900 hover:text-white   bg-slate-50 transition-colors duration-200 "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                Download CV
              </a>
            </li>
          </ul>
          <div className="lg:hidden navbar">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full h-full">
                <div className="p-5 bg-white border rounded shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <a
                        href="/"
                        aria-label="Company"
                        title="Company"
                        className="inline-flex items-center"
                      >
                        <svg
                          className="w-8 text-deep-purple-accent-400"
                          viewBox="0 0 24 24"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeMiterlimit="10"
                          stroke="currentColor"
                          fill="none"
                        >
                          <rect x="3" y="1" width="7" height="12" />
                          <rect x="3" y="17" width="7" height="6" />
                          <rect x="14" y="1" width="7" height="6" />
                          <rect x="14" y="11" width="7" height="12" />
                        </svg>
                        <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 ">
                          Fares Bensaad
                        </span>
                      </a>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav className="z-40">
                    <ul className="space-y-4">
                      <li>
                        <Link
                          to="/"
                          aria-label="Home"
                          title="Home"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/resume"
                          aria-label="Our Resume"
                          title="Our Resume"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Resume
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/project"
                          aria-label="Our Resume"
                          title="Our Resume"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Projects
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/contact"
                          aria-label="Resume Contact"
                          title="Resume Contact"
                          className="font-medium flex tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20"
                            />
                          </svg>{" "}
                          Contact
                        </Link>
                      </li>
                      <li>
                        <a
                          href={cv}
                          download="cv.txt"
                          aria-label="Resume Contact"
                          title="Resume Contact"
                          className="font-bold tracking-wide shadow-2xl text-white text-sm rounded-full py-2 px-3 border-dashed border-2 hover:border-separate hover:text-blue-800 hover:border-blue-900  bg-[#9DABC7] transition-colors duration-200 "
                        >
                          Download CV
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default NavBar;
