"use client"

"use client"

import Link from "next/link"
import { Github, Menu, X } from "lucide-react"
import Logo from "./Logo"
import { useState } from "react"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className="py-3 bg-[#16213e] sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/">
          <Logo />
        </Link>
        <nav className="hidden md:block">
          <ul className="flex space-x-6 text-lg items-center">
            <li>
              <Link href="/" className="text-white hover:text-[#fca311] transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-white hover:text-[#fca311] transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link href="/projects" className="text-white hover:text-[#fca311] transition-colors">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/resume" className="text-white hover:text-[#fca311] transition-colors">
                Resume
              </Link>
            </li>
            <li>
              <a
                href="https://github.com/yordanos-bogale5"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#fca311] transition-colors"
              >
                <Github size={24} />
              </a>
            </li>
          </ul>
        </nav>
        <button className="md:hidden text-white" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isMenuOpen && (
        <nav className="md:hidden bg-[#16213e] py-4">
          <ul className="flex flex-col items-center space-y-4">
            <li>
              <Link href="/" className="text-white hover:text-[#fca311] transition-colors" onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-white hover:text-[#fca311] transition-colors" onClick={toggleMenu}>
                About
              </Link>
            </li>
            <li>
              <Link href="/projects" className="text-white hover:text-[#fca311] transition-colors" onClick={toggleMenu}>
                Projects
              </Link>
            </li>
            <li>
              <Link href="/resume" className="text-white hover:text-[#fca311] transition-colors" onClick={toggleMenu}>
                Resume
              </Link>
            </li>
            <li>
              <a
                href="https://github.com/yordanos-bogale5"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#fca311] transition-colors"
              >
                <Github size={24} />
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}

export default Header

