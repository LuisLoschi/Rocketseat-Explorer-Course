import { Container, Links, Content } from "./styles";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Tag } from "../../components/Tag";
import { ButtonText } from "../../components/ButtonText";


export function Details() {

    return (
        <Container>
            <Header />

            <main>
                <Content>

                    <ButtonText title="Excluir nota" />

                    <h1>
                        Introdução ao React
                    </h1>

                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi nisi inventore laborum nam et laudantium ab eum mollitia repudiandae, 
                        praesentium, magni consectetur libero temporibus eos eligendi in minima a omnis!
                    </p>

                    <Section title="Links úteis">
                        <Links>
                            <li><a href="https://github.com/LuisLoschi" target="_blank">https://github.com/LuisLoschi</a></li>
                            <li><a href="#">https://github.com/LuisLoschi</a></li>
                        </Links>
                    </Section>

                    <Section title="Marcadores">
                        <Tag title="express"/>
                        <Tag title="node js"/>
                    </Section>

                    <Button title="Voltar"/>

                </Content>
            </main>
        </Container>
    )
}