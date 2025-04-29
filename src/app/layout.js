"use client";

import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import { Home, Info, Wrench, GalleryVerticalEnd, Phone } from "lucide-react";

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
        <header className="fixed top-0 w-full bg-black/40 backdrop-blur-md shadow-md z-50">
          <div className="container mx-auto flex items-center justify-between p-4">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3">
              <Image
                src="/logo.png"
                alt="Xtreme Traction Logo"
                width={150}
                height={60}
                priority
              />
            </Link>

            {/* Menú */}
            <nav className="hidden md:flex space-x-8 text-sm font-medium">
              <Link href="/" className="flex items-center space-x-1 hover:text-red-500 transition">
                <Home className="w-5 h-5" />
                <span>Inicio</span>
              </Link>

              <Link href="/about" className="flex items-center space-x-1 hover:text-red-500 transition">
                <Info className="w-5 h-5" />
                <span>Nosotros</span>
              </Link>

              <Link href="/services" className="flex items-center space-x-1 hover:text-red-500 transition">
                <Wrench className="w-5 h-5" />
                <span>Servicios</span>
              </Link>

              <Link href="/gallery" className="flex items-center space-x-1 hover:text-red-500 transition">
                <GalleryVerticalEnd className="w-5 h-5" />
                <span>Galería</span>
              </Link>

              <Link href="/contact" className="flex items-center space-x-1 hover:text-red-500 transition">
                <Phone className="w-5 h-5" />
                <span>Contacto</span>
              </Link>
            </nav>
          </div>
        </header>

        {/* Espacio para que el header no tape contenido */}
        <div className="h-20" />

        <main>{children}</main>
      </body>
    </html>
  );
}