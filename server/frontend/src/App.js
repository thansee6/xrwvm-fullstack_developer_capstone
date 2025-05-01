import React from "react";
import { Routes, Route } from "react-router-dom";

// Import your components
//import LoginPanel from "./components/Login/Login";
import RegistrationPanel from "./components/Register";
//import LogoutPanel from "./components/Logout/Logout";

function App() {
  return (
    <Routes>
      {/* Route for Login */}
      <Route path="/login" element={<LoginPanel />} />

      {/* Route for Registration */}
      <Route path="/register" element={<RegistrationPanel />} />

      {/* Route for Logout */}
      <Route path="/logout" element={<LogoutPanel />} />
    </Routes>
  );
}

export default App;
