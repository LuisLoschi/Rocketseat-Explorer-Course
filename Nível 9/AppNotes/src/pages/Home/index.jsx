import { Container, Brand, Menu, Search, Content, NewNote } from "./styles";
import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input"
import { Note } from "../../components/Note"

 
import { FiPlus, FiSearch } from 'react-icons/fi';
import { Section } from "../../components/Section";


export function Home() {

    return (
        <Container>
            <Brand>
                <h1>My<span>Notes</span></h1>
            </Brand>

            <Header />

            <Menu>
                <li><ButtonText title="Todos" isactive /></li>
                <li><ButtonText title="React" /></li>
                <li><ButtonText title="NodeJs" /></li>
            </Menu>

            <Search>
                <Input placeholder="Pesquisar por título" icon={FiSearch}/>
            </Search>

            <Content>
                <Section title="Minhas Notas">
                    <Note data={{
                        title: 'React',
                        tags: [
                            { id: '1', name: 'react'},
                            { id: '2', name: 'nodejs'},
                        ]
                    }}
                    />
                </Section>
            </Content>

            <NewNote to="/newnote">
                <FiPlus />
                Criar nota
            </NewNote>
        </Container>

    )
}