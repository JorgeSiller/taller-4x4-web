"use client";
import "./globals.css";
import Link from "next/link";
import { useState } from "react";

export default function RootLayout({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <html lang="es" className={darkMode ? "dark" : ""}>
      <body className="bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white">
        <header className="bg-black text-white p-4 flex justify-between items-center shadow-md">
          <div className="flex items-center space-x-4">
            <img src="/logo.png" alt="Taller 4x4" className="h-10 w-auto" />
            <h1 className="text-xl font-bold">Taller 4x4</h1>
          </div>
          <nav className="flex space-x-6">
            <Link href="/">Inicio</Link>
            <Link href="/about">Nosotros</Link>
            <Link href="/services">Servicios</Link>
            <Link href="/gallery">Galería</Link>
            <Link href="/contact">Contacto</Link>
          </nav>
          <button 
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 border rounded bg-white text-black dark:bg-gray-800 dark:text-white"
          >
            {darkMode ? "☀️ Modo Claro" : "🌙 Modo Oscuro"}
          </button>
        </header>
        <main className="p-6">{children}</main>
      </body>
    </html>
  );
}
