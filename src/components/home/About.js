import React from "react";
// import about from './about.svg'
import AboutPic from "./AboutPic";
const About = () => {
    return (
        <div id="about" className="h-fit py-4 bg-[#292D99] font-oxygen ">

            <div className="flex justify-center pt-10 mb-10">
                <h1 className="text-6xl font-bold text-white">About Me</h1>
            </div>
            <div className="grid grid-cols-1 gap-10 justify-center mx-10 justify-items-center lg:flex lg:justify-center">
                <p className="text-gray-200 text-base max-w-[500px]">
                    -Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, assumenda
                    delectus! Accusamus nihil, illo sint dolorum illum error iste rerum
                    adipisci cupiditate itaque,<br /><br />  cumque maiores repellendus? Velit, earum
                    soluta temporibus atque error distinctio nesciunt? Nam minus odio
                    taque voluptatem recusandae deserunt, similique quasi
                    tenetur ipsa. Dolore, id inventore sit tenetur eius fugiat? Ad eaque
                    nostrum dicta delectus voluptate<br /> <br />  ratione doloribus doloremque libero
                    earum, te distinctio autem soluta dignissimos
                    harum. Magnam consequatur laborum accusantium tempora tenetur ullam
                    magni necessitatibus, vitae itaque aperiam fugiat perferendis quas qui
                    aut eius ut adipisci similique <span className="text-cyan-400">aperiam fugiat perferendis quas qui
                        aut eius ut adipis</span> dolorem dolores exercitationem obcaecati
                    inventore.
                </p>
                {/* <img className="img hover:scale-110" src={about} alt="about" /> */}
                <AboutPic />
            </div>

        </div>
    );
};

export default About;
