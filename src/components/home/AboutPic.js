import React from 'react'
import pic from '../home/Mask Group 1.png'
const AboutPic = () => {
    return (
        <div className='flex justify-start'>
            <div className="relative">

                <img id='mypic' src={pic} alt="fd" className='pic z-20' />
                <svg id='frame' xmlns="http://www.w3.org/2000/svg" width="437" height="388" viewBox="0 0 437 388">
                    <g id="frame" fill="none" stroke="#0fc" stroke-width="6">
                        <rect width="437" height="388" rx="14" stroke="none" />
                        <rect x="3" y="3" width="431" height="382" rx="11" fill="none" />
                    </g>
                </svg>

            </div>



        </div>
    )
}

export default AboutPic