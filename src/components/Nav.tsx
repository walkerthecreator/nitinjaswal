"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Nav() {
  const [position, setPosition] = useState(60);
  const [pill, setPill] = useState("");
  const url = usePathname();
  let prev = 0;

  useEffect(() => {
    prev = position;
    switch (url) {
      case "/projects":
        setPosition(61);
        setPill("w-[64px] left-0");
        break;
      case "/":
        setPosition(-37);
        setPill("w-[57px] rounded-s-full left-10");
        break;
      case "/about":
        setPosition(85);
        setPill("w-[56px] rounded-e-full left-11");
        break;
    }
  });

  return (
    <nav className="z-10 sticky shadow-lg top-2 border bg-neutral-800 text-white border-zinc-200 mt-4 p-2 px-4 rounded-full w-fit mx-auto flex justify-center gap-3 text-sm">

      <motion.span
        className={ `-z-10 rounded absolute bg-neutral-600 h-7 top-[4px] ${pill}`}
        initial={{ x: prev }}
        animate={{ x: position }}
        transition={{ type: "keyframes" }}
      ></motion.span>
      

      <Link href="/">Home</Link>
      <Link href="/projects">Projects</Link>
      <Link href="/about">About</Link>
    </nav>
  );
}
