import React, { useState, useEffect } from 'react';
import { FaCheckCircle, FaTimesCircle, FaHourglassHalf } from 'react-icons/fa';

const ShowcaseComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const messages = [
    {
      icon: <FaCheckCircle className="text-green-500 text-4xl" />,
      title: 'Exceptional Quality',
      description: 'Delivering fast, reliable, and scalable solutions tailored to your business needs.',
    },
    {
      icon: <FaTimesCircle className="text-red-500 text-4xl" />,
      title: 'Risk-Free Guarantee',
      description: "Enjoy a 100% refund if you're not satisfied. Your satisfaction, guaranteed.",
    },
    {
      icon: <FaHourglassHalf className="text-yellow-500 text-4xl" />,
      title: 'Proven Expertise',
      description: 'With over 2 years of full-stack development experience, I specialize in MERN stack and Next.js, crafting solutions for sectors including education and e-commerce.',
    },
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((currentIndex) => (currentIndex + 1) % messages.length);
    }, 2000); 

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="max-w-4xl mx-auto my-12 p-8 flex flex-col items-center justify-center text-center bg-gray-800 rounded-lg shadow-lg">
      <div className="animate-fade-in-down">
        {messages[currentIndex].icon}
        <h2 className="text-white text-3xl font-bold my-2">{messages[currentIndex].title}</h2>
        <p className="text-gray-300 text-lg">{messages[currentIndex].description}</p>
      </div>
    </div>
  );
};

export default ShowcaseComponent;
