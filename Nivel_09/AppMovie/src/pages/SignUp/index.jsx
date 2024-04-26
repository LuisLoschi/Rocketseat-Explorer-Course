import { Container, Form, BackgroundImage } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { FiLock, FiMail, FiUser, FiArrowLeft } from "react-icons/fi";

import { Link } from "react-router-dom";

export function SignUp() {

    return (
        <Container>
            <BackgroundImage />

            <Form >
                
                <h1>MyMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>

                <h2>Crie sua conta</h2> 

                <Input 
                    placeholder="Nome"  
                    type="password" 
                    icon={FiUser}
                />

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
                
                <Link to="/">
                    <p className="account">
                        <FiArrowLeft />
                        Voltar para o login
                    </p>
                </Link>

            </Form>

        </Container>

    )
}