import { useState, useEffect } from "react";
import Footer from "./Footer";

export default function Result({ correctAnswers, totalQuestions, handleRestart }) {
  // const calculatedProgress = ((correctAnswers / totalQuestions) * 100).toFixed(2);
  const calculatedProgress = Math.round((correctAnswers / totalQuestions) * 100);

  return (
    <div className="container">
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="flex flex-col items-center gap-6 box-border w-[500px] h-auto py-10 rounded-lg px-7 bg-warna-200 shadow-lg shadow-warna-50 border-2 border-warna-200">
          <div className="w-full mb-2 text-xl font-semibold text-center text-warna-400 font-poppins">
            You have successfully completed the quiz!
          </div>
        
          <CircularProgress progress={calculatedProgress} />
          <p className="text-lg text-center font-poppins text-warna-400">
            Corrert Answer: {correctAnswers} of {totalQuestions}
          </p>

          <div className="flex justify-center gap-4">
              <button onClick={handleRestart} className="hover:bg-warna-400 hover:text-white w-[135px] p-[10px] border-2 border-warna-400 bg-transparant cursor-pointer rounded-[10px] flex items-center justify-center font-poppins font-semibold text-base text-warna-400">
                Back to Menu
              </button>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}
  
function CircularProgress({ progress }) {
  const [offset, setOffset] = useState(100);

  useEffect(() => {
    // Hitung stroke-dashoffset berdasarkan progres
    const calculatedOffset = 100 - progress;
    setOffset(calculatedOffset);
  }, [progress]);

  return (
    <div className="relative size-[120px]">
      <svg className="-rotate-90 size-full" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
        {/* Background Circle */} 
        <circle
          cx="18"
          cy="18"
          r="16"
          fill="none"
          className="text-gray-200 stroke-current"
          strokeWidth="3"
        ></circle>

        {/* Progress Circle */}
        <circle
          cx="18"
          cy="18"
          r="16"
          fill="none"
          className="transition-all duration-500 stroke-current text-warna-400"
          strokeWidth="3"
          strokeDasharray="100"
          strokeDashoffset={offset}
          strokeLinecap="round"
        ></circle>
      </svg>

      {/* Percentage Text */}
      <div className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 start-1/2">
        <span className="text-2xl font-bold text-center font-poppins text-warna-400">{progress}%</span>
      </div>
    </div>
  );
}
  