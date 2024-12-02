import React from 'react';

export default function School() {
  return (
    <div className="flex flex-col items-center p-8 bg-gray-50 rounded-lg shadow-lg max-w-2xl mx-auto my-10">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">High School</h1>
      <img
        src="vignan.jpg"
        alt="Vignan English Medium High School"
        className="w-20 h-20 mb-4"
      />
      <p className="text-gray-800 mb-5 text-lg">
        I graduated from <span className="font-semibold">Vignan English Medium High School</span> in 2014, where I achieved a GPA of <span className="font-semibold">8.3</span> in my 10th grade.
      </p>
      <p className="text-gray-800 mb-5 text-lg">
        My time at Vignan was enriching and filled with memorable experiences. I was actively involved in various academic and athletic competitions, where I excelled and won multiple awards. These formative years laid a strong foundation for my future.
      </p>
      <p className="text-gray-700 italic text-center">
        My achievements in high school have been instrumental in shaping my professional and personal growth.
      </p>
    </div>
  );
}
