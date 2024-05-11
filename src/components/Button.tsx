import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

function Button({ children }: { children: React.ReactNode }) {
  const [ cord , setCord  ] = useState({ x : 0 , y : 0 })
  const [ check , setCheck ] = useState(false)

  useEffect(()=>{

  } , [])

  return (
    <div className="border border-zinc-500 bg-zinc-700 w-40 rounded-lg z-1 relative"
    onMouseMove={(e)=>{ setCord( { x : e.clientX  , y : e.clientY }) }}
    >
      <div className="from-zinc-600 z-3 m-[2px] bg-gradient-to-br text-zinc-200 relative font-medium to-zinc-800 p-2 px-4 rounded-md">
        {children}
      </div>

    </div>
  );
}

export default Button;
