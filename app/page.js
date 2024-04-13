"use client"

import Head from 'next/head';
import { useRouter } from 'next/navigation'; 
import { FaTerminal } from 'react-icons/fa';
import SkillsComponent from "../components/Skills"
import ShowcaseComponent from "../components/showcase";
import ServicesComponent from "../components/service";
export default function Home() {
  const router = useRouter();

  function downloadPage() {
    router.push("/docs"); 
  };

  return (
    <div className="bg-gray-800 min-h-screen text-white flex flex-col">
      <Head>
        <title>Samandar Jumanov</title>
      </Head>
        <ShowcaseComponent />
        <div className="text-center my-8">
          <button onClick={downloadPage} className="bg-green-600  text-white font-bold py-1 px-4 md:px-6 rounded transform  flex items-center justify-center space-x-2 min-w-[160px] mx-auto">
            <FaTerminal className="text-base" />
            <span className="text-sm">Check out latest aps and api</span>
          </button>
        </div>
        <ServicesComponent />
        
      <main className="flex-grow container mx-auto px-4 py-8">
        <SkillsComponent />
      </main>
      <footer className="bg-gray-900 py-4 text-center">
        <p className="text-gray-400">© Samandar Jumanov - All rights reserved</p>
      </footer>
    </div>
  );
}
