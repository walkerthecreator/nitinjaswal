"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, CircleCheck } from "lucide-react";

export default function CraftsPage() {
  const [currentIndex, setCurrentIndex] = React.useState<number>(1);
  const position: { [key: number]: string } = {
    1: "1rem",
    2: "3.5rem",
    3: "6rem",
  };
  const cellWidth = position[currentIndex];
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="my-10 relative flex items-center justify-center gap-8 w-24">
        <motion.div
          className="absolute p-2 left-0 z-[-10] bg-green-600 rounded-full"
          animate={{ width: cellWidth }}
          transition={{ duration: 0.3, type: "spring", bounce: 0.3 }}
        />
        <div className="h-2 w-2 bg-white rounded-full" />
        <div className="h-2 w-2 bg-white rounded-full" />
        <div className="h-2 w-2 bg-white rounded-full" />
      </div>

      <div className="flex items-center gap-2 w-56 overflow-hidden">
        <AnimatePresence>
          {currentIndex > 1 && (
            <motion.button
              key="back-button"
              initial={{ width: "70%", x: -10, opacity: 0 }}
              animate={{ width: "100%", x: 0, opacity: 1 }}
              exit={{
                width: "70%",
                x: -10,
                opacity: 0,
                transition: { duration: 0.1 },
              }}
              transition={{ duration: 0.3, type: "spring", bounce: 0.3 }}
              className="bg-stone-700 p-3 px-6 rounded-3xl"
              onClick={() => setCurrentIndex((prev) => prev - 1)}
            >
              back
            </motion.button>
          )}
        </AnimatePresence>
        <motion.button
          className="bg-orange-700 p-3 rounded-3xl w-full font-semibold text-orange-50 min-w-[8rem] justify-center flex items-center"
          onClick={() => setCurrentIndex((prev) => prev + 1)}
          animate={{ width: currentIndex > 1 ? "8rem" : "100%" }}
          transition={{ type: "spring", bounce: 0.3, duration: 0.3 }}
        >
          <AnimatePresence mode="wait">
            {currentIndex < 3 ? (
              <motion.div
              key="continue-text"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.2, type: "spring", bounce: 0.3 }}
              >
                Continue
              </motion.div>
            ) : (
              <motion.div
                key="finish-text"
                className="flex items-center gap-1"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x:10 }}
                transition={{ duration: 0.2, type: "spring", bounce: 0.3 }}
              >
                <div className="bg-white h-4 w-4 inline-flex justify-center items-center rounded-full">
                <Check className="h-3 w-3 text-orange-500" />
                </div>
                Finish
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>
    </div>
  );
}
