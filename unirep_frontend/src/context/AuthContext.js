import { createContext, useState, useContext } from "react";

// Criando o contexto
const AuthContext = createContext();

// Hook personalizado para acessar o contexto facilmente
export const useAuth = () => {
    return useContext(AuthContext);
};

// Provedor do contexto que envolverá a aplicação
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null); // Estado do usuário logado

    // Simulação de login (substitua pela chamada real à API)
    const login = (email, password) => {
        // Simulação de um usuário logado e sua república
        const fakeUser = {
            id: 1,
            full_name: "Luana Oliveira",
            email,
            republic: {
                name: "República Universitária Alpha",
                rent: 1200,
                members: 5,
            },
        };
        setUser(fakeUser); // Salva o usuário no estado
    };

    // Logout
    const logout = () => {
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
