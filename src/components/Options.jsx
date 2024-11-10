// src/components/Options.jsx

import React from "react";

const Options = ({ options, correctAnswer, onAnswer }) => {
  const handleOptionClick = (option) => {
    onAnswer(option); // Pass selected answer to parent component
  };

  return (
    <div className="grid gap-4">
      {options.map((option, index) => (
        <button
          key={index}
          onClick={() => handleOptionClick(option)}
          className="bg-gradient-to-r from-green-400 to-blue-500 text-white py-3 rounded-xl font-semibold shadow-md transform transition duration-200 hover:scale-105 hover:bg-blue-600"
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default Options;
