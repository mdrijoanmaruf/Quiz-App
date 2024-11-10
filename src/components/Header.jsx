// src/components/Header.jsx

import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white py-8 shadow-md">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-semibold tracking-tight transform transition duration-300 ease-in-out hover:scale-105">
          <Link to='/'>
          BS Quiz App
          </Link>
        </h1>
        <p className="text-lg mt-3 opacity-90">
          Course Teacher : 
          <a 
            href="https://www.linkedin.com/in/dr-arifatul-kibria-a14705b/" 
            className="underline text-pink-300 hover:text-yellow-400 transition duration-200"
          >
            DR. ARIFATUL KIBRIA
          </a>
        </p>
      </div>
    </header>
  );
};

export default Header;
