"use client"

import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import Image from "next/image"
import { realtimeProjects } from "./projects-data"

export default function RealtimeProjectsPage() {
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
            Real-time & WebSocket <span className="text-[#fca311]">Integrations</span>
          </motion.h1>
          <motion.p
            className="text-center text-gray-400 mb-8 md:mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Real-time applications with live data synchronization.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {realtimeProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-[#1a1a2e] border border-[#fca311]/30 hover:border-[#fca311] rounded-lg overflow-hidden transition-all duration-300 hover:transform hover:scale-105">
                  {/* Banner Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      unoptimized
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "/placeholder.svg";
                      }}
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a2e]/80 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        project.status === 'Production' 
                          ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                          : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#fca311] mb-3">{project.title}</h3>
                    <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-[#fca311]/20 text-[#fca311] rounded text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>

                    <div className="flex items-center justify-end">
                      <Link
                        href={`/projects/realtime/${project.id}`}
                        className="inline-block px-4 py-2 bg-[#fca311] text-black rounded-md hover:bg-[#e69500] transition-colors font-semibold"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}