import Link from "next/link";

export default function Nav() {

  return (
    <nav className="z-10 w-full fixed shadow-lg bottom-0 border-t bg-neutral-800 text-white border-neutral-600 p-2 px-5 mx-auto flex justify-center gap-3 ">
  
      <div className="flex justify-between w-full max-w-2xl items-center">
      <div className="flex items-center gap-2">
        <div className="bg-gradient-to-br font-medium from-green-400 to-lime-400 h-7 w-7 rounded-full text-lg" />
        <Link href="/">Nitin Jaswal</Link>
      </div>
      <div className="flex items-center gap-4 text-sm">
    <Link href="/projects" className="hover:-translate-y-1 transition-transform">Projects</Link>
    <Link href="/about" className="hover:-translate-y-1 transition-transform">About</Link>
    {/* <Link href="/crafts" className="hover:-translate-y-1 transition-transform">Crafts</Link> */}
      </div>
      </div>
    </nav>
  );
}
