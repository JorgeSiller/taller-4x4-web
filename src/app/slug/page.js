"use client";
import { useParams } from "next/navigation";
import Image from "next/image";

// Datos de cada servicio
const servicesData = {
  "modificaciones-4x4": {
    title: "Modificaciones 4x4",
    description: "Realizamos modificaciones extremas para vehículos 4x4, incluyendo elevación de suspensión, neumáticos off-road y más.",
    images: ["/images/4x4-1.jpg", "/images/4x4-2.jpg", "/images/4x4-3.jpg"]
  },
  "autos-de-carreras": {
    title: "Autos de Carreras",
    description: "Preparamos autos de carreras con ajustes aerodinámicos, reducción de peso y mejoras en el motor.",
    images: ["/images/race-1.jpg", "/images/race-2.jpg", "/images/race-3.jpg"]
  },
  "blindaje-vehicular": {
    title: "Blindaje Vehicular",
    description: "Ofrecemos soluciones de blindaje para garantizar la seguridad en cualquier entorno.",
    images: ["/images/blindaje-1.jpg", "/images/blindaje-2.jpg", "/images/blindaje-3.jpg"]
  },
  "swaps-de-motor": {
    title: "Swaps de Motor",
    description: "Hacemos conversiones de motor con ajustes de alto rendimiento.",
    images: ["/images/motor-1.jpg", "/images/motor-2.jpg", "/images/motor-3.jpg"]
  },
};

// 🔹 Agregar esta función para que Next.js detecte las rutas dinámicas en producción
export async function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({ slug }));
}

export default function ServicePage() {
  const { slug } = useParams(); // Obtener el slug de la URL
  const service = servicesData[slug];

  if (!service) {
    return <div className="text-center text-red-500 text-xl p-6">Servicio no encontrado</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold text-center mb-4">{service.title}</h1>
      <p className="text-lg text-gray-700 text-center max-w-2xl mx-auto mb-6">{service.description}</p>

      {/* Galería de imágenes */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {service.images.map((img, index) => (
          <Image key={index} src={img} alt={service.title} width={400} height={300} className="rounded-lg shadow-lg" />
        ))}
      </div>
    </div>
  );
}

