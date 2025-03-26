import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import authServices from "../services/authServices";

const Register = () => {
  const [name, setname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("freelancer");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      await authServices.register({
        name,
        email,
        password,
        role,
      });
      navigate("/login");
    } catch (err) {
      // console.log(err);
      if (err.response) {
        if (err.response.status === 400) {
          setError("User already registered. Please log in.");
        } else if (err.response.data && err.response.data.message) {
          setError(err.message);
        } else {
          setError("Registration failed. Please try again.");
        }
      } else {
        setError("An unexpected error occurred. Please try again.");
      }
    }
  };

  return (
    <div className="flex items-center justify-center bg-gray-100">
      <div className="shadow-lg p-8 m-5 w-96 bg-white rounded-lg">
        <h4 className="text-center text-2xl font-semibold mb-4">Register</h4>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form onSubmit={handleSubmit} className="flex flex-col">
          <input
            type="text"
            value={name}
            onChange={(e) => setname(e.target.value)}
            placeholder="name"
            required
            className="mb-4 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
            required
            className="mb-4 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
            className="mb-4 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="mb-4 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="freelancer">Freelancer</option>
            <option value="client">Client</option>
          </select>
          <button
            type="submit"
            className="bg-green-600 text-white p-3 rounded hover:bg-green-700 transition duration-300"
          >
            Register
          </button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600 hover:underline">
              Log In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
