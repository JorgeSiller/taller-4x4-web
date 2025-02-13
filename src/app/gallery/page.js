"use client";
import { motion } from "framer-motion";

const images = [
  "/images/4x4-1.jpg",
  "/images/4x4-2.jpg",
  "/images/4x4-3.jpg",
  "/images/4x4-4.jpg",
];

export default function GalleryPage() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Galería de Trabajos</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((src, index) => (
          <motion.img
            key={index}
            src={src}
            alt={`Imagen ${index + 1}`}
            className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            whileHover={{ scale: 1.1 }}
          />
        ))}
      </div>
    </div>
  );
}

