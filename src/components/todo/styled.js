import styled from "styled-components";

export const NavWrapper = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;

    z-index: 10000;

    width: 100%;

    display: flex;
    justify-content: center;

    background: #0b0a0d;
`;
export const NavContainer = styled.div`
    width: 100%;
    max-width: 560px;
    min-width: 0;

    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: center;
    padding: 12px;
`;
