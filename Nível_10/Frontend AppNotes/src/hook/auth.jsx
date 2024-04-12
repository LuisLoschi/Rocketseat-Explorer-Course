import { createContext, useContext, useState, useEffect } from "react";
import { api } from "../services/api";

export const AuthContext = createContext({});

function AuthProvider({ children }) {

    const [data, setData] = useState({});

    async function signIn({ email, password }) {
        try {
            const response = await api.post("/sessions", { email, password })
            const { user, token } = response.data;

            localStorage.setItem("@appNotes:user", JSON.stringify(user)); //Armazena os dados no navegador
            localStorage.setItem("@appNotes:token", token);

            api.defaults.headers.common['Authorization'] = `Bearer ${token}`; //Passa token tipo Bearer para as requisições
            setData({ user, token });
        
        } catch (error) {
            if (error.response) {
                alert(error.response.data.message)
            
            } else {
                alert("Não foi possivel entrar.")
            }
        }
    }

    function signOut() {
        localStorage.removeItem("@appNotes:token");
        localStorage.removeItem("@appNotes:user");

        setData({});
    }

    useEffect(() => {
        /*
        Carrega e guarda informações de login para não voltar a página inicial ao recarregar a página
        */
        const token = localStorage.getItem("@appNotes:token");
        const user = localStorage.getItem("@appNotes:user");

        if(token && user) {
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

            setData({
                token,
                user: JSON.parse(user)
            });
        }
    }, []);


    return(
        <AuthContext.Provider value={{ 
                signIn,
                user: data.user,
                signOut 
            }}
            >
            {children}
        </AuthContext.Provider>
    )
}

function useAuth(){
    const context = useContext(AuthContext);

    return context;
}

export { AuthProvider, useAuth };