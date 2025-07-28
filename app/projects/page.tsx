
"use client"

import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function ProjectsPage() {
  const projectCategories = [
    {
      title: "Mobile Applications",
      emoji: "📱",
      description: "Cross-platform mobile apps built with Flutter and React Native",
      href: "/projects/mobile"
    },
    {
      title: "Web Applications & Websites",
      emoji: "🌐",
      description: "Full-stack web applications and responsive websites",
      href: "/projects/web"
    },
    {
      title: "System & Backend Development",
      emoji: "⚙️",
      description: "Backend systems, APIs, and server-side applications",
      href: "/projects/backend"
    },
    {
      title: "CLI Tools & Automation",
      emoji: "🛠️",
      description: "Command-line tools and automation scripts",
      href: "/projects/cli"
    },
    {
      title: "Real-time & WebSocket Integrations",
      emoji: "🔄",
      description: "Real-time applications with live data synchronization",
      href: "/projects/realtime"
    }
  ]

  return (
    <div className="min-h-screen bg-[#0f0f1a] text-white">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
          <Link href="/" className="inline-flex items-center text-[#fca311] hover:text-[#fca311]/80 mb-8">
            <ArrowLeft className="mr-2" /> Back to Home
          </Link>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.h1
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            My <span className="text-[#fca311]">Projects</span>
          </motion.h1>
          <motion.p
            className="text-center text-gray-400 mb-8 md:mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Choose a category to explore my work.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <Link href={category.href}>
                  <div className="bg-[#1a1a2e] border border-[#fca311]/30 hover:border-[#fca311] rounded-lg p-6 text-center transition-all duration-300 hover:transform hover:scale-105 cursor-pointer h-full">
                    <div className="text-4xl mb-3">{category.emoji}</div>
                    <h3 className="text-lg font-bold mb-3 text-[#fca311]">{category.title}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {category.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
