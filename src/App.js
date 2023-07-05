import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./Login";
import ForgotPasswordPage from "./ForgotPasswordPage";
import Form from "./Form";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/form" element={<Form />} />

        <Route path="/ForgotPasswordPage" element={<ForgotPasswordPage />} />

      </Routes>
    </Router>
  );
};

export default App;