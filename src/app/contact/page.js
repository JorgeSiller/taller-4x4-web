"use client";
import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Mensaje enviado! Nos pondremos en contacto pronto.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md border border-gray-300">
      <h1 className="text-3xl font-bold mb-4 text-center text-gray-800">Contáctanos</h1>
      <p className="text-center text-gray-600 mb-4">Déjanos tu mensaje y te responderemos pronto.</p>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Nombre" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500" value={form.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Correo Electrónico" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500" value={form.email} onChange={handleChange} required />
        <textarea name="message" placeholder="Mensaje" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500" rows="4" value={form.message} onChange={handleChange} required />
        <button className="bg-black text-white p-3 rounded-lg w-full hover:bg-gray-800 transition">Enviar</button>
      </form>
    </div>
  );
}

