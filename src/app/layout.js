"use client";
import "./globals.css";
import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function RootLayout({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <html lang="es" className={darkMode ? "dark" : ""}>
      <body className="bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white">
        <header className={`fixed top-0 w-full p-4 flex justify-between items-center transition-all duration-300 ${scrolled ? "bg-black bg-opacity-90 shadow-md" : "bg-transparent"}`}>
          <div className="flex items-center space-x-4">
            <Image src="/logo.png" alt="Xtreme Traction" width={100} height={40} className="rounded-lg shadow-md" />
            <h1 className="text-xl font-bold text-white">Xtreme Traction</h1>
          </div>
          <nav className="hidden md:flex space-x-6 text-white">
            <Link href="/">Inicio</Link>
            <Link href="/about">Nosotros</Link>
            <Link href="/services">Servicios</Link>
            <Link href="/gallery">Galería</Link>
            <Link href="/contact">Contacto</Link>
          </nav>
          <button 
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 border rounded bg-white text-black dark:bg-gray-800 dark:text-white transition hover:scale-105"
          >
            {darkMode ? "☀️ Modo Claro" : "🌙 Modo Oscuro"}
          </button>
        </header>
        <main className="pt-20">{children}</main>
      </body>
    </html>
  );
}
