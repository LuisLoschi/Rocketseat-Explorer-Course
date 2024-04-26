import { Container, Form, BackgroundImage } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { FiLock, FiMail } from "react-icons/fi";

import { Link } from "react-router-dom";

export function SignIn() {

    return (
        <Container>
            <Form >
                
                <h1>MyMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>

                <h2>Faça seu login</h2> 

                <Input 
                    placeholder="E-mail" 
                    type="email" 
                    icon={FiMail}
                />

                <Input 
                    placeholder="Senha"  
                    type="password" 
                    icon={FiLock}
                />

                <Button title="Entrar" />
                
                <Link to="/register">
                    <p  className="account">Criar Conta</p>
                </Link>

            </Form>

            <BackgroundImage />
        </Container>

    )
}