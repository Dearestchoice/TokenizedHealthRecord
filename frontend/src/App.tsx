import { Routes, Route, Navigate } from "react-router-dom";

import LoginPage from "./pages/Login";
import SignupPage from "./pages/Signup";
import ResetPage from "./pages/Reset";
import VerifyPage from "./pages/Verify";
import DashboardPage from "./pages/Dashboard";
import Records from "./pages/Records";
import PermissionsPage from "./pages/Permissions";
import SettingsPage from "./pages/Settings";

function App() {
  return (
    <div className="flex flex-col max-w-screen-2xl mx-auto">
      <Routes>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/signup" element={<SignupPage />}></Route>
        <Route path="/reset" element={<ResetPage />}></Route>
        <Route path="/verify" element={<VerifyPage />}></Route>
        <Route path="/dashboard" element={<DashboardPage />}></Route>
        <Route path="/records" element={<Records />}></Route>
        <Route path="/permissions" element={<PermissionsPage />}></Route>
        <Route path="/settings" element={<SettingsPage />}></Route>

        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </div>
  );
}

export default App;
