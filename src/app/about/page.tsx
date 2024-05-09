"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const page = () => {
  return (
    <div className="w-4/5 mx-auto mt-10 min-h-screen">
      <motion.h1
        initial={{ y: "40px" }}
        animate={{ y: 0 }}
        transition={{ type: "keyframes" }}
        className="text-3xl z-0 py-10 text-center font-medium text-zinc-600 w-3/4 mx-auto">
        Namaste, I&apos;m Nitin Jaswal, a 23-year-old
        with a passion for building products, traveling, and listening to music.
      </motion.h1>

      <motion.img
        initial={{ y: "40px", opacity: 0.3 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "keyframes" }}
        className="w-4/5 z-20 mx-auto transition-all rounded-lg"
        src={"/images/nitin.jpg"}
        width={1400}
        height={800}
        alt="nitin photo"
      ></motion.img>

      <div className="min-h-screen w-4/5 mx-auto mt-10">
        <h2 className="text-4xl font-medium text-center">
          Some of My Favourite Picks{" "}
        </h2>
        <div className="mx-auto w-4/5 mt-10"></div>
      </div>
    </div>
  );
};

export default page;
