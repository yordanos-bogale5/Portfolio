const CVSection = () => {
  return (
    <section className="py-20 text-white">
      <h2 className="text-3xl font-bold mb-8 text-center">Curriculum Vitae</h2>
      <div className="max-w-4xl mx-auto bg-[#1a1a2e] p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-4 text-center text-[#fca311]">Yordanos Bogale</h1>
        <div className="flex justify-center space-x-4 mb-6">
          <a href="mailto:your.email@example.com" className="text-[#fca311] hover:underline">Gmail</a>
          <a href="https://github.com/yourusername" className="text-[#fca311] hover:underline">GitHub</a>
          <a href="https://linkedin.com/in/yourusername" className="text-[#fca311] hover:underline">LinkedIn</a>
          <a href="https://t.me/yourusername" className="text-[#fca311] hover:underline">Telegram</a>
        </div>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2 text-[#fca311]">Education</h2>
          <div className="flex justify-between">
            <div>
              <h3 className="text-xl font-semibold">BSC in Software Engineering</h3>
              <p>Arba Minch University | AMiT</p>
              <p>Oct 2019 - July 2024</p>
            </div>
            <div>
              <p className="font-semibold">Major GPA - 3.35/4.0</p>
            </div>
          </div>
          <div className="mt-4">
            <h4 className="font-semibold">Relevant Coursework</h4>
            <ul className="list-disc list-inside">
              <li>Operating Systems</li>
              <li>Data structure and Algorithm</li>
              <li>Object-Oriented Programming</li>
              <li>Mobile Application Development</li>
              <li>Internet Programming</li>
              <li>Artificial Intelligence</li>
              <li>Machine Learning, IT Security</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2 text-[#fca311]">Projects</h2>
          {/* Add your projects here */}
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2 text-[#fca311]">Experience</h2>
          {/* Add your experience here */}
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2 text-[#fca311]">Skills</h2>
          <p>Dart: Flutter | golang | JavaScript: NodeJS, ReactJS, | C#: .NetCore| Python: Django, Flask | AI & Machine Learning | Front-end: HTML, CSS | Database management: Firebase, PostgreSQL, MySQL, MongoDB | AWS Cloud</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2 text-[#fca311]">Certifications</h2>
          <ul className="list-disc list-inside">
            <li>Internship Certificate (AAiT, 2024)</li>
            <li>Python Developer (Sololearn, 2024)</li>
            <li>Java Developer (Sololearn)</li>
            <li>Flutter Developer (Great Learning, 2024)</li>
            <li>Machine Learning Algorithms (Great Learning, 2024)</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2 text-[#fca311]">Awards</h2>
          <div className="mb-4">
            <h3 className="text-xl font-semibold">Best Project, CaSE Club Exhibition, 2024</h3>
            <p>The CoffeeFlow project was developed to connect coffee suppliers to exporters by integrating with the Ethiopian Commodity Exchange (ECX).</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Top Performer in LeetCode Weekly Contests</h3>
            <p>Recognized for consistently achieving high rankings and demonstrating exceptional problem-solving skills in LeetCode's competitive coding contests.</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2 text-[#fca311]">Summary</h2>
          <p>Dedicated Software Engineer with extensive experience in developing mobile applications and collaborating on diverse team projects. Proven ability to design, implement, and maintain software solutions that meet user needs and drive business success. Adept at problem-solving, optimizing code efficiency, and working effectively in collaborative environments.</p>
        </section>
      </div>
    </section>
  )
}

export default CVSection

