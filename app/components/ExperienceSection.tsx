const experiences = [
  {
    title: 'Senior Software Engineer',
    company: 'Tech Innovators Inc.',
    period: 'Jan 2020 - Present',
    description: 'Lead development of scalable web applications using the MERN stack.',
  },
  {
    title: 'Full Stack Developer',
    company: 'Digital Solutions Ltd.',
    period: 'Jun 2017 - Dec 2019',
    description: 'Developed and maintained multiple client projects using React and Node.js.',
  },
  // Add more experiences as needed
]

const ExperienceSection = () => {
  return (
    <section id="experience" className="bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-bold text-xl mb-2">{exp.title}</h3>
              <p className="text-indigo-600 mb-2">{exp.company}</p>
              <p className="text-gray-600 mb-4">{exp.period}</p>
              <p>{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection

