import React from "react";
//  { useContext }
// import { useState } from "react";
import { GhostNavbar } from "react-hamburger-menus";
import "react-hamburger-menus/dist/style.css";

import { Link } from "react-router-dom";
// import ThemeContext from './Layout'
import cv from "../files/Bensaad-Fares Resume.pdf";

const NavBar = () => {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const darkTheme = useContext(ThemeContext);
  // const themeStyles = {
  //   backgroundColor: darkTheme ? "#B9C9EA" : "#3C517A",
  //   color: darkTheme ? "#fff" : "#000",
  // }
  return (
    // style={themeStyles}
    <div id="nav" className=" sticky top-0 z-50 navbar font-oxygen bg-[#292D99] ">
      <div className="px-2 py-3 mx-auto  bg-[#292D99] sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-20 lg:px-4  ">
        <div className="relative flex items-center justify-between ">
          <Link
            to="/"
            aria-label="my name"
            title="my name"
            className="inline-flex items-center "
          >
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="78.571" height="78.571" viewBox="0 0 78.571 78.571">
              <defs>
                <linearGradient id="linear-gradient" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
                  <stop offset="0" stopColor="#05d9b5" />
                  <stop offset="1" stopColor="#084ce6" />
                </linearGradient>
              </defs>
              <g id="Layer_2" data-name="Layer 2" transform="translate(39.286 0.003) rotate(45)">
                <g id="Layer_1" data-name="Layer 1" transform="translate(-0.002 -0.002)">
                  <path id="Path_1" data-name="Path 1" d="M41.341.174l-5.1-.02c-3.8-.018-6.509,1.012-8.318,2.856C26.141,1.125,23.429.057,19.606.032L14.51,0C6.4-.054.2,6.039.138,15.852A12.358,12.358,0,0,0,7.86,27.726,12.31,12.31,0,0,0,0,39.483C-.059,49.3,6.075,55.472,14.183,55.522l5.1.033c8.044.053,11.232-4.569,11.268-11.753l.077-12.976,11.293.081c1.183.007,2.144-1.324,2.148-2.969a3.589,3.589,0,0,0-.617-2.1,1.865,1.865,0,0,0-1.5-.879L30.681,24.9l.059-12.676c.011-3.765,1.962-5.768,5.768-5.762l4.52.024c5.315.02,8.672,3.1,8.647,9.234-.011,2.963-.551,5.107-1.742,6.578a3.37,3.37,0,0,0-.664,2.062v.007c-.014,2.287,2.06,3.712,3.624,2.445,3.661-2.973,4.655-7.629,4.665-10.625C55.595,6.374,49.45.214,41.341.174ZM24.807,43.5c-.022,3.773-1.973,5.773-5.776,5.748l-4.52-.029C9.2,49.182,5.845,46.09,5.88,39.963c.04-6.749,2.784-9.273,9.815-9.226l9.172.06c.011,0,.016.007.016.02Zm.11-18.655c0,.013-.006.019-.016.019l-9.173-.06c-7.03-.047-9.742-2.606-9.7-9.348.036-6.135,3.423-9.184,8.739-9.148l4.52.03c3.8.024,5.73,2.057,5.708,5.823Z" transform="translate(0.002 0.002)" fill="url(#linear-gradient)" />
                </g>
              </g>
            </svg>





            {/* <span className="ml-2 flex tracking-wide  text-gray-100 ">
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

            </span> */}
          </Link>
          <ul className="flex items-center hidden space-x-8 lg:flex">
            <li>
              <Link
                to="/"
                aria-label="Home"
                title="Home page"
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
                aria-label="Contact"
                title="Contact"
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
                className="font-bold bg-gradient-to-r hover:underline  from-blue-400 to-green-400 tracking-wide flex shadow-2xl  text-sm rounded-full py-2 px-3 border-dashed border-2 border-blue-900 hover:border-separate hover:border-white hover:bg-[#05D9B5] hover:text-white   text-gray-50 transition-colors duration-200 "
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
          <div className="lg:hidden absolute top-4 right-20">
            <GhostNavbar
              styles={{
                fontColor: "#fff",
                fontHoverColor: "black",
                listHoverColor: ["transparent", "#151BF5"],
                floatButtonSize: 0.6,
                floatButtonX: 6,
                floatButtonY: 100,
                navigationButton: {

                  backgroundColor: "white"
                },
                navigationBackground: {
                  backgroundColor: "#00C9C6"
                },
                iconColor: "#fff"
              }}
            >
              <ul
                className='font-oxygen'
              >
                <li className=" text-white"><Link to='/'><p>Home</p></Link></li>
                <li className=" text-white"><Link to='/resume'><p>Resume</p></Link></li>
                <li className=" text-white"><Link to='/projects'><p>Projects</p></Link></li>
                <li className=" text-white"><Link to='/contact'><p>Contact</p></Link></li>
                <li className=" text-white"><a
                  href={cv}
                  download="cv.txt"
                  aria-label="Resume Contact"
                  title="Resume Contact"
                >
                  Download CV
                </a></li>

              </ul>
            </GhostNavbar>
          </div>

        </div>
      </div>
    </div>
  );
};
export default NavBar;
