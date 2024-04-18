import { Container, Form } from "./styles";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { TextArea } from "../../components/TextArea";
import { Section } from "../../components/Section";
import { NoteItem } from "../../components/NoteItem";

import { useState } from "react";
import { api } from "../../services/api";

import { useNavigate } from 'react-router-dom'
import { ButtonText } from "../../components/ButtonText";
 
export function NewNote() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const [links, setLinks] = useState([]);      //Guarda os links
    const [newLink, setNewLink] = useState("");  //Armazena novo link

    const[tags, setTags] = useState([]);
    const[newTag, setNewTag] = useState("");

    const navigate = useNavigate();

    function homePage() {
        return navigate(-1) //Home page
    }

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

    function handleRemoveTag(deleted) {
        setTags(previewState => previewState.filter(tag => tag !== deleted));
    }

    async function handleNewNote() {
        if (!title) {
            return alert("Digite o título da nota!")
        }

        if (newLink) {
            return alert("Você deixou um link no campo adicionar, mas não cliclou em adicionar. Clique para adicionar ou deixe o campo vazio!")
        }

        if (newTag) {
            return alert("Você deixou uma tag no campo adicionar, mas não cliclou em adicionar. Clique para adicionar ou deixe o campo vazio!")
        }

        await api.post("/notes", {
            title,
            description,
            tags,
            links
        });

        alert("Nota criada com sucesso!");

        navigate(-1); //Home page
    }


    return (
        <Container>
            <Header />
            
            <main>
                <Form>
                    <header>
                        <h1>Criar nota</h1>
                        <ButtonText
                            title="Voltar"
                            onClick={homePage}
                        />
                    </header>

                    <Input 
                        placeholder="Título" 
                        onChange={e => setTitle(e.target.value)}

                    />

                    <TextArea 
                        placeholder="Obsevações"
                        onChange={e => setDescription(e.target.value)}
                    />

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
                                        onClick={() => handleRemoveTag(tag)}
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
                    
                    <Button 
                        title="Salvar" 
                        onClick={handleNewNote}
                    />
                </Form>
            </main>



        </Container>
    )
}