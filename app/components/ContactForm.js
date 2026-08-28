'use client'

import { useState } from "react";

const ContactForm = ({setContacts}) => {
    const [form, setForm] = useState({ nome: "", email: "", telefone: "" });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!form.nome.trim()) return;
        setContacts((prev) => [...prev, { ...form, id: Date.now() }]);
        setForm({ nome: "", email: "", telefone: "" });
    };
    return (
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow rounded p-4 space-y-4"
        >
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">
              Nome
            </label>
            <input
              name="nome"
              className="w-full border rounded px-3 py-2 text-gray-900"
              value={form.nome}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">
              Email
            </label>
            <input
              name="email"
              type="email"
              className="w-full border rounded px-3 py-2 text-gray-900"
              value={form.email}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">
              Telefone
            </label>
            <input
              name="telefone"
              className="w-full border rounded px-3 py-2 text-gray-900"
              value={form.telefone}
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
          >
            Adicionar Contato
          </button>
        </form>
    )
}

export default ContactForm