"use client";
import { motion , AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Home() {

  const [show , setShow ] = useState(false)

  function handleClick(){
    setShow(!show)
    setTimeout(()=>{
      setShow(false)
    }, 2500)
  }

  return (
    <>
    <div className=" flex justify-center items-center w-96 h-96 mx-auto mt-40 ">
      <button onClick={handleClick} className="bg-white p-2 px-4 rounded-md text-black ">show info</button>
        <AnimatePresence>
        {
          show 
          &&
          <motion.div
            className="bg-purple-700/50 flex items-center gap-2 font-semibold text-purple-400 h-10 p-2 px-4 rounded-md absolute -top-10"
            initial={{ y: "0" }}
            animate={{ y: "50px" }}
            exit={{ y : "0" }}
            transition={{ type: "spring" }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-leafy-green"><path d="M2 22c1.25-.987 2.27-1.975 3.9-2.2a5.56 5.56 0 0 1 3.8 1.5 4 4 0 0 0 6.187-2.353 3.5 3.5 0 0 0 3.69-5.116A3.5 3.5 0 0 0 20.95 8 3.5 3.5 0 1 0 16 3.05a3.5 3.5 0 0 0-5.831 1.373 3.5 3.5 0 0 0-5.116 3.69 4 4 0 0 0-2.348 6.155C3.499 15.42 4.409 16.712 4.2 18.1 3.926 19.743 3.014 20.732 2 22"/><path d="M2 22 17 7"/></svg>
            <h1> Nitin Jaswal</h1>
          </motion.div>
        }
        </AnimatePresence>
    </div>
    </>
  );
}
