// src/components/Result.jsx

import React from "react";
import { useNavigate } from "react-router-dom";

const Result = ({ score, total, userAnswers }) => {
  const navigate = useNavigate();

  const handleReturnHome = () => {
    navigate("/"); // Navigate to the home page
  };

  return (
    <div className="text-center p-10 bg-white rounded-2xl shadow-xl w-full max-w-2xl">
      <h2 className="text-4xl font-bold text-green-600 mb-6">Your Results</h2>
      <p className="text-xl mb-4">Score: {score} / {total}</p>

      <div className="text-left mt-6">
        {userAnswers.map((answer, index) => (
          <div key={index} className="mb-6 p-4 bg-gray-100 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-purple-700">
              {index + 1}. {answer.question}
            </h3>
            <p
              className={`text-md mt-2 ${
                answer.isCorrect ? "text-green-600" : "text-red-600"
              }`}
            >
              Your Answer: {answer.userAnswer}
            </p>
            {!answer.isCorrect && (
              <p className="text-md text-gray-700">
                Correct Answer: {answer.correctAnswer}
              </p>
            )}
          </div>
        ))}
      </div>

      {/* Return Home Button */}
      <button
        onClick={handleReturnHome}
        className="mt-8 bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 transition"
      >
        Return Home
      </button>
    </div>
  );
};

export default Result;
