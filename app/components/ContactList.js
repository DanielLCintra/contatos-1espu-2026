import { useCallback } from "react";
import ContactItem from "./ContactItem";
import contactsApi from "../services/contactsApi";

const ContactList = ({ contacts,setContacts }) => {

    const handleRemove = useCallback(async (id) => {
        try {
            await contactsApi.delete(`/contatos/${id}`)
            setContacts((prev) => prev.filter((c) => c.id !== id));
        } catch (error) {
            console.log(error)
        }
    }, []);

    return (<section className="bg-white shadow rounded">
        <div className="px-4 py-3 border-b">
            <h2 className="font-medium text-gray-900">
                Contatos ({contacts.length})
            </h2>
        </div>
        <ul className="divide-y">
            {contacts.length === 0 ? (
                <li className="p-4 text-gray-500">Nenhum contato encontrado</li>
            ) : (
                contacts.map((contact) => (
                    <ContactItem key={contact.id} contact={contact} setContacts={setContacts} handleRemove={handleRemove}/>
                ))
            )}
        </ul>
    </section>)
}

export default ContactList