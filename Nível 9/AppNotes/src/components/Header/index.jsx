import { Container, Profile } from './styles'

export function Header(){

    return(
        <Container>
            <Profile>
                <img 
                    src="https://github.com/luisloschi.png" 
                    alt="Foto de perfil do usuário" 
                />

                <div>
                    <span>Bem-Vindo</span>
                    <strong>Luis Loschi</strong>
                </div>

            </Profile>
        </Container>
    )
}