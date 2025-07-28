
"use client"

import { ArrowLeft, ChevronLeft, ChevronRight, Github } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { notFound } from "next/navigation"
import { useState } from "react"
import { projects } from "../projects-data"

const MobileFrame = ({
  children,
  className = "",
  isDark = false,
}: {
  children: React.ReactNode
  className?: string
  isDark?: boolean
}) => {
  return (
    <div className={`relative border-[8px] border-zinc-800 rounded-[2rem] shadow-xl ${className}`}>
      <div className="h-[24px] w-[2px] absolute -right-[10px] top-[48px] rounded-l-lg bg-zinc-800"></div>
      <div className="h-[32px] w-[2px] absolute -right-[10px] top-[88px] rounded-l-lg bg-zinc-800"></div>
      <div className="h-[32px] w-[2px] absolute -right-[10px] top-[128px] rounded-l-lg bg-zinc-800"></div>
      <div className="h-[24px] w-[2px] absolute -left-[10px] top-[48px] rounded-r-lg bg-zinc-800"></div>
      <div className={`rounded-[1.7rem] overflow-hidden w-full h-full ${isDark ? "bg-zinc-900" : "bg-white"}`}>
        {children}
        <div className="absolute bottom-1 left-0 right-0 flex justify-center">
          <div className="w-16 h-1 bg-zinc-700 rounded-full"></div>
        </div>
      </div>
    </div>
  )
}

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id === params.id)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  if (!project || !project.screenshots?.length) {
    return (
      <div className="min-h-screen bg-[#0f0f1a] text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project not found</h1>
          <Link href="/projects/mobile" className="text-[#fca311] hover:text-[#fca311]/80">
            Back to Mobile Projects
          </Link>
        </div>
      </div>
    )
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev === (project.screenshots?.length || 1) - 1 ? 0 : prev + 1))
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? (project.screenshots?.length || 1) - 1 : prev - 1))
  }

  return (
    <div className="min-h-screen bg-[#0f0f1a] text-white">
      <div className="container mx-auto px-4 py-8">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
          <Link href="/projects/mobile" className="inline-flex items-center text-[#fca311] hover:text-[#fca311]/80 mb-8">
            <ArrowLeft className="mr-2" /> Back to Mobile Projects
          </Link>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <motion.h1
            className="text-3xl md:text-4xl font-bold mb-6 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-[#fca311]">{project.title}</span>
          </motion.h1>

          <div className="bg-[#1a1a2e] rounded-3xl p-8 mb-12 shadow-2xl">
            <div className="grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 items-center">
              {/* Main Preview */}
              <div className="space-y-6">
                <div className="relative max-w-[300px] mx-auto">
                  <MobileFrame className="aspect-[9/19]" isDark={false}>
                    <div className="relative w-full h-[calc(100%-48px)]">
                      <Image
                        src={project.screenshots?.[currentImageIndex]?.image || "/placeholder.svg"}
                        alt={project.screenshots?.[currentImageIndex]?.title || project.title}
                        fill
                        className="object-cover"
                        priority
                      />
                    </div>
                  </MobileFrame>

                  <button
                    onClick={prevImage}
                    className="absolute -left-4 top-1/2 transform -translate-y-1/2 bg-[#fca311] text-white p-2 rounded-full hover:bg-[#e69500] transition-all z-10"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute -right-4 top-1/2 transform -translate-y-1/2 bg-[#fca311] text-white p-2 rounded-full hover:bg-[#e69500] transition-all z-10"
                  >
                    <ChevronRight size={24} />
                  </button>
                </div>

                <div className="flex justify-center space-x-2">
                  {project.screenshots.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentImageIndex ? "bg-[#fca311]" : "bg-gray-600"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Screen Info */}
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-[#fca311] mb-2">
                    {project.screenshots?.[currentImageIndex]?.title || "Preview"}
                  </h2>
                  <p className="text-gray-300 leading-relaxed">
                    {project.screenshots?.[currentImageIndex]?.description || "No description available"}
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">Screen Preview</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-3">
                    {project.screenshots.map((screen, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className="transform transition-all duration-200 hover:scale-105"
                      >
                        <MobileFrame
                          className={`aspect-[9/19] ${
                            index === currentImageIndex ? "ring-2 ring-[#fca311]" : "opacity-60"
                          }`}
                          isDark={false}
                        >
                          <div className="relative w-full h-[calc(100%-48px)]">
                            <Image
                              src={screen.image || "/placeholder.svg"}
                              alt={screen.title}
                              fill
                              className="object-cover"
                            />
                          </div>
                        </MobileFrame>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 bg-[#1a1a2e] rounded-3xl p-8 shadow-2xl">
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-[#fca311] mb-4">Project Overview</h2>
                <p className="text-gray-300 leading-relaxed">{project.description}</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#fca311] mb-4">Technologies Used</h2>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-[#fca311]/20 text-[#fca311] rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-[#fca311] mb-4">Key Features</h2>
                <ul className="space-y-2">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <div className="w-2 h-2 bg-[#fca311] rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 space-y-4">
                <div className="flex items-center justify-center space-x-4">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-[#333] hover:bg-[#444] rounded-full transition-colors"
                    title="View on GitHub"
                  >
                    <Github className="w-6 h-6 text-white" />
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-[#01875f] hover:bg-[#016b4a] rounded-full transition-colors"
                    title="Download on Google Play"
                  >
                    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.92 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                    </svg>
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-[#007aff] hover:bg-[#0056cc] rounded-full transition-colors"
                    title="Download on App Store"
                  >
                    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z"/>
                    </svg>
                  </a>
                </div>
                <div className="text-center">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-[#fca311] hover:bg-[#e69500] text-black px-6 py-3 rounded-lg transition-colors text-lg font-semibold"
                  >
                    <Github className="mr-2" />
                    View Source Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
