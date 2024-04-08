import styled from "styled-components";

export const Container = styled.div`
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_700};
    border: none;
    border-radius: 10px;

    padding: 22px;
    width: 100%;
    margin-bottom: 16px;
    margin-top: 32px;

    > h1 {
        flex: 1;
        text-align: left;
        font-weight: 700;
        font-size: 24px;
        color: ${({theme}) => theme.COLORS.WHITE};
        margin-bottom: 24px;
    }

    > svg {
        color: ${({theme}) => theme.COLORS.MAIN_COLOR};
        margin: 3px 5px 16px 0;
    }

    > p {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        margin-bottom: 32px;

        color: ${({theme}) => theme.COLORS.GRAY_100};
        font-size: 16px;
    }

    > footer {
        text-align: left;
        width: 100%;
        display: flex;
    }
    
`;
