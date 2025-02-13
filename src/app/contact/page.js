"use client";

export default function ContactPage() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">Contacto</h1>
      <p className="mt-2">Si tienes alguna pregunta, contáctanos llenando el siguiente formulario:</p>
      <form className="mt-4 space-y-4">
        <input type="text" placeholder="Nombre" className="w-full p-2 border rounded" />
        <input type="email" placeholder="Correo Electrónico" className="w-full p-2 border rounded" />
        <textarea placeholder="Mensaje" className="w-full p-2 border rounded" rows="4"></textarea>
        <button className="bg-black text-white p-2 rounded w-full">Enviar</button>
      </form>
    </div>
  );
}

