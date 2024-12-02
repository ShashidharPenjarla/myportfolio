import React from 'react';

const Projects = () => (
  <section id="projects" className="projects-section bg-white text-black py-12 px-6">
    <h2 className="text-3xl font-bold text-center mb-8 text-blue-800">Projects</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Project 1: AI Agent Lia */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-md flex flex-col">
        <h3 className="text-2xl font-semibold mb-2">AI Agent Lia (Personal Project)</h3>
        <p className="text-gray-700 mb-4">
          AI Agent Lia is a virtual assistant for banking, simplifying customer service with real-time voice assistance.
          It can block cards, check balances, and retrieve statements based on simple spoken commands, available 24/7.
        </p>
        <p className="text-gray-700 mb-4">
          Lia integrates with banking systems, offering secure, personalized interactions while enhancing efficiency and customer satisfaction.
        </p>
        <div className="mb-4">
          <video controls className="w-full h-auto rounded-lg shadow-sm">
            <source src="AILiaBank.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="flex space-x-4">
          <a href="[link to Documentation]" className="text-blue-500 hover:text-blue-700 font-medium underline">Documentation</a>
        </div>
      </div>

      {/* Project 2: Compact */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-md flex flex-col">
        <h3 className="text-2xl font-semibold mb-2">Compact(Personal Project)</h3>
        <p className="text-gray-700 mb-4">
        Your AI-Powered Productivity Assistant.Compact is an AI-powered web application designed to streamline employee tasks and boost productivity at TTEC Digital. By centralizing various functions like email management, meeting scheduling, and leave management, Compact reduces time spent on repetitive tasks and enhances employee engagement.
        </p>
        <div className="mb-4">
          <video controls className="w-full h-auto rounded-lg shadow-sm">
            <source src="Compact1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="flex space-x-4">
          <a href="[link to Documentation]" className="text-blue-500 hover:text-blue-700 font-medium underline">Documentation</a>
        </div>
      </div>
    </div>
  </section>
);

export default Projects;
