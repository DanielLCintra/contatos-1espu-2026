// app/page.js (MODIFICAR ARQUIVO EXISTENTE)
"use client";

import { useEffect } from 'react';
import { useAuth } from './hooks/useAuth';
import { useRouter } from 'next/navigation';

const HomePage = () => {
  const { isAuthenticated, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading) {
      if (isAuthenticated) {
        router.push('/dashboard');
      } else {
        router.push('/login');
      }
    }
  }, [isAuthenticated, loading, router]);

  // Mostrar loading enquanto verifica autenticação
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <i className="fas fa-spinner fa-spin text-3xl text-blue-600 mb-4"></i>
          <p className="text-gray-600">Carregando aplicação...</p>
        </div>
      </div>
    );
  }

  return null;
};

export default HomePage;