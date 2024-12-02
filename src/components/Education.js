import React, { useState } from 'react';
import School from './School';
import Diploma from './Diploma';
import Engineering from './Engineering';

const Education = () => {
  const [selectedComponent, setSelectedComponent] = useState(null);

  const renderSelectedComponent = () => {
    switch (selectedComponent) {
      case 'school':
        return <School />;
      case 'diploma':
        return <Diploma />;
      case 'engineering':
        return <Engineering />;
      default:
        return null;
    }
  };

  return (
    <section id="education" className=" py-12 px-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-blue-800 mb-2">Education</h1>
          <p className="text-lg text-gray-600">My educational background and achievements.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            className="p-6 border rounded-xl shadow-lg border-blue-300 hover:shadow-2xl transition-shadow cursor-pointer transform hover:scale-105 duration-200"
            onClick={() => setSelectedComponent('school')}
          >
            <div className="icon mb-4 flex justify-center">
              <img
                src="vignan.jpg"
                alt="Vignan English Medium High School"
                className="w-20 h-20 rounded-full"
              />
            </div>
            <h2 className="text-xl font-semibold text-center">High School</h2>
            <h3 className="text-lg text-center mt-1">2014</h3>
            <h3 className="text-md font-medium text-center mt-1">Vignan English Medium High School</h3>
            <h3 className="text-md text-gray-600 text-center">Yellareddy Pet, Telangana</h3>
          </div>

          <div
            className="p-6 border rounded-xl shadow-lg border-blue-300 hover:shadow-2xl transition-shadow cursor-pointer transform hover:scale-105 duration-200"
            onClick={() => setSelectedComponent('diploma')}
          >
            <div className="icon mb-4 flex justify-center">
              <img
                src="vnr.jpg"
                alt="VNR Vignana Jyothi Institute of Engineering and Technology"
                className="w-20 h-20 rounded "
              />
            </div>
            <h2 className="text-xl font-semibold text-center">Diploma</h2>
            <h3 className="text-lg text-center mt-1">2017</h3>
            <h3 className="text-md font-medium text-center mt-1">Electronics</h3>
            <h3 className="text-md font-medium text-center">VNR Vignana Jyothi Institute of Engineering and Technology</h3>
            <h3 className="text-md text-gray-600 text-center">Hyderabad</h3>
          </div>

          <div
            className="p-6 border rounded-xl shadow-lg border-blue-300 hover:shadow-2xl transition-shadow cursor-pointer transform hover:scale-105 duration-200"
            onClick={() => setSelectedComponent('engineering')}
          >
            <div className="icon mb-4 flex justify-center">
              <img
                src="mrec.png"
                alt="Mallareddy Engineering College"
                className="w-20 h-20 rounded-full "
              />
            </div>
            <h2 className="text-xl font-semibold text-center">Engineering</h2>
            <h3 className="text-lg text-center mt-1">2021</h3>
            <h3 className="text-md font-medium text-center mt-1">Computer Science</h3>
            <h3 className="text-md font-medium text-center">Mallareddy Engineering College</h3>
            <h3 className="text-md text-gray-600 text-center">Hyderabad</h3>
          </div>
        </div>

        {selectedComponent && (
          <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
            <div className="bg-slate-100 p-8 rounded-lg shadow-lg w-full max-w-3xl max-h-[90vh] overflow-y-auto relative">
              <button
                onClick={() => setSelectedComponent(null)}
                className="absolute top-4 right-4 text-3xl font-bold text-red-700 hover:text-red-600 transition duration-150"
              >
                &times;
              </button>
              <div className="px-4 py-2 overflow-y-auto max-h-[70vh]">
                {renderSelectedComponent()}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Education;
