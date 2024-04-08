import styled from "styled-components";
import { Link } from "react-router-dom";


export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: flex;
    flex-direction: column;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};

    > main {
        overflow-y: auto;
        padding: 0 80px;
        margin-top: 62px;

        header {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        button {
            width: 207px;
        }
    };
`;


export const NewFilm = styled.button`
    background-color: ${({theme}) => theme.COLORS.MAIN_COLOR};
    color: ${({theme}) => theme.COLORS.BACKGROUND_900};
    border: 0;
    padding: 16px 0;
    border-radius: 10px;

    display: flex;
    align-items: center;
    justify-content: center;


    svg {
        margin-right: 8px;
    }

`;

