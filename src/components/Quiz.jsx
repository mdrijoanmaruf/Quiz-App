// src/components/Quiz.jsx

import React from "react";
import Question from "./Question";
import ProgressBar from "./ProgressBar";

const Quiz = ({ questionData, onAnswer, currentQuestionIndex, totalQuestions }) => {
  return (
    <div className="w-full max-w-xl p-8 bg-white rounded-2xl shadow-2xl transform transition-all hover:scale-105">
      <ProgressBar current={currentQuestionIndex + 1} total={totalQuestions} />
      
      {/* Display question number */}
      <div className="text-gray-700 font-bold text-lg mb-4">
        Question {currentQuestionIndex + 1} of {totalQuestions}
      </div>

      <Question questionData={questionData} onAnswer={onAnswer} />
    </div>
  );
};

export default Quiz;
