import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Taller 4x4 - Modificaciones y Reparaciones",
  description: "Somos expertos en modificaciones 4x4, autos de carreras y más.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="bg-gray-100 text-gray-900">
        <header className="bg-black text-white p-4 flex justify-between items-center shadow-md">
          <div className="flex items-center space-x-4">
            <img src="/logo.png" alt="Taller 4x4" className="h-10 w-auto" />
            <h1 className="text-xl font-bold">Taller 4x4</h1>
          </div>
          <nav>
            <ul className="flex space-x-6">
              <li><Link href="/">Inicio</Link></li>
              <li><Link href="/about">Nosotros</Link></li>
              <li><Link href="/services">Servicios</Link></li>
              <li><Link href="/gallery">Galería</Link></li>
              <li><Link href="/contact">Contacto</Link></li>
            </ul>
          </nav>
        </header>
        <main className="p-6">{children}</main>
      </body>
    </html>
  );
}
