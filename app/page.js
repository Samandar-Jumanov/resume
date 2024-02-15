"use client";

import Head from 'next/head';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from "react";
import { getProjects } from '@/components/fetchProjects';
import Image from 'next/image';
import portfolioImage from "@/public/portfolio-image.jpg"
import Skills from '@/components/Skills';

export default function Home() {
  const router = useRouter();
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getProjects()
      .then((data) => { 
        setProjects(data);
        console.log(data)
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
      </Head>

      <header className="relative bg-cyan-600 py-8 flex justify-center items-center">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Image src={portfolioImage} alt="Profile Picture" width={200} height={200} className="rounded-full" />
          <button 
            href="#" 
            className="text-black-200 hover:text-white text-2xl bg-blue-500 hover:bg-blue-600 py-2 px-6 rounded"
            onClick={downloadPage}>
            Download Util package || CV 
          </button>
        </div>
      </header>

      <Skills projects={projects}/>

    </div>
  );
}
