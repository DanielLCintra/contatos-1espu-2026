// components/ProtectedRoute.jsx (NOVO ARQUIVO)
'use client'
import { useEffect } from 'react';
import { useAuth } from '../hooks/useAuth';
import { useRouter } from 'next/navigation';

const ProtectedRoute = ({ children, fallback = null }) => {
    const { isAuthenticated, loading } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!loading && !isAuthenticated) {
            router.push('/login');
        }
    }, [isAuthenticated, loading, router]);

    // Mostrar loading enquanto verifica autenticação
    if (loading) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <i className="fas fa-spinner fa-spin text-3xl text-blue-600 mb-4"></i>
                    <p className="text-gray-600">Verificando autenticação...</p>
                </div>
            </div>
        );
    }

    // Se não autenticado, retornar fallback ou null
    if (!isAuthenticated) {
        return fallback || null;
    }

    // Renderizar conteúdo protegido
    return children;
};

export default ProtectedRoute;