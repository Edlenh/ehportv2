"use client"
import React from "react"
import Image from "next/image"
import {Link} from "react-scroll"
import {HiArrowDown} from "react-icons/hi"

const Hero = () => {
    return ( 
        <section id="home">
            <div className="flex flex-col text-center items-center justify-center my-10 py-16 sm:py-20 md:flex-row md:space-x-4 md:text-left md:py-40" >
                <div className="md:w-1/2 md:mt-2">
                    <Image className="h-auto max-w-full rounded-lg
                    shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30"
                    src="/Me4.webp" alt="Edward smiling" height="300" width="300"/>
                </div>
                <div className="md:mt-2 md:w-3/5">
                    <h1 className="font-bold text-4xl mt-6 md:text-7xl md:mt-0">Hi, I'm Edward</h1>
                    <p className="text-lg mt-4 mb-6">Fullstack JavaScript developer based in Seattle, Washington. <br/>
                        Creating applications for the greater good.</p>
                        <Link
                        to= "projects"
                        className="text-neutral-100 font-semibold px-6 py-3 bg-purple-500 rounded shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}> Projects 
                        </Link>
                </div>
            </div>

            <div className="flex flex-row justify-center">
                <Link
                to="about"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                >
                    <HiArrowDown size={35} className="animate-bounce"/>
                </Link>
            </div>
        </section>
     );
}
 
export default Hero;