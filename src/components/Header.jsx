// src/components/Header.jsx

import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full bg-blue-500 text-white py-3 shadow-md"> {/* Simple blue background */}
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
