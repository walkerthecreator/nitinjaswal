"use client";
import Project from "@/components/Project";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const projectsData = [
  {
    title : "RateMyPg" ,
    badge : "FullStack" ,
    photo : "/images/ratemypg.png" ,
    live : "https:/ratemypg-gamma.vercel.app" ,
    desc : `Developed using Next.js, this platform redefines the way users discover and review PG accommodations.
    Leveraging advanced features like caching and debouncing, RateMyPG ensures a seamless and responsive user experience. With SSR (Server-Side Rendering) implemented, users enjoy swift page loads and optimal performance.
    NextAuth handles JWT authentication and OAuth integrations, guaranteeing secure user access and personalized interactions. The platform prioritizes anonymity, empowering users to share candid reviews without compromising privacy.
    Deployed on Vercel.` ,
    tech : ["NextJs" , "TailwindCSS" , "MongoDB"]
  } ,
  {
    title : "Skulltrooper" ,
    badge : "Landing Page" ,
    photo : "/images/skulltrooper.png" ,
    live : "https://skulltrooper.in" ,
    desc : `a landing page crafted with simplicity and efficiency in mind. Built using HTML and Tailwind CSS, our minimalist design ensures a clean and intuitive user experience.
    Powered by Formik, our forms deliver seamless interactions, making it easy for users to connect with us and access our services. 
    `,
    tech : ["HTML" , "TailwindCSS" , "Javascript"]
  } ,
  {
    title : "Indianspokesman" ,
    badge : "FullStack" ,
    photo : "/images/indian.png" ,
    live : "" ,
    desc : `The project involves developing a news posting website for the Canadian market using Node.js and EJS for server-side rendering. It incorporates advanced features like debouncing for optimized user input handling, pagination for better content loading, and responsive design for optimal viewing across devices. The website is built from scratch and deployed on a Virtual Private Server (VPS) for dedicated resources and enhanced security. The project showcases proficiency in web development technologies, including Node.js, EJS, TailwindCSS, and VPS deployment strategies, resulting in a robust news publishing platform.` ,
    tech : ["NodeJS" , "EJS" , "MongoDB" , "TailwindCSS"]
  }
]


function Projects() {

  const [ show , setShow ] = useState(true)

  return (
    <div className="bg-gray-50  mx-auto md:w-4/5 md:pb-20">
{

  show &&
      <motion.div
        initial={{ y: "-120px", scaleX: 0.8 }}
        animate={{ y: "-40px", scaleX: 1 }}
        exit={{ y : "-120px" , scaleX : 0.8 }}
        transition={{ delay: 1, type: "just" }}
        // transition={{ type: "spring", stiffness: 500, damping: 30 }}
        className=" absolute z-50 right-10 w-80 rounded-full bg-zinc-800 text-white p-2 px-4 flex justify-between items-center"
      >
        <Image
          src="/safari.svg"
          width="42"
          height="42"
          alt="browser"
          className="-translate-x-1"
        />
        <div className="-translate-x-2">
          <b>Your New Website</b>
          <p>mobile</p>
        </div>
        <div>
          <button onClick={()=>{ setShow(false) }} className="bg-red-500 p-1 px-3 me-1 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-phone-missed"
            >
              <line x1="22" x2="16" y1="2" y2="8" />
              <line x1="16" x2="22" y1="2" y2="8" />
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
          </button>
          <motion.button className="bg-green-600 p-1 px-3 rounded-full ms-1"
          // animate={{ x : [0 , -1 , 0 , 1 , 0 , -1 , 0 , 1 ] }}
          animate={{ scale : [ 0.9 , 1   ] }}
          transition={{ duration : 1 , repeat : Infinity }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-phone"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
          </motion.button>
        </div>
      </motion.div>
}

      <div className="p-2">
        <h1 className="text-4xl my-10 font-medium text-center">
          Things I&apos;ve Built
        </h1>

      <div className="text-3xl font-semibold text-justify md:text-5xl md:text-center md:font-medium w-11/12 md:w-3/4 mt-20 mx-auto">
        <h1 className="text-zinc-400">I&apos;ve spent last <span className="text-zinc-700">2 Years</span> Building wide range of <span className="text-zinc-700">Aesthetically pleasing functional Web Apps</span></h1>
      </div>

        {
          projectsData.map((item , index)=>{
            return <Project title={item.title} key={index} badge={item.badge} desc={item.desc} photo={item.photo} live={item.live} tech={item.tech} />
          })
        }

      </div>

    </div>
  );
}

export default Projects;
