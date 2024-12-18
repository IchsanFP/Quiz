import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../auth";
import Footer from "../components/Footer";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const navigate = useNavigate();

  const handleLogin = () => {
    const user = loginUser(email, password);

    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const emailCek = users.some((user) => user.email === email);
    const pwCek = users.some((user) => user.password === password);

    if (user) {
      localStorage.setItem("currentUser", JSON.stringify(user)); // Simpan pengguna yang sedang login
      navigate("/menu"); 
    } else if ((!emailCek && !pwCek)) {
      setEmailError("Invalid email address. Please enter a valid email");
      setPasswordError("Incorrect password. Please try again.");
    } else if (!emailCek) {
      setEmailError("Invalid email address. Please enter a valid email");
    } else if (!pwCek) {
      setPasswordError("Incorrect password. Please try again.");
    }
  };

  return (
    <div className="container">
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="flex flex-col gap-6 box-border w-[358px] sm:w-[400px] h-auto py-10 rounded-lg px-7 bg-warna-200 shadow-lg shadow-warna-50 border-2 border-warna-200">
          <div className="w-full text-[32px] text-center mb-2 text-warna-400 font-semibold font-poppins">Log in</div>
          
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

          <button onClick={handleLogin} type="button" className="hover:bg-warna-300 w-full p-[10px] bg-warna-400 cursor-pointer rounded-[10px] flex items-center justify-center font-poppins font-semibold text-base text-white">
            Log in
          </button>

          <div className="text-xs font-normal text-center text-warna-400 font-poppins">
            Don&rsquo;t have account? 
            <a href="/register" className="text-xs font-bold text-warna-400 font-poppins"> Sign Up</a>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}