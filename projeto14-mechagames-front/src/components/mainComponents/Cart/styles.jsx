import styled from 'styled-components';
import { HeaderButton } from '../Header/styles';

export const StyledContainer = styled.div`
    position: fixed;
    z-index: 4;
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    div {
        background: rgb(0,0,0,0.4);
        width: 100%;
        height: 100%;
        z-index: 5;
        cursor: pointer;
    }
`; 

export const StyledAside = styled.aside`
    position: fixed;
    background: white;
    z-index: 5;
    height: 100vh;
    width: 30vw;
    overflow-y: scroll;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: flex-start;
    figure {
        margin-top: 50px;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 600;
        font-size: 80px;
        line-height: 45px;
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;
        .cart {
            margin-top: 30px;
            font-size: 80px;
        }
    }
`;

export const StyledList = styled.ul`
    li {
        margin-top: 20px;
        p {
            margin-top: 10px;
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 600;
            font-size: 20px;
            line-height: 15px;
        }
    }
`;

export const CartButton = styled(HeaderButton)`
    margin-top: 10px;

`;