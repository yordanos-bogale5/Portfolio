
"use client"

import { ArrowLeft, Github, ExternalLink } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { notFound } from "next/navigation"
import { realtimeProjects } from "../projects-data"

interface ProjectPageProps {
  params: {
    id: string
  }
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = realtimeProjects.find((p) => p.id === params.id)

  if (!project) {
    notFound()
  }

  // Convert Google Drive share link to embeddable format
  const getEmbeddableVideoUrl = (url: string) => {
    const fileIdMatch = url.match(/\/d\/([a-zA-Z0-9-_]+)/)
    if (fileIdMatch) {
      return `https://drive.google.com/file/d/${fileIdMatch[1]}/preview`
    }
    return url
  }

  return (
    <div className="min-h-screen bg-[#0f0f1a] text-white">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
          <Link href="/projects/realtime" className="inline-flex items-center text-[#fca311] hover:text-[#fca311]/80 mb-8">
            <ArrowLeft className="mr-2" /> Back to Real-time Projects
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

          {/* Project Status */}
          <div className="text-center mb-8">
            <span className="inline-flex items-center px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-medium">
              Status: {project.status}
            </span>
          </div>

          {/* Video Demo Section */}
          <div className="bg-[#1a1a2e] rounded-3xl p-8 mb-12 shadow-2xl">
            <h2 className="text-2xl font-bold text-[#fca311] mb-6 text-center">Project Demo</h2>
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                src={getEmbeddableVideoUrl(project.videoUrl)}
                className="absolute top-0 left-0 w-full h-full rounded-lg"
                allow="autoplay"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Project Details */}
          <div className="grid md:grid-cols-2 gap-8 bg-[#1a1a2e] rounded-3xl p-8 shadow-2xl mb-12">
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
            </div>
          </div>

          {/* Detailed Description */}
          <div className="bg-[#1a1a2e] rounded-3xl p-8 shadow-2xl mb-12">
            <h2 className="text-2xl font-bold text-[#fca311] mb-6">Technical Details</h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                {project.detailedDescription}
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="text-center space-y-4">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={project.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-[#fca311] hover:bg-[#e69500] text-black px-6 py-3 rounded-lg transition-colors text-lg font-semibold"
              >
                <ExternalLink className="mr-2" />
                View Full Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
