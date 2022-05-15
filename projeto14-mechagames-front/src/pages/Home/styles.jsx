import styled from "styled-components";

export const Main = styled.main`
    margin: 0 230px;
`;

export const List = styled.ul`
    gap: 77px;
    display: flex;
    flex-flow: row nowrap;
    margin: 0 auto;
    margin-top: 12px;
`;

export const Nav = styled.nav`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 30px;
    margin-top: 12.5px;

    color: #121212;
`;

export const Li = styled.li`

    width: 140px;
    height: 178;
    position: relative;
    cursor: pointer;
    figcaption {
        width: inherit;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 600;
        font-size: 19px;
        line-height: 30px;

        text-align: center;

        color: #FFFFFF;
        z-index: 2;
        transition: font-size 0.1s;

        &:hover{
            font-size: 22px;
        }   
    }
`;

export const Title = styled.h3`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 30px;
    line-height: 45px;
    text-align: center;
    color: #121212;
    margin-top: 21px;
`;


export const Subtitle = styled.h2`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 30px;
    line-height: 45px;
    margin-left: 118px;
    letter-spacing: 0.08em;

    background: linear-gradient(90deg, #1A2980 0%, #26D0CE 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
`;