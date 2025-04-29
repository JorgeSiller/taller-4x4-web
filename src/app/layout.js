"use client";
import "./globals.css";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function RootLayout({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <html lang="es" className={darkMode ? "dark" : ""}>
      <body className="bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white">
        {/* HEADER */}
        <header className="fixed top-0 w-full px-6 py-4 flex items-center justify-between transition-all duration-300 z-50 bg-neutral-900/90 shadow-md backdrop-blur">
          {/* Logo */}
          <Link href="/" className="flex items-center h-20 w-auto">
            <div className="relative h-20 w-60">
              <Image
                src="/logo.png"
                alt="Xtreme Traction"
                fill
                className="object-contain"
                sizes="220px"
                priority
              />
            </div>
          </Link>

          {/* Menú navegación escritorio */}
          <nav className="hidden md:flex flex-1 justify-center space-x-10 text-white font-semibold text-lg">
            {["Inicio", "Nosotros", "Servicios", "Galería", "Contacto"].map((item, i) => (
              <Link
                key={i}
                href={item === "Inicio" ? "/" : `/${item.toLowerCase()}`}
                className="hover:text-red-500 transition-colors duration-200"
              >
                {item}
              </Link>
            ))}
          </nav>

          {/* Botones a la derecha */}
          <div className="flex items-center space-x-4">
            {/* Botón modo oscuro escritorio */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="hidden md:block p-2 border rounded bg-white text-black dark:bg-gray-800 dark:text-white"
            >
              {darkMode ? "☀️" : "🌙"}
            </button>

            {/* Botón hamburguesa móvil */}
            <button
              className="md:hidden p-2 text-white focus:outline-none"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? "✖" : "☰"}
            </button>
          </div>
        </header>

        {/* Menú móvil */}
        {menuOpen && (
          <div className="fixed top-20 left-0 w-full bg-neutral-900/95 text-white flex flex-col space-y-6 p-6 md:hidden z-40 backdrop-blur">
            {["Inicio", "Nosotros", "Servicios", "Galería", "Contacto"].map((item, i) => (
              <Link
                key={i}
                href={item === "Inicio" ? "/" : `/${item.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="hover:text-red-400 transition text-lg"
              >
                {item}
              </Link>
            ))}

            {/* Botón modo oscuro en móvil */}
            <button
              onClick={() => {
                setDarkMode(!darkMode);
                setMenuOpen(false);
              }}
              className="p-2 border rounded bg-white text-black dark:bg-gray-800 dark:text-white w-1/2 self-center"
            >
              {darkMode ? "☀️ Modo Claro" : "🌙 Modo Oscuro"}
            </button>
          </div>
        )}

        {/* Contenido principal */}
        <main className="pt-24">{children}</main>
      </body>
    </html>
  );
}
