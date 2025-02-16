import Button from "@/components/Button";
import Image from "next/image";
import Link from "next/link";
import { instrumentSerif } from "@/lib/font";
import { Github, Twitter } from "lucide-react";

const page = () => {


  return (
    <div className="w-4/5 md:w-3/5/ lg:w-2/5 mx-auto mt-20">
          <div className="flex gap-2 items-start">
              <div>
                <h2 className={`text-3xl font-semibold ${instrumentSerif.className}`}>Nitin Jaswal</h2>
                  <p className="md:w-2/4 mt-2 text-muted/60">Full Stack Engineer Focused on Building Products with an attention to Detail.</p>
                  <div className="mt-3 flex gap-2 text-zinc-200">

                    <Link href={'https://x.com/nitinjaswal26'} target="_blank">
                    <Twitter className="h-5 w-5" />
                    </Link>
                    <Link href={'https://github.com/walkerthecreator'} target="_blank">
                    <Github className="h-5 w-5" />
                    </Link>
                  </div>
              </div>
              <Image draggable="false" src="/images/potrait.png" alt="Nitin-photo" className="rounded-md" width={120} height={80}></Image>
          </div>

          <div className="mt-10">
            <h2 className={`font-semibold text-2xl ${instrumentSerif.className}`}>About</h2>
            <p className="mt-4 text-muted/60">As a Full Stack Engineer i have currated multiple web apps. I mostly work with TypeScript, React, NodeJs, and NextJs. I have an over a year of experience in working on FullStack Projects and have a degree in Computer Science & Engineering. I Like Space, Bikes, Mountains, Music, Cosmos and Traveling.</p>
          </div>

          <div className="mt-10">
            <h2 className={`font-semibold text-2xl ${instrumentSerif.className}`}>Now</h2>
            <p className="mt-4 text-muted/60">As a Fullstack Engineer, I&apos;m eager to contribute to interesting projects.  I&apos;m open to freelance, part-time, and collaborative opportunities.  Reach out to discuss your project – I&apos;m excited to build something great!.</p>
          </div>

          <Link href={'https://mail.google.com/mail/u/0/?fs=1&tf=cm'} target="_blank">
            <button className="text-zinc-100 my-10 text-center  w-full md:min-w-32 
            bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700
            font-medium p-2 rounded-md">Get in Touch</button> 
          </Link>



    </div>
  );
};

export default page;
