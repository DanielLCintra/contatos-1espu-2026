"use client";
import ContactForm from "../components/ContactForm"
import ContactList from "../components/ContactList";
import FilterInput from "../components/FilterInput";
import ProtectedRoute from "../components/ProtectedRoute";
import Statistics from "../components/Statistics";
import PageHeader from "../components/ui/PageHeader";
import { useAuthContext } from "../contexts/AuthContext";
import { useContactsContext } from "../contexts/ContactsContext";
import useFilter from "../hooks/useFilter";
import useStatistics from "../hooks/useStatistics";

const Dashboard = () => {
    const { contacts } = useContactsContext()
    const { logout } = useAuthContext()
    const filterData = useFilter(contacts)
    const stats = useStatistics(contacts)
    return (
        <ProtectedRoute>
            <div className="min-h-screen bg-gray-200 p-6">
                <div className="max-w-3xl mx-auto space-y-6">
                    <PageHeader title="Cadastro de Contatos">
                        <>
                            <FilterInput value={filterData.filter} onChange={filterData.handleFilterChange} />
                            <button
                                onClick={() => {
                                    logout()
                                }}
                                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded text-sm"
                            >
                                <i className="fas fa-sign-out-alt mr-2"></i>
                                Sair
                            </button>
                        </>
                    </PageHeader>

                    {/* ===== FORMULÁRIO ===== */}
                    <ContactForm />

                    <Statistics stats={stats} />

                    {/* ===== LISTA DE CONTATOS ===== */}
                    <ContactList contacts={filterData.filteredContacts} />
                </div>
            </div>
        </ProtectedRoute>
    );
};

export default Dashboard;