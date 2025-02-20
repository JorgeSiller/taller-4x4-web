import Image from "next/image";
import { notFound } from "next/navigation";

// 🔹 Definir los datos de los servicios
const servicesData = {
  "modificaciones-4x4": {
    title: "Modificaciones 4x4",
    description: "Mejoramos tu 4x4 con suspensión elevada, neumáticos off-road y más.",
    images: ["/images/4x4-1.jpg", "/images/4x4-2.jpg", "/images/4x4-3.jpg"]
  },
  "autos-de-carreras": {
    title: "Autos de Carreras",
    description: "Preparación y optimización de autos de alto rendimiento para competición.",
    images: ["/images/race-1.jpg", "/images/race-2.jpg", "/images/race-3.jpg"]
  },
  "blindaje-vehicular": {
    title: "Blindaje Vehicular",
    description: "Protección avanzada con blindaje de alta resistencia.",
    images: ["/images/blindaje-1.jpg", "/images/blindaje-2.jpg", "/images/blindaje-3.jpg"]
  },
  "swaps-de-motor": {
    title: "Swaps de Motor",
    description: "Instalamos motores de alto rendimiento con conversiones especializadas.",
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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {service.images.map((img, index) => (
          <Image key={index} src={img} alt={service.title} width={400} height={300} className="rounded-lg shadow-lg" />
        ))}
      </div>
    </div>
  );
}
