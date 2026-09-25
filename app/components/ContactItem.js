import Link from "next/link";
import { memo } from "react";

const ContactItem = memo(({ contact, setContacts,handleRemove, ...props }) => {
    return (
        <li {...props} className="p-4 flex items-center justify-between">
            <div>
                <Link
                    href={`/contact/${contact.id}`}
                    className="font-medium text-gray-900 hover:text-blue-600 transition-colors"
                >
                    {contact.nome}
                </Link>
                <p className="text-sm text-gray-600">
                    {contact.email} • {contact.telefone}
                </p>
            </div>
            <button
                onClick={() => handleRemove(contact.id)}
                className="text-red-600 hover:text-red-700 px-2 py-1 rounded"
            >
                Excluir
            </button>
        </li>
    )
})

export default ContactItem