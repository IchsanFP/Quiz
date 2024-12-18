import { useNavigate } from "react-router-dom";
import Footer from "./Footer"
export default function Aturan({ onStartQuiz }) {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/menu");
  }
      
  return (
    <div className="container">
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="flex flex-col gap-6 box-border w-[540px] h-auto py-10 rounded-lg px-7 bg-warna-200 shadow-lg shadow-warna-50 border-2 border-warna-200">
          <div className="w-full text-[32px] text-center mb-2 text-warna-400 font-semibold font-poppins">Rules</div>
          <ol className="ml-4 list-decimal">
              <li className="py-2 border-b-2 border-gray-200 font-poppins text-warna-400">Each question has a time limit of 15 seconds.</li>
              <li className="py-2 border-b-2 border-gray-200 font-poppins text-warna-400">Choose one answer to proceed.</li>
              <li className="py-2 border-b-2 border-gray-200 font-poppins text-warna-400">The final result will be displayed after all questions are completed.</li>
              <li className="py-2 border-b-2 border-gray-200 font-poppins text-warna-400">If time runs out, the answer will be considered incorrect, and the next question will load automatically.</li>
          </ol>

          <div className="flex justify-end gap-4">
            <button onClick={handleBack} className="hover:bg-warna-400 hover:text-white w-[135px] p-[10px] border-2 border-warna-400 bg-transparant cursor-pointer rounded-[10px] flex items-center justify-center font-poppins font-semibold text-base text-warna-400">
              Back to Menu
            </button>
            <button onClick={onStartQuiz} className="hover:bg-warna-300 w-[135px] p-[10px] bg-warna-400 cursor-pointer rounded-[10px] flex items-center justify-center font-poppins font-semibold text-base text-white">
                Start
            </button>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}
  
  
  