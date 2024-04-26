import styled from "styled-components";

export const Container = styled.header`
    grid-area: header;

    height: 105px;
    width: 100%;

    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

    display: flex;
    justify-content: space-between;

    padding: 0 80px;
`;


export const Profile = styled.div`
    display: flex;
    align-items: center;
    width: 100%;

    > h1 {
        color: ${({theme}) => theme.COLORS.MAIN_COLOR};
        font-size: 24px;
        font-weight: 700;
    }

    > div {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: 16px;
        line-height: 24px;

        img {
            width: 56px;
            height: 56px;
            border-radius: 50%;
            margin-left: 10px;
        }

        strong {
            font-size: 18px;
            color: ${({ theme }) => theme.COLORS.WHITE};
            text-wrap: nowrap;
        }
    }
`;

export const Search = styled.div`
    width: 100%;
    padding: 0 40px;
`;

export const Logout = styled.div`
    display: flex;
    flex-direction: column;
    justify-items: flex-end;
    align-items: end;

    .logout {
        color: ${({ theme }) => theme.COLORS.GRAY_100};
        
    }
`;