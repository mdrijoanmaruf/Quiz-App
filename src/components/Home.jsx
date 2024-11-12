// src/components/Home.jsx

import React from "react";
import { useNavigate } from "react-router-dom";
import { quizData1, quizData2, quizData3 } from "../data/quizData";

const Home = ({ startQuiz }) => {
  const navigate = useNavigate();

  const handleQuizSelection = (quiz) => {
    startQuiz(quiz); // Set the quiz data in App
    navigate("/quiz"); // Navigate to /quiz
  };

  return (
    <div className="flex items-center justify-center ">
      <div className="bg-white rounded-3xl shadow-2xl p-10 max-w-md w-full text-center">
        
        {/* Heading */}
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Welcome to the Quiz App!</h2>
        <p className="text-gray-600 mb-8">Choose a quiz below to test your knowledge .</p>

        {/* Quiz Selection Buttons */}
        <div className="space-y-4">
        <button
            onClick={() => handleQuizSelection(quizData3)}
            className="w-full bg-purple-500 text-white py-3 rounded-lg font-semibold shadow-md hover:bg-purple-600 transition"
          >
            Sunday Quiz
          </button>
          <button
            onClick={() => handleQuizSelection(quizData1)}
            className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold shadow-md hover:bg-blue-600 transition"
          >
            Mughal Empire Quiz
          </button>
          <button
            onClick={() => handleQuizSelection(quizData2)}
            className="w-full bg-green-500 text-white py-3 rounded-lg font-semibold shadow-md hover:bg-green-600 transition"
          >
            Decline of Mughal Empire Quiz
          </button>
          
        </div>
      </div>
    </div>
  );
};

export default Home;
