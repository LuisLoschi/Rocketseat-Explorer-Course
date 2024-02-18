import styled from "styled-components";

export const Container = styled.button`
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_700};
    border: none;
    border-radius: 10px;

    padding: 22px;
    width: 100%;
    margin-bottom: 16px;

    > h1 {
        flex: 1;
        text-align: left;
        font-weight: 700;
        font-size: 24px;
        color: ${({theme}) => theme.COLORS.WHITE};
        margin-bottom: 24px;
    }

    > footer {
        text-align: left;
        width: 100%;
        display: flex;
    }
    
`;
