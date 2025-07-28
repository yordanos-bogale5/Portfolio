"use client"

import { ArrowLeft } from "lucide-react"
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

export default function MobileProjectsPage() {
  return (
    <div className="min-h-screen bg-[#0f0f1a] text-white">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
          <Link href="/projects" className="inline-flex items-center text-[#fca311] hover:text-[#fca311]/80 mb-8">
            <ArrowLeft className="mr-2" /> Back to Projects
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
            Here are a few mobile projects I've worked on recently.
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
                  <p className="text-xs md:text-sm text-gray-300 mb-4 line-clamp-3">{project.description}</p>
                  
                  <div className="flex items-center justify-center space-x-3 mb-4">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-[#333] hover:bg-[#444] rounded-full transition-colors"
                      title="View on GitHub"
                    >
                      <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-[#01875f] hover:bg-[#016b4a] rounded-full transition-colors"
                      title="Download on Google Play"
                    >
                      <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.92 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                      </svg>
                    </a>
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-[#007aff] hover:bg-[#0056cc] rounded-full transition-colors"
                      title="Download on App Store"
                    >
                      <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z"/>
                      </svg>
                    </a>
                  </div>
                  
                  <Link
                    href={`/projects/mobile/${project.id}`}
                    className="inline-block px-6 py-2 text-sm md:text-base bg-[#fca311] text-black rounded-md hover:bg-[#e69500] transition-colors font-semibold"
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