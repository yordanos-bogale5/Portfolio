import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const skills = [
  { name: 'Flutter', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
  { name: 'Dart', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg' },
  { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
  { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
  { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
  { name: 'NodeJS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Azure', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg' },
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
]

const tools = [
  { name: 'Linux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
  { name: 'macOS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg' },
  { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
  { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
  { name: 'Heroku', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original.svg' },
]

// Function to generate mock contribution data
const generateContributionData = () => {
  const data = []
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  months.forEach((month, monthIndex) => {
    for (let week = 0; week < 4; week++) {
      for (let day = 0; day < 7; day++) {
        data.push({
          date: `${month} ${week * 7 + day + 1}`,
          count: Math.random() < 0.7 ? Math.floor(Math.random() * 2) : Math.floor(Math.random() * 3) + 1
        })
      }
    }
  })
  return data
}

export default function AboutPage() {
  const contributionData = generateContributionData()

  return (
    <div className="min-h-screen bg-[#0f0f1a] text-white">
      <div className="container mx-auto px-4 py-12">
        <Link href="/" className="inline-flex items-center text-[#fca311] hover:text-[#fca311]/80 mb-8">
          <ArrowLeft className="mr-2" /> Back to Home
        </Link>
        
        <div className="max-w-6xl mx-auto space-y-16">
          <section className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-2/3">
              <h1 className="text-4xl font-bold mb-6">About Me</h1>
              <div className="space-y-4 text-gray-300">
                <p>
                  I'm a passionate software engineer driven by an insatiable curiosity to uncover the magic behind technology. Flutter is my playground for crafting elegant and seamless mobile experiences, while my web development expertise transforms ideas into visually stunning and highly functional realities. For me, coding isn't just a career—it's a journey of creativity, innovation, and impact.
                </p>
              </div>
            </div>
            <div className="md:w-1/3 pt-8">
              <div className="relative w-64 h-64 md:w-72 md:h-72 overflow-hidden rounded-full shadow-xl">
                <Image 
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_2025-01-16_15-28-09.jpg-5iAgmlmdXYSX4SGH2Ua15qTTdCK285.jpeg"
                  alt="Yordanos Bogale"
                  fill
                  className="object-cover object-top"
                  style={{ top: '10px' }}
                />
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-8 text-center">
              Professional <span className="text-[#fca311]">Skillset</span>
            </h2>
            <div className="grid grid-cols-4 md:grid-cols-6 gap-4">
              {skills.map((skill) => (
                <div 
                  key={skill.name}
                  className="aspect-square bg-[#1a1a2e] rounded-lg border border-[#fca311]/30 hover:border-[#fca311] transition-all duration-300 p-3 flex items-center justify-center"
                >
                  <div className="w-full h-full relative">
                    <Image
                      src={skill.icon || "/placeholder.svg"}
                      alt={skill.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-8 text-center">
              <span className="text-[#fca311]">Tools</span> I use
            </h2>
            <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
              {tools.map((tool) => (
                <div 
                  key={tool.name}
                  className="aspect-square bg-[#1a1a2e] rounded-lg border border-[#fca311]/30 hover:border-[#fca311] transition-all duration-300 p-3 flex items-center justify-center"
                >
                  <div className="w-full h-full relative">
                    <Image
                      src={tool.icon || "/placeholder.svg"}
                      alt={tool.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-8 text-center">
              Days I <span className="text-[#fca311]">Code</span>
            </h2>
            <div className="bg-[#1a1a2e] p-6 rounded-lg">
              <div className="flex flex-col">
                <div className="flex justify-between mb-2 text-sm text-gray-400">
                  {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((month) => (
                    <span key={month}>{month}</span>
                  ))}
                </div>
                <div className="grid grid-cols-52 gap-1">
                  {contributionData.map((day, index) => (
                    <div
                      key={index}
                      className={`w-3 h-3 rounded-sm ${
                        day.count === 0
                          ? 'bg-gray-800'
                          : day.count === 1
                          ? 'bg-amber-500/25'
                          : day.count === 2
                          ? 'bg-amber-500/50'
                          : day.count === 3
                          ? 'bg-amber-500/75'
                          : 'bg-amber-500'
                      }`}
                      title={`${day.date}: ${day.count} contributions`}
                    />
                  ))}
                </div>
                <div className="flex justify-end mt-2 text-sm text-gray-400 items-center gap-2">
                  <span>Less</span>
                  <div className="flex gap-1">
                    <div className="w-3 h-3 rounded-sm bg-gray-800" />
                    <div className="w-3 h-3 rounded-sm bg-amber-500/25" />
                    <div className="w-3 h-3 rounded-sm bg-amber-500/50" />
                    <div className="w-3 h-3 rounded-sm bg-amber-500/75" />
                    <div className="w-3 h-3 rounded-sm bg-amber-500" />
                  </div>
                  <span>More</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

