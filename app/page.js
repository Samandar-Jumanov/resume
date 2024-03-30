"use client"
import Head from 'next/head';
import { useRouter } from 'next/navigation'; 

// import SkillsComponent from '@/components/Skills';
import SkillsComponent from "../components/Skills"
import ShowcaseComponent from "../components/showcase";
import ServicesComponent from "../components/service";

export default function Home() {
  const router = useRouter();

  function downloadPage() {
    router.push("/download"); 
  };


  return (
    <div className="bg-gray-800 min-h-screen text-white flex flex-col">
      <Head>
        <title>Samandar Jumanov</title>
      </Head>
        <ShowcaseComponent />
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
