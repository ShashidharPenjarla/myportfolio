import React from 'react';

const Home = () => (
  <section
    id="home"
    className="home-section flex items-center justify-center min-h-screen relative"
  >
    {/* Decorative graphics */}
    <div className="absolute top-0 left-0 w-full h-full opacity-30">
      {/* Green rectangle SVG */}
      <svg
        className="absolute top-20 left-20"
        width="300"
        height="300"
        viewBox="0 0 300 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="300" height="300" rx="30" fill="#81E6D9" />
      </svg>
    </div>

    {/* Image inside the blue circle */}
    <div className="absolute bottom-20 right-20">
      <img
        src="https://t3.ftcdn.net/jpg/01/32/11/42/360_F_132114229_3d1WkVWiuam0mMOFJWTd4jJGN6Cq3mNw.jpg"
        alt="Shashidhar Penjarla"
        style={{ width: '700px', height: '400px' }}
        className="shadow-lg rounded-lg border-2 border-gray-100"
      />
    </div>

    {/* Content inside the green rectangle */}
    <div className="absolute z-10 top-20 left-20 p-6 rounded-3xl w-80 bg-white shadow-xl">
      <h1 className="text-4xl font-bold text-red-600 fade-in">Hello,</h1>
      <span className="text-3xl text-blue-800 font-extrabold font-sans fade-in1">
        I'm Shashidhar Penjarla
      </span>
      <p className="text-xl text-gray-700 mt-2 scale-up">
        Software Engineer at TTEC Digital
      </p>
      <p className="text-sm text-gray-600 mt-1 scale-up">
        Web application developer & Prompt Engineer
      </p>
    </div>
  </section>
);

export default Home;
