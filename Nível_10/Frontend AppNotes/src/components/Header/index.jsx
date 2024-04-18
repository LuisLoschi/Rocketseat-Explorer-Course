import { IoLogOut } from "react-icons/io5";
import { Container, Profile, Logout } from './styles'

import { useAuth } from "../../hook/auth";

import { api } from "../../services/api";

import avatarPlaceholder from "../../assets/avatar_placeholder.svg";

export function Header(){
    const { signOut, user } = useAuth();

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

    return(
        <Container>
            <Profile to="/profile">
                <img 
                    src={avatarUrl} 
                    alt={user.name}
                />

                <div>
                    <span>Bem-Vindo</span>
                    <strong>{user.name}</strong>
                </div>

            </Profile>

            <Logout onClick={signOut}>
                <IoLogOut />
            </Logout>

        </Container>
    )
}