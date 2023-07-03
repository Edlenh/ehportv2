import React from "react"


const skills = [
    {skill : "HTML"},
    {skill : "CSS"},
    {skill : "JavaScript"},
    {skill : "TypeScript"},
    {skill : "Python"},
    {skill : "React"},
    {skill : "NextJs"},
    {skill : "Bootstrap"},
    {skill : "TailWind CSS"},
    {skill : "Material UI"},
    {skill : "MongoDb"},
    {skill : "Sql"},
    {skill : "NoSql"},
    {skill : "Git/Github"},
    {skill : "Netlify"},
    {skill : "Heroku"},
    {skill : "HTML"},
    {skill : "APIs"},

]

const About = () => {
    return ( 
        <section id="about">
            <div className="my-12 pb-12 md:pt-16 md:pb-48">
                <h1 className="text-center font-bold text-4xl">About me</h1>
                <div className="flex flex-col space-y-10 item-stretch justify-center 
                align-top md:flex-row md:text-left md:p-4 md:space-y-0 md:space-x-10">
                    <div className="md:w-1/2" >
                        <h1 className="text center text-2xl font-bold mb-6 md:text-left">Get to know me</h1>
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
                        <h1 className="text center text-2xl font-bold mb-6 md:text-left">Skills</h1>
                        <div className="flex flex-wrap flex-row justify-center md:justify-start">
                            {skills.map((item,idx)=>{
                                return <p className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-grey-500 rounded font-semibold text-black" 
                                
                                key={idx}>{item.skill}</p>
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default About;