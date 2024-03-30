"use client"

import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight, FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';

const VideoShowcase = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const videos = [
    {
      src: 'https://www.youtube.com/embed/e4q1I8A-fiA',
      title: 'Discover My Journey',
    },
    {
      src: 'https://www.youtube.com/embed/4K9hhJwvoNc',
      title: 'The Value I Bring',
    },
  ];

  const navigateVideo = (direction) => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex + direction;
      return newIndex < 0 ? videos.length - 1 : newIndex % videos.length;
    });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col justify-center">
      <div className="mx-auto py-12 px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex flex-row items-center mb-8 md:mb-0">
            <FaArrowLeft onClick={() => navigateVideo(-1)} className="cursor-pointer text-3xl mr-4" />
            <div className="rounded-lg overflow-hidden shadow-xl bg-gray-800 max-w-xl">
              <iframe
                src={videos[currentIndex].src}
                title={videos[currentIndex].title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full md:w-96 aspect-video"
              ></iframe>
            </div>
            <FaArrowRight onClick={() => navigateVideo(1)} className="cursor-pointer text-3xl ml-4" />
          </div>
          <div className="md:ml-12">
            <h1 className="text-4xl font-bold mb-4">Why Work With Me?</h1>
            <p className="text-lg mb-6">
              I'm passionate about creating seamless web experiences using React, Next.js, TypeScript, Node.js, and more. I focus on robust and scalable applications with expertise in both frontend and backend development.
            </p>
            <div className="flex justify-center gap-8 mb-6">
              <FaReact className="text-5xl text-blue-400" />
              <FaNodeJs className="text-5xl text-green-400" />
              <FaDatabase className="text-5xl text-yellow-400" />
            </div>
            <p>
              With over two years of experience, I've successfully delivered projects across various domains, demonstrating a commitment to quality and innovation. Let's collaborate to make your vision a reality.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoShowcase;
