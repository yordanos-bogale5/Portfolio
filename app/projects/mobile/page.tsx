
"use client"

import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

const mobileProjects = [
  {
    title: "Bed Time Story",
    description: "Culturally rich bedtime stories for Ethiopian kids.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tir.jpg-v1FBy955RXRhxK3EEAUR433EdS17lc.jpeg",
    previewUrl: "https://github.com/yordanos-bogale5/play_store",
    isMobile: true,
  },
  {
    title: "CoffeeFlow",
    description: "Featuring a curated collection of brewing techniques, recipes, and tips for coffee enthusiasts.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cop.jpg-Lx9ckgn0Mxm8UY9kaZT279G5r97Zz7.jpeg",
    previewUrl: "https://github.com/yordanos-bogale5/CoffeeFlow",
    isMobile: true,
  },
  {
    title: "Chess Game",
    description: "Chess game for Infinite Solution Dpl with engaging gameplay and real time opponent matching.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1.jpg-oSHthecCB3ybp66gRR63dkbidomqHT.jpeg",
    previewUrl: "https://github.com/yordanos-bogale5/po_pro",
    isMobile: true,
  },
  {
    title: "Fabios",
    description:
      "A food delivery application for Infinite Solution Dpl (UAE) transitioning designs from Figma to implementation.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2.jpg-OMQnbGt7Tt3N3TL7mprfXx2NrwwgJh.jpeg",
    previewUrl: "https://github.com/yordanos-bogale5/Birds_Wallpaper",
    isMobile: true,
  },
  {
    title: "Exit Exam App",
    description:
      "Mobile application for a college called STBC, containing tutorials, questions, and answers for an exit exam.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6.jpg-CbK6wk1jRG4NvrmMQ0wsFEzu9LhNfX.jpeg",
    previewUrl: "https://github.com/yordanos-bogale5/Exit_Exam_App",
    isMobile: true,
  },
  {
    title: "Electric Billing System",
    description: "Developed as a one-time project for a client as a freelancer.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3.jpg-WZG9M9ZNNapm8HUaxub1FZnLMY9vf2.jpeg",
    previewUrl: "https://github.com/yordanos-bogale5/electric_billing_system",
    isMobile: true,
  },
  {
    title: "Good Grade Student",
    description:
      "E-learning mobile app developed using Flutter, with personalized dashboards, course dashboards, authentication, cart, wish list, library, chat, and notifications.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5.jpg-HVho4zvRg5Z6Js9Y94IxaBtG70HJKm.jpeg",
    previewUrl: "https://github.com/yordanos-bogale5/GoodGrade-Student",
    isMobile: true,
  },
  {
    title: "Virtual Shop Space",
    description:
      "Virtual space for shop owners, with 3D view for enhanced shopping experience and integrated Chapa payment.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4.jpg-VVE1dZbrWX0lArGREF4ptlfWzk45yg.jpeg",
    previewUrl: "https://github.com/yordanos-bogale5/Virtual-Shop",
    isMobile: true,
  },
  {
    title: "Ethiopian Toll Roads Enterprise (ETRE)",
    description:
      "Contributed to the development of software solutions for the Ethiopian Toll Roads Enterprise under Creavers Service Plc.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7.jpg-8Lq4WgYH31qL7acVjWaK1tjrPDZSwS.jpeg",
    previewUrl: "https://github.com/yordanos-bogale5/flutter_web_portal",
    isMobile: true,
  },
]

const MobileFrame = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative mx-auto border-[14px] border-black rounded-[2.5rem] h-[400px] w-[200px] md:h-[500px] md:w-[250px] lg:h-[600px] lg:w-[300px] shadow-xl">
      <div className="h-[32px] w-[3px] absolute -right-[17px] top-[72px] rounded-l-lg bg-black"></div>
      <div className="h-[46px] w-[3px] absolute -right-[17px] top-[124px] rounded-l-lg bg-black"></div>
      <div className="h-[46px] w-[3px] absolute -right-[17px] top-[178px] rounded-l-lg bg-black"></div>
      <div className="h-[32px] w-[3px] absolute -left-[17px] top-[72px] rounded-r-lg bg-black"></div>
      <div className="rounded-[2rem] overflow-hidden w-full h-full bg-white">
        {/* Status Bar */}
        <div className="h-[48px] bg-black text-white flex items-center justify-between px-4 text-sm">
          <span>10:30</span>
          <div className="flex items-center space-x-2">
            <span>📶</span>
            <span>🔋</span>
          </div>
        </div>
        {children}
        {/* Home Indicator */}
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
            Mobile <span className="text-[#fca311]">Projects</span>
          </motion.h1>
          <motion.p
            className="text-center text-gray-400 mb-8 md:mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Cross-platform mobile applications built with Flutter and React Native.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {mobileProjects.map((project, index) => (
              <motion.div
                key={project.title}
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
                  <a
                    href={project.previewUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 text-sm md:text-base bg-amber-500 text-white rounded-md hover:bg-amber-600 transition-colors"
                  >
                    Preview
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
