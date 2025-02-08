"use client";
import { useScroll } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import Button from "@/components/Button"
import Link from "next/link";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sparkle } from "lucide-react";

const icons = [
  {
    icon: "typescript.svg",
    title: "Typescript",
  },
  {
    icon: "javascript.svg",
    title: "Javascript",
  },
  {
    icon: "next.svg",
    title: "NextJs",
  },
  {
    icon: "react.svg",
    title: "ReactJs",
  },
  {
    icon : "redux.svg" ,
    title : "Redux"
  } ,
  {
    icon: "tailwindcss.svg",
    title: "TailwindCSS",
  },
  {
    icon: "nodejs.svg",
    title: "NodeJs",
  },
  {
    icon: "expressjs.svg",
    title: "ExpressJS",
  },
  {
    icon: "redis.svg",
    title: "Redis",
  },
  {
    icon: "docker.svg",
    title: "Docker",
  },
  {
    icon: "postgresql.svg",
    title: "PostgreSQL",
  },
  {
    icon : "git.svg" ,
    title : 'Git'
  }
];

export default function Home() {

  return (
    <>
    <div className="min-w-screen min-h-screen">
      <ScrollArea className="h-[calc(100vh-3.5rem)]">



      <section className="flex flex-col justify-evenly -translate-y-10 items-center min-h-screen w-11/12  md:w-3/5 mx-auto">
        
        <motion.h1 
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="w-full max-w-lg text-lg"
        >
          Hi, I&apos;m Nitin Jaswal, a Fullstack Engineer who&apos;s passionate about building products and experiences
        </motion.h1>

      </section>
      <section className="min-w-screen">
        <div className="min-h-screen max-w-3xl mx-auto ">

            <div className="rounded-lg bg-neutral-700/40 border border-neutral-600 w-full p-4">
              <h1 className="">Experience</h1>
              <div className="border-s ms-3">
                <div className="mt-4 ms-4 relative">
                  <div className="bg-green-300 rounded-full -left-[22px] top-2 p-[6px] absolute"></div>
                  <h2 className="text-xl font-medium ">
                    Full Stack Engineer
                  </h2>
                  <div className="">
                    <h2 className="my-1 text-zinc-400 text-sm">
                      September, 2024 - Present{" "}
                    </h2>
                    <ul className="list-disc list-inside mt-2">
                      <li>Develop an WLS to calculate and offset user emissions with seamless integration ready to
                      integrate with various platforms.</li>
                      <li>Enable real-time updates via configurable webhooks and callback mechanisms.</li>
                      <li>Architect the gateway with rate-limiting, caching, and auto-scaling
                      mechanisms to ensure uptime and performance.</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-4 ms-4 relative">
                  <div className="bg-zinc-400 rounded-full -left-[22px] top-2 p-[6px] absolute"></div>
                  <h2 className="text-xl font-medium">
                    Full Stack Engineer
                  </h2>
                  <div className="">
                    <h2 className="my-1  text-sm">
                      June, 2023 - June, 2024
                    </h2>
                    <ul className="list-disc list-inside mt-2">
                      <li>Built an <span className="highlight">Image Annonation</span> tool for creating Annonations of Tractors for <span className="highlight">New Holland</span>.</li>
                      <li>Utilized NodeJs, MySQL and FabricJs as the core tech stack.</li>
                      <li>Assisted in the building and integrated a real-time monitoring system using Node.Js and WebSockets.</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6 ms-4 relative">
                  <div className="bg-zinc-400 rounded-full -left-[22px] top-2 p-[6px] absolute"></div>
                  <h2 className="text-xl font-medium">
                    Frontend Developer Intern
                  </h2>
                  <div className="">
                    <h2 className="my-1  text-sm">
                      January, 2023 - June 2023
                    </h2>
                    <ul className=" list-disc list-inside mt-2">
                      <li>Revamped UI and Improved UX for Various Client Web Apps </li>
                      <li>Contributed to web apps  involving JavaScript, jQuery, CSS,HTML and MySQL.</li>
                      <li>Implemented backend functionalities, gaining hands-on experience in Node.js
                        along with Express.js.</li>
                    </ul>
                  </div>
                {/* </div> */}
              </div>
            </div>
            
          </div>
        </div>
      </section>


      <section className="max-w-xl mx-auto min-h-screen flex flex-col gap-10 items-center justify-center">
        <h1 className="text-xl font-semibold">Tech Cloud</h1>
        <div className="grid grid-cols-4 gap-8">
          {icons.map(item => (
            <div className="flex flex-col items-center gap-2 group">
              <img src={item.icon} alt={item.title} className="h-12 w-12 saturate-0 invert" />
              <span className="text-xs opacity-0 group-hover:opacity-100 transition-opacity">{item.title}</span>
            </div>
          ))}

        </div>
      </section>

      <section className="max-w-4xl mx-auto min-h-screen flex flex-col gap-10 items-center justify-center">
          <div className="w-full h-full relative grid grid-cols-2 rounded-xl overflow-hidden">
              <div className="bg-neutral-800 h-full p-6 flex flex-col items-center justify-center gap-8">
                  <h2 className="font-bold text-5xl">Let's build your Next Big Idea</h2>
                  <button className="w-full bg-primary p-3 rounded-xl flex items-center justify-center gap-2 ring ring-neutral-700">
                  <Sparkle className="h-4 w-4" />Get in Touch</button>
              </div>
              <img src="/images/me.jpg" alt="landscape" className="h-[500px] w-full object-cover object-top" />
          </div>
      </section>
      </ScrollArea>
      </div>
    </>
  );
}
