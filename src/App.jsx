import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./pages/Login"
import Register from "./pages/Register"
import Menu from "./pages/Menu"
import Kuis1 from "./pages/Kuis1";
import Kuis2 from "./pages/Kuis2";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/kuis-html" element={<Kuis1 />} />
        <Route path="/kuis-css" element={<Kuis2 />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </Router>
  )
}


