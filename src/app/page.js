"use client";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('/images/hero.jpg')" }}>
      <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center text-white text-center">
        <motion.h1 
          className="text-5xl md:text-6xl font-extrabold mb-4"
          initial={{ opacity: 0, y: -50 }} 
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Transformamos tu Vehículo 🚗🔥
        </motion.h1>
        <motion.p 
          className="text-lg md:text-2xl mb-6"
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Modificaciones 4x4, autos de carreras, blindajes y más.
        </motion.p>
        <motion.a 
          href="/services" 
          className="bg-red-500 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-600 transition shadow-lg"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Ver Servicios
        </motion.a>
      </div>
    </div>
  );
}
