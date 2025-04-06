"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/navBar";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-between">
      <Navbar />

      <main className="flex flex-col items-center justify-center flex-1 px-4">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-blue-600 mt-20"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Vinícius Santana
        </motion.h1>

        <motion.p
          className="mt-4 text-lg text-gray-700 text-center max-w-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          O melhor trainee da EJEM. Especialista em tecnologia sqn rsrs!
        </motion.p>

        <motion.div
          className="mt-6 flex gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <Link href="/projetos">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg shadow">
              Ver Projetos
            </button>
          </Link>

          <Link href="/sobre">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg shadow">
              Sobre Mim
            </button>
          </Link>
        </motion.div>

        {/* Imagens dos Cases */}
        <motion.div
          className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <div className="bg-white p-4 rounded-lg shadow flex flex-col items-center">
            <img
              src="/images/case1.png"
              alt="Case 1"
              className="rounded-lg max-w-[300px] h-auto object-contain"
            />
            <p className="text-center mt-2 font-medium text-gray-800">
              Case 1 - Tela de Login
            </p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow flex flex-col items-center">
            <img
              src="/images/case2.jpg"
              alt="Case 2"
              className="rounded-lg max-w-[300px] h-auto object-contain"
            />
            <p className="text-center mt-2 font-medium text-gray-800">
              Case 2 - Tela de Cadastro
            </p>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
