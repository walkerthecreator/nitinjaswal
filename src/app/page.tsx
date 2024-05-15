"use client";
import { useScroll } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import Button from "@/components/Button"
import Link from "next/link";

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
  const [show, setShow] = useState(false);

  const {} = useScroll();
  return (
    <>
      <div className="flex flex-col justify-around items-center min-h-screen w-11/12  md:w-3/5 mx-auto">
        <div className="mt-10 w-[95%]">
          <div onMouseOver={()=>{ setShow(true) }} onMouseOut={()=>{ setShow(false) }} className="mx-auto cursor-pointer hover:scale-105 transition-transform shadow-inner shadow-emerald-200 relative bg-emerald-300/20 text-emerald-500 border border-emerald-100 p-1 w-32 rounded-full px-2 text-sm text-center ">
            Open for Roles
            {show && (
              <motion.div
              initial={{ y : "0" , scale : 0.7 }}
              animate={{ y : "-20px" , scale : 1 }}
              className="absolute z-50 bg-zinc-700 -left-6 -top-24 w-44 rounded-md p-3 text-zinc-200">
                I&apos;m Open for Full-time, Part-time, Freelancing Oppurtunities
              </motion.div>
            )}
          </div>  
          <div className="text-6xl text-left md:text-6xl text-zinc-800 md:w-4/5 md:text-center mx-auto mt-8 ">
            <span className="text-3xl text-zinc-600">Hi I&apos;m, Nitin Jaswal </span>
            <h1 className="font-semibold py-4 bg-gradient-to-b text-transparent bg-clip-text from-zinc-500 to-zinc-800">
               building products and experiences.
            </h1>

            <p className="text-lg pt-4">a <span className="font-medium">Fullstack Software Engineer</span> who&apos;s passionate about building products.</p>
          </div>
        </div>

        {/* <button className="from-zinc-100 z-1 bg-gradient-to-br text-zinc-800 relative font-medium shadow-md to-zinc-200  p-2 px-4 w-40 rounded-md hover:shadow-none hover:translate-y-[1px] transition hover:border hover:border-zinc-300"> */}
        <div className="flex gap-2 ">
            <Button> Let&apos;s Connect</Button>
            <Link href="https://drive.google.com/file/d/1h4xDoP-8Qb6V0ZclyVOeW04XJuraGYgj/view" 
              className="from-stone-100 to-stone-200 shadow-inner min-w-32 text-center z-3 m-[2px] bg-gradient-to-br text-zinc-500 relative font-medium  p-2 px-4 rounded-md h-fit flex place-items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-paperclip"><path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"/></svg>
             Resume
            </Link>
        </div>
      </div>
      <section className="bg-white min-w-screen">
        <div className="min-h-screen w-11/12 mx-auto mt-10 bg-white pt-20">
          <div className="flex flex-col md:flex-row gap-4 md:gap-2 mt-20">
            <div className="rounded-lg  bg-zinc-90/80 bg-stone-100 border border-stone-300 md:w-3/5 p-4">
              <h1 className="text-zinc-400">Experience</h1>

              <div className="border-s ms-3">
                <div className="mt-4 ms-4 relative">
                  <div className="bg-zinc-400 rounded-full -left-[22px] top-2 p-[6px] absolute"></div>
                  <h2 className="text-xl font-medium text-stone-700">
                    Full Stack Engineer
                  </h2>
                  <div className="">
                    <h2 className="my-1 text-zinc-400 text-sm">
                      Netmax Technologies | June, 2023 - Present{" "}
                    </h2>
                    <ul className="text-stone-700 list-disc list-inside mt-2">
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
                    <h2 className="my-1 text-zinc-400 text-sm">
                      Netmax Technologies | January, 2023 - June 2023
                    </h2>
                    <ul className="text-zinc-700 list-disc list-inside mt-2">
                      <li>Revamped UI and Improved UX for Various Client Web Apps </li>
                      <li>Contributed to web apps  involving JavaScript, jQuery, CSS,HTML and MySQL.</li>
                      <li>Implemented backend functionalities, gaining hands-on experience in Node.js
                        along with Express.js.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-2/5 flex flex-col gap-4 md:gap-2">
              <div className="bg-stone-100 border h-full border-stone-300 rounded-lg p-4">
                <h1 className="text-zinc-400">Skills</h1>
                <div className="mt-2 flex gap-2 flex-wrap">
                  {icons.map((item, index) => {
                    return (
                      <span
                        key={index}
                        className="p-2 px-4 bg-white border border-stone-200 rounded-full text-sm flex place-items-center gap-1 "
                      >
                        <Image
                          src={`/${item.icon}`}
                          height={20}
                          width={20}
                          className="rounded-md"
                          alt="icon"
                        ></Image>
                        {item.title}
                      </span>
                    );
                  })}
                </div>
              </div>
              <div className="bg-stone-100 border border-stone-300 rounded-lg p-4 ">
                <h3 className="text-zinc-400">Education</h3>
                <h1 className="text-3xl font-medium my-2">
                  B.tech Computer Science & Engineering
                </h1>
                <p className="mt-4 ">2019 - 2023</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="min-h-screen mt-10 py-10 relative">
        <div className="dots absolute h-full w-full top-0"></div>
        <div className="min-h-screen w-4/5 mx-auto mt-10">
          <h2 className="text-5xl md:text-6xl font-medium text-center text-gray-700/70 ">
            Wait there is something more
          </h2>
          <div className="mx-auto w-4/5 mt-20 md:mt-40 flex flex-col md:flex-row justify-center gap-10">
            <div className="h-80 w-60 bg-white shadow rounded flex justify-center items-start pt-3 -rotate-1 hover:rotate-0 transition-transform">
              <Image
                src={"/images/nitin-2.jpg"}
                className="rounded"
                width={220}
                height={300}
                alt="nitin"
              ></Image>
            </div>
            <div className="h-80 w-60 bg-white shadow rounded flex justify-center items-start pt-3 rotate-2 hover:rotate-0 transition-transform">
              <Image
                src={"/images/nitin-second.jpg"}
                className="rounded"
                width={220}
                height={300}
                alt="nitin"
              ></Image>
            </div>
            <div className="h-80 w-60 bg-white shadow rounded flex justify-center items-start pt-3 -rotate-1 hover:rotate-0 transition-transform">
              <Image
                src={"/images/nitin-third.jpg"}
                className="rounded"
                width={220}
                height={300}
                alt="nitin"
              ></Image>
            </div>
          </div>
          <div className="mx-auto w-40 flex  place-items-center mt-20">
            <Link href={'/about'} className="from-zinc-600 text-center z-1 bg-gradient-to-br text-zinc-200 relative font-medium shadow-md shadow-zinc-200 to-zinc-800  p-2 px-4 w-40 rounded-md hover:shadow-none transition border-2 border-zinc-700 ">
              Read More
            </Link >
          </div>
        </div>

        <div className="bg-zinc-900 flex justify-between rounded-t-md p-4 mx-2 md:mx-10 translate-y-12 text-white">
          <h2 className="text-2xl">Nitin Jaswal</h2>
          <div className="flex gap-4 w-1/7 ">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-twitter"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
              </svg>
            </span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-github"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            </span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-mail"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
