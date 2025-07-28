import "./globals.css"
import { Inter } from "next/font/google"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Script from "next/script"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Yordanos Bogale | Full Stack Developer Portfolio",
  description:
    "Official portfolio website of Yordanos Bogale - an experienced Full Stack Developer specializing in Flutter, React, and Node.js. View projects and skills.",
  keywords: [
    "Yordanos",
    "Yordanos Bogale",
    "Full Stack Developer",
    "Flutter Developer",
    "Software Engineer",
    "Portfolio",
  ],
  alternates: {
    canonical: "https://v0-yordanos-portifolio-d4460g2ehnb-mspifk.vercel.app",
  },
  openGraph: {
    title: "Yordanos Bogale | Full Stack Developer Portfolio",
    description:
      "Official portfolio website of Yordanos Bogale - an experienced Full Stack Developer specializing in Flutter, React, and Node.js.",
    url: "https://v0-yordanos-portifolio-d4460g2ehnb-mspifk.vercel.app",
    siteName: "Yordanos Bogale Portfolio",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_2025-01-16_15-28-09.jpg-5iAgmlmdXYSX4SGH2Ua15qTTdCK285.jpeg",
        width: 1200,
        height: 630,
        alt: "Yordanos Bogale",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yordanos Bogale | Full Stack Developer Portfolio",
    description: "Official portfolio website of Yordanos Bogale - an experienced Full Stack Developer.",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_2025-01-16_15-28-09.jpg-5iAgmlmdXYSX4SGH2Ua15qTTdCK285.jpeg",
    ],
  },
  verification: {
    google: "your-google-verification-code", // You'll need to add this from Google Search Console
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="canonical" href="https://v0-yordanos-portifolio-d4460g2ehnb-mspifk.vercel.app" />
      </head>
      <body className={`${inter.className} flex flex-col min-h-screen bg-[#0f0f1a] text-white`}>
        <Script id="schema-script" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Yordanos Bogale",
              "url": "https://v0-yordanos-portifolio-d4460g2ehnb-mspifk.vercel.app",
              "image": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_2025-01-16_15-28-09.jpg-5iAgmlmdXYSX4SGH2Ua15qTTdCK285.jpeg",
              "sameAs": [
                "https://github.com/yordanos-bogale5",
                "https://www.linkedin.com/in/yordanos-bogale",
                "https://twitter.com/your-twitter-account"
              ],
              "jobTitle": "Full Stack Developer",
              "description": "Experienced Full Stack Developer specializing in Flutter, React, and Node.js",
              "knowsAbout": ["Flutter", "React", "Node.js", "Full Stack Development", "Software Engineering"],
              "worksFor": {
                "@type": "Organization",
                "name": "Freelance"
              }
            }
          `}
        </Script>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

