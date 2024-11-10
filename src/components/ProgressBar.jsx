// src/components/ProgressBar.jsx

import React from "react";

const ProgressBar = ({ current, total }) => {
  const progress = (current / total) * 100;

  return (
    <div className="w-full bg-gray-300 rounded-full h-4 mb-6">
      <div
        className="bg-green-500 h-4 rounded-full transition-all duration-500 ease-in-out"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
