"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ArrowUpRight, Mail, Calendar, Twitter } from "lucide-react";
import { instrumentSerif } from "@/lib/font";
import { profile, skills, workExperiences } from "@/data/portfolio";

export default function Home() {
  const contactOptions = [
    {
      label: "Send an email",
      detail: "nitinjaswal2616@gmail.com",
      href: profile.links.email,
      icon: Mail,
      external: false,
    },
    {
      label: "Message on X",
      detail: "@nitinjaswal26",
      href: profile.links.x,
      icon: Twitter,
      external: true,
    },
    {
      label: "Schedule a call",
      detail: "Pick a 30 minute slot",
      href: profile.links.calendar,
      icon: Calendar,
      external: true,
    },
  ];

  return (
    <>
      <div className="min-w-screen min-h-screen px-2">
        <ScrollArea className="h-[calc(100vh-3rem)]">
          <motion.img
            src="/images/space.png"
            alt="landscape"
            className="w-20 h-20 rounded-full object-cover absolute top-10 left-0"
            initial={{ x: 1200, scale: 1 }}
            animate={{
              x: 1000,
              scale: 0.5,
              rotate: [0, 360],
              transition: {
                x: { ease: "easeOut", duration: 24 },
                scale: { ease: "easeOut", duration: 24 },
                rotate: {
                  duration: 10,
                  ease: "linear",
                  repeat: Infinity,
                },
              },
            }}
          />

          <section className="flex flex-col max-w-2xl  items-start justify-start pt-40 gap-4 min-h-screen w-11/12  md:w-3/5 mx-auto">
            <motion.h1
              initial={{ y: 10, opacity: 0, filter: "blur(10px)" }}
              animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className={`text-4xl text-left font-semibold ${instrumentSerif.className}`}
            >
              {profile.name}
            </motion.h1>
            <motion.h1
              initial={{ y: 10, opacity: 0, filter: "blur(10px)" }}
              animate={{ y: 0, opacity: 0.9, filter: "blur(0px)" }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="w-full text-start leading-relaxed "
            >
              {profile.summary}
            </motion.h1>

            <div className="flex items-center justify-center gap-4 mt-10 has-[img:hover]:saturate-0">
              <motion.img
                initial={{ y: 30, opacity: 0, filter: "blur(10px)" }}
                animate={{ y: 0, opacity: 1, filter: "blur(0px) saturate(0) contrast(1.2) brightness(0.8)" }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                src="/images/nitin-0.jpeg"
                alt="Nitin Jaswal"
                width={200}
                height={200}
                className="h-52 w-56 rounded-md object-cover ring ring-stone-800 border border-stone-700 hover:saturate-100 "
              />
              <motion.img
                initial={{ y: 30, opacity: 0, filter: "blur(10px)" }}
                animate={{ y: 0, opacity: 1, filter: "blur(0px) saturate(0)" }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                src="/images/nitin-second.jpg"
                alt="Nitin Jaswal"
                width={200}
                height={200}
                className="h-52 w-56 rounded-md  object-cover border ring ring-stone-800 border-stone-600 hover:saturate-100 "
              />
              <motion.img
                initial={{ y: 30, opacity: 0, filter: "blur(10px)" }}
                animate={{ y: 0, opacity: 1, filter: "blur(0px) saturate(0)" }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                src="/images/nitin-third.jpg"
                alt="Nitin Jaswal"
                width={200}
                height={200}
                className="h-52 w-56  rounded-md object-cover border ring ring-stone-800 border-stone-600 hover:saturate-100 "
              />
            </div>
          </section>

          <section className="min-w-screen flex items-center justify-center min-h-screen">
            <div className="max-w-xl md:max-w-3xl w-full mx-auto">
              <div className="w-full py-4">
                <h1
                  className={`${instrumentSerif.className} text-3xl mb-20 text-center`}
                >
                  Timeline
                </h1>
                <div className="mx-4 has-[div:hover]:text-neutral-400">
                  {workExperiences.map((work, index) => (
                    <div
                      className="hover:text-white group py-4 cursor-pointer transition-colors flex flex-col md:flex-row justify-between items-start md:items-center gap-1 md:gap-3"
                      key={index}
                    >
                      <div className="text-neutral-400 group-hover:text-white transition-colors ">{work.date}</div>
                      <div className="border border-dashed border-neutral-700 flex-1 hidden md:block" />
                      <div className="flex items-center gap-2 ">
                        {work.title}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="max-w-xl mx-auto flex flex-col gap-10 items-center h-screen justify-center">
            <h1 className={`text-3xl ${instrumentSerif.className}`}>
              Tech Cloud
            </h1>
            <div className="grid grid-cols-4 gap-8">
              {skills.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center gap-2 group"
                >
                  <Image
                    width={48}
                    height={48}
                    src={item.icon}
                    alt={item.title}
                    className="h-12 w-12 saturate-0 invert "
                  />
                  <span className="text-xs opacity-90 group-hover:opacity-100 tracking-wider transition-opacity">
                    {item.title}
                  </span>
                </div>
              ))}
            </div>
          </section>

          <section className="mx-auto flex min-h-screen max-w-4xl items-center justify-center py-20">
            <div className="relative grid w-full overflow-hidden rounded-2xl border border-white/10 bg-neutral-900 shadow-[0_24px_80px_rgba(0,0,0,0.42)] md:grid-cols-2">
              <div className="relative flex flex-col justify-between gap-10 overflow-hidden p-6 sm:p-8">
                <div className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-lime-300/[0.06] blur-3xl" />

                <div className="relative">
                  <div className="mb-6 flex w-fit items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.07] px-3 py-1.5 text-[11px] text-emerald-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]" />
                    Open for new opportunities
                  </div>
                  <h2 className={`${instrumentSerif.className} max-w-sm text-4xl leading-[1.05] sm:text-5xl`}>
                    Let&apos;s build your next big idea.
                  </h2>
                  <p className="mt-4 max-w-sm leading-relaxed text-neutral-400">
                    Have a project, role, or collaboration in mind? Choose the quickest way to reach me.
                  </p>
                </div>

                <div className="relative space-y-2">
                  {contactOptions.map((option, index) => {
                    const Icon = option.icon;

                    return (
                      <motion.a
                        key={option.label}
                        href={option.href}
                        target={option.external ? "_blank" : undefined}
                        rel={option.external ? "noopener noreferrer" : undefined}
                        initial={{ opacity: 0, y: 8 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.06 }}
                        whileHover={{ x: 3 }}
                        className={`group flex items-center gap-3 rounded-xl border p-3 transition-colors ${
                          index === 0
                            ? "border-white bg-white text-neutral-950"
                            : "border-white/10 bg-white/[0.035] text-white hover:border-white/20 hover:bg-white/[0.07]"
                        }`}
                      >
                        <span
                          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${
                            index === 0 ? "bg-neutral-900 text-white" : "bg-white/[0.07] text-neutral-300"
                          }`}
                        >
                          <Icon className="h-4 w-4" aria-hidden="true" />
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="block text-sm font-medium">{option.label}</span>
                          <span className="block truncate text-xs text-neutral-500">
                            {option.detail}
                          </span>
                        </span>
                        <ArrowUpRight className="h-4 w-4 shrink-0 opacity-50 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" aria-hidden="true" />
                      </motion.a>
                    );
                  })}
                </div>
              </div>
              <Image
                height={500}
                width={700}
                src="/images/me.jpg"
                alt="Nitin Jaswal"
                className="hidden h-full min-h-[560px] w-full object-cover object-top grayscale transition-all duration-700 hover:grayscale-0 md:block"
              />
            </div>
          </section>
        </ScrollArea>
      </div>
    </>
  );
}
