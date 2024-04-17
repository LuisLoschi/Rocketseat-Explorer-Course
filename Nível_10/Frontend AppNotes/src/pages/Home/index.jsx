import { Container, Brand, Menu, Search, Content, NewNote } from "./styles";
import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input"
import { Note } from "../../components/Note"

 
import { FiPlus, FiSearch } from 'react-icons/fi';
import { Section } from "../../components/Section";

import { useState, useEffect } from "react";
import { api } from "../../services/api";

export function Home() {

    const [tags, setTags] = useState([]);
    const [tagSelected, setTagSelected] = useState([]);

    function handleTagSelected(tagName) {
        const alredySelected = tagSelected.includes(tagName)

        if (alredySelected) {
            const filteredTag = tagSelected.filter(tag => tag !== tagName);

            setTagSelected(filteredTag);
            
        } else {
            setTagSelected(previewState => [...previewState, tagName]);
        }

    }

    useEffect(() => {
        async function fetchTags() {
            const response = await api.get("/tags")

            setTags(response.data);
        }

        fetchTags();
    }, []);

    
    return (
        <Container>
            <Brand>
                <h1>My<span>Notes</span></h1>
            </Brand>

            <Header />

            <Menu>
                <li>
                    <ButtonText 
                        title="Todos" 
                        onClick={() => handleTagSelected(tag.name)} 
                        isactive={tagSelected.length === 0}
                    />
                </li>
                {
                    tags && tags.map(tag => (
                        <li key={String(tag.id)}>
                            <ButtonText 
                                title={tag.name} 
                                onClick={() => handleTagSelected(tag.name)} 
                                isactive={tagSelected.includes(tag.name)}
                            />
                        </li>
                    ))
                }
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