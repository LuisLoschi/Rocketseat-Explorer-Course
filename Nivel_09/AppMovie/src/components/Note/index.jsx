import { Container } from "./styles";
import { Tag } from "../Tag"

import { FaRegStar, FaStar  } from "react-icons/fa";

export function Note({ data, ...rest }) {

    return(
        <Container {...rest}>
            <h1>{data.title}</h1>

            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaRegStar />
            

            <p>{data.summary}</p>

            {
                data.tags &&
                <footer>
                    {
                        data.tags.map(tag => <Tag key={tag.id} title={tag.name} />)
                    }
                </footer>
            }
        </Container>
    )
}