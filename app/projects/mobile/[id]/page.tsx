
"use client"

import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { notFound } from "next/navigation"

const projectDetails: Record<string, any> = {
  fabios: {
    title: "Fabios",
    subtitle: "Food Delivery Application",
    description: "A food delivery application for Infinite Solution Dpl (UAE) transitioning designs from Figma to implementation.",
    category: "Food Delivery",
    mainImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2.jpg-OMQnbGt7Tt3N3TL7mprfXx2NrwwgJh.jpeg",
    screenshots: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2.jpg-OMQnbGt7Tt3N3TL7mprfXx2NrwwgJh.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2.jpg-OMQnbGt7Tt3N3TL7mprfXx2NrwwgJh.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2.jpg-OMQnbGt7Tt3N3TL7mprfXx2NrwwgJh.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2.jpg-OMQnbGt7Tt3N3TL7mprfXx2NrwwgJh.jpeg"
    ],
    overview: "A comprehensive food delivery Application designed for Infinite Solution Dpl in UAE. The app transitions seamlessly from Figma designs to full implementation.",
    features: [
      "Restaurant browsing",
      "Menu exploration", 
      "Order tracking",
      "Payment integration",
      "Customer reviews"
    ],
    technologies: ["Flutter", "Dart", "Firebase", "REST API"],
    githubUrl: "https://github.com/yordanos-bogale5/Birds_Wallpaper"
  },
  taza: {
    title: "Taza",
    subtitle: "Real Estate Application",
    description: "A comprehensive real estate mobile application featuring property listings, detailed property views, advanced search filters, user authentication, and property management for both buyers and sellers in Ethiopia.",
    category: "Real Estate",
    mainImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/taza-app.jpg-placeholder",
    screenshots: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/taza-app.jpg-placeholder",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/taza-app.jpg-placeholder",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/taza-app.jpg-placeholder",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/taza-app.jpg-placeholder"
    ],
    overview: "A comprehensive real estate application for Ethiopian market with advanced property management features.",
    features: [
      "Property listings",
      "Advanced search filters",
      "User authentication",
      "Property management",
      "Detailed property views"
    ],
    technologies: ["Flutter", "Firebase", "MongoDB", "REST API"],
    githubUrl: "https://github.com/yordanos-bogale5/taza-real-estate"
  }
}

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  const project = projectDetails[params.id]
  
  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-[#0f0f1a] text-white">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
          <Link href="/projects/mobile" className="inline-flex items-center text-[#fca311] hover:text-[#fca311]/80 mb-8">
            <ArrowLeft className="mr-2" /> Back to Mobile Projects
          </Link>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              <span className="text-[#fca311]">{project.title}</span>
            </h1>
            <p className="text-gray-400 text-lg">{project.subtitle}</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            {/* Main Phone Mockup */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="flex justify-center"
            >
              <div className="relative">
                {/* Phone Frame */}
                <div className="relative mx-auto border-[14px] border-black rounded-[2.5rem] h-[500px] w-[250px] shadow-2xl">
                  <div className="h-[32px] w-[3px] absolute -right-[17px] top-[72px] rounded-l-lg bg-black"></div>
                  <div className="h-[46px] w-[3px] absolute -right-[17px] top-[124px] rounded-l-lg bg-black"></div>
                  <div className="h-[46px] w-[3px] absolute -right-[17px] top-[178px] rounded-l-lg bg-black"></div>
                  <div className="h-[32px] w-[3px] absolute -left-[17px] top-[72px] rounded-r-lg bg-black"></div>
                  <div className="rounded-[2rem] overflow-hidden w-full h-full bg-white">
                    <div className="relative w-full h-full">
                      <Image
                        src={project.mainImage}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Project Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-6"
            >
              <div>
                <h2 className="text-2xl font-bold text-[#fca311] mb-4">Welcome Screen</h2>
                <p className="text-gray-300">{project.overview}</p>
              </div>

              {/* Screenshots Gallery */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Screen Preview</h3>
                <div className="grid grid-cols-4 gap-2">
                  {project.screenshots.slice(0, 4).map((screenshot: string, index: number) => (
                    <div key={index} className="aspect-[3/4] relative rounded-lg overflow-hidden border border-[#fca311]/20">
                      <Image
                        src={screenshot}
                        alt={`Screenshot ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Project Details Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Project Overview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-[#1a1a2e] rounded-lg p-6 border border-[#fca311]/20"
            >
              <h3 className="text-xl font-bold text-[#fca311] mb-4">Project Overview</h3>
              <p className="text-gray-300 leading-relaxed">{project.description}</p>
              
              <div className="mt-6">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-[#fca311] text-black font-semibold rounded-lg hover:bg-[#fca311]/90 transition-colors"
                >
                  View Source Code
                </a>
              </div>
            </motion.div>

            {/* Key Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="bg-[#1a1a2e] rounded-lg p-6 border border-[#fca311]/20"
            >
              <h3 className="text-xl font-bold text-[#fca311] mb-4">Key Features</h3>
              <ul className="space-y-2">
                {project.features.map((feature: string, index: number) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-[#fca311] rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="mt-6">
                <h4 className="font-semibold text-[#fca311] mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech: string, index: number) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-[#fca311]/20 text-[#fca311] rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
