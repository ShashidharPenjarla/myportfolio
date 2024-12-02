import React from 'react';

export default function Engineering() {
  return (
    <div className="flex flex-col items-center p-8 bg-gray-50 rounded-lg shadow-lg max-w-2xl mx-auto my-10">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">Bachelor's in Computer Science</h1>
      <div className="w-20 h-20 mb-4">
        <img
          src="mrec.png"
          alt="Malla Reddy Engineering College"
          className="w-full h-full"
        />
      </div>
      <p className="text-gray-800 mb-5 text-lg">
        I graduated with a degree in <span className="font-semibold">Computer Science</span> from <span className="font-semibold">Malla Reddy Engineering College</span> in Hyderabad in 2021. Where I achieved a GPA of <span className="font-semibold">8.2</span>. This program deepened my understanding of software development, algorithms, and data structures, preparing me for a career in technology.
      </p>
      <p className="text-gray-800 mb-5 text-lg">
        During my studies, I worked on various projects in web development, machine learning, and cloud computing. These hands-on experiences helped me build skills in modern technologies and reinforced my passion for software engineering.
      </p>
      <p className="text-gray-800 mb-5 text-lg">
        Additionally, I took part in technical seminars, coding competitions, and hackathons, which challenged me to solve real-world problems and work collaboratively with other students.
      </p>
      <p className="text-gray-700 italic text-center">
        My engineering education has equipped me with a strong technical foundation and the drive to continue learning and innovating in my career.
      </p>
    </div>
  );
}
