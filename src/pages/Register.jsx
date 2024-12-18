import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../auth";
import Footer from "../components/Footer";

export default function Resgister() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [emailError, setEmailError] = useState("");
  const [namaError, setNamaError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleRegister = () => {
    if (!name && !email && !password) {
      setNamaError("This field is required. Please fill in all the required fields."); 
      setEmailError("This field is required. Please fill in all the required fields."); 
      setPasswordError("This field is required. Please fill in all the required fields."); 
      return;
    } else if (!name && !email) {
      setNamaError("This field is required. Please fill in all the required fields."); 
      setEmailError("This field is required. Please fill in all the required fields."); 
    } else if (!email && !password) {
      setEmailError("This field is required. Please fill in all the required fields."); 
      setPasswordError("This field is required. Please fill in all the required fields."); 
    } else if (!name && !password) {
      setNamaError("This field is required. Please fill in all the required fields."); 
      setPasswordError("This field is required. Please fill in all the required fields."); 
    }

    if (!name){
      setNamaError("This field is required. Please fill in all the required fields."); 
      return;
    }

    if (!email){
      setEmailError("This field is required. Please fill in all the required fields."); 
      return;
    }

    if (!password){
      setPasswordError("This field is required. Please fill in all the required fields."); 
      return;
    }

    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const emailExists = users.some((user) => user.email === email);

    if (emailExists) {
        setEmailError("This email is already registered. Please use a different email."); 
        return;
      }

    registerUser({ name, email, password });
    alert("Pendaftaran berhasil. Silakan login!");
    navigate("/login"); // Arahkan ke halaman login setelah registrasi
  };

  return (
    <div className="container">
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="flex flex-col gap-6 box-border w-[400px] h-auto py-10 rounded-lg px-7 bg-warna-200 shadow-lg shadow-warna-50 border-2 border-warna-200">
          <div className="w-full text-[32px] text-center mb-2 text-warna-400 font-semibold font-poppins">Sign Up</div>
          <div className="flex flex-col gap-1">
            <label htmlFor="Nama" className={`relative block h-10 border ${ namaError ? "border-danger" : "border-gray-200"} rounded-md shadow-sm focus-within:border-warna-400 focus-within:ring-1 focus-within:ring-warna-400`}>
              <input
                type="nama"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  setNamaError("");
                }}
                className={`w-full px-3 py-2 text-sm placeholder-transparent bg-transparent border-none font-poppins ${ namaError ? "text-danger" : "text-warna-400"} peer focus:border-transparent focus:outline-none focus:ring-0`}
                placeholder="Name"
              />
              <span className={`font-poppins pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-warna-200 p-0.5 text-sm ${ namaError ? "text-danger" : "text-warna-400" } transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-sm`}>
                Name
              </span>
            </label>

            {namaError && (
              <div className="text-danger text-xs font-poppins">{namaError}</div>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="Email" className={`relative block h-10 border ${ emailError ? "border-danger" : "border-gray-200"} rounded-md shadow-sm focus-within:border-warna-400 focus-within:ring-1 focus-within:ring-warna-400`}>
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setEmailError("");
                }}
                className={`w-full px-3 py-2 text-sm placeholder-transparent bg-transparent border-none font-poppins ${ emailError ? "text-danger" : "text-warna-400"} peer focus:border-transparent focus:outline-none focus:ring-0`}
                placeholder="Email"
              />
              <span className={`font-poppins pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-warna-200 p-0.5 text-sm ${ emailError ? "text-danger" : "text-warna-400" } transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-sm`}>
                Email
              </span>
            </label>

            {emailError && (
              <div className="text-danger text-xs font-poppins">{emailError}</div>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="Password" className={`relative block h-10 border ${ passwordError ? "border-danger" : "border-gray-200"} rounded-md shadow-sm focus-within:border-warna-400 focus-within:ring-1 focus-within:ring-warna-400`}>
              <input
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setPasswordError("");
                }}
                className={`w-full px-3 py-2 text-sm placeholder-transparent bg-transparent border-none font-poppins ${ passwordError ? "text-danger" : "text-warna-400"} peer focus:border-transparent focus:outline-none focus:ring-0`}
                placeholder="Password"
              />
              <span className={`font-poppins pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-warna-200 p-0.5 text-sm ${ passwordError ? "text-danger" : "text-warna-400" } transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-sm`}>
                Password
              </span>
            </label>

            {passwordError && (
              <div className="text-danger text-xs font-poppins">{passwordError}</div>
            )}
          </div>

          <button onClick={handleRegister} type="button" className="hover:bg-warna-300 w-full p-[10px] bg-warna-400 cursor-pointer rounded-[10px] flex items-center justify-center font-poppins font-semibold text-base text-white">
            Sign Up
          </button>

          <div className="text-xs font-normal text-center text-warna-400 font-poppins">
            Already have an account?
            <a href="/login" className="text-xs font-bold text-warna-400 font-poppins"> Log in</a>
          </div>

        </div>
        <Footer />
      </div>
    </div>
  )
}
  
  
  