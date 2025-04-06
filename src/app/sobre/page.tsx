"use client";

import Navbar from "@/components/navBar";
import Footer from "@/components/footer";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Sobre() {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col justify-between">
      <Navbar />

      <main className="flex-1 px-6 py-10 max-w-4xl mx-auto">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-blue-600 text-center mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Sobre Mim
        </motion.h1>

        <motion.div
          className="flex flex-col md:flex-row items-center gap-8 mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Image
            src="/images/vinicius.png"
            alt="Foto de Vinícius Santana"
            width={200}
            height={200}
            className="rounded-full shadow-lg"
          />
          <p className="text-lg text-gray-700 text-justify">
            Meu nome é <strong>Vinícius Santana Mariano da Cruz</strong>, tenho 17 anos e sou estudante do 1º semestre de <strong>Ciência da Computação</strong> no Mackenzie.
            Atualmente, faço parte da <strong>EJEM</strong> (Empresa Junior de Engenharia do Mackenzie) como trainee, onde estou desenvolvendo habilidades com projetos reais, cases e exercícios.
          </p>
        </motion.div>

        <motion.div
          className="bg-white rounded-xl shadow-md p-6 space-y-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-2xl font-semibold text-blue-500">Minhas Características</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Organizado e dedicado</li>
            <li>Aprendizado rápido</li>
            <li>Colaborativo e comunicativo</li>
            <li>Entusiasmado com tecnologia</li>
          </ul>
        </motion.div>

        <motion.div
  className="text-center mt-8"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.6 }}
>
  <a
    href="/curriculo-vinicius.pdf"
    download
    className="inline-block bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-700 transition"
  >
    📄 CV de Vinícius Santana
  </a>
</motion.div>


        <motion.div
          className="mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <h2 className="text-2xl font-semibold text-blue-500 text-center mb-4">
            Assista meu vídeo de apresentação
          </h2>
          <div className="aspect-w-16 aspect-h-9 w-full rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.youtube.com/embed/QVsN64jKIrk?si=Mo9WTBXe3hKVj6XL"
              title="Vídeo de Apresentação - Vinícius"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
