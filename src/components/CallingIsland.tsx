"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { SetStateAction} from "react";
import { Phone, PhoneMissed } from "lucide-react";


export function CallingPill({ setShow , setDrawer}: {setShow : React.Dispatch<SetStateAction<boolean>>  , setDrawer : React.Dispatch<SetStateAction<boolean>>   }){
    return       <motion.div
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
    <div className="-translate-x-2 ">
      <b>Your New Website</b>
      <p className="text-muted/50">mobile</p>
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