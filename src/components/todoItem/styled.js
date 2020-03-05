import styled from "styled-components";

export const TodoWrapper = styled.div`
    width: 100%;

    display: flex;
    justify-content: center;

    padding: 12px;
`;
export const TodoContainer = styled.div`
    padding: 0.1rem;
    width: 100%;
    max-width: 560px;
    border-radius: 8px;

    border: 3px solid ${props => props.borderColor || "white"};
    background: #1c1b1f;

    display: flex;
    flex-direction: column;

    align-items: flex-start;
`;
export const TodoMainContent = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
`;
export const TodoToolsContainer = styled.div`
    display: flex;
    align-items: center;
`;
export const TodoIconBox = styled.button`
    width: 36px;
    height: 36px;

    color: ${props => props.color || "dimgrey"};
    padding: 8px;

    transition: var(--transition);

    &:hover {
        background: rgba(255,255,255,0.05);
    }
`;
export const TodoContent = styled.p`
    color: white;
    flex: 1;
    min-width: 0;
    padding: 16px;
    line-height: 1.4;

    text-decoration: ${props => props.textDecoration};
`;
