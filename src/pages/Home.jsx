import React from "react";
import About from "../components/about";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <div className="container text-center m-5">
      <h1 className="text-4xl font-bold mb-4">
        Welcome to Our{" "}
        <span className="text-[#6A38C2]">Freelance Marketplace</span>!
      </h1>
      <p className="text-lg mb-6">
        Your one-stop solution for{" "}
        <span className="text-[#f70515]">freelancers </span>and
        <span className="text-[#f70515]"> clients</span>.
      </p>

      {/* <lastesJobs /> */}
      <About />
      <Contact />
    </div>
  );
};

export default Home;
