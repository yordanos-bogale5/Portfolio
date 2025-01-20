"use client"

import { ArrowLeft, Download, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

const resumeImages = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a.jpg-YIeY0RCFUhr5jNlWQAAmDpLm8JYn9G.jpeg",
    alt: "Resume Education Section",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/b.jpg-b6LtsAtJFpWGtV40hiYGKF6sUe8iXR.jpeg",
    alt: "Resume Projects Section",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/c.jpg-100o4EAFghkI38mLLQ4Hqxn8UnPHuo.jpeg",
    alt: "Resume Experience Section",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/d.jpg-KIufy5TFZf273XC9MuP2SWIlb9VkQP.jpeg",
    alt: "Resume Certifications and Awards Section",
  },
]

export default function ResumePage() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % resumeImages.length)
  }

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + resumeImages.length) % resumeImages.length)
  }

  const downloadResume = () => {
    const resumeUrl = "/YordanosBogale_Resume.pdf"
    const link = document.createElement("a")
    link.href = resumeUrl
    link.download = "YordanosBogale_Resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="min-h-screen bg-[#0f0f1a] text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center text-[#fca311] hover:text-[#fca311]/80 mb-8">
          <Link href="/" className="inline-flex items-center">
            <ArrowLeft className="mr-2" /> Back to Home
          </Link>
        </div>

        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8">
          My <span className="text-[#fca311]">Resume</span>
        </h1>

        <div className="max-w-4xl mx-auto">
          <div className="relative aspect-[3/4] w-full">
            <div className="absolute inset-0">
              <Image
                src={resumeImages[currentIndex].src || "/placeholder.svg"}
                alt={resumeImages[currentIndex].alt}
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevImage}
              className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-[#fca311] text-white p-1 md:p-2 rounded-full hover:bg-[#e69500] transition-all"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-[#fca311] text-white p-1 md:p-2 rounded-full hover:bg-[#e69500] transition-all"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Image Indicators */}
          <div className="flex justify-center mt-4 space-x-2">
            {resumeImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 md:w-3 md:h-3 rounded-full ${
                  index === currentIndex ? "bg-[#fca311]" : "bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Download Button */}
        <div className="mt-8 flex justify-center">
          <button
            onClick={downloadResume}
            className="bg-[#fca311] hover:bg-[#e69500] text-white px-6 py-2 md:px-8 md:py-3 rounded-full shadow-lg transition-colors duration-200 flex items-center gap-2 text-sm md:text-base"
          >
            <Download className="w-4 h-4 md:w-5 md:h-5" />
            Download Full Resume
          </button>
        </div>
      </div>
    </div>
  )
}

