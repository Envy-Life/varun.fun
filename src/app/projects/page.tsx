import { ScrambleText } from "@/components/scramble-text"
import { ProjectCard } from "@/components/project-card"
import { Metadata } from "next"

const projects = [
  {
    title: "Solana Indexer",
    description:
      "A highly efficient and scalable self-hostable and programmable indexer for Solana, Powered by Superteam",
    role: "creator and maintainer",
    technologies: [
      "typescript",
      "rust",
      "solana",
      "mongoDB",
      "graphql"
    ],
    href: "https://github.com/Envy-Life/Solana-Indexer",
  },
  {
    title: "Scalping Bot",
    description: "A scalping bot for hyperliquid built using indicators from ta-lib",
    role: "creator",
    technologies: ["python", "hyperliquid", "ta-lib", "pandas"],
    href: "https://github.com/Envy-Life",
  },
  {
    title: "IOS wallet connect",
    description: "Built a flutter package to support and simplify deeplinks for solana mobile wallets",
    role: "creator and maintainer",
    technologies: ["flutter", "rust", "deeplinks", "solana"],
    href: "https://github.com/Envy-Life/IOS_Wallet_Connect",
  },
  {
    title: "Baos world",
    description: "Lead the development for the first meme defi platform on BSC",
    role: "creator",
    technologies: ["node.js", "solidity", "postgresql", "typescript", "substreams"],
    href: "https://github.com/Envy-Life",
  }
]

export default function ProjectsPage() {
  return (
    <main className="animate-fade-in-up">
      <h1 className="text-4xl font-bold mb-8 text-white">
        <span className="text-accent mr-2">*</span>
        <ScrambleText text="projects" />
      </h1>

      <p className="text-gray-400 mb-12 leading-relaxed">
        here are some of the projects i&apos;ve worked on. i love building tools
        that make developers&apos; lives easier and exploring new technologies
        along the way.
      </p>

      <div className="space-y-12">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </main>
  )
}

export const metadata: Metadata = {
  title: "Projects",
  description: "Some of the projects I've worked on.",
  openGraph: {
    images: [
      {
        url: "https://www.varun.fun/og/home?title=projects",
      },
    ],
  },
}
