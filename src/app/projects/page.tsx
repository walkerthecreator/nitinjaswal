"use client";
import Project from "@/components/Project";
import { motion } from "framer-motion";
import Image from "next/image";
import { SetStateAction, useState } from "react";
import { instrumentSerif } from "@/lib/font";
import { Phone, PhoneMissed, X } from "lucide-react";
import { Drawer } from "@/components/drawer";

const projectsData = [
  {
    title : "AI Interview Prep" , 
    badge : "Fullstack " ,
    photo : '/images/interview.png' , 
    desc : 'Currently Building an Generative AI Interview taking platform' ,
    tech : ["NextJs" , "Gemini" , "PostgreSQL" , "Shadcn" , "Stripe" ] ,
    live : ""
  } , 
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
  const [ drawer , setDrawer ] = useState(false)

  return (
    <div className={"relative max-w-7xl mx-auto flex items-center justify-center " + (drawer && "max-h-screen overflow-hidden px-10"  )}>
    <div className={"bg-primary mx-auto md:w-4/5 md:pb-20 " + (drawer ? "opacity-20" : "opacity-100") }>
{

  show &&
      <motion.div
        initial={{ y: "-120px", scaleX: 0.8 }}
        animate={{ y: "10px", scaleX: 1 }}
        exit={{ y : "-120px" , scaleX : 0.8 }}
        transition={{ delay: 0.4, type: "just" }}
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
          <button onClick={()=>{ setShow(false) }} 
          className="bg-red-500 p-3 me-1 rounded-full">
          <Phone className="h-4 w-4" />
          </button>
          <motion.button onClick={()=>{ setDrawer(true) ; setShow(false) }} 
          className="bg-green-600 p-3 rounded-full ms-1"
          animate={{ scale : [ 0.9 , 1   ] }}
          transition={{ duration : 1 , repeat : Infinity }}
          >
          <div className="bg-green-600 p-4 absolute top-1 left-1 -z-10 rounded-full animate-ping" />
          <PhoneMissed className="h-4 w-4" />
          </motion.button>
        </div>
      </motion.div>
}

      <div className="p-3 md:pt-10">
        {/* <h1 className={`text-4xl my-10 font-medium text-center ${instrumentSerif.className}`}>
          Things I&apos;ve Built
        </h1> */}

      <div className={`text-3xl font-semibold text-justify md:text-5xl md:text-center md:font-medium w-11/12 md:w-3/4 mt-20 mx-auto ${instrumentSerif.className}`}>
        <h1 className="text-zinc-500">I&apos;ve spent last <span className="text-zinc-200">2 Years</span> Building wide range of <span className="text-zinc-200">Aesthetically pleasing functional Web Apps</span></h1>
      </div>

        {
          projectsData.map((item , index)=>{
            return <Project title={item.title} key={index} badge={item.badge} desc={item.desc} photo={item.photo} live={item.live} tech={item.tech} />
          })
        }

      </div>
    </div>

      {
        drawer 
        && 
        <Drawer setDrawer={setDrawer} />
      }
    </ div>

  );
}

export default Projects;

