"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

const services = ["Full Stack Developer", "Software Engineer", "Web Developer", "Flutter Developer", "Problem Solver"]

const HeroSection = () => {
  const [currentService, setCurrentService] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentService((prev) => (prev + 1) % services.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-12 md:py-20 flex flex-col md:flex-row items-center justify-between">
      <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 text-white">Hi there! 👋🏻</h1>
        <h2 className="text-2xl md:text-3xl lg:text-4xl mb-4">
          <span className="text-white">I'm </span>
          <span className="text-[#fca311]">Yordanos Bogale</span>
        </h2>
        <div className="h-8 md:h-10 overflow-hidden">
          <p className="text-lg md:text-xl lg:text-2xl text-[#fca311]">{services[currentService]}</p>
        </div>
      </div>
      <div className="w-full md:w-1/2 flex justify-center md:justify-end">
        <div className="relative w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 overflow-hidden rounded-full shadow-xl">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_2025-01-16_15-28-09.jpg-5iAgmlmdXYSX4SGH2Ua15qTTdCK285.jpeg"
            alt="Yordanos Bogale"
            fill
            className="object-cover object-top"
            style={{ top: "10px" }}
            priority
          />
        </div>
      </div>
    </section>
  )
}

export default HeroSection

