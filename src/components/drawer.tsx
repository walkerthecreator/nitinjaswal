import { instrumentSerif } from "@/lib/font"
import { motion } from "framer-motion"
import { Mail, X } from "lucide-react"
import { SetStateAction } from "react"
import Button from "./Button"
import Image from "next/image"

export function Drawer({ setDrawer } : { setDrawer : React.Dispatch<SetStateAction<boolean>>  }){
    return <motion.div
    initial={{ y : 400 }}
    animate={{ y : 0 }} 
    exit={{ y : -400 }}
    className="h-full bg-neutral-800 border border-neutral-600 w-full max-w-4xl mx-auto absolute rounded-t-3xl p-2 shadow-lg shadow-black top-10">
  
        <button onClick={()=>{ setDrawer(false) }} className="bg-neutral-700 p-3 rounded-full float-end">
        <X className="h-6 w-6 text-muted/70" /></button>
  
        <h1 className={`text-4xl font-medium py-4 text-center mt-10 ${instrumentSerif.className}`}>Get in Touch </h1>
        <div className="flex flex-col md:w-4/5 mx-auto mt-10 gap-20">
          <div className="md:w-4/5 mx-auto flex flex-col gap-4">
            <input 
              className="p-2 px-3 bg-neutral-700 rounded-md border border-neutral-600" 
              type="text" 
              placeholder="Enter Name" 
              name="name"
            />
            <input 
              className="p-2 px-3 bg-neutral-700 rounded-md border border-neutral-600" 
              type="email" 
              placeholder="Enter Email" 
              name="email" 
            />
            <p className="text-neutral-400 my-2 text-sm text-center">We&apos;ll Get back to you with-in 24 hours.</p>
          </div>
          <div className="flex flex-col gap-4">
            <button 
            className="text-zinc-100 mt-10 text-center mx-auto md:min-w-32 
            bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700
            font-medium p-2 w-4/5 rounded-md flex justify-center items-center gap-2"><Mail className="h-4 w-4" /> Send Messages</button>

            <span className="mx-auto">or</span>

            <a target="_blank" href="https://cal.com/nitinjaswal/30min" className="relative bg-white w-4/5 mx-auto rounded-lg p-2 text-neutral-900 flex items-start justify-center gap-2">
            <Image src="/images/potrait.png" className="rounded-full h-6 w-6" height={18} width={18} alt="image"/>
            <span> Book call with Nitin </span>
            <span className="h-[2px] bg-gradient-to-r from-transparent via-lime-500 to-transparent  w-4/5 mx-auto absolute bottom-0" />
            </a>
          </div>
        </div>
    </motion.div>
  }