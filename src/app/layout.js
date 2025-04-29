"use client";
import "./globals.css";
import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function RootLayout({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <html lang="es" className={darkMode ? "dark" : ""}>
      <body className="bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white">
        {/* Header */}
        <header
          className={`fixed top-0 w-full px-4 py-3 flex justify-between items-center transition-all duration-300 z-50 ${
            scrolled ? "bg-neutral-900/90 shadow-md backdrop-blur" : "bg-transparent"
          }`}
        >
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/logo.png" // Asegúrate que el logo esté en /public/logo.png
              alt="Xtreme Traction"
              width={150}
              height={60}
              priority
            />
          </div>

          {/* Menú de navegación en escritorio */}
          <nav className="hidden md:flex space-x-6 text-white">
            <Link href="/">Inicio</Link>
            <Link href="/about">Nosotros</Link>
            <Link href="/services">Servicios</Link>
            <Link href="/gallery">Galería</Link>
            <Link href="/contact">Contacto</Link>
          </nav>

          {/* Botón de modo oscuro */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="hidden md:block p-2 border rounded bg-white text-black dark:bg-gray-800 dark:text-white ml-4"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>

          {/* Botón menú hamburguesa en móviles */}
          <button
            className="md:hidden p-2 text-white focus:outline-none ml-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✖" : "☰"}
          </button>
        </header>

        {/* Menú desplegable en móviles */}
        {menuOpen && (
          <div className="fixed top-14 left-0 w-full bg-neutral-900/95 text-white flex flex-col space-y-6 p-6 md:hidden z-40 backdrop-blur">
            <Link href="/" onClick={() => setMenuOpen(false)}>Inicio</Link>
            <Link href="/about" onClick={() => setMenuOpen(false)}>Nosotros</Link>
            <Link href="/services" onClick={() => setMenuOpen(false)}>Servicios</Link>
            <Link href="/gallery" onClick={() => setMenuOpen(false)}>Galería</Link>
            <Link href="/contact" onClick={() => setMenuOpen(false)}>Contacto</Link>
            {/* Botón para modo oscuro en móvil */}
            <button
              onClick={() => { setDarkMode(!darkMode); setMenuOpen(false); }}
              className="p-2 border rounded bg-white text-black dark:bg-gray-800 dark:text-white w-1/2 self-center"
            >
              {darkMode ? "☀️ Modo Claro" : "🌙 Modo Oscuro"}
            </button>
          </div>
        )}

        {/* Main Content */}
        <main className="pt-24">{children}</main>
      </body>
    </html>
  );
}