import React from "react";

const About = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-6 text-center">About Us</h1>
      <p className="mb-6 text-lg text-gray-700">
        Welcome to our freelance marketplace! We connect talented freelancers
        with businesses and individuals looking for their expertise. Our mission
        is to provide a platform that fosters collaboration and creativity.
      </p>
      <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
      <p className="mb-6 text-gray-700">
        We aim to empower freelancers by providing them with opportunities to
        showcase their skills and connect with clients worldwide. Our platform
        is designed to make the hiring process seamless and efficient.
      </p>
      <h2 className="text-3xl font-semibold mb-4">Meet the Team</h2>
      <p className="text-gray-700">
        Our team is composed of experienced professionals from various fields,
        dedicated to creating the best experience for both freelancers and
        clients. We believe in the power of collaboration and are here to
        support you every step of the way.
      </p>
    </div>
  );
};

export default About;
