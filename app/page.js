"use client"

import Head from 'next/head';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from "react";
import ProjectCard from '@/components/ProjectCard';
import { getProjects } from '@/components/fetchProjects';

export default function Home() {
  const router = useRouter();
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getProjects()
      .then((data) => { 
        setProjects(data);
      })
      .catch(error => console.error('Error fetching projects:', error));
  }, []);

  function downloadPage(){
    router.push("download");
  };

  return (
    <div className="bg-black min-h-screen">
      <Head>
        <title>Samandar Jumanov</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="relative bg-cyan-600 py-6">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <img src="/profile-picture.jpg" alt="Profile Picture" className="mx-auto rounded-full w-24 h-24" />
          <a href="#" className="text-blue-200 hover:text-white" onClick={downloadPage}>Download</a>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 text-blue-200">
        <h1 className="text-3xl font-bold mb-4">Hello, I'm Samandar</h1>
        <p className="text-lg mb-8">
          🚀 Skilled Backend Developer | Full Stack Enthusiast | JavaScript | TypeScript | Python | Go
          <br />
          <br />
          Passionate about crafting robust backend solutions and integrating them seamlessly with cutting-edge frontend technologies. With a diverse skill set and 1.5 years of project-based experience, I excel in building scalable web applications and microservices architectures.
        </p>

        <div className="mb-8 p-4 bg-blue-500 rounded-lg shadow-md text-black">
          <h2 className="text-2xl font-bold mb-2">Highlights</h2>
          <ul>
            <li className="flex items-center space-x-2 mb-2">
              <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
              <span className="text-lg font-bold">Proficient in backend development with Node.js, TypeScript, Python, and Go, ensuring high performance and reliability.</span>
            </li>
            <li className="flex items-center space-x-2 mb-2">
              <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
              <span className="text-lg font-bold">Experienced in building frontend interfaces with React.js and Next.js, ensuring a seamless user experience.</span>
            </li>
            <li className="flex items-center space-x-2 mb-2">
              <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
              <span className="text-lg font-bold">Skilled in containerization and orchestration with Docker and Kubernetes, optimizing deployment processes.</span>
            </li>
            <li className="flex items-center space-x-2 mb-2">
              <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
              <span className="text-lg font-bold">Familiar with messaging systems like RabbitMQ for building scalable and resilient microservices architectures.</span>
            </li>
            <li className="flex items-center space-x-2 mb-2">
              <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
              <span className="text-lg font-bold">Actively participate in problem-solving on platforms like LeetCode (https://leetcode.com/jumanov/), honing algorithmic and coding skills.</span>
            </li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold mb-4">Personal Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> 
          <ProjectCard projects={projects} />
        </div>
      </main>
    </div>
  );
}
