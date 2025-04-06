"use client";

import { FaInstagram, FaLinkedin, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";
import Navbar from "@/components/navBar";
import Footer from "@/components/footer";

export default function Contato() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-between">
      <Navbar />

      <main className="flex flex-col items-center justify-center flex-1 px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Entre em Contato</h1>
        <div className="bg-white rounded-lg shadow p-6 w-full max-w-md space-y-4">
          <div className="flex items-center space-x-4">
            <FaEnvelope className="text-xl text-gray-600" />
            <span className="text-gray-700">viniciussantanam06@gmail.com</span>
          </div>

          <div className="flex items-center space-x-4">
            <FaPhone className="text-xl text-gray-600" />
            <span className="text-gray-700">(87) 98152-9593</span>
          </div>

          <div className="flex items-center space-x-4">
            <FaInstagram className="text-xl text-pink-600" />
            <a
              href="https://www.instagram.com/viniciussantanaa_?igsh=ZGh0dXB6YnNkZG43&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Instagram
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <FaLinkedin className="text-xl text-blue-700" />
            <a
              href="https://www.linkedin.com/in/vin%C3%ADcius-santana-370bbb315?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              LinkedIn
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <FaGithub className="text-xl text-black" />
            <a
              href="https://github.com/ViniciusSantana-Cruz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              GitHub
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
