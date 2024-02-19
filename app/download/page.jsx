"use client"

import React, { useEffect, useState } from 'react';

const Download = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Overview:</h1>

      <p className="mb-6">
        Utils-App is a lightweight utility application built on top of Node.js, utilizing the readline and commander
        libraries to provide a streamlined command-line interface (CLI) for performing various tasks. With Utils-App,
        users can efficiently execute commands to accomplish a wide range of actions, all within the familiar environment
        of a terminal window.
      </p>

      <h2 className="text-2xl font-bold mb-4">Features:</h2>

      <ul className="list-disc ml-6 mb-6">
        <li className="mb-2">
          <strong>Node.js Foundation:</strong> Utils-App is built entirely on Node.js, harnessing its power and
          versatility to deliver a robust utility application that runs seamlessly across different operating systems.
        </li>
        <li className="mb-2">
          <strong>Readline and Commander Integration:</strong> By leveraging the readline and commander libraries,
          Utils-App offers an intuitive and user-friendly CLI experience, making it easy for users to interact with the
          application and execute commands efficiently.
        </li>
        <li className="mb-2">
          <strong>Global Installation:</strong> Users can install Utils-App globally, enabling them to access its
          functionality from any directory within their system, providing a convenient and consistent experience across
          different projects and workflows.
        </li>
        <li className="mb-2">
          <strong>Simple Command Structure:</strong> Utils-App follows a straightforward command structure, allowing
          users to execute commands with ease using the terminal. The application's commands are designed to be intuitive
          and easy to remember, minimizing the learning curve for new users.
        </li>
        <li className="mb-2">
          <strong>Customization:</strong> While Utils-App provides a set of core functionalities out of the box, it also
          offers flexibility for customization. Users can extend the application's capabilities by adding custom commands
          or integrating additional libraries as needed.
        </li>
      </ul>

      <h2 className="text-2xl font-bold mb-4">Installation:</h2>

      <p className="mb-6">
        To install Utils-App, follow these simple steps:
      </p>

      <ol className="list-decimal ml-6 mb-6">
        <li className="mb-2">
          Ensure you have Node.js installed on your system. If not, you can download and install it from{' '}
          <a href="https://www.npmjs.com/" className="text-blue-500 underline">
            NPM 
          </a>
          .
        </li>
        <li className="mb-2">Open a terminal window.</li>
        <li className="mb-2">Run the following command to install Utils-App globally:</li>
      </ol>

      <pre className="bg-black-200 rounded p-4 mb-6 text-black-900">
        <code>npm install -g utils-app</code>
      </pre>


      <p className="mb-6">
        Once the installation is complete, you can start using Utils-App by executing the <code>utils</code> command in
        your terminal.
      </p>

      <h2 className="text-2xl font-bold mb-4">Usage:</h2>

      <p className="mb-6">
        After installation, Utils-App can be used to perform various tasks through the command-line interface. The
        application provides a set of commands for interacting with its functionalities, such as:
      </p>

      <ul className="list-disc ml-6 mb-6">
        <li className="mb-2">
          <code>utils start</code>: Initializes the application and provides access to its features through the CLI.
        </li>
        <li className="mb-2">
          <code>utils &lt;command&gt;</code>: Executes a specific command provided by Utils-App, allowing users to
          perform various tasks based on their requirements.
        </li>
      </ul>

      <p className="mb-6">
        Users can refer to the application's documentation or use the <code>--help</code> option with individual commands
        to learn more about their usage and available options.
      </p>

      <h2 className="text-2xl font-bold mb-4">Customization and Configuration:</h2>

      <p className="mb-6">
        While Utils-App comes with a predefined set of commands and functionalities, users can customize the application
        to suit their specific needs. This can include adding custom commands, modifying the behavior of existing
        commands, or integrating additional libraries to extend its capabilities further.
      </p>

      <h2 className="text-2xl font-bold mb-4">Conclusion:</h2>

      <p>
        Utils-App offers a powerful yet lightweight solution for performing various tasks through a simple command-line
        interface. Built on Node.js and integrated with the readline and commander libraries, it provides users with a
        versatile toolset that can be easily tailored to meet their specific requirements. Whether you're a developer,
        sysadmin, or power user, Utils-App is designed to streamline your workflow and enhance your productivity in the
        terminal environment.
      </p>
      <footer className="mt-8 text-center">
        <div className="mb-4">
          <h3> Connect with me : </h3>
          <a href="https://www.linkedin.com/in/samandar-jumanov-510399286/" className="mr-4 text-blue-500 underline">LinkedIn</a>
          <a href="https://leetcode.com/jumanov/" className="mr-4 text-blue-500 underline">LeetCode</a>
          <a href="https://github.com/Samandar-Jumanov" className="mr-4 text-blue-500 underline">GitHub</a>
        </div>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-4">
          Download CV
        </button>
      </footer>

    </div>
  );
};

export default Download;
