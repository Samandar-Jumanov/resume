// pages/index.js
"use client"
import Head from 'next/head';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();


  function downloadPage(){
         router.push("download")
  };

  return (
    <div className="bg-black min-h-screen">
      <Head>
        <title>My Resume Landing Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="relative bg-cyan-600 py-6">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <img src="/profile-picture.jpg" alt="Profile Picture" className="mx-auto rounded-full w-24 h-24" />
          <a href="#" className="text-blue-200 hover:text-white" onClick={downloadPage}>Download</a>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 text-blue-200">
        <h1 className="text-3xl font-bold mb-4">Hello, I'm [Your Name]</h1>
        <p className="text-lg mb-8">[A brief introduction about yourself]</p>

        <h2 className="text-2xl font-bold mb-4">Personal Projects</h2>

      </main>

      <footer className="bg-gray-800 py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white">&copy; {new Date().getFullYear()} My Resume Landing Page. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
