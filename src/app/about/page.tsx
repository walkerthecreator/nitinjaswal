import Button from "@/components/Button";
import Image from "next/image";
import Link from "next/link";
import { Github, Twitter } from "lucide-react";
import { profile } from "@/data/portfolio";

const page = () => {
  return (
    <div className="w-4/5 md:w-3/5/ lg:w-2/5 mx-auto mt-20 pb-10">
          <div className="flex gap-2 justify-between items-start">
              <div>
                <h2 className="font-display text-3xl font-medium tracking-tight">{profile.name}</h2>
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
            <h2 className="font-display text-2xl font-medium tracking-tight">About</h2>
            <p className="mt-4 text-muted/60">I&apos;m a product engineer who enjoys turning thoughtful ideas into useful, durable software. I work across product decisions, architecture, and delivery with TypeScript, React, Node.js, and Next.js, and I&apos;m currently exploring app development and generative AI. Outside work, I enjoy space, bikes, mountains, music, and travel.</p>
          </div>

          <div className="mt-10">
            <h2 className="font-display text-2xl font-medium tracking-tight">Now</h2>
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
