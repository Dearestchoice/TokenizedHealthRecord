import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import LoginPage from "./pages/Login";
import SignupPage from "./pages/Signup";
import ResetPage from "./pages/Reset";
import VerifyPage from "./pages/Verify";

function App() {
  return (
    <div className="flex flex-col min-h-screen max-w-screen-2xl mx-auto">
      <Navbar />
      <Routes>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/signup" element={<SignupPage />}></Route>
        <Route path="/reset" element={<ResetPage />}></Route>
        <Route path="/verify" element={<VerifyPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
