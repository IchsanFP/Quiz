import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

export default function Menu() {
  const navigate = useNavigate();

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const handleNextPage = () => {
    navigate("/kuis-html"); 
  };

  const handleNextPage1 = () => {
    navigate("/kuis-css"); 
  };

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    navigate("/Login"); 
  };
  
  return (
    <div className="container">
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="flex flex-col gap-3 box-border w-[358px] sm:w-[470px] h-auto py-10 rounded-lg px-8 bg-warna-200 shadow-lg shadow-warna-50 border-2 border-warna-200">
          <div className="flex justify-between items-center border-b-2 border-gray-200">
            <div className="flex flex-col w-[278px]">
              <h1 className="text-lg font-medium font-poppins text-warna-400">👋Welcome,</h1>
              <p className="text-lg font-semibold font-poppins text-warna-400">{currentUser.name}!</p>
            </div>
            <button onClick={handleLogout} className="hover:bg-warna-300 w-[120px] sm:w-[90px] h-[40px] p-[10px] bg-warna-400 cursor-pointer rounded-[10px] px-3 py-2 flex items-center justify-center font-poppins font-semibold text-base text-white">
              Log Out
            </button>
          </div>
          <div className="w-full mb-3 text-[32px] text-center text-warna-400 font-semibold font-poppins">Menu Quiz</div>
          <div className="w-full flex-wrap flex gap-4 justify-center">
            <button onClick={handleNextPage} className="text-warna-400 hover:bg-warna-400 hover:shadow-lg hover:shadow-warna-400 border-box hover:text-white size-[100px] rounded-md shadow-lg shadow-gray-500 p-2 flex flex-col justify-center items-center gap-1">
              <svg fill="#E34F26" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>HTML5</title><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/></svg>
              <h1 className="font-poppins font-bold text-base">HTML</h1>
            </button>
            <button onClick={handleNextPage1} className="text-warna-400 hover:bg-warna-400 hover:shadow-lg hover:shadow-warna-400 border-box hover:text-white size-[100px] rounded-md shadow-lg shadow-gray-500 p-2 flex flex-col justify-center items-center gap-1">
              <svg fill="#1572B6" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>CSS3</title><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"/></svg>
              <h1 className="font-poppins font-bold text-base ">CSS</h1>
            </button>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}