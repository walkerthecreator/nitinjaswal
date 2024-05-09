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
        Namaste, <span className="flex place-items-center"><Image src={"/icons/namaste.png"} className="inline" height={32} width={32} alt="icon" /> </span> I'm Nitin Jaswal, a 23-year-old
        <Image src={"/icons/howdy.png"} height={32} width={32} alt="icon" /> with a passion for building products, traveling <Image src={"/icons/mountain.png"} height={32} width={32} alt="icon" />, and listening to music <Image src={"/icons/speaker.png"} height={32} width={32} alt="icon" />.
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
