"use client";
import Project from "@/components/Project";
import { useState } from "react";
import { instrumentSerif } from "@/lib/font";
import { Drawer } from "@/components/drawer";
import { CallingPill } from "@/components/CallingIsland";
import { projects } from "@/data/portfolio";


function Projects() {

  const [ show , setShow ] = useState(true)
  const [ drawer , setDrawer ] = useState(false)

  return (
    <div className={"relative max-w-7xl mx-auto flex items-center justify-center " + (drawer && "max-h-screen overflow-hidden px-10"  )}>
    <div className={"bg-primary mx-auto md:w-4/5 md:pb-20 " + (drawer ? "opacity-20" : "opacity-100") }>
{
  show && <CallingPill setShow={setShow} setDrawer={setDrawer} />
}

      <div className="p-3 md:pt-10">
        {/* <h1 className={`text-4xl my-10 font-medium text-center ${instrumentSerif.className}`}>
          Things I&apos;ve Built
        </h1> */}

      <div className={`text-3xl font-semibold text-justify md:text-5xl md:text-center md:font-medium w-11/12 md:w-3/4 mt-20 mx-auto ${instrumentSerif.className}`}>
        <h1 className="text-zinc-500">I&apos;ve spent the last <span className="text-zinc-200">few years</span> building a wide range of <span className="text-zinc-200">aesthetically pleasing, functional web apps</span>.</h1>
      </div>

        {
          projects.map((item , index)=>{
            return <Project title={item.title} key={index} badge={item.badge} desc={item.description} photo={item.photo} live={item.live ?? ""} tech={item.tech} />
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

