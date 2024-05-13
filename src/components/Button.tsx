import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

function Button({ children }: { children: React.ReactNode }) {
  const [ cord , setCord  ] = useState({ x : 0 , y : 0 })
  const [ check , setCheck ] = useState(false)

  useEffect(()=>{

  } , [])

  return (
      <div className="from-zinc-600 min-w-32 h-fit text-center z-3 m-[2px] bg-gradient-to-br text-zinc-200 relative font-medium to-zinc-800 p-2 px-4 rounded-md flex gap-2 place-items-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
        {children}
      </div>
  );
}

export default Button;
