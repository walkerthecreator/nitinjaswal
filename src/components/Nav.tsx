import Link from "next/link";

export default function Nav() {

  return (
    <nav className="z-10 w-full fixed shadow-lg bottom-0 border-t bg-neutral-800 text-white border-neutral-600 mt-4 p-2 py-3 mx-auto flex justify-center gap-3 ">
    
      <div className="flex justify-between w-full max-w-2xl items-center">
      <div className="flex items-center gap-2">
        <div className="bg-gradient-to-br font-medium from-green-400 to-lime-400 h-8 w-8 rounded-full text-lg" />
        <Link href="/">Nitin Jaswal</Link>
      </div>
      <div className="flex items-center gap-4">
    <Link href="/projects" className="hover:-translate-y-1 transition-transform">Projects</Link>
    <Link href="/about" className="hover:-translate-y-1 transition-transform">About</Link>
      </div>
      </div>
    </nav>
  );
}
