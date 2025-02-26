"use client";
/* eslint-disable react/no-unescaped-entities */

import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="relative">
      {/* Fondo con imagen */}
      <div className="absolute inset-0 bg-cover bg-center bg-fixed" style={{ backgroundImage: "url('/images/about-bg.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
      </div>

      <div className="relative p-6 text-white">
        <h1 className="text-5xl font-extrabold text-center mb-8">Sobre Nosotros</h1>

        {/* Sección principal */}
        <div className="flex flex-col md:flex-row items-center gap-10">
          <motion.img 
            src="/images/taller.jpg" 
            alt="Taller 4x4"
            className="w-full md:w-1/2 rounded-lg shadow-lg"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          />

          <motion.div 
            className="md:w-1/2 text-center md:text-left"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-lg mb-4">
              En <span className="font-semibold text-red-500">Xtreme Traction</span>, llevamos más de <strong>30 años</strong> brindando modificaciones de alta calidad para vehículos 4x4, autos de carreras y más.
            </p>
            <p className="text-lg">
              Nuestro compromiso es garantizar que cada cliente reciba un servicio excepcional y resultados óptimos para su vehículo.
            </p>
          </motion.div>
        </div>

        {/* Sección de Misión, Visión y Valores */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <motion.div 
            className="p-6 bg-white shadow-lg rounded-lg border-l-4 border-red-500 text-center text-black hover:scale-105 transition"
          >
            <h2 className="text-2xl font-bold mb-3">Nuestra Misión</h2>
            <p>Proporcionar soluciones innovadoras para mejorar el rendimiento y seguridad de los vehículos.</p>
          </motion.div>

          <motion.div 
            className="p-6 bg-white shadow-lg rounded-lg border-l-4 border-blue-500 text-center text-black hover:scale-105 transition"
          >
            <h2 className="text-2xl font-bold mb-3">Nuestra Visión</h2>
            <p>Convertirnos en el taller de referencia en modificaciones automotrices en toda Latinoamérica.</p>
          </motion.div>

          <motion.div 
            className="p-6 bg-white shadow-lg rounded-lg border-l-4 border-green-500 text-center text-black hover:scale-105 transition"
          >
            <h2 className="text-2xl font-bold mb-3">Nuestros Valores</h2>
            <p>Compromiso, calidad, innovación y pasión por la industria automotriz.</p>
          </motion.div>

        </div>

        {/* NUESTRA HISTORIA */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold text-center mb-6">Nuestra Historia</h2>
          <div className="border-l-4 border-red-500 pl-6 space-y-6">
            <div>
              <h3 className="text-xl font-bold">2013 - Fundación del Taller</h3>
              <p>Iniciamos como un pequeño taller especializado en modificaciones básicas para vehículos 4x4.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold">2016 - Expansión y Nuevos Servicios</h3>
              <p>Agregamos servicios de blindaje y preparación de autos para competencias de alto rendimiento.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold">2020 - Taller Líder en la Región</h3>
              <p>Nos consolidamos como uno de los mejores talleres de modificaciones en México.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
