import React, { useState } from 'react';
import APILessonDocs from './api-course-sell/api-course-[lesson]';
import APIUserDocs from './api-course-sell/api-course-[users]';
import APICourseDocs from "./api-course-sell/api-course-sell[course]";
import APIOrderDocs from "./api-course-sell/api-course-[order]";
import APINotificationDocs from "./api-course-sell/api-course-[notification]";

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
                    <option value="APICourseDocs">API Course Docs</option>
                    <option value="APIOrderDocs">API Order Docs</option>
                    <option value="APINotificationDocs">API Notification Docs</option>
                </select>
            </label>

            {selectedDoc === 'APIUserDocs' && <APIUserDocs />}
            {selectedDoc === 'APILessonDocs' && <APILessonDocs />}
            {selectedDoc === 'APICourseDocs' && <APICourseDocs />}
            {selectedDoc === 'APIOrderDocs' && <APIOrderDocs />}
            {selectedDoc === 'APINotificationDocs' && <APINotificationDocs />}
        </div>
    );
};

export default APICourseSellDocs;
