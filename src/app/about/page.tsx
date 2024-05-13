import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <div className="w-4/5 md:w-3/5/ lg:w-2/5 mx-auto mt-20">
          <div className="flex gap-2 items-start">
              <div>
                <h2 className="text-xl font-semibold">Nitin Jaswal</h2>
                  <p className="md:w-2/4 mt-4">Full Stack Engineer Focused on Building Products with an attention to Detail.</p>
                  <div className="mt-3 flex gap-2 text-zinc-700">
                    <Link href={'/'}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                    </Link>
                    <Link href={'/'}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                    </Link>
                    <Link href={'/'}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                    </Link>
                  </div>
              </div>
              <Image src="/images/nitin-2.jpg" alt="Nitin-photo" className="rounded-md" width={120} height={80}></Image>
          </div>

          <div className="mt-10">
            <h2 className="font-semibold text-xl">About</h2>
            <p className="mt-4">As a Full Stack Engineer i have on currated multiple web apps. Currently, I work mostly with TypeScript, React, NodeJs, and NextJs. I have an over a year of experience in working on FullStack Projects. I have a degree in Computer Science & Engineering. I Like Space, Bikes, Mountains, Music, Cosmos and traveling.</p>
          </div>

          <div className="mt-10">
            <h2 className="font-semibold text-xl">Now</h2>
            <p className="mt-4">I&apos;m Currently looking for Full time opportunities as an fullstack Engineer, but I&apos;m also open to freelance projects and part-time jobs. Feel free to reach out if you&apos;d like to discuss a project or collaboration. I&apos;m excited to work together and create something great!.</p>
          </div>

          <button className="from-zinc-600 my-10 w-full md:min-w-32 h-fit text-center z-3 m-[2px] bg-gradient-to-br text-zinc-200 relative font-medium to-zinc-800 p-2 px-4 rounded-md flex gap-2 justify-center place-items-center">Get in Touch</button>

    </div>
  );
};

export default page;
