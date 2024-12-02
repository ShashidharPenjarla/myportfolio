import React from 'react';

export default function Diploma() {
  return (
    <div className="flex flex-col items-center p-8 bg-gray-50 rounded-lg shadow-lg max-w-2xl mx-auto my-10">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">Diploma in Electronics & Communications</h1>
      <div className="w-20 h-20 mb-4">
        <img
          src="vnr.jpg"
          alt="VNR Vignana Jyothi Institute of Engineering and Technology"
          className="w-full h-full "
        />
      </div>
      <p className="text-gray-800 mb-5 text-lg">
        I earned my diploma in <span className="font-semibold">Electronics and Communications</span> from <span className="font-semibold">VNR Vignana Jyothi Institute of Engineering and Technology</span> in 2017. This journey introduced me to the core principles of electronics and engineering, laying a solid foundation for my future studies and career.
      </p>
      <p className="text-gray-800 mb-5 text-lg">
        Throughout the program, I engaged in numerous practical projects and experiments, gaining hands-on experience in circuit design, embedded systems, and signal processing. My interest in technology and problem-solving grew immensely during these years.
      </p>
      <p className="text-gray-800 mb-5 text-lg">
        In addition to academics, I actively participated in technical workshops and inter-college competitions, which enhanced my skills and expanded my professional network.
      </p>

      <p className="text-gray-700 italic text-center">
        This diploma program was instrumental in shaping my technical skills, curiosity, and passion for innovation.
      </p>
    </div>
  );
}
