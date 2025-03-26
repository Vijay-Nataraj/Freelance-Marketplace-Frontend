import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Link, NavLink } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  const { user, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchJobs, setSearchJobs] = useState("");
  const [searchFreelancers, setSearchFreelancers] = useState("");

  return (
    <nav className="bg-gray-900 text-white px-4 py-3 shadow-lg mb-2">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <Link className="text-2xl font-bold hover:text-blue-500 transition duration-300">
            Freelance Marketplace
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          {user ? (
            <>
              {user.role === "freelancer" && (
                <>
                  <div className="hidden relative md:flex">
                    <input
                      type="text"
                      placeholder="Search..."
                      onChange={(e) => setSearchJobs(e.target.value)}
                      className="bg-white text-black pl-10 pr-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                  </div>
                </>
              )}
              {user.role === "client" && (
                <>
                  <div className="hidden relative md:flex">
                    <input
                      type="text"
                      placeholder="Search..."
                      onChange={(e) => setSearchFreelancers(e.target.value)}
                      className="bg-white text-black pl-10 pr-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                  </div>
                </>
              )}

              {user.role === "freelancer" && (
                <>
                  <NavLink
                    to="/freelancer-dashboard"
                    className={"hover:text-blue-500 transition duration-300"}
                  >
                    Dashboard
                  </NavLink>
                  <NavLink
                    to="/create-service"
                    className={({ isActive }) =>
                      isActive
                        ? "text-yellow-300 font-bold"
                        : "hover:text-blue-500 transition duration-300"
                    }
                  >
                    Create a Service
                  </NavLink>
                  <NavLink
                    to="/my-services"
                    className={({ isActive }) =>
                      isActive
                        ? "text-yellow-300 font-bold"
                        : "hover:text-blue-500 transition duration-300"
                    }
                  >
                    My Services
                  </NavLink>
                </>
              )}

              {user.role === "client" && (
                <>
                  <NavLink
                    to="/client-dashboard"
                    className={"hover:text-blue-500 transition duration-300"}
                  >
                    Dashboard
                  </NavLink>
                  <NavLink
                    to="/client-dashboard/create-job"
                    className={({ isActive }) =>
                      isActive
                        ? "text-yellow-300 font-bold"
                        : "hover:text-blue-500 transition duration-300"
                    }
                  >
                    Post a Job
                  </NavLink>
                  <NavLink
                    to="/client-dashboard/find-freelancer"
                    className={({ isActive }) =>
                      isActive
                        ? "text-yellow-300 font-bold"
                        : "hover:text-blue-500 transition duration-300"
                    }
                  >
                    Find a Freelancer
                  </NavLink>
                  <NavLink
                    to="/payment"
                    className="text-white hover:text-blue-400 transition"
                    style={{ textDecoration: "none" }}
                  >
                    Payment
                  </NavLink>
                </>
              )}

              <Link to="/client-dashboard/profile">
                <i className="bi bi-person-circle text-xl hover:ring-0"></i>
              </Link>

              <button
                onClick={logout}
                className="bg-red-500 px-3 py-2 rounded hover:bg-red-700 transition duration-300"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="bg-blue-600 px-3 py-2 rounded hover:bg-blue-700 transition duration-300"
              >
                Login
              </Link>
              <Link
                to="/register"
                className=" bg-green-600 px-3 py-2 rounded hover:bg-green-700 transition duration-300"
              >
                Register
              </Link>
            </>
          )}

          <button
            className="md:hidden hover:text-blue-500 transition duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden p-4 space-y-2">
          {user ? (
            <>
              <Link
                to="/profile"
                className="block hover:text-blue-500 transition duration-300"
              >
                Profile
              </Link>
              {user.role === "freelancer" && (
                <>
                  <Link
                    to="/freelancer-dashboard"
                    className="block hover:text-blue-500 transition duration-300"
                  >
                    Dashboard
                  </Link>
                  <Link
                    to="/create-service"
                    className="block hover:text-blue-500 transition duration-300"
                  >
                    Create Service
                  </Link>
                  <Link
                    to="/my-services"
                    className="block hover:text-blue-500 transition duration-300"
                  >
                    My Services
                  </Link>
                </>
              )}
              {user.role === "client" && (
                <>
                  <Link
                    to="/client-dashboard"
                    className="block hover:text-blue-500 transition duration-300"
                  >
                    Dashboard
                  </Link>
                  <Link
                    to="/post-job"
                    className="block hover:text-blue-500 transition duration-300"
                  >
                    Post a Job
                  </Link>
                  <Link
                    to="/find-freelancer"
                    className="block hover:text-blue-500 transition duration-300"
                  >
                    Find a Freelancer
                  </Link>
                  <Link
                    to="/payment"
                    className="text-white hover:text-blue-400 transition"
                    style={{ textDecoration: "none" }}
                  >
                    Payment
                  </Link>
                </>
              )}
              <button
                onClick={logout}
                className="w-full bg-red-500 text-white px-3 py-2 rounded hover:bg-red-700 transition duration-300"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="block bg-blue-600 px-3 py-2 rounded hover:bg-blue-700 transition duration-300"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="block bg-green-600 px-3 py-2 rounded hover:bg-green-700 transition duration-300"
              >
                Register
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
