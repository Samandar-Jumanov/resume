"use client"

import React from 'react';
import { useRouter, usePathname } from 'next/navigation'; 

const BottomNavBar = () => {
  const router = useRouter();
  const pathName = usePathname();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Client', path: '/client' },
    { name: 'Posts', path: '/posts' },
    // { name: 'Posts', path: '/posts' },
  ];

  const navigate = (path) => {
    router.push(path);
  };

  return (
    <div className="fixed inset-x-0 bottom-5 bg-opacity-60 text-white text-center">
      <div className="flex justify-around items-center h-12 max-w-xs mx-auto rounded-full bg-gray-800 bg-opacity-80">
        {navItems.map((item) => (
          <div
            key={item.name}
            className={`flex-1 cursor-pointer py-2 ${pathName === item.path ? 'text-blue-400' : 'hover:text-gray-300'} transition-colors duration-150 ease-in-out`}
            onClick={() => navigate(item.path)}
          >
            <span className={`${pathName === item.path ? 'animate-pulse' : ''}`}>{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BottomNavBar;
