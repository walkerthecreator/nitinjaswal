import { instrumentSerif } from "@/lib/font"
import { motion } from "framer-motion"
import { Mail, X, Calendar, Twitter, Linkedin } from "lucide-react"
import { SetStateAction } from "react"

const socialLinks = [
  { href: "mailto:nitinjaswal2616@gmail.com", icon: Mail, label: "Email", external: false },
  { href: "https://twitter.com/nitinjaswal26", icon: Twitter, label: "Twitter / X", external: true },
  { href: "https://www.linkedin.com/in/nitinjaswal26/", icon: Linkedin, label: "Linkedin", external: true },
]

export function Drawer({ setDrawer }: { setDrawer: React.Dispatch<SetStateAction<boolean>> }) {
  return (
    <motion.div
      initial={{ y: 400 }}
      animate={{ y: 0 }}
      exit={{ y: -400 }}
      className="h-[60vh] bg-neutral-800 border border-neutral-600 w-full max-w-4xl mx-auto absolute rounded-t-3xl p-2 shadow-lg shadow-black bottom-0"
    >
      <button
        onClick={() => setDrawer(false)}
        className="bg-neutral-700/80 hover:bg-neutral-700 p-2.5 rounded-full float-end transition-colors"
        aria-label="Close"
      >
        <X className="h-5 w-5 text-muted/70" />
      </button>

      <h1 className={`text-3xl font-medium py-6 text-center mt-8 ${instrumentSerif.className}`}>
        Get in Touch
      </h1>


<div className="px-4">
      <motion.a
        href="https://cal.com/nitinjaswal/30min"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center sm:mx-auto gap-2 w-full sm:max-w-md mb-6 py-3.5 px-4 rounded-xl bg-white text-neutral-900 font-medium hover:bg-zinc-100 transition-colors"
      >
        <Calendar className="h-5 w-5 shrink-0" />
        Book a call with Nitin
      </motion.a>

      <div className="flex items-center gap-3 my-10 max-w-md mx-auto">
        <span className="flex-1 h-px bg-neutral-600" />
        <span className="text-sm text-muted-foreground">or</span>
        <span className="flex-1 h-px bg-neutral-600" />
      </div>

      <div className="flex flex-wrap flex-col sm:flex-row justify-center gap-3 pb-8 md:px-8">
        {socialLinks.map(({ href, icon: Icon, label, external }, i) => (
          <motion.a
            key={label}
            href={href}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="flex items-center  gap-2.5 min-w-[140px] px-4 py-3 rounded-xl bg-neutral-700/60 border border-neutral-600/80 hover:bg-neutral-700 hover:border-neutral-500 transition-colors text-zinc-200 text-sm"
          >
            <Icon className="h-4 w-4 text-muted-foreground shrink-0" />
            <span>{label}</span>
          </motion.a>
        ))}
      </div>
  </div>

    </motion.div>
  )
}
