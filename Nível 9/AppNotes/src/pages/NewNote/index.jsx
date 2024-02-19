import { Container } from "./styles";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Tag } from "../../components/Tag";


export function NewNote() {

    return (
        <Container>
            <Header />
            
            <h1>Criar nota</h1>



            <Button title="Salvar" />
        </Container>
    )
}