"use client";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import {
  Home,
  Info,
  Wrench,
  Image as ImageIcon,
  Mail,
  Moon,
  Sun,
} from "lucide-react";

export default function RootLayout({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  const navItems = [
    { label: "Inicio", href: "/", icon: <Home size={18} /> },
    { label: "Nosotros", href: "/about", icon: <Info size={18} /> },
    { label: "Servicios", href: "/services", icon: <Wrench size={18} /> },
    { label: "Galería", href: "/gallery", icon: <ImageIcon size={18} /> },
    { label: "Contacto", href: "/contact", icon: <Mail size={18} /> },
  ];

  return (
    <html lang="es" className={darkMode ? "dark" : ""}>
      <body className="bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white">
        <header className="fixed top-0 w-full bg-gradient-to-b from-black via-neutral-900 to-transparent z-50 shadow-md">
          <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <Image src="/logo.png" alt="Xtreme Traction" width={160} height={60} />
            </div>

            <nav className="hidden md:flex space-x-6">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group flex items-center gap-2 font-semibold text-white hover:text-red-500 transition relative"
                >
                  {item.icon}
                  <span className="relative">
                    {item.label}
                    <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-red-500 group-hover:w-full transition-all duration-300"></span>
                  </span>
                </Link>
              ))}
            </nav>

            <button
              onClick={() => setDarkMode(!darkMode)}
              className="ml-4 p-2 border rounded bg-white text-black dark:bg-gray-800 dark:text-white"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        </header>

        <main className="pt-20">{children}</main>
      </body>
    </html>
  );
}
