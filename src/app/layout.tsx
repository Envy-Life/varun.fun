import type { Metadata } from "next"
import { Geist_Mono } from "next/font/google"
import "./globals.css"
import { Navbar } from "../components/navbar"

const geistMono = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-mono",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://www.varun.fun"),
  title: {
    default: "Varun L",
    template: "%s | Varun L",
  },
  description: "Developer",
  openGraph: {
    title: "Varun L",
    description: "Developer",
    url: "https://www.varun.fun",
    siteName: "Varun L",
    locale: "en_US",
    type: "website",
    images: ["https://www.varun.fun/og/home"],
  },
  robots: {
    index: true,
    follow: true,
    "max-video-preview": -1,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
  twitter: {
    title: "Varun L",
    card: "summary_large_image",
    creator: "@0x3nvy",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${geistMono.variable} antialiased min-h-screen font-mono`}
      >
        <div className="max-w-4xl mx-auto px-4 py-8">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  )
}
