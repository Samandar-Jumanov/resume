"use client"
import Head from 'next/head';
import { useRouter } from 'next/navigation'; // Corrected the import path
import SkillsComponent from '@/components/Skills';
import ServicesComponent from "@/components/service"
export default function Home() {
  const router = useRouter();

  function downloadPage() {
    router.push("/download"); // Confirm this is the correct path
  };

  return (
    <div className="bg-gray-800 min-h-screen text-white flex flex-col">
      <Head>
        <title>Samandar Jumanov</title>
      </Head>

      <header className="flex-grow-0 py-16 bg-gradient-to-r from-blue-800 to-purple-700">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-6 text-xl">Delving into web development with innovative solutions and cutting-edge technologies.</p>
          <button
            className="mt-4 bg-purple-600 hover:bg-purple-800 text-lg font-medium py-2 px-6 rounded-lg shadow transition duration-300 ease-in-out"
            onClick={downloadPage}>
            Explore my Utils-App Package
          </button>
        </div>
      </header>

      {/* <main className="flex-grow container mx-auto px-4 py-8">
      </main> */}
        <ServicesComponent />

      <main className="flex-grow container mx-auto px-4 py-8">
        <SkillsComponent />
      </main>
 
      <footer className="flex-grow-0 bg-gray-900 py-4 text-center">
        <p className="text-gray-400">© Samandar Jumanov - All rights reserved</p>
      </footer>
    </div>
  );
}
