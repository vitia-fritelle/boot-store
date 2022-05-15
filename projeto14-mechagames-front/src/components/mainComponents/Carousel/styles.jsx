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
    .arrow-right {
        animation: bounce-right 2s ease infinite;
    }
    @keyframes bounce-right {
        0%, 25%, 55%, 75%, 100%{
            transform: translateX(20px);
        }
        45%{
            transform: translateX(0px);
        }
        65%{
            transform: translateX(10px);
        }
        85%{
            transform: translateX(15px);
        }
    }
    .arrow-left {
        animation: bounce-left 2s ease infinite;
    }
    @keyframes bounce-left {
        0%, 25%, 55%, 75%, 100%{
            transform: translateX(-20px);
        }
        45%{
            transform: translateX(0px);
        }
        65%{
            transform: translateX(-10px);
        }
        85%{
            transform: translateX(-15px);
        }
    }
`;

export const DivContainer = styled.div`
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
`;