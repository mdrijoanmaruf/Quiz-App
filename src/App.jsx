// src/App.jsx

import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Quiz from "./components/Quiz";
import Result from "./components/Result";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import { quizData1, quizData2 } from "./data/quizData";

function App() {
  const [quizData, setQuizData] = useState(null);
  const [score, setScore] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [userAnswers, setUserAnswers] = useState([]);

  const startQuiz = (quiz) => {
    setQuizData(quiz);
    setScore(0);
    setCurrentQuestionIndex(0);
    setShowResult(false);
    setUserAnswers([]);
  };

  const handleAnswer = (selectedAnswer) => {
    const isCorrect = selectedAnswer === quizData[currentQuestionIndex].answer;
    if (isCorrect) setScore(score + 1);

    const answerData = {
      question: quizData[currentQuestionIndex].question,
      correctAnswer: quizData[currentQuestionIndex].answer,
      userAnswer: selectedAnswer,
      isCorrect,
    };
    setUserAnswers([...userAnswers, answerData]);

    const nextQuestion = currentQuestionIndex + 1;
    if (nextQuestion < quizData.length) {
      setCurrentQuestionIndex(nextQuestion);
    } else {
      setShowResult(true);
    }
  };

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-r from-blue-50 to-blue-100 flex flex-col justify-between">
        <Header />
        
        <main className="flex-grow flex flex-col items-center justify-center p-4">
          <Routes>
            <Route path="/" element={<Home startQuiz={startQuiz} />} />
            <Route
              path="/quiz"
              element={
                showResult ? (
                  <Result score={score} total={quizData?.length || 0} userAnswers={userAnswers} />
                ) : (
                  <Quiz
                    questionData={quizData ? quizData[currentQuestionIndex] : null}
                    onAnswer={handleAnswer}
                    currentQuestionIndex={currentQuestionIndex}
                    totalQuestions={quizData ? quizData.length : 0}
                  />
                )
              }
            />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
