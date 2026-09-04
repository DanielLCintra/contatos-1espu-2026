'use client'

import { useState } from "react";

const ContactForm = ({setContacts}) => {
    const [form, setForm] = useState({ nome: "", email: "", telefone: "" });
    const [errors, setErrors] = useState({})

    const validate = () => {
      const newErrors = {};
      if (!form.nome.trim()) newErrors.nome = "Nome é obrigatório";
      if (form.email && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) {
        newErrors.email = "Email inválido";
      }
      return newErrors;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
      
        const newErrors = validate()

        if (Object.keys(newErrors).length > 0) {
          setErrors(newErrors);
          return;
        }

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
              Nome <span className="text-red-500">*</span>
            </label>
            <input
              name="nome"
              className={`w-full border rounded px-3 py-2 text-gray-900 ${
            errors.nome ? "border-red-500" : "border-gray-300"
          }`}
              value={form.nome}
              onChange={handleChange}
            />
            {errors.nome && (
          <p className="text-sm text-red-600 mt-1">{errors.nome}</p>
        )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              name="email"
              className={`w-full border rounded px-3 py-2 text-gray-900 ${
            errors.email ? "border-red-500" : "border-gray-300"
          }`}
              value={form.email}
              onChange={handleChange}
            />
            {errors.email && (
          <p className="text-sm text-red-600 mt-1">{errors.email}</p>
        )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">
              Telefone <span className="text-red-500">*</span>
            </label>
            <input
              name="telefone"
              className={`w-full border rounded px-3 py-2 text-gray-900 ${
            errors.telefone ? "border-red-500" : "border-gray-300"
          }`}
              value={form.telefone}
              onChange={handleChange}
            />
            {errors.telefone && (
          <p className="text-sm text-red-600 mt-1">{errors.telefone}</p>
        )}
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