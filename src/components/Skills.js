import React from 'react';

const skills = [
  { name: 'Prompt Engineering', rating: 4 },
  { name: 'React', rating: 4 },
  { name: 'Node.js', rating: 4 },
  { name: 'JavaScript', rating: 5 },
  { name: 'HTML/CSS', rating: 5 },
  { name: 'Tailwind CSS', rating: 3 },
  { name: 'GraphQL', rating: 3 },
  { name: 'Docker', rating: 3 },
  { name: 'Redis', rating: 2 },
  { name: 'Dialogflow', rating: 4 },
  { name: 'PostgreSQL', rating: 4 },
  { name: 'Vertex AI', rating: 4 },
  { name: 'Open AI', rating: 3 },
  { name: 'Big Query', rating: 3 },
  { name: 'Java(Basics)', rating: 4 },
];

const certificates = [
  {
    title: 'Meta Front-End Developer',
    provider: 'Coursera',
    date: 'September 23, 2023',
    courses: [
      'Introduction to Front-End Development',
      'Programming with JavaScript',
      'Version Control',
      'HTML and CSS in depth',
      'React Basics',
      'Advanced React',
      'Principles of UX/UI Design',
      'Front-End Developer Capstone',
      'Coding Interview Preparation'
    ],
    verifyLink: 'https://coursera.org/verify/professional-cert/KSLTFW34MACS',
    image: 'CourseraProfessional.jpg'
  },
  {
    title: 'Building Web Applications with Node.js and Express',
    instructor: 'Jonathan Mills',
    provider: 'PluralSight',
    date: 'July 8, 2022',
    duration: '2 hrs 51 min',
    image: 'buildingweb.jpg'
  },
 ,
  {
    title: 'Fundamental Cloud Concepts for AWS',
    instructor: 'David Tucker',
    provider: 'PluralSight',
    date: 'September 14, 2022',
    duration: '1 hr 32 min',
    image: 'Fundamentalsofcloud.jpg'
  },
  {
    title: 'Node.js 12: Getting Started',
    instructor: 'Samer Buna',
    provider: 'PluralSight',
    date: 'February 16, 2022',
    duration: '3 hrs 30 min',
    image: 'Node-getting.jpg'
  },
  {
    title: 'TypeScript Fundamentals',
    instructor: 'Dan Wahlin, John Papa',
    provider: 'PluralSight',
    date: 'February 20, 2022',
    duration: '3 hrs 11 min',
    image: 'Typescript.jpg'
  },
  {
    title: 'Getting Started with Docker',
    instructor: 'Nigel Poulton',
    provider: 'PluralSight',
    date: 'July 13, 2023',
    duration: '1 hr 26 min',
    image: 'docker_page-0001.jpg'
  },
  {
    title: 'GitHub Copilot for Beginners: Write Software With AI',
    provider: 'Coursera Project Network',
    date: 'May 6, 2004',
    image: 'shashidhar_penjarla_copilot_cert_page-0001.jpg',
    verifyLink: 'https://coursera.org/verify/github_copilot_certificate'  // Replace with the actual verification link if available
}
];

const Skills = () => {
  return (
    <div id="skills" className="p-8 bg-white text-blue-800 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">Skills</h2>
      <div className="grid gap-4 mb-10 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill, index) => (
          <div key={index} className="flex justify-between items-center p-4 bg-gray-100 rounded-lg shadow-md">
            <span className="text-lg font-semibold">{skill.name}</span>
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <span key={i} className={`w-4 h-4 rounded-full ${i < skill.rating ? 'bg-blue-500' : 'bg-gray-300'}`}></span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-3xl font-bold mb-6  text-blue-800 text-center">Certificates</h2>
      <div className="space-y-8">
        {certificates.map((cert, index) => (
          <div key={index} className="border p-6 rounded-lg shadow-lg flex flex-col md:flex-row items-center md:items-start">
            <img src={cert.image} alt={`${cert.title} certificate`} className="w-full md:w-1/3 h-auto object-cover rounded-lg mb-4 md:mb-0 md:mr-6" />
            <div className="text-left md:w-2/3">
              <h3 className="text-2xl font-semibold mb-2">{cert.title}</h3>
              <p className="text-gray-700">Provider: {cert.provider || cert.instructor}</p>
              <p className="text-gray-700">Date Completed: {cert.date}</p>
              {cert.duration && <p className="text-gray-700">Duration: {cert.duration}</p>}
              {cert.courses && (
                <ul className="list-disc list-inside mt-2">
                  {cert.courses.map((course, i) => (
                    <li key={i}>{course}</li>
                  ))}
                </ul>
              )}
              {cert.verifyLink && (
                <a href={cert.verifyLink} className="text-blue-500 underline mt-2 inline-block" target="_blank" rel="noopener noreferrer">
                  Verify Certificate
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
