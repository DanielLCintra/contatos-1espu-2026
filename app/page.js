"use client";
import { useState } from "react";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";

const HomePage = () => {
  const [contacts, setContacts] = useState([]);

  return (
    <div className="min-h-screen bg-gray-200 p-6">
      <div className="max-w-3xl mx-auto space-y-6">
        <header className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900">
            Cadastro de Contatos
          </h1>
        </header>

        {/* ===== FORMULÁRIO ===== */}
        <ContactForm setContacts={setContacts}/>

        {/* ===== LISTA DE CONTATOS ===== */}
        <ContactList contacts={contacts} setContacts={setContacts}/>
      </div>
    </div>
  );
};

export default HomePage;