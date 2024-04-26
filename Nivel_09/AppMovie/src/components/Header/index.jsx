import { Container, Profile, Search, Logout } from './styles'
import { Link } from "react-router-dom";
import { Input } from '../Input'
import { FiSearch } from 'react-icons/fi'

export function Header(){

    return(
        <Container>
            <Profile>
                <h1>MyMovies</h1>

                <Search>
                    <Input 
                        placeholder="Pesquisar por filme" 
                        icon={FiSearch} 
                        type="text"
                    />
                </Search>

                <div>
                    <Logout >
                        <strong>Luis Loschi</strong>
                        <Link className='logout' to="">Sair</Link>
                    </Logout>

                    <Link to="/profile">
                    <img 
                        src="https://github.com/luisloschi.png" 
                        alt="Foto de perfil do usuário" 
                    />
                    </Link>
                </div>
            </Profile>
        </Container>
    )
}