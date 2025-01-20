import HeroSection from "./components/HeroSection"
import AboutSection from "./components/AboutSection"

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <HeroSection />
      <AboutSection />
    </div>
  )
}

