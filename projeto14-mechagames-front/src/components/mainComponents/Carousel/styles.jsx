import styled from "styled-components";

export const Wrapper = styled.ul`
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: space-around;
    gap: 80px;
`;

export const Container = styled.div`
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    .arrow-right, .arrow-left{
        width: 100px;
        height: 200px;
        cursor: pointer;
    }
`;