import { Container, Links, Content } from "./styles";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Tag } from "../../components/Tag";
import { ButtonText } from "../../components/ButtonText";

import { MdDeleteForever } from "react-icons/md";

import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../services/api";



export function Details() {

    const [data, setData] = useState(null);

    const params = useParams();
    const navigate = useNavigate();

    function homePage() {
        return navigate(-1) //Home page
    }

    async function handleRemoveNote() {
        const confirm = window.confirm("Deseja realmente remover essa nota?");

        if (confirm) {
           await  api.delete(`/notes/${params.id}`);
           homePage();
        }
    }

    useEffect(() => {
        async function fetchNote() {
            const response = await api.get(`/notes/${params.id}`);

            setData(response.data);
        }   

        fetchNote()
    }, []);

    return (
        <Container>
            <Header />

            {
                data && 

                <main>
                    <Content>

                        <ButtonText 
                            title="Excluir nota" 
                            onClick={handleRemoveNote}
                        />
                        
                        <h1>
                            {data.title}
                        </h1>

                        <p>
                            {data.description}
                        </p>

                        {
                            data.links &&
                            <Section title="Links úteis">
                                <Links>

                                    {
                                        data.links.map(link => (
                                            <li key={String(link.id)}>
                                                <a 
                                                    href={link.url} 
                                                    target="_blank"
                                                >
                                                    {link.url}
                                                </a>
                                            </li>

                                        ))
                                    }
                                </Links>
                            </Section>
                        }

                        {
                            data.tags &&
                            <Section title="Marcadores">
                                {   
                                    data.tags.map(tag => (
                                        <Tag 
                                            key={String(tag.id)}
                                            title={tag.name}
                                        />

                                    ))

                                }
                            </Section>

                        }

                        <Button 
                            title="Voltar"
                            onClick={() => homePage()}
                        />

                    </Content>
                </main>
            }

        </Container>
    )
}