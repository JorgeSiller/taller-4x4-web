"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const servicesData = [
  {
    id: "modificaciones-4x4",
    title: "Modificaciones 4x4",
    description: "Transformamos tu 4x4 con suspensión elevada, neumáticos off-road y más.",
    image: "/images/4x4-1.jpg"
  },
  {
    id: "autos-de-carreras",
    title: "Autos de Carreras",
    description: "Preparación y optimización de autos de alto rendimiento para competición.",
    image: "/images/race-1.jpg"
  },
  {
    id: "blindaje-vehicular",
    title: "Blindaje Vehicular",
    description: "Protección avanzada con blindaje de alta resistencia.",
    image: "/images/blindaje-1.jpg"
  },
  {
    id: "swaps-de-motor",
    title: "Swaps de Motor",
    description: "Instalamos motores de alto rendimiento con conversiones especializadas.",
    image: "/images/motor-1.JPG"
  }
];

export default function ServicesPage() {
  return (
    <div className="relative min-h-screen bg-gray-900 text-white">
      {/* Fondo con superposición oscura */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: "url('/images/services-bg.jpg')" }}
      ></div>

      {/* Contenido principal */}
      <div className="relative z-10 text-center py-20">
        <motion.h1 
          className="text-5xl font-extrabold mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Nuestros Servicios 🔧🚗
        </motion.h1>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-12">
          En <span className="text-red-500 font-bold">Xtreme Traction</span>, ofrecemos servicios de alta calidad para mejorar el rendimiento y seguridad de tu vehículo.
        </p>

        {/* Grid de servicios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-8">
          {servicesData.map((service, index) => (
            <motion.div 
              key={service.id}
              className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              {/* Imagen de fondo */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform group-hover:scale-110"
                style={{ backgroundImage: `url(${service.image})` }}
              ></div>

              {/* Capa oscura */}
              <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-30 transition-all"></div>

              {/* Contenido del servicio */}
              <div className="relative z-10 p-6 flex flex-col items-center text-center">
                <h2 className="text-2xl font-bold mb-3">{service.title}</h2>
                <p className="text-gray-300 text-sm">{service.description}</p>

                {/* Botón para ver más */}
                <Link href={`/services/${service.id}`} className="mt-4 bg-red-500 px-6 py-2 rounded-lg text-sm font-semibold hover:bg-red-600 transition-all">
                  Ver más
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
