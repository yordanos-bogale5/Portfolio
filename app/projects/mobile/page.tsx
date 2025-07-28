"use client"

import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

const mobileProjects = [
  {
    id: "taza",
    title: "Taza",
    description: "A comprehensive real estate mobile application featuring property listings, detailed property views, advanced search filters, user authentication, and property management for both buyers and sellers in Ethiopia.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/taza-app.jpg-placeholder",
    previewUrl: "https://github.com/yordanos-bogale5/taza-real-estate",
    category: "Real Estate"
  },
  {
    id: "bedtime-story",
    title: "Bed Time Story",
    description: "Culturally rich bedtime stories for Ethiopian kids.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tir.jpg-v1FBy955RXRhxK3EEAUR433EdS17lc.jpeg",
    previewUrl: "https://github.com/yordanos-bogale5/play_store",
    category: "Education"
  },
  {
    id: "coffeeflow",
    title: "CoffeeFlow",
    description: "Featuring a curated collection of brewing techniques, recipes, and tips for coffee enthusiasts.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cop.jpg-Lx9ckgn0Mxm8UY9kaZT279G5r97Zz7.jpeg",
    previewUrl: "https://github.com/yordanos-bogale5/CoffeeFlow",
    category: "Lifestyle"
  },
  {
    id: "chess-game",
    title: "Chess Game",
    description: "Chess game for Infinite Solution Dpl with engaging gameplay and real time opponent matching.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1.jpg-oSHthecCB3ybp66gRR63dkbidomqHT.jpeg",
    previewUrl: "https://github.com/yordanos-bogale5/po_pro",
    category: "Games"
  },
  {
    id: "fabios",
    title: "Fabios",
    description: "A food delivery application for Infinite Solution Dpl (UAE) transitioning designs from Figma to implementation.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2.jpg-OMQnbGt7Tt3N3TL7mprfXx2NrwwgJh.jpeg",
    previewUrl: "https://github.com/yordanos-bogale5/Birds_Wallpaper",
    category: "Food Delivery"
  },
  {
    id: "exit-exam",
    title: "Exit Exam App",
    description: "Mobile application for a college called STBC, containing tutorials, questions, and answers for an exit exam.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6.jpg-CbK6wk1jRG4NvrmMQ0wsFEzu9LhNfX.jpeg",
    previewUrl: "https://github.com/yordanos-bogale5/Exit_Exam_App",
    category: "Education"
  },
  {
    id: "billing-system",
    title: "Electric Billing System",
    description: "Developed as a one-time project for a client as a freelancer.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3.jpg-WZG9M9ZNNapm8HUaxub1FZnLMY9vf2.jpeg",
    previewUrl: "https://github.com/yordanos-bogale5/electric_billing_system",
    category: "Utility"
  },
  {
    id: "good-grade",
    title: "Good Grade Student",
    description: "E-learning mobile app developed using Flutter, with personalized dashboards, course dashboards, authentication, cart, wish list, library, chat, and notifications.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5.jpg-HVho4zvRg5Z6Js9Y94IxaBtG70HJKm.jpeg",
    previewUrl: "https://github.com/yordanos-bogale5/GoodGrade-Student",
    category: "Education"
  },
  {
    id: "virtual-shop",
    title: "Virtual Shop Space",
    description: "Virtual space for shop owners, with 3D view for enhanced shopping experience and integrated Chapa payment.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4.jpg-VVE1dZbrWX0lArGREF4ptlfWzk45yg.jpeg",
    previewUrl: "https://github.com/yordanos-bogale5/Virtual-Shop",
    category: "E-commerce"
  },
  {
    id: "etre",
    title: "Ethiopian Toll Roads Enterprise (ETRE)",
    description: "Contributed to the development of software solutions for the Ethiopian Toll Roads Enterprise under Creavers Service Plc.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7.jpg-8Lq4WgYH31qL7acVjWaK1tjrPDZSwS.jpeg",
    previewUrl: "https://github.com/yordanos-bogale5/flutter_web_portal",
    category: "Enterprise"
  }
]

export default function MobileProjectsPage() {
  return (
    <div className="min-h-screen bg-[#0f0f1a] text-white">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
          <Link href="/projects" className="inline-flex items-center text-[#fca311] hover:text-[#fca311]/80 mb-8">
            <ArrowLeft className="mr-2" /> Back to Projects
          </Link>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              My Recent <span className="text-[#fca311]">Works</span>
            </h1>
            <p className="text-gray-400 text-lg">Here are a few past design projects I've worked on. Want to see more?</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mobileProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <Link href={`/projects/mobile/${project.id}`}>
                  <div className="bg-[#1a1a2e] rounded-lg overflow-hidden border border-[#fca311]/20 hover:border-[#fca311]/50 transition-all duration-300 hover:transform hover:scale-105">
                    <div className="aspect-[3/4] relative overflow-hidden">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs text-[#fca311] font-medium">{project.category}</span>
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-[#fca311] rounded-full"></div>
                          <div className="w-2 h-2 bg-[#fca311]/60 rounded-full"></div>
                          <div className="w-2 h-2 bg-[#fca311]/30 rounded-full"></div>
                        </div>
                      </div>
                      <h3 className="text-xl font-bold mb-2 text-white group-hover:text-[#fca311] transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 text-sm line-clamp-3">{project.description}</p>
                    </div>
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