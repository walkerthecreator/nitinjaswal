"use client"
import { motion } from "framer-motion"

const lines = ["M2138 4273C3317.13 4273 4273 3317.13 4273 2138C4273 958.872 3317.13 3 2138 3C958.872 3 3 958.872 3 2138C3 3317.13 958.872 4273 2138 4273Z"
, "M1028.01 1.49521L2.19434 1614.17"
, "M1028.01 1.49521L2.19434 1614.17"
, "M1028.01 1.49521L2.19434 1614.17"
]

export default function BackgroundLines(){
    const pathVariants = {
        initial: {
            strokeDashoffset: 800,
            strokeDasharray: "50 800",
        },
        animate: {
            strokeDashoffset: 0 ,
            strokeDasharray: "30 800",
            // opacity : [0 , 1 , 1, 0 ]
        }
    }

    return <>
    <div className="h-screen w-screen  inset-0">
<div className="w-full h-40 flex justify-center items-center">


    <div className="bg-stone-800 h-60 w-64 rounded-lg relative">
        <div className="w-2 h-2 rounded-full bg-stone-600 relative top-6 left-4 border border-stone-500" />
        <div className="w-2 h-2 rounded-full bg-stone-600 relative top-7 left-4 border border-stone-500" />
        <div className="w-2 h-2 rounded-full bg-stone-600 relative top-8 left-4 border border-stone-500" />

        <div className="w-20 h-6 bg-stone-700 border border-stone-600 shadow shadow-stone-900 rounded absolute top-6 right-4" />


        <div className="bg-stone-600 border border-stone-700 absolute h-3 w-3 top-24 left-10" />
        <div className="bg-stone-600 border border-stone-700 absolute h-3 w-3 top-32 left-10" />
        <div className="bg-stone-600 border border-stone-700 absolute h-3 w-3 top-40 left-10" />
        <div className="bg-stone-600 border border-stone-700 absolute h-3 w-3 top-48 left-10" />

        <div className="bg-black shadow-inner shadow-stone-700 border border-stone-700 absolute h-5 w-10 top-48 right-10" />
     

        <div className="w-24 rounded-md h-12 bg-stone-800 ring ring-sky-600/20 border absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-stone-700 flex justify-center items-center">
            <h2 className="text-stone-500 font-bold">
                CPU
            </h2>
        </div>
    </div>
</div>

        <motion.svg
        viewBox="0 0 1440 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        // initial={{opacity: 0}}
        // animate={{opacity: 1}}
        className=" inset-0 w-full h-full"
        >
        {
            lines.map((item , idx) => {
                return <motion.path
                key={idx}
                d={item}
                stroke="dodgerblue"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                variants={pathVariants}
                initial="initial"
                animate="animate"
                transition={{
                    duration : 10 , 
                    ease : "linear", 
                    repeat : Infinity,
                    repeatType : "loop",
                    delay  : idx * 0.5,
                    repeatDelay : Math.floor(Math.random() * 10 + 2),
                }}
                />
            })
        }
            </motion.svg>
    </div>
    </>
}