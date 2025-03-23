import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import authServices from "../services/authServices";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);
    try {
      const response = await authServices.login(email, password);
      const { token, user } = response;

      const { role } = user;

      if (token) {
        login(user);
        // Navigate based on user role
        if (role === "client") {
          navigate("/client-dashboard");
        } else if (role === "freelancer") {
          navigate("/freelancer-dashboard");
        }
      }
    } catch (error) {
      console.error("Login error:", error.message || error);
      setError(
        error.response?.data?.message ||
          "An unexpected error occurred. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center bg-gray-100 min-h-screen">
      <div className="shadow-lg p-8 m-5 w-96 bg-white rounded-lg">
        <h4 className="text-center text-2xl font-semibold mb-4">
          Log in to App
        </h4>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form onSubmit={handleSubmit} className="flex flex-col">
          <input
            type="email"
            id="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mb-4 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mb-4 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
            autocomplete="current-password"
          />
          <div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-3 px-4 rounded hover:bg-blue-700 transition duration-300"
              disabled={isLoading}
            >
              {isLoading ? "Logging in..." : "Login"}
            </button>
            <br />
            <br />
            <button
              type="button"
              className="w-full bg-gray-700 text-white p-3 px-4 rounded hover:bg-gray-900 transition duration-300"
              onClick={() => navigate("/")}
            >
              Back
            </button>
          </div>

          <div className="mt-3 text-center">
            <Link
              to="/forgot-password"
              className="text-sm text-indigo-600 hover:text-indigo-500"
            >
              Forgotten password?
            </Link>
            &nbsp; &nbsp;
            <Link
              to="/register"
              className="text-sm text-indigo-600 hover:text-indigo-500"
            >
              Register
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
