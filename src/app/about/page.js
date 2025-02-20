"use client";
/* eslint-disable react/no-unescaped-entities */

import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold text-center mb-8">Sobre Nosotros</h1>

      {/* Sección principal (Imagen + Texto) */}
      <div className="flex flex-col md:flex-row items-center gap-10">
        <motion.img 
          src="/images/taller.jpg" 
          alt="Xtreme Traction"
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
          <p className="text-lg text-gray-700 mb-4">
            En <span className="font-semibold text-red-500">Taller 4x4</span>, llevamos más de <strong>30 años</strong> brindando modificaciones de alta calidad para vehículos 4x4, autos de carreras y más.
          </p>
          <p className="text-lg text-gray-700">
            Nuestro compromiso es garantizar que cada cliente reciba un servicio excepcional y resultados óptimos para su vehículo.
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
          <p className="text-gray-600">Proporcionar soluciones innovadoras para mejorar el rendimiento y seguridad de los vehículos de nuestros clientes.</p>
        </motion.div>

        <motion.div 
          className="p-6 bg-white shadow-lg rounded-lg border-l-4 border-blue-500 text-center"
          whileHover={{ scale: 1.05 }}
        >
          <h2 className="text-2xl font-bold mb-3">Nuestra Visión</h2>
          <p className="text-gray-600">Convertirnos en el taller de referencia en modificaciones automotrices en toda Latinoamérica.</p>
        </motion.div>

        <motion.div 
          className="p-6 bg-white shadow-lg rounded-lg border-l-4 border-green-500 text-center"
          whileHover={{ scale: 1.05 }}
        >
          <h2 className="text-2xl font-bold mb-3">Nuestros Valores</h2>
          <p className="text-gray-600">Compromiso, calidad, innovación y pasión por la industria automotriz.</p>
        </motion.div>

      </div>

      {/* NUESTRA HISTORIA */}
      <div className="mt-12">
        <h2 className="text-3xl font-bold text-center mb-6">Nuestra Historia</h2>
        <div className="border-l-4 border-red-500 pl-6 space-y-6">
          <div>
            <h3 className="text-xl font-bold">2013 - Fundación del Taller</h3>
            <p className="text-gray-600">Iniciamos como un pequeño taller especializado en modificaciones básicas para vehículos 4x4.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold">2016 - Expansión y Nuevos Servicios</h3>
            <p className="text-gray-600">Agregamos servicios de blindaje y preparación de autos para competencias de alto rendimiento.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold">2020 - Taller Líder en la Región</h3>
            <p className="text-gray-600">Nos consolidamos como uno de los mejores talleres de modificaciones en México.</p>
          </div>
        </div>
      </div>

      {/* ACTUALMENTE */}
      <div className="mt-12 bg-gray-100 p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-6">Actualmente</h2>
        <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto">
          Hoy en día, <span className="font-semibold text-red-500">Xtreme Traction</span> sigue innovando en el mundo automotriz. Contamos con tecnología de última generación y un equipo altamente capacitado.
          Nos especializamos en <strong>modificaciones extremas, optimización de rendimiento y equipamiento de patrullas policiales</strong>.
        </p>
      </div>

      {/* CLIENTES SATISFECHOS */}
      <div className="mt-12">
        <h2 className="text-3xl font-bold text-center mb-6">Clientes Satisfechos</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div 
            className="p-6 bg-white shadow-lg rounded-lg border-l-4 border-yellow-500"
            whileHover={{ scale: 1.05 }}
          >
            <p className="text-gray-600 italic">&quot;Gracias a Xtreme Traction, mi Jeep ahora es una bestia en el off-road. Servicio excelente y atención de primera!&quot;</p>
            <h3 className="font-bold mt-3 text-yellow-500">- Carlos M.</h3>
          </motion.div>

          <motion.div 
            className="p-6 bg-white shadow-lg rounded-lg border-l-4 border-blue-500"
            whileHover={{ scale: 1.05 }}
          >
            <p className="text-gray-600 italic">&quot;No confiaba en cualquier taller para modificar mi auto de carreras, pero aquí encontré a los mejores.&quot;</p>
            <h3 className="font-bold mt-3 text-blue-500">- Fernanda R.</h3>
          </motion.div>

          <motion.div 
            className="p-6 bg-white shadow-lg rounded-lg border-l-4 border-green-500"
            whileHover={{ scale: 1.05 }}
          >
            <p className="text-gray-600 italic">&quot;El blindaje de mi vehículo fue un trabajo impecable. Me siento seguro y protegido.&quot;</p>
            <h3 className="font-bold mt-3 text-green-500">- Alejandro G.</h3>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
