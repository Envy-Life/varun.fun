import { ScrambleText } from "@/components/scramble-text"
import { MapPin, Building2 } from "lucide-react"

export function Header() {
  return (
    <header className="mb-16 space-y-4">
      <h1 className="text-4xl font-bold mb-4 animate-fade-in text-white">
        <span className="inline-block">
          <ScrambleText text="Varun L" />
        </span>
      </h1>
      <div className="flex flex-col gap-2 text-gray-400">
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4" />
          Mumbai/Bengaluru, india
        </div>
        <div className="flex items-center gap-2">
          <Building2 className="w-4 h-4" />
          Senior Infrastructure and Protocol Engineer at <a href="https://spicenet.io" className="hover:text-accent transition-colors duration-200" target="_blank" rel="noopener noreferrer">Spicenet</a>
        </div>
      </div>
      <p className="leading-relaxed animate-fade-in-up">
        21 y/o cs undergrad. I love building random things that serve the most niche usecases and
        solving problems. I enjoy competitive coding, logic puzzles and cybersecurity. if i&apos;m not coding, i&apos;m probably
        working on building a NAS or a PC, watching movies or playing poker.
      </p>
    </header>
  )
}
