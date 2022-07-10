import React from "react";

const GetInTouch = () => {
    return (
        <div id="getintouch" className="h-fit py-4  font-oxygen ">
            <div className="flex justify-items-center intouch text-center ga pt-10 mb-10">
                <h4 className="text-sm  text-cyan-400 font-mono">what's next ?</h4>
                <h1 className="text-4xl lg:text-6xl font-bold text-white mb-5">Get In Touch</h1>
                <p className="text-gray-200 max-w-xl  px-4 mb-10">
                    Although I’m not currently looking for any new opportunities, my inbox
                    is always open. Whether you have a question or just want to say hi,
                    I’ll try my best to get back to you! Say Hello
                </p>
                <button
                    onClick={() => window.location = 'mailto:bensaadfares@gmail.com'}
                    name="send"
                    className="rounded-full hover:border-dashed min-w-[100px] min-h-[100px] md:w-32 md:h-32 shadow-2xl transition duration-0 md:duration-300 text-gray-90 border-2 border-white  bg-blue-800 text-white text-lg font-bold hover:bg-transparent hover:border-white "
                >
                    Say Hello
                </button>
            </div>


        </div >
    );
};

export default GetInTouch;
