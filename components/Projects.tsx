import React from "react"
import Image from "next/image"
import Link from "next/link"
import behaviorImg from "../public/bbSc.88d6638b6ade83604ffd.png"
import hackImg from '../public/hackCo.1c61f2a6a657ce1ed908.png'
import lynImg from '../public/lynCo.5ca11d8d973ccb776261.png'
import sgImg from '../public/SGfr.1ca53f8c51231f76bb6b.png'
import { DiGithubAlt } from "react-icons/di";
import { HiArrowRightOnRectangle} from "react-icons/hi2";
import SlideUp from "./SlideAni"

const projects =[
    {
        "id": 1,
        "title": "Squad Goals",
        "link": "https://squadgoals.herokuapp.com",
        "img": sgImg,
        "desc": "MERN stack Fullstack application for tracking goals between friends.",
        "alt": "picture of accountability app",
        "git": "https://github.com/Edlenh/SquadGoals",
      },
      {
        "id": 2,
        "title": "Life Coach",
        "link": "https://edlenh.github.io/LynDznProgressCoach/",
        "img": lynImg,
        "desc": "Static website created with Vite, HTML, CSS, JavaScript and designed from scratch to promote a professional life coach.",
        "alt": "picture of life coaching app",
        "git": "https://github.com/Edlenh/LynDznProgressCoach",
        
      },
      {
        "id": 3,
        "title": "BrightOutLook",
        "link": "https://brightoutlooknw23.netlify.app/",
        "img": hackImg,
        "desc": "React integrated with OpenAi ChatGpt frontend application to provide children with a positive outlook built during a hackathon.",
        "alt": "picture of positive outlook app",
        "git": "https://github.com/Edlenh/NwHackathonv2",
      },
      {
        "id": 4,
        "title": "Behavior Bridge",
        "link": "https://behavior-bridge.vercel.app",
        "desc": "NextJs integrated with OpenAi ChatGpt frontend application built to support parents with their children with special needs by tracking data.",
        "img": behaviorImg,
        "alt": "picture of social media app",
        "git": "https://github.com/Edlenh/BehaviorBridge"
      },
]



const Projects = () => {
    return (  
        <section id="projects">
            <h1 className="text-center font-bold text-4xl">Check Out My Work!
            <hr className="w-6 h-1 mx-auto my-4 bg-purple-500 border-0 rounded"></hr>
            </h1>

            <div className="flex flex-col space-y-28">
                {projects.map((project, idx)=>{
                    return (
                    <div key={idx}>
                        <SlideUp offset="-300px 0px -300px 0px">
                        <div className="flex flex-col animate-slideUp animation-delay-2 md:flex-row md:space-x-12">
                            <div className="mt-8 md:w-1/2">
                                <Link href={project.link} target="_blank">
                                <Image
                                src={project.img}
                                alt=""
                                width={1000}
                                height={1000}
                                className="rounded-xl shadow-xl hover:opacity-70"
                                />
                                </Link>
                            </div>
                            <div className="mt-12 md:w-1/2">
                                
                                <h1 className="text-4xl font-bold mb-6">{project.title}</h1>
                                <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400" >
                                    {project.desc}
                                    </p>
                                    <div className="flex flex-row align-bottom space-4 justify-center">
                                        <Link href={project.git} target="_blank"><DiGithubAlt size={30}
                                        className="hover:-translate-y-1 transition-transform cursor-pointer"/></Link>
                                        <Link href={project.link} target="_blank"><HiArrowRightOnRectangle size={30}
                                         className="hover:-translate-y-1 transition-transform cursor-pointer"/></Link>
                                    </div>
                            </div>
                            </div>
                            </SlideUp>
                    </div>
                    )
                })}

            </div>

        </section>
    );
}
 
export default Projects;
