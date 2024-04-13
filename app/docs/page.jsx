"use client"

import React, { useState } from 'react';
import APICourseSellDocs from '../../components/API-course';
import { UtilsApp } from "../../components/utils-app";
import { FaBook, FaTools, FaBars, FaTimes } from 'react-icons/fa';

const Docs = () => {
    const [selectedDoc, setSelectedDoc] = useState('APICourseSellDocs');
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const handleSelectChange = (doc) => {
        setSelectedDoc(doc);
    };

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="flex flex-col md:flex-row">
          
            <div className={`bg-gray-900 text-white w-full md:w-1/4 p-8 ${isSidebarOpen ? '' : 'hidden'}`}>
                <h2 className="text-2xl mb-4">API Documentation</h2>
                
                <button
                    className={`mb-4 p-2 rounded-md w-full text-left ${selectedDoc === 'APICourseSellDocs' ? 'bg-gray-800' : 'bg-gray-700 hover:bg-gray-800'}`}
                    onClick={() => handleSelectChange('APICourseSellDocs')}
                >
                    <FaBook className="inline-block mr-2" />
                    API Course Sell Docs
                </button>
                
                <button
                    className={`mb-4 p-2 rounded-md w-full text-left ${selectedDoc === 'UtilsApp' ? 'bg-gray-800' : 'bg-gray-700 hover:bg-gray-800'}`}
                    onClick={() => handleSelectChange('UtilsApp')}
                >
                    <FaTools className="inline-block mr-2" />
                    Utils App
                </button>

                <p className="text-gray-300">Selected: {selectedDoc}</p>
            </div>

            <div className="w-full md:w-3/4 p-8">
                <button
                    className="md:hidden bg-gray-900 text-white p-2 rounded-md mb-4"
                    onClick={toggleSidebar}
                >
                    {isSidebarOpen ? <FaTimes /> : <FaBars />}
                </button>
                
                {selectedDoc === 'APICourseSellDocs' && <APICourseSellDocs />}
                {selectedDoc === 'UtilsApp' && <UtilsApp />}
            </div>
        </div>
    );
};

export default Docs;
