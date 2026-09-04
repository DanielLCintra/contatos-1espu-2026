// app/contact/[id]/page.js
"use client";
import { useParams, useRouter, useSearchParams } from 'next/navigation';

const ContactDetailPage = () => {
  const params = useParams();           // { id: "1234567890" }
  const router = useRouter();           // para navegar programaticamente
  const searchParams = useSearchParams(); // ?nome=João&email=...

  // Reconstrói o objeto contato a partir dos query parameters
  const contact = {
    id: parseInt(params.id),
    nome: searchParams.get('nome'),
    email: searchParams.get('email'),
    telefone: searchParams.get('telefone'),
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white shadow rounded-lg p-6">

          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold text-gray-900">
              Detalhes do Contato
            </h1>
            <button
              onClick={() => router.back()}
              className="bg-gray-100 hover:bg-gray-200 text-gray-900 px-4 py-2 rounded"
            >
              ← Voltar
            </button>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Nome
              </label>
              <p className="text-gray-900">{contact.nome}</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <p className="text-gray-900">{contact.email || "—"}</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Telefone
              </label>
              <p className="text-gray-900">{contact.telefone || "—"}</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactDetailPage;