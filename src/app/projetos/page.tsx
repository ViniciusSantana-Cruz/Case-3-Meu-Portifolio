"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/navBar";
import Footer from "@/components/footer";

export default function Projetos() {
  return (
    <div className="bg-white min-h-screen flex flex-col justify-between">
      <Navbar />

      <main className="flex-1 px-6 py-10">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-blue-600 mb-10">
          Meus Projetos
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Projeto 1 */}
          <motion.div
            className="bg-gray-100 rounded-xl shadow hover:shadow-lg transition-all p-4 flex flex-col items-center"
            whileHover={{ scale: 1.03 }}
          >
            <img
              src="/images/case1.png"
              alt="Projeto 1"
              className="rounded-lg max-w-[400px] h-auto object-cover"
            />
            <h2 className="text-xl font-semibold mt-4">Sistema de Cadastro</h2>
            <p className="text-gray-600 mt-2 text-sm text-center">
              App realizado para a feira de estágios chamada de NXexperience, promovida pela EJEM.
            </p>
            <div className="flex gap-2 mt-2 flex-wrap justify-center">
              <span className="bg-green-100 text-green-700 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                FlutterFlow
              </span>
              <span className="bg-yellow-100 text-yellow-700 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                FireBase
              </span>
            </div>
            <a
              href="https://app.flutterflow.io/project/loginpage-b4g35f?tab=appSettings&appSettingsTab=team"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline mt-3"
            >
              Ver mais
            </a>
          </motion.div>

          {/* Projeto 2 */}
          <motion.div
            className="bg-gray-100 rounded-xl shadow hover:shadow-lg transition-all p-4 flex flex-col items-center"
            whileHover={{ scale: 1.03 }}
          >
            <img
              src="/images/case2.jpg"
              alt="Projeto 2"
              className="rounded-lg max-w-[400px] h-auto object-cover"
            />
            <h2 className="text-xl font-semibold mt-4">Portfólio Pessoal</h2>
            <p className="text-gray-600 mt-2 text-sm text-center">
              Site em Django criado para uma empresa fictícia que contratou os serviços da EJEM.
            </p>
            <div className="flex gap-2 mt-2 flex-wrap justify-center">
              <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                Django
              </span>
              <span className="bg-purple-100 text-purple-700 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                Python
              </span>
            </div>
            <a
              href="https://github.com/seuusuario/meu-portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline mt-3"
            >
              Ver mais
            </a>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
