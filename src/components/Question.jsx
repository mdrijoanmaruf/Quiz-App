// src/components/Question.jsx

import React from "react";
import Options from "./Options";

const Question = ({ questionData, onAnswer }) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-center text-purple-700 mb-6">{questionData.question}</h2>
      <Options options={questionData.options} correctAnswer={questionData.answer} onAnswer={onAnswer} />
    </div>
  );
};

export default Question;
