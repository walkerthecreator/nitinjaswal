import { motion } from "framer-motion";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function Button({ children }: { children: React.ReactNode }) {
  const [ cord , setCord  ] = useState({ x : 0 , y : 0 })
  const [ check , setCheck ] = useState(false)

  useEffect(()=>{

  } , [])

  return (
      <Link href={'https://mail.google.com/mail/u/0/?fs=1&tf=cm&su=Hiring'} target="_blank" className="from-zinc-600 to-zinc-800 min-w-44 gap-2 justify-center h-fit text-center z-3 m-[2px] bg-gradient-to-br text-zinc-200 relative font-medium  p-2 px-4 rounded-md flex place-items-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
        {children}
      </Link>
  );
}

export default Button;
