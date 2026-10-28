// app/contact/[id]/page.js
"use client";

import ContactDetail from '@/app/components/ContactDetail';
import ProtectedRoute from '@/app/components/ProtectedRoute';
import LoadingState from '@/app/components/ui/LoadingState';
import useContactDetail from '@/app/hooks/useContactDetail';

const ContactDetailPage = () => {
    const { contact, isLoading, handleBack } = useContactDetail();

    return (
        <ProtectedRoute>
            <div className="min-h-screen bg-gray-50 p-6">
                <div className="max-w-2xl mx-auto">
                    {isLoading ? (
                        <LoadingState />
                    ) : (
                        <ContactDetail contact={contact} onBack={handleBack} />
                    )}
                </div>
            </div>
        </ProtectedRoute>
    );
};

export default ContactDetailPage;
