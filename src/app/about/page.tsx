import Button from "@/components/Button";
import Image from "next/image";
import Link from "next/link";
import { instrumentSerif } from "@/lib/font";
import { Github, Twitter } from "lucide-react";
import { profile } from "@/data/portfolio";

const page = () => {
  return (
    <div className="w-4/5 md:w-3/5/ lg:w-2/5 mx-auto mt-20 pb-10">
          <div className="flex gap-2 justify-between items-start">
              <div>
                <h2 className={`text-3xl font-semibold ${instrumentSerif.className}`}>{profile.name}</h2>
                  <p className="md:w-2/4 mt-2 text-muted/60">{profile.role} focused on building thoughtful products.</p>
                  <div className="mt-3 flex gap-2 text-zinc-200">

                    <Link href={profile.links.x} target="_blank">
                    <Twitter className="h-5 w-5" />
                    </Link>
                    <Link href={profile.links.github} target="_blank">
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
            <p className="mt-4 text-muted/60">{profile.availability} Reach out to discuss what you&apos;re building.</p>
          </div>

          <Link href={profile.links.email}>
            <button className="text-zinc-100 my-10 text-center  w-full md:min-w-32 
            bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700
            font-medium p-2 rounded-md">Get in Touch</button> 
          </Link>
    </div>
  );
};

export default page;
