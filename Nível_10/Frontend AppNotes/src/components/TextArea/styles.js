import styled from "styled-components";

export const Container = styled.textarea`
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};
    color: ${({theme}) => theme.COLORS.WHITE};

    display: flex;
    align-items: center;
    width: 100%;
    height: 140px;

    padding: 12px;
    margin-bottom: 8px;
    border-radius: 10px;

    border: none;
    resize: none;

    &::placeholder {
        color: ${({theme}) => theme.COLORS.GRAY_300};
    }
`;
