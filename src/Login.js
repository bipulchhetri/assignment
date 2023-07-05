import React, { useState } from "react";
import { Link } from "react-router-dom";
const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = async (e) => {
    e.preventDefault();
    fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        // username: 'kminchelle@qq.com',
        // password: '0lelplR',
      }),
    })
      .then((res) => res.json())
      .then(console.log);
    window.location.href = "/form";
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-md p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold mb-4">Login Page</h1>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="email" className="block font-semibold mb-1">
              Email:
            </label>
            <input
              type="email"
              id="email"
              className="border border-gray-300 px-3 py-2 rounded w-full"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block font-semibold mb-1">
              Password:
            </label>
            <input
              type="password"
              id="password"
              className="border border-gray-300 px-3 py-2 rounded w-full"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 m-2 rounded font-semibold">
            Login
          </button>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded font-semibold">
            <Link to={"/ForgotPasswordPage"}>Forgot Password</Link>
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
