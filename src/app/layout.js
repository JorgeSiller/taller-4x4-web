"use client";
import "./globals.css";
import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function RootLayout({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // Estado para abrir/cerrar el menú móvil

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <html lang="es" className={darkMode ? "dark" : ""}>
      <body className="bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white">
        <header className={`fixed top-0 w-full p-4 flex justify-between items-center transition-all duration-300 ${scrolled ? "bg-black bg-opacity-80 shadow-md" : "bg-transparent"}`}>
          <div className="flex items-center space-x-4">
            <Image src="/logo.png" alt="Xtreme Traction" width={100} height={40} />
            <h1 className="text-xl font-bold">Xtreme Traction</h1>
          </div>

          {/* Menú para escritorio */}
          <nav className="hidden md:flex space-x-6">
            <Link href="/">Inicio</Link>
            <Link href="/about">Nosotros</Link>
            <Link href="/services">Servicios</Link>
            <Link href="/gallery">Galería</Link>
            <Link href="/contact">Contacto</Link>
          </nav>

          {/* Botón para modo oscuro */}
          <button 
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 border rounded bg-white text-black dark:bg-gray-800 dark:text-white"
          >
            {darkMode ? "☀️ Modo Claro" : "🌙 Modo Oscuro"}
          </button>

          {/* Botón de menú hamburguesa para móviles */}
          <button 
            className="md:hidden p-2 text-white focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✖" : "☰"}
          </button>
        </header>

        {/* Menú desplegable en móviles */}
        {menuOpen && (
          <div className="fixed top-14 left-0 w-full bg-black bg-opacity-90 text-white flex flex-col space-y-4 p-6 md:hidden">
            <Link href="/" onClick={() => setMenuOpen(false)}>Inicio</Link>
            <Link href="/about" onClick={() => setMenuOpen(false)}>Nosotros</Link>
            <Link href="/services" onClick={() => setMenuOpen(false)}>Servicios</Link>
            <Link href="/gallery" onClick={() => setMenuOpen(false)}>Galería</Link>
            <Link href="/contact" onClick={() => setMenuOpen(false)}>Contacto</Link>
          </div>
        )}

        <main className="pt-20">{children}</main>
      </body>
    </html>
  );
}
