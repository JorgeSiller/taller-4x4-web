"use client";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="relative">
      {/* HERO SECTION CON FONDO */}
      <div className="relative h-[60vh] bg-cover bg-center flex items-center justify-center" 
        style={{ backgroundImage: "url('/images/about-hero.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <motion.h1 
          className="relative text-5xl md:text-6xl font-extrabold text-white text-center z-10"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Sobre <span className="text-red-500">Xtreme Traction</span>
        </motion.h1>
      </div>

      {/* SECCIÓN DE PRESENTACIÓN */}
      <div className="relative p-10 max-w-5xl mx-auto text-center">
        <motion.p
          className="text-lg text-gray-700 dark:text-gray-300"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Con más de <span className="font-bold text-red-500">30 años</span> de experiencia, en 
          <span className="font-bold text-red-500"> Xtreme Traction</span> llevamos la personalización de vehículos al siguiente nivel.
          Especializados en **modificaciones 4x4, autos de carreras y blindajes de alto rendimiento**.
        </motion.p>
      </div>

      {/* SECCIÓN DE VALORES */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {[
          { title: "Innovación", text: "Tecnología de última generación en cada modificación.", color: "border-l-4 border-red-500" },
          { title: "Excelencia", text: "Cada vehículo sale con los más altos estándares de calidad.", color: "border-l-4 border-blue-500" },
          { title: "Compromiso", text: "Garantizamos seguridad y rendimiento sin concesiones.", color: "border-l-4 border-green-500" }
        ].map((item, index) => (
          <motion.div
            key={index}
            className={`p-6 bg-white shadow-xl rounded-lg ${item.color} text-center dark:bg-gray-800`}
            whileHover={{ scale: 1.05 }}
          >
            <h2 className="text-2xl font-bold mb-3">{item.title}</h2>
            <p className="text-gray-600 dark:text-gray-300">{item.text}</p>
          </motion.div>
        ))}
      </div>

      {/* SECCIÓN DE HISTORIA */}
      <div className="mt-16 p-10 bg-gradient-to-r from-black via-gray-900 to-black text-white text-center">
        <h2 className="text-4xl font-bold mb-6">Nuestra Historia</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            { year: "2013", event: "Fundación del Taller", desc: "Comenzamos como un pequeño taller especializado en 4x4." },
            { year: "2016", event: "Expansión", desc: "Ampliamos nuestros servicios para incluir blindajes de seguridad." },
            { year: "2020", event: "Taller Líder", desc: "Nos consolidamos como la mejor opción en modificaciones extremas." }
          ].map((item, index) => (
            <motion.div
              key={index}
              className="p-6 bg-gray-900 rounded-lg shadow-lg border-l-4 border-red-500"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-bold">{item.year} - {item.event}</h3>
              <p className="text-gray-400">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
