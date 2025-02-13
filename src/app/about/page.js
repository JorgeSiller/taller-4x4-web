"use client";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold text-center mb-8">Sobre Nosotros</h1>
      
      {/* Sección principal (Imagen + Texto) */}
      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Imagen con animación */}
        <motion.img 
          src="/images/taller.jpg" 
          alt="Taller 4x4"
          className="w-full md:w-1/2 rounded-lg shadow-lg"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        />

        {/* Texto descriptivo */}
        <motion.div 
          className="md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-lg text-gray-700 mb-4">
            En <span className="font-semibold text-red-500">Taller 4x4</span>, nos especializamos en transformar vehículos para que alcancen su máximo potencial. 
            Con más de <strong>10 años de experiencia</strong>, hemos trabajado en modificaciones de 4x4, autos de carreras, blindaje y más.
          </p>
          <p className="text-lg text-gray-700">
            Nos enorgullece nuestro compromiso con la calidad, la seguridad y la satisfacción de nuestros clientes.
          </p>
        </motion.div>
      </div>

      {/* Sección de Misión, Visión y Valores */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        
        <motion.div 
          className="p-6 bg-white shadow-lg rounded-lg border-l-4 border-red-500 text-center"
          whileHover={{ scale: 1.05 }}
        >
          <h2 className="text-2xl font-bold mb-3">Nuestra Misión</h2>
          <p className="text-gray-600">Proporcionar a nuestros clientes soluciones innovadoras para mejorar el rendimiento y seguridad de sus vehículos.</p>
        </motion.div>

        <motion.div 
          className="p-6 bg-white shadow-lg rounded-lg border-l-4 border-blue-500 text-center"
          whileHover={{ scale: 1.05 }}
        >
          <h2 className="text-2xl font-bold mb-3">Nuestra Visión</h2>
          <p className="text-gray-600">Ser el taller líder en modificaciones y preparaciones automotrices en Latinoamérica.</p>
        </motion.div>

        <motion.div 
          className="p-6 bg-white shadow-lg rounded-lg border-l-4 border-green-500 text-center"
          whileHover={{ scale: 1.05 }}
        >
          <h2 className="text-2xl font-bold mb-3">Nuestros Valores</h2>
          <p className="text-gray-600">Compromiso, calidad, innovación y pasión por la industria automotriz.</p>
        </motion.div>

      </div>
    </div>
  );
}
