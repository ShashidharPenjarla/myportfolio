import React from 'react';

const About = () => (
  <section
    id="about"
    className="about-section bg-white text-gray-800 p-8 md:p-16 rounded-xl shadow-lg max-w-4xl mx-auto"
  >
    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center border-b-4 border-blue-700 text-blue-900 pb-2">
      About Me
    </h2>
    <p className="mb-6 text-lg leading-relaxed">
      I'm a software engineer at TTEC Digital with over three years of
      experience in developing innovative and scalable solutions across web and
      AI-driven applications.
    </p>

    <h3 className="text-2xl font-semibold mt-10 mb-6 text-blue-800">
      Career Journey
    </h3>
    <ul className="space-y-4 text-lg">
      <li>
        <strong>2021 - 2022:</strong> Began my career as a Trainee, gaining
        foundational skills in software engineering and developing chatbot
        solutions.
      </li>
      <li>
        <strong>2022 - 2023:</strong> Promoted to Associate Software Engineer,
        where I worked on web applications and expanded my skill set in
        back-end technologies.
      </li>
      <li>
        <strong>2023 - 2024:</strong> Advanced to Associate Product Developer,
        where I took on complex AI-driven projects and led UI development for
        enterprise applications.
      </li>
      <li>
        <strong>2024 - Present:</strong> Promoted to Product Developer, handling
        end-to-end development in projects focused on Agent Assist and chatbot
        solutions.
      </li>
    </ul>

    <h3 className="text-2xl font-semibold mt-10 mb-6 text-blue-800">
      Working Experience
    </h3>
    <ul className="list-disc list-inside space-y-4 text-lg leading-relaxed">
      <li>
        <strong>Chatbot Development:</strong> Created conversational AI for
        banking using Dialogflow to improve customer engagement and automate
        services.
      </li>
      <li>
        <strong>API Development:</strong> Built APIs in Node.js to manage data
        flow between Dialogflow and PostgreSQL, ensuring efficient data handling
        and storage.
      </li>
      <li>
        <strong>Database Management:</strong> Acquired expertise in PostgreSQL,
        writing complex queries to optimize data retrieval and storage
        operations.
      </li>
      <li>
        <strong>Agent Assist Platform:</strong> Developed a tool that assists
        agents in real-time, provides performance metrics, and integrates with
        customer service workflows.
      </li>
      <li>
        <strong>UI Development:</strong> Utilized React to enhance the
        front-end experience of Agent Assist, creating a smooth and
        user-friendly interface.
      </li>
      <li>
        <strong>Generative AI Integration:</strong> Applied foundational AI
        concepts to automate conversation summaries and intent prediction in
        Agent Assist.
      </li>
      <li>
        <strong>Vertex AI:</strong> Integrated Google’s Vertex AI to predict
        conversation intent and provide real-time summaries for Agent Assist,
        improving agent response times.
      </li>
      <li>
        <strong>Redis for Caching:</strong> Implemented Redis to enhance data
        caching and reduce response times, ensuring efficient data retrieval for
        high-frequency requests.
      </li>
      <li>
        <strong>Docker for Containerization:</strong> Utilized Docker to
        containerize applications, streamlining the deployment process and
        improving environment consistency.
      </li>
      <li>
        <strong>GraphQL for Data Management:</strong> Employed GraphQL for
        efficient data fetching, optimizing back-end requests and reducing data
        load on the client side.
      </li>
      <li>
        <strong>Data Migration to BigQuery:</strong> Managed migration of
        PostgreSQL data to BigQuery, enabling advanced analytics and large-scale
        data processing.
      </li>
    </ul>
  </section>
);

export default About;
