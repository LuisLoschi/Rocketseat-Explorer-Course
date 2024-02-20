import { Container, Form } from "./styles";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { TextArea } from "../../components/TextArea";
import { Section } from "../../components/Section";
import { Tag } from "../../components/Tag";


export function NewNote() {

    return (
        <Container>
            <Header />
            
            <main>
                <Form>
                    <header>
                        <h1>Criar nota</h1>
                        <a href="/">Voltar</a>
                    </header>

                    <Input placeholder="Título" />

                    <TextArea placeholder="Obsevações" />

                    <Section title="Links úteis"/>
                </Form>
            </main>



            <Button title="Salvar" />
        </Container>
    )
}