import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-columns: 250px auto;
    grid-template-rows: 105px 128px auto 64px;
    grid-template-areas:
        "brand header"
        "menu search"
        "menu content"
        "newnote content";
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};
`;

export const Brand = styled.div`
    grid-area: brand;

    display: flex;
    justify-content: center;
    align-items: center;

    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({theme}) => theme.COLORS.BACKGROUND_700};

    background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};

    > h1 {
        font-size: 24px;
        color: ${({theme}) => theme.COLORS.WHITE};
    }

    > h1 span {
        color: ${({theme}) => theme.COLORS.MAIN_COLOR};
    }
`;


export const Menu = styled.ul`
    

`;
export const Search = styled.div`


`;
export const Content = styled.div`


`;
export const NewNote = styled.button`


`;

