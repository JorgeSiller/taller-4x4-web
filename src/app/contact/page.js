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
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-4 text-center">Contáctanos</h1>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Nombre" className="w-full p-3 border rounded" value={form.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Correo Electrónico" className="w-full p-3 border rounded" value={form.email} onChange={handleChange} required />
        <textarea name="message" placeholder="Mensaje" className="w-full p-3 border rounded" rows="4" value={form.message} onChange={handleChange} required />
        <button className="bg-black text-white p-3 rounded w-full hover:bg-gray-800 transition">Enviar</button>
      </form>
    </div>
  );
}

