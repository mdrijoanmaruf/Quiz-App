// src/components/Header.jsx

import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-3 shadow-lg">
      <div className="container mx-auto text-center">
        <h1 className="text-3xl font-extrabold tracking-tight hover:scale-110 transform transition duration-300 ease-in-out">
          <Link to="/" className="hover:text-yellow-300">
            BS Quiz App
          </Link>
        </h1>
        <p className="text-lg mt-4 opacity-90 flex justify-center items-center space-x-2">
          <span>Course Teacher:</span>
          <a 
            href="https://www.linkedin.com/in/dr-arifatul-kibria-a14705b/" 
            className="underline hover:text-yellow-300 transition duration-200"
            target="_blank" 
            rel="noopener noreferrer"
          >
            DR. ARIFATUL KIBRIA
          </a>
        </p>
      </div>
    </header>
  );
};

export default Header;
