"use client";

export default function GalleryPage() {
  const images = [
    "https://via.placeholder.com/300",
    "https://via.placeholder.com/300",
    "https://via.placeholder.com/300",
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">Galería</h1>
      <div className="grid grid-cols-3 gap-4 mt-4">
        {images.map((src, index) => (
          <img key={index} src={src} alt={`Imagen ${index + 1}`} className="rounded-lg shadow" />
        ))}
      </div>
    </div>
  );
}

