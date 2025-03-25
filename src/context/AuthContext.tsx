
import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from 'sonner';

type User = {
  username: string;
  isAdmin: boolean;
};

type AuthContextType = {
  user: User | null;
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => void;
  isAuthenticated: boolean;
  isAdmin: boolean;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

// Dans une vraie application, l'authentification serait gérée côté serveur
// C'est juste une simulation pour démonstration
const ADMIN_USERNAME = 'admin';
const ADMIN_PASSWORD = 'admin123';

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(() => {
    try {
      const savedUser = localStorage.getItem('vitaNatureUser');
      return savedUser ? JSON.parse(savedUser) : null;
    } catch (error) {
      console.error("Erreur lors de la récupération de l'utilisateur:", error);
      return null;
    }
  });

  useEffect(() => {
    try {
      if (user) {
        localStorage.setItem('vitaNatureUser', JSON.stringify(user));
      } else {
        localStorage.removeItem('vitaNatureUser');
      }
    } catch (error) {
      console.error("Erreur lors de la sauvegarde de l'utilisateur:", error);
    }
  }, [user]);

  const login = async (username: string, password: string): Promise<boolean> => {
    try {
      // Simuler un délai d'authentification
      await new Promise(resolve => setTimeout(resolve, 500));
      
      if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
        const newUser = { username, isAdmin: true };
        setUser(newUser);
        localStorage.setItem('vitaNatureUser', JSON.stringify(newUser));
        toast.success('Connecté en tant qu\'administrateur');
        return true;
      } else {
        toast.error('Nom d\'utilisateur ou mot de passe incorrect');
        return false;
      }
    } catch (error) {
      console.error("Erreur lors de la connexion:", error);
      toast.error('Une erreur est survenue lors de la connexion');
      return false;
    }
  };

  const logout = () => {
    try {
      setUser(null);
      localStorage.removeItem('vitaNatureUser');
      toast.success('Déconnecté avec succès');
    } catch (error) {
      console.error("Erreur lors de la déconnexion:", error);
      toast.error('Une erreur est survenue lors de la déconnexion');
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        isAuthenticated: !!user,
        isAdmin: user?.isAdmin || false,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
