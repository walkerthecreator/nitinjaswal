import { instrumentSerif } from "@/lib/font"
import { motion } from "framer-motion"
import { X } from "lucide-react"
import { SetStateAction } from "react"

export function Drawer({ setDrawer } : { setDrawer : React.Dispatch<SetStateAction<boolean>>  }){
    return <motion.div
    initial={{ y : 400 }}
    animate={{ y : 0 }} 
    exit={{ y : -400 }}
    className="h-full bg-neutral-800 border border-neutral-600 w-full max-w-4xl mx-auto absolute rounded-t-3xl p-2 shadow-lg shadow-black top-10">
  
        <button onClick={()=>{ setDrawer(false) }} className="bg-neutral-700 p-3 rounded-full float-end">
        <X className="h-6 w-6 text-muted/70" /></button>
  
      <h1 className={`text-4xl font-medium py-4 text-center mt-10 ${instrumentSerif.className}`}>Get in Touch </h1>
  
        <div className="flex flex-col md:w-3/5 mx-auto mt-10 gap-20">
          <div className="md:w-3/5 mx-auto flex flex-col">
            <input className="p-2 px-3 bg-neutral-800 rounded-md border border-neutral-500" type="text" placeholder="Enter Name" name="name"/>
            <input className="mt-2 p-2 px-3 bg-zinc-50 rounded-md border border-zinc-200" type="email" placeholder="Enter Email" name="email" />
  
            <p className="text-zinc-400 my-2 text-sm text-center">We&apos;ll Get back to you with-in 24 hours.</p>
          </div>
  
          <button className="bg-zinc-700 w-3/5 mx-auto p-3 shadow-inner shadow-zinc-400  text-zinc-200 font-semibold rounded-lg">Book Free call</button>
        </div>
    </motion.div>
  }