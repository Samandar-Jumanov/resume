import React, { useState } from 'react';
import APILessonDocs from './api-course-sell/api-course-[lesson]';
import APIUserDocs from './api-course-sell/api-course-[users]';

const APICourseSellDocs = () => {
    const [selectedDoc, setSelectedDoc] = useState('APIUserDocs');

    const handleSelectChange = (e) => {
        setSelectedDoc(e.target.value);
    };

    return (
        <div className="container mx-auto p-8">
            <h1 className="text-3xl font-bold mb-4">API Documentation</h1>

            <label className="block mb-4">
                Select Documentation:
                <select
                    className="ml-2 p-2 rounded-md"
                    value={selectedDoc}
                    onChange={handleSelectChange}
                >
                    <option value="APIUserDocs">API User Docs</option>
                    <option value="APILessonDocs">API Lesson Docs</option>
                </select>
            </label>

            {selectedDoc === 'APIUserDocs' && <APIUserDocs />}
            {selectedDoc === 'APILessonDocs' && <APILessonDocs />}
        </div>
    );
};

export default APICourseSellDocs;
