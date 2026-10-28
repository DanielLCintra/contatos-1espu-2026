// hooks/useAuth.js (NOVO ARQUIVO)
import { useAuthContext } from '../contexts/AuthContext';

export const useAuth = () => {
    const authContext = useAuthContext();

    return {
        ...authContext,
        // Função para verificar permissões (expandível para roles)
        canAccess: (requiredRole = null) => {
            if (!authContext.isAuthenticated) return false;
            if (!requiredRole) return true;
            // Aqui podemos implementar lógica de roles no futuro
            return true;
        }
    };
};