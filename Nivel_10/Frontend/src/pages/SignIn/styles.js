import styled from "styled-components";
import BackgroundImg from "../../assets/notes-img.jpg"

export const Container = styled.div`
    height: 100vh;

    display: flex;
    align-items: stretch;

    
`;

export const Form = styled.form`
    padding: 0 136px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    text-align: center;

    > h1 {
        color: ${({theme}) => theme.COLORS.MAIN_COLOR};
        font-size: 40px;
        font-weight: 700;
    }

    > p {
        font-size: 14px;
        color: ${({theme}) => theme.COLORS.GRAY_100};
    }

    > h2 {
        font-size: 24px;
        margin: 36px 0;
    }

    > a {
        margin-top: 114px;
        color: ${({theme}) => theme.COLORS.MAIN_COLOR};
    }

    
`;


export const BackgroundImage = styled.div`
    flex: 1;
    background: url(${BackgroundImg}) no-repeat left center;
    background-size: cover;

    opacity: .7;
`;