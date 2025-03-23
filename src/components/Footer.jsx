import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 p-8 mt-2">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-bold mb-4 text-lg">Navigate</h3>
          <ul>
            <li>
              <Link
                to="/"
                className="hover:underline hover:text-blue-500 transition"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/post-job"
                className="hover:underline hover:text-blue-500 transition"
              >
                Post a Job
              </Link>
            </li>
            <li>
              <Link
                to="/find-freelancers"
                className="hover:underline hover:text-blue-500 transition"
              >
                Find a Freelancer
              </Link>
            </li>
            <li>
              <Link
                to="/find-jobs"
                className="hover:underline hover:text-blue-500 transition"
              >
                Find a Job
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:underline hover:text-blue-500 transition"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:underline hover:text-blue-500 transition"
              >
                Contact us
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4 text-lg">Hire Talent</h3>
          <ul>
            <li>
              <Link
                to="/hire-developers"
                className="hover:underline hover:text-blue-500 transition"
              >
                Hire Freelance Developers
              </Link>
            </li>
            <li>
              <Link
                to="/hire-designers"
                className="hover:underline hover:text-blue-500 transition"
              >
                Hire Freelance Designers
              </Link>
            </li>
            <li>
              <Link
                to="/hire-marketers"
                className="hover:underline hover:text-blue-500 transition"
              >
                Hire Freelance Marketers
              </Link>
            </li>
            <li>
              <Link
                to="/hire-product-managers"
                className="hover:underline hover:text-blue-500 transition"
              >
                Hire Freelance Product Managers
              </Link>
            </li>
            <li>
              <Link
                to="/hire-project-managers"
                className="hover:underline hover:text-blue-500 transition"
              >
                Hire Freelance Project Managers
              </Link>
            </li>
            <li>
              <Link
                to="/hire-finance-experts"
                className="hover:underline hover:text-blue-500 transition"
              >
                Hire Freelance Finance Experts
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4 text-lg">Featured Skills</h3>
          <ul>
            <li>
              <Link
                to="/skills/software-developers"
                className="hover:underline hover:text-blue-500 transition"
              >
                Software Developers
              </Link>
            </li>
            <li>
              <Link
                to="/skills/mobile-app-developers"
                className="hover:underline hover:text-blue-500 transition"
              >
                Mobile App Developers
              </Link>
            </li>
            <li>
              <Link
                to="/skills/full-stack-developers"
                className="hover:underline hover:text-blue-500 transition"
              >
                Full-stack Developers
              </Link>
            </li>
            <li>
              <Link
                to="/skills/front-end-developers"
                className="hover:underline hover:text-blue-500 transition"
              >
                Front-end Developers
              </Link>
            </li>
            <li>
              <Link
                to="/skills/graphic-designers"
                className="hover:underline hover:text-blue-500 transition"
              >
                Graphic Designers
              </Link>
            </li>
            <li>
              <Link
                to="/skills/seo-experts"
                className="hover:underline hover:text-blue-500 transition"
              >
                SEO Experts
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4 text-lg">Resources</h3>
          <ul>
            <li>
              <Link
                to="/faq"
                className="hover:underline hover:text-blue-500 transition"
              >
                FAQs
              </Link>
            </li>
            <li>
              <Link
                to="/help-center"
                className="hover:underline hover:text-blue-500 transition"
              >
                Help Center
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                className="hover:underline hover:text-blue-500 transition"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                to="/terms"
                className="hover:underline hover:text-blue-500 transition"
              >
                Terms of Service
              </Link>
            </li>
            <li>
              <Link
                to="/privacy"
                className="hover:underline hover:text-blue-500 transition"
              >
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-8 text-center">
        <h3 className="font-bold mb-4 text-lg">Follow us</h3>
        <div className="flex justify-center space-x-6">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition"
          >
            <FaYoutube size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
