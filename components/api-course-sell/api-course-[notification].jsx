import React, { useState } from 'react';
import { notificationEndpoints, notificationBaseUrl } from "./endpoints/notification";

const APINotificationDocs = () => {
    const [copySuccess, setCopySuccess] = useState(null);

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text);
        setCopySuccess('Copied!');
        setTimeout(() => {
            setCopySuccess(null);
        }, 2000);
    };

    return (
        <div className="container mx-auto p-8">
            <h1 className="text-3xl font-bold mb-4">Docs course sell | User Notifications</h1>

            <h2 className="text-2xl font-semibold mt-6 mb-4">Base URL</h2>
            <code className="bg-gray-200 p-2 rounded-md">{notificationBaseUrl}</code>

            <h2 className="text-2xl font-semibold mt-6 mb-4">Endpoints</h2>

            {notificationEndpoints.map((endpoint, index) => (
                <div key={index} className="my-4">
                    <h3 className="text-xl font-semibold">{endpoint.title}</h3>
                    <p className="mb-2">{endpoint.description}</p>
                    <p className="mb-2">Method: <code className="bg-gray-200 p-1 rounded-md">{endpoint.method}</code></p>
                    <p className="mb-2">URL: 
                        <code className="bg-gray-200 p-1 rounded-md inline-block">{endpoint.url}</code>
                        <button className="bg-blue-500 text-white p-1 rounded-md ml-2" onClick={() => copyToClipboard(endpoint.url)}>Copy</button>
                        {copySuccess === 'Copied!' && <span className="text-green-500 ml-2">{copySuccess}</span>}
                    </p>
                    <p className="mb-2">Response:</p>
                    <pre className="bg-gray-200 p-2 rounded-md">{endpoint.response}</pre>
                    <p className="mb-2">Middlewares: {endpoint.middlewares.join(', ')}</p>
                </div>
            ))}

        </div>
    );
};

export default APINotificationDocs;
