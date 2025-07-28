"use client"

import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function ProjectsPage() {
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="group"
            >
              <Link href="/projects/web">
                <div className="bg-[#1a1a2e] border border-[#fca311]/30 hover:border-[#fca311] rounded-lg p-8 text-center transition-all duration-300 hover:transform hover:scale-105 cursor-pointer">
                  <div className="text-6xl mb-4">🌐</div>
                  <h3 className="text-xl md:text-2xl font-bold mb-4 text-[#fca311]">Web Projects</h3>
                  <p className="text-gray-300">
                    Full-stack web applications built with modern technologies like Next.js, React, Node.js, and more.
                  </p>
                </div>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="group"
            >
              <Link href="/projects/mobile">
                <div className="bg-[#1a1a2e] border border-[#fca311]/30 hover:border-[#fca311] rounded-lg p-8 text-center transition-all duration-300 hover:transform hover:scale-105 cursor-pointer">
                  <div className="text-6xl mb-4">📱</div>
                  <h3 className="text-xl md:text-2xl font-bold mb-4 text-[#fca311]">Mobile Projects</h3>
                  <p className="text-gray-300">
                    Cross-platform mobile applications built with Flutter, React Native, and native technologies.
                  </p>
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}