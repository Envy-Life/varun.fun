import { Header } from "@/components/header"
import { Item, SectionList } from "@/components/section-list"
import { BlogSection } from "@/components/blog-section"
import { LinksSection } from "@/components/links-section"

const workItems: Item[] = [
  {
    title: "Spicenet",
    role: "Senior infrastructure and protocol engineer",
    period: "June 2024 - present",
    description:
      "Building the first omni composability middleware for the global financial internet.",
    href: "https://spicenet.io",
  },
  {
    title: "Proto geo",
    role: "Devops Lead",
    period: "December 2023 - May 2024",
    description:
      "Leading storage and processing infrastructure for a large-scale web3 geospatial data platform",
    href: "https://www.proto-geo.xyz",
  },
  {
    title: "Jio",
    role: "full-stack engineer",
    period: "May 2023 - June 2023",
    description:
      "Designed and implemented all aspects of a full-stack mobile application for the safety team at Jio",
    href: "https://www.jio.com",
  },
  {
    title: "Capx",
    role: "Intern/Blockchain engineer",
    period: "March 2022 - May 2023",
    description: "Wrote smart contracts for Capx mint protocol giving users a no code launchpad for their tokens",
    href: "https://www.capx.ai",
  }
]

const projectItems = [
  {
    title: "Solana Indexer",
    role: "creator and maintainer",
    description:
      "A highly efficient and scalable self-hostable and programmable indexer for Solana, Powered by Superteam",
    href: "https://github.com/Envy-Life/Solana-Indexer",
  },
  {
    title: "Scalping Bot",
    role: "creator",
    description: "A scalping bot for hyperliquid built using indicators from ta-lib",
    href: "https://github.com/Envy-Life",
  },
]

export default function HomePage() {
  return (
    <>
      <Header />
      <SectionList title="work" items={workItems} />
      <SectionList
        title="projects"
        items={projectItems}
        viewAllHref="/projects"
        viewAllText="all projects"
      />
      <BlogSection />
      <LinksSection />
    </>
  )
}
