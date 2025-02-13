"use client";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <motion.div 
      className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white text-center"
      initial={{ opacity: 0, y: -50 }} 
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="text-4xl font-bold mb-4">Bienvenido al Taller 4x4</h1>
      <p className="text-lg mb-6">Expertos en modificaciones de vehículos todo terreno y más.</p>
      <motion.a 
        href="/services" 
        className="bg-red-500 px-6 py-3 rounded-lg text-white text-lg font-semibold hover:bg-red-600 transition"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        Ver Servicios
      </motion.a>
    </motion.div>
  );
}
