import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 p-8 mt-2">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-bold mb-4 text-lg">Navigate</h3>
          <ul>
            <li>
              <a
                href="/"
                className="hover:underline hover:text-blue-500 transition"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/post-job"
                className="hover:underline hover:text-blue-500 transition"
              >
                Post a Job
              </a>
            </li>
            <li>
              <a
                href="/find-freelancers"
                className="hover:underline hover:text-blue-500 transition"
              >
                Find a Freelancer
              </a>
            </li>
            <li>
              <a
                href="/find-jobs"
                className="hover:underline hover:text-blue-500 transition"
              >
                Find a Job
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="hover:underline hover:text-blue-500 transition"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="hover:underline hover:text-blue-500 transition"
              >
                Contact us
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4 text-lg">Hire Talent</h3>
          <ul>
            <li>
              <a
                href="/hire-developers"
                className="hover:underline hover:text-blue-500 transition"
              >
                Hire Freelance Developers
              </a>
            </li>
            <li>
              <a
                href="/hire-designers"
                className="hover:underline hover:text-blue-500 transition"
              >
                Hire Freelance Designers
              </a>
            </li>
            <li>
              <a
                href="/hire-marketers"
                className="hover:underline hover:text-blue-500 transition"
              >
                Hire Freelance Marketers
              </a>
            </li>
            <li>
              <a
                href="/hire-product-managers"
                className="hover:underline hover:text-blue-500 transition"
              >
                Hire Freelance Product Managers
              </a>
            </li>
            <li>
              <a
                href="/hire-project-managers"
                className="hover:underline hover:text-blue-500 transition"
              >
                Hire Freelance Project Managers
              </a>
            </li>
            <li>
              <a
                href="/hire-finance-experts"
                className="hover:underline hover:text-blue-500 transition"
              >
                Hire Freelance Finance Experts
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4 text-lg">Featured Skills</h3>
          <ul>
            <li>
              <a
                href="/skills/software-developers"
                className="hover:underline hover:text-blue-500 transition"
              >
                Software Developers
              </a>
            </li>
            <li>
              <a
                href="/skills/mobile-app-developers"
                className="hover:underline hover:text-blue-500 transition"
              >
                Mobile App Developers
              </a>
            </li>
            <li>
              <a
                href="/skills/full-stack-developers"
                className="hover:underline hover:text-blue-500 transition"
              >
                Full-stack Developers
              </a>
            </li>
            <li>
              <a
                href="/skills/front-end-developers"
                className="hover:underline hover:text-blue-500 transition"
              >
                Front-end Developers
              </a>
            </li>
            <li>
              <a
                href="/skills/graphic-designers"
                className="hover:underline hover:text-blue-500 transition"
              >
                Graphic Designers
              </a>
            </li>
            <li>
              <a
                href="/skills/seo-experts"
                className="hover:underline hover:text-blue-500 transition"
              >
                SEO Experts
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4 text-lg">Resources</h3>
          <ul>
            <li>
              <a
                href="/faq"
                className="hover:underline hover:text-blue-500 transition"
              >
                FAQs
              </a>
            </li>
            <li>
              <a
                href="/help-center"
                className="hover:underline hover:text-blue-500 transition"
              >
                Help Center
              </a>
            </li>
            <li>
              <a
                href="/blog"
                className="hover:underline hover:text-blue-500 transition"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="/terms"
                className="hover:underline hover:text-blue-500 transition"
              >
                Terms of Service
              </a>
            </li>
            <li>
              <a
                href="/privacy"
                className="hover:underline hover:text-blue-500 transition"
              >
                Privacy Policy
              </a>
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
