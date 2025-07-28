import HeroSection from "./components/HeroSection"
import AboutSection from "./components/AboutSection"
import Head from "next/head"

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <Head>
        <title>Yordanos Bogale - Full Stack Developer Portfolio</title>
        <meta
          name="description"
          content="Welcome to the portfolio of Yordanos Bogale, a skilled Full Stack Developer specializing in Flutter, React, and Node.js. Explore my projects and skills."
        />
      </Head>
      <HeroSection />
      <AboutSection />
    </div>
  )
}

