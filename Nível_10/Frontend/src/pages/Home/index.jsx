import { Container, Brand, Menu, Search, Content, NewNote } from "./styles";
import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input"
import { Note } from "../../components/Note"

 
import { FiPlus, FiSearch } from 'react-icons/fi';
import { Section } from "../../components/Section";

import { useState, useEffect } from "react";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";

export function Home() {

    const [tags, setTags] = useState([]);
    const [tagSelected, setTagSelected] = useState([]);
    const [search, setSearch] = useState([]);
    const [notes, setNotes] = useState([]);

    const navigate = useNavigate();


    function handleTagSelected(tagName) {
        if (tagName == "all") {
            return setTagSelected([]);
        }

        const alredySelected = tagSelected.includes(tagName)

        if (alredySelected) {
            const filteredTag = tagSelected.filter(tag => tag !== tagName);

            setTagSelected(filteredTag);

        } else {
            setTagSelected(previewState => [...previewState, tagName]);
        }

    }

    function handleOpenNotes(id) {
        navigate(`/Details/${id}`)
    }

    useEffect(() => {
        async function fetchTags() {
            const response = await api.get("/tags")

            setTags(response.data);
        }

        fetchTags();
    }, []);

    useEffect(() => {
        async function fetchNotes() {
            const response = await api.get(`/notes?title=${search}&tags=${tagSelected}`)

            setNotes(response.data)
        }

        fetchNotes();

    }, [tagSelected, search]);
    
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
                        onClick={() => handleTagSelected("all")} 
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
                <Input 
                    placeholder="Pesquisar por título" 
                    icon={FiSearch}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </Search>

            <Content>
                <Section title="Minhas Notas">
                    
                    {
                        notes.map(note => (
                            <Note
                                key={String(note.id)} 
                                data={note}
                                onClick={() => handleOpenNotes(note.id)}
                            />
                        ))
                    }

                </Section>
            </Content>

            <NewNote to="/newnote">
                <FiPlus />
                Criar nota
            </NewNote>
        </Container>

    )
}