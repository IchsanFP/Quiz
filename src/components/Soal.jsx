import { useState, useEffect } from "react";
import QuestionCard from "./QuestionCard"; 
import Result from "./Result";
import Aturan from "./Aturan"; 
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

export default function Soal({ questions }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [results, setResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [showAturan, setShowAturan] = useState(true); 
  const [timeLeft, setTimeLeft] = useState(15);
  const [quizStarted, setQuizStarted] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];
  const totalQuestions = questions.length;

  const navigate = useNavigate();

  // Reset waktu dan pindah ke soal berikutnya
  const handleNextQuestion = (isCorrect) => {
    setResults([...results, isCorrect]); // Menyimpan hasil jawaban

    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setTimeLeft(15);
    } else {
      setShowResults(true); 
    }
  };

  const handleRestart = () => {
    navigate("/menu"); 
    setCurrentQuestionIndex(0);
    setResults([]);
    setShowResults(false);
    setShowAturan(true); 
    setQuizStarted(false); 
    setTimeLeft(15);
  };

  // Timer berjalan hanya jika kuis sudah dimulai
  useEffect(() => {
    if (!quizStarted) {
      return;
    }

    if (timeLeft <= 0) {
      handleNextQuestion(false); // Waktu habis dianggap jawaban salah
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, quizStarted]);

  // Menampilkan Aturan
  if (showAturan) {
    return (
      <Aturan 
        onStartQuiz={() => {
          setShowAturan(false);
          setQuizStarted(true);
        }}
      />
    );
  }

  // Menampilkan result
  if (showResults) {
    const correctAnswers = results.filter((result) => result).length;
    return (
      <Result 
        correctAnswers={correctAnswers} 
        totalQuestions={totalQuestions} 
        handleRestart={handleRestart}
      />
    );
  }

  return (
    <div className="container">
      <div className="flex flex-col items-center justify-center min-h-screen">
        <QuestionCard
          id={currentQuestion.id}
          question={currentQuestion.question}
          options={currentQuestion.options}
          correctAnswer={currentQuestion.correctAnswer}
          onNext={handleNextQuestion}
          totalQuestions={totalQuestions}
          timeLeft={timeLeft}
        />
      <Footer />
      </div>
    </div>
  );
}


