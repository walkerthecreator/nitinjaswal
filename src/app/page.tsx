"use client";
import { AnimatePresence, useScroll } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sparkle, Mail, Calendar, Twitter } from "lucide-react";
import { instrumentSerif } from "@/lib/font";
import { cn } from "@/lib/utils";


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

const workExperiences = [
  {
    title : "Freelance Fullstack Developer", 
    date : "March, 2025 - Present",
    company : "AI Startup"
  },
  {
    title: "Full Stack Engineer",
    date: "Sep, 2024 - March, 2025",
    company : "Blockchain Startup",
    isPresent: true,
    points: [
      "Developing a WLS to Offset carbon emissions with seamless integration.",
      "Enabled real-time updates via configurable webhooks and callback mechanisms.",
      "Architect solution with rate-limiting, caching, and auto-scaling mechanisms."
    ]
  },
  {
    title: "Full Stack Engineer",
    date: "June, 2023 - June, 2024",
    company : "Service Based",
    points: [
      'Built an <span class="highlight">Image Annonation</span> tool for creating Annonations of Tractors for <span class="highlight">New Holland</span>.',
      "Utilized NodeJs, MySQL and FabricJs as the core tech stack.",
      "Assisted in the building and integrated a real-time monitoring system using Node.Js and WebSockets."
    ]
  },
  {
    title: "Frontend Developer Intern",
    date: "Jan, 2023 - June, 2023",
    points: [
      "Revamped UI and Improved UX for Various Client Web Apps",
      "Contributed to web apps involving JavaScript, jQuery, CSS,HTML and MySQL.",
      "Implemented backend functionalities, gaining hands-on experience in Node.js along with Express.js."
    ]
  },
  {
    title : "Freelance Frontend Developer",
    date : "June, 2022 - Nov, 2023"
  }
];

export default function Home() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  return (
    <>
    <div className="min-w-screen min-h-screen px-2">
      <ScrollArea className="h-[calc(100vh-3rem)]">
        <section className="flex flex-col justify-evenly -translate-y-10 items-center min-h-screen w-11/12  md:w-3/5 mx-auto">
          <motion.h1 
            initial={{ y: 10, opacity: 0, filter: "blur(10px)" }}
            animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="w-full max-w-lg text-lg"
          >
            Hi, I&apos;m Nitin Jaswal, a Software / Fullstack Engineer who&apos;s passionate about building products and experiences
          </motion.h1>
        </section>

        <section className="min-h-screen min-w-screen flex items-center justify-center">
          <div className="max-w-xl md:max-w-3xl w-full mx-auto">
              <div className="w-full py-4">
                <h1 className={`${instrumentSerif.className} text-3xl mb-20 text-center`}>Timeline</h1>
                <div className="space-y-8 mx-4">
                  {
                    workExperiences.map((work , index) => (
                      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-1 md:gap-3" key={index}>
                        <div className="text-neutral-400">{work.date}</div>
                        <div className="border border-dashed border-neutral-700 flex-1 hidden md:block" />
                        <div className="flex items-center gap-2">
                          {work.title}
                          {
                            work.company && (
                              <span className="text-neutral-400">({work.company})</span>
                            )
                          }
                          </div>
                      </div>
                    ))
                  }
                </div>
              </div>
          </div>
        </section>


        <section className="max-w-xl mx-auto min-h-screen flex flex-col gap-10 items-center justify-center">
          <h1 className={`text-3xl ${instrumentSerif.className}`}>Tech Cloud</h1>
          <div className="grid grid-cols-4 gap-8">
            {icons.map((item , index) => (
              <div key={index} className="flex flex-col items-center gap-2 group">
                <Image width={48} height={48} src={item.icon} alt={item.title} className="h-12 w-12 saturate-0 invert " />
                <span className="text-xs opacity-0 group-hover:opacity-100 transition-opacity">{item.title}</span>
              </div>
            ))}

          </div>
        </section>


        <section className="max-w-4xl mx-auto h-96 md:min-h-screen flex rounded-xl flex-col gap-10 items-center justify-center">
            <div className="w-full relative grid md:grid-cols-2 rounded-xl overflow-hidden">
            <div 
            className={cn("bg-neutral-800 p-6 flex flex-col items-center justify-center gap-4" , isContactOpen && "max-sm:h-[400px] max-sm:pb-40")}>
  <h2 className={`${instrumentSerif.className} font-bold text-4xl`}>Let&apos;s build your Next Big Idea</h2>

  <div className="relative w-full">
    <motion.button 
      onClick={() => setIsContactOpen(!isContactOpen)}
      className="w-full bg-white text-primary p-3 rounded-xl flex items-center mt-4 justify-center gap-2 ring ring-neutral-600">
      <Sparkle className="h-4 w-4" />Get in Touch
    </motion.button>

    {isContactOpen && (
      <div className="mt-6 relative">
        <AnimatePresence>
          <motion.div 
            className="flex flex-col justify-center gap-2 w-full absolute left-0 right-0"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
            
            <motion.a 
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.2, delay: 0 }}
              href="https://twitter.com/nitinjaswal26" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-neutral-700 hover:bg-neutral-600 p-3 w-full rounded-full flex gap-2 items-center justify-center z-20">
              <Twitter className="h-5 w-5" />
              twitter / X
            </motion.a>
            
            <motion.a 
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.2, delay: 0.1 }}
              href="mailto:nitinjaswal2616@gmail.com" 
              className="bg-neutral-700 hover:bg-neutral-600 p-3 w-full rounded-full flex gap-2 items-center justify-center z-10">
              <Mail className="h-5 w-5" />
              nitinjaswal2616
            </motion.a>
            
            <motion.a 
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.2, delay: 0.2 }}
              href="https://cal.com/nitinjaswal/30min" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-neutral-700 hover:bg-neutral-600 p-3 w-full rounded-full flex gap-2 items-center justify-center z-0">
              <Calendar className="h-5 w-5" />
              schedule a call
            </motion.a>
          </motion.div>
        </AnimatePresence>
      </div>
    )}
  </div>

  <motion.div className="flex items-center gap-1">
    <div className="bg-green-500 h-2 w-2 rounded-xl"/>
    <span className="text-xs">Open for New Oppurtuinities</span>
  </motion.div>
            </div>
                <Image height={500} width={700} src="/images/me.jpg" alt="landscape" className="hidden md:inline h-[500px] w-full object-cover object-top" />
            </div>
        </section>
      </ScrollArea>
      </div>
    </>
  );
}
