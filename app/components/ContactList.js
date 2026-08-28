import ContactItem from "./ContactItem";

const ContactList = ({ contacts,setContacts }) => {

    

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
                    <ContactItem key={contact.id} contact={contact} setContacts={setContacts}/>
                ))
            )}
        </ul>
    </section>)
}

export default ContactList