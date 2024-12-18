import { useState } from "react";

export default function QuestionCard({ id, question, options, correctAnswer, onNext, totalQuestions, timeLeft }) {
    const [selectedOption, setSelectedOption] = useState(null);
    const [answered, setAnswered] = useState(false);
  
    const handleOptionClick = (optionValue) => {
      if (answered) return;
      setSelectedOption(optionValue);
      setAnswered(true);
    };
  
    const handleNext = () => {
      const isCorrect = selectedOption === correctAnswer;
  
      onNext(isCorrect);
      setSelectedOption(null);
      setAnswered(false);
    };
  
    const optionStyle = (optionValue) => {
      if (!answered) return "bg-gray-200 hover:bg-warna-400 hover:text-white";
      if (optionValue === correctAnswer) return "bg-green-500 text-white";
      if (optionValue === selectedOption) return "bg-red-500 text-white";
      return "bg-gray-200 text-warna-400";
    };
  
    return (
      <div className="flex flex-col gap-6 box-border w-[358px] md:w-[650px] h-auto py-10 rounded-lg px-7 bg-warna-200 shadow-lg shadow-warna-50 border-2 border-warna-200">
        <div className="flex items-center justify-between pb-1 border-b-2 border-gray-200">
          <p className="text-base font-semibold font-poppins text-warna-400">
            {id} of {totalQuestions} Question
          </p>
          <div className="flex px-2 py-1 text-white bg-warna-400 font-poppins w-[64px] rounded-[10px] items-center justify-between">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M9 3V1h6v2zm2 11h2V8h-2zm1 8q-1.85 0-3.488-.712T5.65 19.35t-1.937-2.863T3 13t.713-3.488T5.65 6.65t2.863-1.937T12 4q1.55 0 2.975.5t2.675 1.45l1.4-1.4l1.4 1.4l-1.4 1.4Q20 8.6 20.5 10.025T21 13q0 1.85-.713 3.488T18.35 19.35t-2.863 1.938T12 22m0-2q2.9 0 4.95-2.05T19 13t-2.05-4.95T12 6T7.05 8.05T5 13t2.05 4.95T12 20m0-7"
              ></path>
            </svg>
            <p className="text-lg font-semibold">{timeLeft}</p>
          </div>
        </div>
  
        <div className="flex flex-col gap-6">
          <p className="text-lg font-semibold text-justify text-warna-400 font-poppins">
            {question}
          </p>
          <div className="flex flex-col w-full gap-3">
            {options.map((option) => (
              <div
                key={option.value}
                className={`shadow-lg cursor-pointer text-base font-normal font-poppins rounded-[10px] px-7 py-[10px] w-full flex gap-2 items-center justify-center ${optionStyle(
                  option.value
                )}`}
                onClick={() => handleOptionClick(option.value)}
              >
                <p>{option.text}</p>
              </div>
            ))}
          </div>
        </div>
  
        <div className="flex justify-end gap-4">
          <button
            onClick={handleNext}
            disabled={!answered}
            className="hover:bg-warna-300 w-[135px] p-[10px] bg-warna-400 cursor-pointer rounded-[10px] flex items-center justify-center font-poppins font-semibold text-base text-white"
          >
            Next Question
          </button>
        </div>
      </div>
    );
}