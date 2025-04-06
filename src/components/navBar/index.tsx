import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <nav className="bg-gray-900 text-white py-4 px-6 flex justify-between items-center shadow-lg">
        <div className="flex items-center space-x-4">
          {/* Foto do Vinícius */}
          <button
            onClick={() => setShowModal(true)}
            className="w-10 h-10 relative focus:outline-none"
          >
            <Image
              src="/images/vinicius.png"
              alt="Foto de Vinícius Santana"
              fill
              className="rounded-full object-cover"
            />
          </button>
          <span className="text-lg font-semibold whitespace-nowrap">
            Programa de Trainee 2025.1
          </span>
        </div>

        <div className="space-x-6">
          <Link href="/" className="hover:underline">Início</Link>
          <Link href="/sobre" className="hover:underline">Sobre</Link>
          <Link href="/contato" className="hover:underline">Contato</Link>
        </div>
      </nav>

      {/* Modal */}
      {showModal && (
        <div
  className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50"
  onClick={() => setShowModal(false)}
>

          <div
            className="bg-white rounded-lg p-4 shadow-lg relative"
            onClick={(e) => e.stopPropagation()} // evita fechar ao clicar na imagem
          >
            <Image
              src="/images/vinicius.png"
              alt="Foto de Vinícius Santana"
              width={300}
              height={400}
              className="rounded-lg object-cover"
            />
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-2 text-gray-600 hover:text-black"
            >
              ✖
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
