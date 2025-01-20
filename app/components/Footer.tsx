import { Github, Linkedin, Twitter } from "lucide-react"

const Footer = () => {
  return (
    <footer className="py-6 text-center bg-[#16213e] mt-auto">
      <div className="container mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-bold mb-4 text-white">CONNECT WITH ME</h2>
        <p className="mb-4 text-white text-sm md:text-base">Don't hesitate to reach out!</p>
        <div className="flex justify-center space-x-4 mb-6">
          <a
            href="https://github.com/yordanos-bogale5"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#fca311] hover:text-[#e94560] transition-colors"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/yordanos-bogale"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#fca311] hover:text-[#e94560] transition-colors"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://twitter.com/your-twitter-account"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#fca311] hover:text-[#e94560] transition-colors"
          >
            <Twitter size={20} />
          </a>
          <a
            href="https://t.me/Jordan_Bogale05"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#fca311] hover:text-[#e94560] transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-send"
            >
              <path d="m22 2-7 20-4-9-9-4Z" />
              <path d="M22 2 11 13" />
            </svg>
          </a>
        </div>
        <div className="text-xs md:text-sm text-white">
          <p>Design inspired by Soumayajit</p>
          <p>Copyright © 2025 Yordanos Bogale</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

