import React from "react"
import { IconType } from 'react-icons';
import { AiFillHtml5, AiFillGithub} from 'react-icons/ai';
import {MdCss} from "react-icons/md"
import {FaPython, FaBootstrap, FaReact} from "react-icons/fa6"
import {DiJsBadge, DiMysql,DiNodejs,DiMongodb,DiDjango, DiPostgresql, DiHeroku,DiFirebase} from "react-icons/di";
import { FaStripeS} from "react-icons/fa";
import { SiNextdotjs , SiTailwindcss, SiTypescript} from "react-icons/si";


interface SkillItem{
    skill: string;
    icon:IconType;
}

const skills: SkillItem[] = [
    {skill : "HTML", icon:AiFillHtml5},
    {skill : "CSS", icon: MdCss},
    {skill : "JavaScript", icon: DiJsBadge},
    {skill : "NodeJs", icon: DiNodejs},
    {skill : "TypeScript", icon: SiTypescript},
    {skill : "Python", icon: FaPython},
    {skill : "React", icon: FaReact},
    {skill : "Next", icon: SiNextdotjs},
    {skill : "Tailwind", icon: SiTailwindcss},
    {skill : "Bootstrap", icon: FaBootstrap},
    {skill : "Stripe", icon: FaStripeS},
    {skill : "Firebase", icon: DiFirebase},
    {skill : "MongoDb", icon: DiMongodb},
    {skill : "PostgresSql", icon: DiPostgresql},
    {skill : "NoSql", icon: DiMysql},
    {skill : "Git/Github", icon: AiFillGithub},
    {skill : "Django", icon: DiDjango},
    {skill : "Heroku", icon: DiHeroku},

]

const About = () => {
    return ( 
        <section id="about">
            <div className="my-12 pb-12 md:pt-16 md:pb-48">
                <h1 className="text-center font-bold text-4xl">About me</h1>
                <hr className="w-6 h-1 mx-auto my-4 bg-purple-500 border-0 rounded"></hr>
                <div className="flex flex-col space-y-10 items-stretch justify-center 
                align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
                    <div className="md:w-1/2" >
                        <h1 className="text-center text-2xl font-bold mb-6 md:text-left">Get to know me</h1>
                        <p>
                        
                        As a developer I am{" "}
              <span className="font-bold">{"extremely driven"}</span>,
              <span className="font-bold">{" passionately motivated "}</span>, and
              <span className="font-bold">{" highly creative. "}</span> 
                        </p>
                        <br />
                        <p>
                        I bring a strong passion for creating innovative and user-friendly websites.
                        Throughout my journey, I have had the privilege of working with diverse clients, honing my skills in crafting visually stunning interfaces and implementing efficient backend functionality
            </p>
            <br />
            <p>
            When I'm not programming, you'll find me immersed in various activities.
            Whether it's reading a great book, improving on my boxing, or exploring the art of hand drip coffee brewing. 
           These diverse pursuits not only provide balance to my life but also 
            inspire innovative problem-solving approaches in my programming endeavors.
            </p>
            <br />
                </div>
                    <div className="md:w-1/2">
                        <h1 className="text-center text-2xl font-bold mb-6 md:text-left">Skills</h1>
                        <div className="flex flex-wrap flex-row justify-center md:justify-start">
                            {skills.map((item,idx)=>{
                                 const IconComponent = item.icon;
                                return <p className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-grey-500 rounded font-semibold text-black" 
                                
                                key={idx}> <IconComponent size={24} /></p>
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default About;