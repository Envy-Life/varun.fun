import Link from "next/link"

const links = [
  { title: "email", href: "mailto:varun.nyl@gmail.com" },
  { title: "x.com", href: "https://x.com/0x3nvy" },
  { title: "github", href: "https://github.com/Envy-Life" },
  { title: "linkedin", href: "https://www.linkedin.com/in/0x3nvy/" },
  { title: "book a call", href: "https://cal.com/0x3nvy" },
]

export function LinksSection() {
  return (
    <section className="animate-fade-in-up">
      <h2 className="text-2xl font-bold mb-6 flex items-center text-white">
        <span className="text-accent mr-2">*</span> links
      </h2>
      <div className="flex flex-wrap gap-4 text-sm">
        {links.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className="text-gray-400 hover:text-accent transition-colors duration-200"
          >
            {link.title}
          </Link>
        ))}
      </div>
      <p className="text-xs text-gray-500 mt-8 italic">
        portfolio inspired by <a href="https://nexxel.dev" className="hover:text-accent transition-colors duration-200" target="_blank" rel="noopener noreferrer">varun.fun</a>
      </p>
    </section>
  )
}
