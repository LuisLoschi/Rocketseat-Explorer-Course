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

            api.defaults.headers.authorization = `Bearer ${token}`; //Passa token tipo Bearer para as requisições
            setData({ user, token });
        
        } catch (error) {
            if (error.response) {
                alert(error.response.data.message)
            
            } else {
                alert("Não foi possivel entrar.")
            }
        }
    }

    useEffect(() => {
        const token = localStorage.getItem("@appNotes:token");
        const user = localStorage.getItem("@appNotes:user")
    }, []);


    return(
        <AuthContext.Provider value={{ signIn, user: data.user }}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth(){
    const context = useContext(AuthContext);

    return context;
}

export { AuthProvider, useAuth };