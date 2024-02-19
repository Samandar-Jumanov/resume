"use client"

import React from 'react';
import ImageSlide from '@/components/Images';

const Download = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Welcome to Utils-App</h1>

      <p className="mb-6">
        Utils-App is a versatile utility application built on Node.js, designed to streamline various tasks through a
        simple command-line interface (CLI). Whether you're a developer, sysadmin, or power user, Utils-App offers a
        range of features to enhance your productivity in the terminal environment.
      </p>

      <h2 className="text-2xl font-bold mb-4">Features:</h2>

      <ul className="list-disc ml-6 mb-6">
        <li className="mb-2">
          <strong>Chat with AI:</strong> Connect with Gemini AI Pro directly within your CLI for enhanced productivity.
        </li>
        <li className="mb-2">
          <strong>Network Checking:</strong> Verify your network status effortlessly using the command:
          <code className="ml-2">utils net</code>
        </li>
        <li className="mb-2">
          <strong>File Conversion:</strong> Convert any file to PDF format seamlessly with the command:
          <code className="ml-2">utils convert -s &lt;source&gt; -d &lt;destination&gt;</code>
        </li>
      </ul>

  
        {/* <ImageSlide/> */}
      

      <h2 className="text-2xl font-bold mb-4">Installation:</h2>

      <p className="mb-6">
        To install Utils-App globally, ensuring easy access from any directory, follow these simple steps:
      </p>

      <ol className="list-decimal ml-6 mb-6">
        <li className="mb-2">Ensure Node.js is installed on your system. If not, download it from{' '}
          <a href="https://nodejs.org/" className="text-blue-500 underline">nodejs.org</a>.
        </li>
        <li className="mb-2">Open a terminal window.</li>
        <li className="mb-2">Execute the following command to install Utils-App globally:</li>
      </ol>

      <pre className="bg-black-100 rounded p-4 mb-6">
        <code>npm install -g utils-app</code>
      </pre>

      <p className="mb-6">
        Once installed, start using Utils-App by executing the <code>utils</code> command in your terminal.
      </p>

      <h2 className="text-2xl font-bold mb-4">Usage:</h2>

      <p className="mb-6">
        After installation, Utils-App provides intuitive commands to execute various tasks via the CLI:
      </p>

      <ul className="list-disc ml-6 mb-6">
        <li className="mb-2">
          <code className="font-mono">utils start</code>: Initiate the application and explore available features.
        </li>
        <li className="mb-2">
          <code className="font-mono">utils &lt;command&gt;</code>: Execute specific commands tailored to your needs.
        </li>
      </ul>
     

      <h2 className="text-2xl font-bold mb-4">Conclusion:</h2>

      <p className="mb-6">
        Utils-App simplifies complex tasks, offering a seamless experience in the terminal environment. Whether you're
        managing networks, converting files, or engaging with AI, Utils-App enhances your productivity with minimal
        effort.
      </p>

      <footer className="mt-8 text-center">
        <div className="mb-4">
          <h3>Connect with Me:</h3>
          <a href="https://www.linkedin.com/in/samandar-jumanov-510399286/" className="mr-4 text-blue-500 underline">LinkedIn</a>
          <a href="https://leetcode.com/jumanov/" className="mr-4 text-blue-500 underline">LeetCode</a>
          <a href="https://github.com/Samandar-Jumanov" className="mr-4 text-blue-500 underline">GitHub</a>
        </div>

       

        <a href="./backend-cv.pdf" download="My CV">
        {/* <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-4">
          Download CV
        </button> */}
      </a>
      </footer>

    </div>
  );
};

export default Download;
