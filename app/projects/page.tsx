"use client"

import { ArrowLeft, Github, Apple, PlayCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { projects } from "./projects-data"

const MobileFrame = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative mx-auto border-[14px] border-black rounded-[2.5rem] h-[400px] w-[200px] md:h-[500px] md:w-[250px] lg:h-[600px] lg:w-[300px] shadow-xl">
      <div className="h-[32px] w-[3px] absolute -right-[17px] top-[72px] rounded-l-lg bg-black"></div>
      <div className="h-[46px] w-[3px] absolute -right-[17px] top-[124px] rounded-l-lg bg-black"></div>
      <div className="h-[46px] w-[3px] absolute -right-[17px] top-[178px] rounded-l-lg bg-black"></div>
      <div className="h-[32px] w-[3px] absolute -left-[17px] top-[72px] rounded-r-lg bg-black"></div>
      <div className="rounded-[2rem] overflow-hidden w-full h-full bg-white">
        {children}
        <div className="absolute bottom-2 left-0 right-0 flex justify-center">
          <div className="w-32 h-1 bg-black rounded-full"></div>
        </div>
      </div>
    </div>
  )
}

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[#0f0f1a] text-white">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
          <Link href="/" className="inline-flex items-center text-[#fca311] hover:text-[#fca311]/80 mb-8">
            <ArrowLeft className="mr-2" /> Back to Home
          </Link>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <motion.h1
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            My Recent <span className="text-[#fca311]">Works</span>
          </motion.h1>
          <motion.p
            className="text-center text-gray-400 mb-8 md:mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Here are a few projects I've worked on recently.
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-12">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center"
              >
                <MobileFrame>
                  <div className="relative w-full h-full">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </MobileFrame>
                <div className="mt-4 md:mt-6 text-center">
                  <h3 className="text-lg md:text-xl font-bold mb-2 text-[#fca311]">{project.title}</h3>
                  <p className="text-xs md:text-sm text-gray-300 mb-4">{project.description}</p>
                  <div className="flex justify-center space-x-4 mb-4">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#fca311] hover:text-[#e69500] transition-colors"
                    >
                      <Github size={24} />
                    </a>
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#fca311] hover:text-[#e69500] transition-colors"
                    >
                      <Apple size={24} />
                    </a>
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#fca311] hover:text-[#e69500] transition-colors"
                    >
                      <PlayCircle size={24} />
                    </a>
                  </div>
                  <Link
                    href={`/projects/${project.id}`}
                    className="inline-block px-6 py-2 text-sm md:text-base bg-[#fca311] text-white rounded-md hover:bg-[#e69500] transition-colors"
                  >
                    Preview
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

