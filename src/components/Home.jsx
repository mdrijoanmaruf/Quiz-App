// src/components/Home.jsx

import React from "react";
import { useNavigate } from "react-router-dom";
import { quizData1, quizData2 } from "../data/quizData";

const Home = ({ startQuiz }) => {
  const navigate = useNavigate();

  const handleQuizSelection = (quiz) => {
    startQuiz(quiz); // Set the quiz data in App
    navigate("/quiz"); // Navigate to /quiz
  };

  return (
    <div className="w-full max-w-lg mx-auto p-6 bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-600 rounded-xl shadow-lg transform transition-all duration-500 ease-in-out hover:scale-105 space-y-6 text-center">
      <h2 className="text-3xl font-semibold text-white tracking-tight">
        Choose a Quiz
      </h2>
      
      <div className="space-y-4">
        <button
          onClick={() => handleQuizSelection(quizData1)}
          className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-500"
        >
          Mughal Empire Quiz
        </button>
        <button
          onClick={() => handleQuizSelection(quizData2)}
          className="w-full bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105 hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-500"
        >
          Decline of Mughal Empire Quiz
        </button>
      </div>
    </div>
  );
};

export default Home;
