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
    <div className="max-w-lg mx-auto p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md border border-gray-300 dark:border-gray-700">
      <h1 className="text-3xl font-bold mb-4 text-center text-gray-800 dark:text-white">Contáctanos</h1>
      <p className="text-center text-gray-600 dark:text-gray-300 mb-4">
        Déjanos tu mensaje y te responderemos pronto.
      </p>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-100 dark:bg-gray-800 text-black dark:text-white focus:ring-2 focus:ring-red-500"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Correo Electrónico"
          className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-100 dark:bg-gray-800 text-black dark:text-white focus:ring-2 focus:ring-red-500"
          value={form.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Mensaje"
          rows="4"
          className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-100 dark:bg-gray-800 text-black dark:text-white focus:ring-2 focus:ring-red-500"
          value={form.message}
          onChange={handleChange}
          required
        />
        <button className="bg-black dark:bg-red-600 text-white p-3 rounded-lg w-full hover:bg-gray-800 dark:hover:bg-red-700 transition">
          Enviar
        </button>
      </form>
    </div>
  );
}