import React, { useState } from 'react';

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');
  const [resetMessage, setResetMessage] = useState('');

  const handleResetPassword = (e) => {
    e.preventDefault();
    // TODO: Implement password reset functionality
    setResetMessage('Password reset instructions sent to your email.');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-md p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold mb-4">Forgot Password</h1>
        <form onSubmit={handleResetPassword}>
          <div className="mb-4">
            <label htmlFor="email" className="block font-semibold mb-1">Email:</label>
            <input
              type="email"
              id="email"
              className="border border-gray-300 px-3 py-2 rounded w-full"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded font-semibold"
          >
            Reset Password
          </button>
        </form>
        {resetMessage && <p className="text-green-500 mt-4">{resetMessage}</p>}
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
