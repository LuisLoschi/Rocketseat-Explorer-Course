import { Container, Form } from "./styles";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { TextArea } from "../../components/TextArea";
import { Section } from "../../components/Section";
import { NoteItem } from "../../components/NoteItem";

import { Link } from "react-router-dom";

import { useState } from "react";

export function NewNote() {
    const [links, setLinks] = useState([]);      //Guarda os links
    const [newLink, setNewLink] = useState("");  //Armazena novo link

    const[tags, setTags] = useState([]);
    const[newTag, setNewTag] = useState("");

    function handleAddLink() {
        /*
        * Manter links anteriores a adicionar os novos
        */
        setLinks(previewState => [...previewState, newLink]);
        setNewLink("");
    }

    function handleRemoveLink(deleted) {
        setLinks(previewState => previewState.filter(link => link !== deleted));
    }

    function handleAddTag() {
        setTags(previewState => [...previewState, newTag]);
        setNewTag("");
    }

    return (
        <Container>
            <Header />
            
            <main>
                <Form>
                    <header>
                        <h1>Criar nota</h1>
                        <Link to="/">Voltar</Link>
                    </header>

                    <Input placeholder="Título" />

                    <TextArea placeholder="Obsevações" />

                    <Section title="Links úteis">
                        {
                            links.map((link, index) => (
                                <NoteItem  
                                    key={String(index)}
                                    value={link}
                                    onClick={() => handleRemoveLink(link)}
                                />  
                            ))
                        }

                        <NoteItem  
                            isnew
                            placeholder="Novo link"
                            value={newLink}
                            onChange={e => setNewLink(e.target.value)}
                            onClick={handleAddLink}
                        />
                    </Section>


                    <Section title="Marcadores">
                        <div className="tags">
                            {
                                tags.map((tag, index) => (
                                    <NoteItem  
                                        key={String(index)}
                                        value={tag}
                                        onClick={() => {}}
                                    />
                                ))
                            }
                            <NoteItem  
                                isnew 
                                placeholder="Nova tag" 
                                value={newTag}
                                onChange={e => setNewTag(e.target.value)}
                                onClick={handleAddTag}
                            />
                        </div>
                    </Section>
                    
                    <Button title="Salvar" />
                </Form>
            </main>



        </Container>
    )
}