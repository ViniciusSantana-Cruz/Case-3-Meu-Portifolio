import React from "react";
import Link from "next/link";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Todos os direitos reservados.</p>
        
        <nav className="flex space-x-4 my-4 md:my-0">
          <Link href="/sobre" className="hover:underline">Sobre</Link>
          <Link href="/contato" className="hover:underline">Contato</Link>
          <Link href="/privacidade" className="hover:underline">Privacidade</Link>
        </nav>

        <div className="flex space-x-4">
          {/* Instagram */}
          <a
            href="https://www.instagram.com/viniciussantanaa_?igsh=ZGh0dXB6YnNkZG43&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram className="text-2xl hover:text-pink-500" />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/ViniciusSantana-Cruz"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub className="text-2xl hover:text-gray-400" />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/vin%C3%ADcius-santana-370bbb315?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="text-2xl hover:text-blue-600" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
