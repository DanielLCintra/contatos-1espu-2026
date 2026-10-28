"use client";
import { createContext, useCallback, useContext, useEffect, useState } from 'react';

// 1. Criar o Context
const AuthContext = createContext();

// 2. Hook para usar o Context
export const useAuthContext = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuthContext deve ser usado dentro de AuthProvider');
    }
    return context;
};

// 3. Provider Component
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const checkAuth = () => {
            try {
                const token = localStorage.getItem('authToken');
                const userData = localStorage.getItem('userData');

                if (token && userData) {
                    const parsedUser = JSON.parse(userData);
                    setUser(parsedUser);
                }
            } catch (err) {
                console.error('Erro ao verificar autenticação:', err);
                localStorage.removeItem('authToken');
                localStorage.removeItem('userData');
            } finally {
                setLoading(false);
            }
        };

        checkAuth();
    }, []);


    const login = useCallback(async (email, password) => {
        try {
            setLoading(true);
            setError(null);

            // Simular delay de API
            await new Promise(resolve => setTimeout(resolve, 1000));

            // Usuários válidos para teste
            const validUsers = [
                { email: 'admin@contatos.com', password: '123456', name: 'Administrador' },
                { email: 'user@contatos.com', password: 'senha123', name: 'Usuário Teste' },
                { email: 'demo@contatos.com', password: 'demo123', name: 'Usuário Demo' }
            ];

            const user = validUsers.find(u => u.email === email && u.password === password);

            if (!user) {
                throw new Error('Email ou senha incorretos');
            }

            // Gerar token fictício
            const token = `token_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

            // Salvar no localStorage
            localStorage.setItem('authToken', token);
            localStorage.setItem('userData', JSON.stringify({
                id: user.email.split('@')[0],
                name: user.name,
                email: user.email
            }));

            setUser({
                id: user.email.split('@')[0],
                name: user.name,
                email: user.email
            });

            return { success: true };
        } catch (err) {
            setError(err.message);
            throw err;
        } finally {
            setLoading(false);
        }
    }, []);

    const logout = useCallback(() => {
        try {
            localStorage.removeItem('authToken');
            localStorage.removeItem('userData');
            setUser(null);
            setError(null);
        } catch (err) {
            console.error('Erro ao fazer logout:', err);
        }
    }, []);

    const isAuthenticated = !!user;

    const value = {
        user,
        setUser,
        loading,
        setLoading,
        error,
        setError,
        login,
        logout,
        isAuthenticated
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}