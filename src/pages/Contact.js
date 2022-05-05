import React, { useState } from "react";
import axios from "axios";
import loading from "./img/Pulse-1s-130px.svg";
// className
const Contact = () => {
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [wait, setWait] = useState(false);
  const [buttonsend, setButtonsend] = useState(true);
  const [checkMark, setcheckMark] = useState(false);
  const sendMail = () => {
    setWait(true);
    setButtonsend(false);
    setTimeout(() => {
      axios.post("https://expressmail12.herokuapp.com/", {
        message: message,
        email: email,
      });
      setWait(false);
      setcheckMark(true);
      setTimeout(() => {
        setcheckMark(false);
        setButtonsend(true);
        setEmail("");
        setMessage("");
      }, 2000);
    }, 3000);
  };
  return (
    <div className=" bg-[#B9C9EA]   font-oxygen map">
      <section className="text-gray-600 body-font relative">
        <div className="absolute inset-0 bg-gray-300  map">
          <iframe
            width="100%"
            height="100%"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            title="map"
            scrolling="no"
            className=" opacity-60 contrast-125"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7216.246385046597!2d55.305406423272764!3d25.26644098545584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5cccc32705f7%3A0xbd91b153f09e398!2sDeira%20-%20Al%20Rigga%20-%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sdz!4v1645968281721!5m2!1sen!2sdz"
          ></iframe>
        </div>

        <div className="container px-5 py-24 mx-auto flex shadow-2xl">
          <div className="lg:w-1/3 md:w-1/2 bg-[#B9C9EA]  rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
            <h2 className="text-white text-2xl font-bold mb-1 title-font">
              Contact
            </h2>
            <p className="leading-relaxed mb-5 text-gray-600">
              Post-ironic portland shabby chic echo park, banjo fashion axe
            </p>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-[#3C517A]text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out  hover:border-2 hover:border-[#3C517A] "
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="message"
                className="leading-7 text-sm text-gray-600"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-[#3C517A]h-20 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out hover:border-2 hover:border-[#3C517A] "
              ></textarea>
            </div>
            <div className="w-full flex justify-center">
              {wait && (
                <div className="text-3xl">
                  <img className="h-36" src={loading} alt="" />
                </div>
              )}
              {checkMark && (
                <div>
                  <svg
                    class="checkmark"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 52 52"
                  >
                    <circle
                      class="checkmark__circle"
                      cx="26"
                      cy="26"
                      r="25"
                      fill="none"
                    />
                    <path
                      class="checkmark__check"
                      fill="none"
                      d="M14.1 27.2l7.1 7.2 16.7-16.8"
                    />
                  </svg>
                </div>
              )}
              {buttonsend && (
                <button
                  name="send"
                  onClick={sendMail}
                  className="rounded-full hover:border-dashed min-w-[100px] min-h-[100px] md:w-32 md:h-32 shadow-2xl transition duration-0 md:duration-300 text-gray-90 border-2 border-white  bg-blue-800 text-white text-lg font-bold hover:bg-transparent hover:border-gray-900 "
                >
                  Send
                </button>
              )}
            </div>

            <p className="text-xs text-[#3C517A] mt-3">
              Chicharrones blog helvetica normcore iceland tousled brook viral
              artisan.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

//    <div className="md:grid md:grid-cols-2 md:h-[570px]">
//         {/* // ? Contact information */}
//         <div className="md:grid md:justify-center align-middle h-[300px] text-[#3C517A] ">
//           <div className="md:py-20">
//             <div className="pt-6 pb-3">
//               <h1 className="text-6xl font-bold text-white ">Contact</h1>
//               <h2 className="text-xl">Looking forward to hearing from you</h2>
//             </div>

//             <div className="pb-2">
//               <h1 className="font-bold">Phone</h1>
//               <h2>055-232-6152</h2>
//             </div>
//             <div>
//               <h1 className="font-bold">Email</h1>
//               <h2>Bensaadfares@gmail.com</h2>
//             </div>
//           </div>
//         </div>
//         {/* // ? fin Contact information */}
//         <div className="md:grid md:grid-cols-2 md:h-[120px] md:w-[550px] md:pt-36">
//           <div className="md:grid md:grid-cols-1">
//             <label htmlFor="Firstname">First Name</label>
//             <input
//               type="text"
//               name="firstname"
//               id=""
//               className="w-[250px] h-10 px-2 border-2  bg-[#B9C9EA] border-[#3C517A] border-opacity-30 active:rounded-none active:border-blue-900 rounded-none hover:border-[#3C517A]    transition duration-0 md:duration-150 "
//             />
//           </div>

//           <div className="md:grid md:grid-cols-1">
//             <label htmlFor="Lastname">Last Name</label>
//             <input
//               type="text"
//               name="lastname"
//               id=""
//               className="w-[250px] h-10 px-2 border-2  bg-[#B9C9EA] border-[#3C517A] border-opacity-30 active:rounded-none active:border-blue-900 rounded-none hover:border-[#3C517A]    transition duration-0 md:duration-150 "
//             />
//           </div>

//           <div className="md:grid md:grid-cols-1">
//             <label htmlFor="Email">Email*</label>
//             <input
//               type="email"
//               name="email"
//               id=""
//               className="w-[250px] h-10 px-2 border-2  bg-[#B9C9EA] border-[#3C517A] border-opacity-30 active:rounded-none active:border-blue-900 rounded-none hover:border-[#3C517A]    transition duration-0 md:duration-150 "
//             />
//           </div>

//           <div className="md:grid md:grid-cols-1">
//             <label htmlFor="Subject">Subject</label>
//             <input
//               type="text"
//               name="subject"
//               id=""
//               className="w-[250px] h-10 px-2 border-2  bg-[#B9C9EA] border-[#3C517A] border-opacity-30 active:rounded-none active:border-blue-900 rounded-none hover:border-[#3C517A]    transition duration-0 md:duration-150 "
//             />
//           </div>
//         </div>
//       </div>
