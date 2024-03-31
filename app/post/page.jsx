import Post from '../../components/card';
import hook from "../../public/hook.png"
import node from "../../public/node.png";
import tailwind from "../../public/tailwind.png";
import postgres from "../../public/postgres.png"
import mongodb from "../../public/mongo.png"
import ts from "../../public/ts.png"

const posts = [
    {
      id: 1,
      title: 'Understanding React Hooks',
      content: `React Hooks offer a powerful and expressive way to leverage state and other React features in functional components. Introduced in React 16.8, hooks empower developers to use state and lifecycle methods without writing a class. This post delves into the nuances of useState, useEffect, and custom Hooks, illustrating how they simplify code, enhance readability, and foster component reuse. Explore practical examples and best practices for leveraging Hooks in your React projects to build efficient, cleaner, and more maintainable applications.`,
      imageUrl: hook.src,
    },
  
    {
      id: 2,
      title: 'Tailwind CSS - Utility-first CSS Framework',
      content: `Tailwind CSS has redefined the way developers approach styling, with its utility-first methodology promoting a highly customizable and rapid development workflow. Unlike traditional CSS frameworks, Tailwind CSS provides low-level utility classes that let you build complex designs without ever leaving your HTML. This post covers Tailwind's core concepts, from responsive design and state variants to custom theming. Learn how Tailwind CSS accelerates development, enhances maintainability, and how it can be integrated with popular front-end frameworks.`,
      imageUrl: tailwind.src,
    },
    {
      id: 3,
      title: 'TypeScript in Web Development',
      content: `TypeScript, a superset of JavaScript, offers static typing, advanced object-oriented features, and powerful tooling support, leading to more robust and error-free code. This in-depth analysis covers TypeScript's key features, such as interfaces, generics, and decorators, demonstrating how they can be used to enforce typing and improve the maintainability of large-scale applications. Explore how TypeScript integrates with modern build tools and frameworks, and how it enhances development efficiency and project scalability.`,
      imageUrl: ts.src,
    },
    {
      id: 4,
      title: 'Building APIs with Node.js and Express.js',
      content: `Node.js, coupled with Express.js, forms the backbone of modern web application backends, offering a non-blocking, event-driven architecture suitable for building scalable RESTful APIs. This tutorial explores setting up a Node.js server, defining routes, middleware, handling requests, and integrating database operations with Express.js. Through practical examples, learn how to architect your backend for extensibility, security, and performance, leveraging Node.js and Express.js's full potential to develop real-world applications.`,
      imageUrl: node.src,
    },
    {
      id: 5,
      title: 'Data Modeling with PostgreSQL',
      content: `PostgreSQL stands out as a robust, open-source relational database system with advanced features and support for complex queries, full ACID compliance, and extensible types. This comprehensive guide delves into PostgreSQL's data modeling capabilities, exploring entity-relationship diagrams, normalization, and foreign key constraints. Learn best practices for designing a scalable and efficient schema, performance tuning, and leveraging PostgreSQL's advanced features like JSON support and stored procedures for complex data operations.`,
      imageUrl: postgres.src,
    },
    {
      id: 6,
      title: 'NoSQL Databases: MongoDB',
      content: `MongoDB, a leading NoSQL database, offers a flexible document-oriented approach that supports dynamic schemas, makingit ideal for handling big data and complex queries that don't fit well into the rigid schemas of relational databases. This guide dives into MongoDB's core principles, including its document model, query language, and aggregation framework. By walking through practical use cases and examples, you'll learn how to design schemas, perform CRUD operations, and optimize performance in MongoDB. Understand how MongoDB's schema-less nature allows for flexibility in data storage and retrieval, making it an excellent choice for applications requiring rapid development and scalability.`,
      imageUrl: mongodb.src
    },
  ];
  
  const Posts = () => {
    return (
      <div className="bg-gray-700 min-h-screen">
        <div className="py-12 px-4">
          <h1 className="text-4xl font-bold text-center text-white mb-12">Web Development Posts</h1>
         
          <div className="flex flex-col items-center justify-center">
            {posts.map((post) => (
              <Post key={post.id} {...post} />
            ))}
          </div>
        </div>
      </div>
    );
  }
  

export default Posts