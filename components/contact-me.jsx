"use client";
import React, { useState } from 'react';
import { FaLinkedin, FaGithub, FaCopy, FaEnvelope } from 'react-icons/fa';
import toast from 'react-hot-toast';

const ContactComponent = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const phoneNumber = "+998881230520";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(phoneNumber);
    toast.success("Phone number copied");
  };

  const isMobileDevice = () => {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
  };

  const handleSendEmail = () => {
    if (!email.trim() || !message.trim()) {
      toast.error("Please fill in your email and message.");
      return;
    }

    const subject = encodeURIComponent("Contact from " + email);
    const body = encodeURIComponent(message);

    if (isMobileDevice()) {
      window.location.href = `mailto:jumanovsamandar005@gmail.com?subject=${subject}&body=${body}`;
    } else {
      window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=jumanovsamandar005@gmail.com&su=${subject}&body=${body}`, '_blank');
    }

    setEmail('');
    setMessage('');
    toast.success("Redirecting to your email client...");
  };

  return (
    <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg mx-auto mt-10 w-11/12 lg:w-90%">
      <h2 className="text-2xl font-bold text-center mb-6">Connect With Me</h2>
      <div className="flex flex-col items-center justify-center gap-6">
        <a href="https://linkedin.com/in/samandar-jumanov-510399286" className="text-blue-300 hover:underline flex items-center gap-2">
          <FaLinkedin size="20"/> LinkedIn: Samandar Jumanov
        </a>
        <a href="https://github.com/Samandar-Jumanov" className="text-gray-300 hover:underline flex items-center gap-2">
          <FaGithub size="20"/> GitHub: Samandar-Jumanov
        </a>
        <div className="flex gap-2 items-center">
          <span>Phone: +9988 8 123 05 20</span>
          <button onClick={copyToClipboard} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded flex items-center gap-2">
            <FaCopy size="18"/> Copy
          </button>
        </div>
        <div className="w-full">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your.email@example.com"
            className="text-black w-full rounded-lg p-2 mb-4"
          />
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Write your message here..."
            className="text-black w-full rounded-lg p-2 mb-4 h-40 resize-none"
          />
          <button onClick={handleSendEmail} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded flex items-center gap-2">
            <FaEnvelope size="18"/> Send Email
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactComponent;
