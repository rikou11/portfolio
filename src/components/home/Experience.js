import React from 'react'
import react from './logos/react.svg'
import node from './logos/node.svg'
import js from './logos/javascript.svg'
import css from './logos/css.svg'
import github from './logos/github.svg'
import html from './logos/html.svg'
import xd from './logos/xd.svg'

const Experience = () => {

    return (

        <div id='skills' className=" py-20 font-oxygen  ">

            <div className="flex justify-center pt-10 mb-10">
                <h1 className="text-6xl font-bold text-white">Skills</h1>
            </div>
            <div className='grid grid-col-1 md:grid-cols-2 sm:max-w-xl md:max-w-full lg:max-w-screen-xl mx-auto lg:grid-cols-4 gap-2 justify-items-center h-fit py-10 '>

                <div className='grid grid-cols-1 gap-3 justify-items-center'>
                    <img className='  h-40 w-40 lg:h-20 lg:w-20 ' src={react} alt="logo" />
                    <p className="text-gray-200 text-base text-center mb-10 font-mono">React JS</p>
                </div>
                <div className='grid grid-cols-1 gap-3 justify-items-center'>
                    <img className='  h-40 w-40 lg:h-20 lg:w-20 ' src={node} alt="logo" />
                    <p className="text-gray-200 text-base text-center mb-10 font-mono">Node Express JS</p>
                </div>
                <div className='grid grid-cols-1 gap-3 justify-items-center'>
                    <img className='  h-40 w-40 lg:h-20 lg:w-20 ' src={js} alt="logo" />
                    <p className="text-gray-200 text-base text-center mb-10 font-mono">JavaScript</p>
                </div>
                <div className='grid grid-cols-1 gap-3 justify-items-center'>
                    <img className='  h-40 w-40 lg:h-20 lg:w-20 ' src={css} alt="logo" />
                    <p className="text-gray-200 text-base text-center mb-10 font-mono">CSS</p>
                </div>

                {/* 4 */}
                <div className='grid grid-cols-1 gap-3 justify-items-center'>
                    <img className='  h-40 w-40 lg:h-20 lg:w-20 ' src={github} alt="logo" />
                    <p className="text-gray-200 text-base text-center mb-10 font-mono">GITHUB</p>
                </div>
                <div className='grid grid-cols-1 gap-3 justify-items-center'>
                    <i className="fa-solid fa-database text-9xl lg:text-7xl  text-center text-gray-200"></i>
                    <p className="text-gray-200 text-base text-center mb-10 font-mono">MySQL + MongoDB</p>
                </div>
                <div className='grid grid-cols-1 gap-3 justify-items-center'>
                    <img className='  h-40 w-40 lg:h-20 lg:w-20 ' src={xd} alt="logo" />
                    <p className="text-gray-200 text-base text-center mb-10 font-mono">Adobe XD</p>
                </div>
                <div className='grid grid-cols-1 gap-3 justify-items-center'>
                    <img className='  h-40 w-40 lg:h-20 lg:w-20 ' src={html} alt="logo" />
                    <p className="text-gray-200 text-base text-center mb-10 font-mono">HTML</p>
                </div>
            </div>



        </div>

    )
}

export default Experience