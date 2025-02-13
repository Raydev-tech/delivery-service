import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa"; // Importing social media icons

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="ml-5 max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
        <div>
          <h3 className="text-2xl font-bold mb-4">Global Delivery</h3>
          <p></p>
        </div>
        <div>
          <h4 className="text-xl font-semibold mb-4">Company</h4>
          <ul>
            <li><a href="/" className="text-gray-400 hover:text-white">Home</a></li>
            <li><a href="/personal" className="text-gray-400 hover:text-white">Shopping</a></li>
            <li><a href="/aboutus" className="text-gray-400 hover:text-white">About Us</a></li>
            <li><a href="/ship" className="text-gray-400 hover:text-white">Shipping</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xl font-semibold mb-4">Customer Service</h4>
          <ul>
            <li><a href="/faq" className="text-gray-400 hover:text-white">FAQ</a></li>
            <li><a href="/servicepage" className="text-gray-400 hover:text-white">Our Service</a></li>
            <li><a href="/contactus" className="text-gray-400 hover:text-white">Contact</a></li>
            <li><a href="/aboutus" className="text-gray-400 hover:text-white">About Us</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-500 transition"
            >
              <FaFacebook size="" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-pink-500 transition"
            >
              <FaInstagram size="" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition"
            >
              <FaTwitter size="" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-red-500 transition"
            >
              <FaYoutube size="" />
            </a>
          </div>
        </div>
      </div>
      <div className="text-center mt-8 text-gray-400">© 2025 Global Delivery. All rights reserved.</div>
    </footer>
  );
};

export default Footer;
