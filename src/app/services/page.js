"use client";
import { FaCar, FaTools, FaShieldAlt, FaTruckMonster } from "react-icons/fa";
import { motion } from "framer-motion";

const services = [
  { icon: <FaTruckMonster size={40} className="text-red-500" />, title: "Modificaciones 4x4", description: "Levantamiento de suspensión, neumáticos off-road y más." },
  { icon: <FaCar size={40} className="text-blue-500" />, title: "Autos de carreras", description: "Preparación y optimización de vehículos para competición." },
  { icon: <FaShieldAlt size={40} className="text-gray-500" />, title: "Blindaje y refuerzo", description: "Modificaciones de seguridad para vehículos blindados." },
  { icon: <FaTools size={40} className="text-yellow-500" />, title: "Mecánica general", description: "Reparaciones y mantenimiento de todo tipo de vehículos." }
];

export default function ServicesPage() {
  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold mb-8 text-center">Nuestros Servicios</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-lg p-6 rounded-lg flex flex-col items-center text-center transform hover:scale-105 transition-all duration-300 border-2 border-transparent hover:border-red-500"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <div className="mb-4">{service.icon}</div>
            <h2 className="text-2xl font-semibold">{service.title}</h2>
            <p className="text-gray-600 mt-2">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
