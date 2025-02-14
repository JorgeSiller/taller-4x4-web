"use client";
import Link from "next/link";

const services = [
  { slug: "modificaciones-4x4", title: "Modificaciones 4x4" },
  { slug: "autos-de-carreras", title: "Autos de Carreras" },
  { slug: "blindaje-vehicular", title: "Blindaje Vehicular" },
  { slug: "swaps-de-motor", title: "Swaps de Motor" },
];

export default function ServicesPage() {
  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold mb-8 text-center">Nuestros Servicios</h1>
      <ul className="space-y-4">
        {services.map((service) => (
          <li key={service.slug}>
            <Link href={`/services/${service.slug}`} className="text-red-500 hover:underline">
              {service.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
