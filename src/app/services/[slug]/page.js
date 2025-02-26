import Image from "next/image";
import { notFound } from "next/navigation";

// 🔹 Definir los datos de los servicios con información extendida
const servicesData = {
  "modificaciones-4x4": {
    title: "Modificaciones 4x4",
    description: "Mejoramos tu 4x4 con suspensión elevada, neumáticos off-road y más.",
    details: "Nuestro equipo especializado refuerza la estructura del vehículo, mejora la suspensión y la tracción para terrenos difíciles. Optimizamos la aerodinámica y seguridad para un desempeño óptimo.",
    images: ["/images/4x4-1.jpg", "/images/4x4-2.jpg", "/images/4x4-3.jpg"]
  },
  "autos-de-carreras": {
    title: "Autos de Carreras",
    description: "Preparación y optimización de autos de alto rendimiento para competición.",
    details: "Realizamos ajustes en la ECU, mejoras aerodinámicas y optimización de peso. Instalamos roll-cages, frenos de alto rendimiento y calibraciones especializadas.",
    images: ["/images/race-1.jpg", "/images/race-2.jpg", "/images/race-3.jpg"]
  },
  "blindaje-vehicular": {
    title: "Blindaje Vehicular",
    description: "Protección avanzada con blindaje de alta resistencia.",
    details: "Usamos materiales balísticos de última generación para garantizar seguridad sin comprometer el desempeño del vehículo. Instalamos cristales antibalas, refuerzos estructurales y tecnología de protección avanzada.",
    images: ["/images/blindaje-1.jpg", "/images/blindaje-2.jpg", "/images/blindaje-3.jpg"]
  },
  "swaps-de-motor": {
    title: "Swaps de Motor",
    description: "Instalamos motores de alto rendimiento con conversiones especializadas.",
    details: "Desde motores turbo hasta conversiones eléctricas, realizamos swaps con ajuste preciso de la transmisión, sistema de refrigeración y gestión electrónica para garantizar máxima eficiencia y potencia.",
    images: ["/images/motor-1.JPG", "/images/motor-2.jpg", "/images/motor-3.jpg"]
  },
};

// ✅ FORZAR NEXT.JS A RECONOCER LAS RUTAS DINÁMICAS
export async function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({ slug }));
}

// ✅ Generar las páginas dinámicamente
export default function ServicePage({ params }) {
  const service = servicesData[params.slug];

  if (!service) {
    return notFound();
  }

  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold text-center mb-4">{service.title}</h1>
      <p className="text-lg text-gray-700 text-center max-w-2xl mx-auto mb-6">{service.description}</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {service.images.map((img, index) => (
          <Image key={index} src={img} alt={service.title} width={400} height={300} className="rounded-lg shadow-lg" />
        ))}
      </div>

      {/* Sección de información detallada */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Más sobre {service.title}</h2>
        <p className="text-gray-700">{service.details}</p>
      </div>
    </div>
  );
}
