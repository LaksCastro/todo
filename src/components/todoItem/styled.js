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
    align-items: center;
`;
export const TodoIconBox = styled.button`
    width: 42px;
    height: 42px;

    margin: 0 2px;

    color: ${props => props.color || "dimgrey"};
    padding: 8px;

    transition: var(--transition);

    &:hover {
        filter: grayscale(50%);
    }
`;
export const TodoContent = styled.p`
    color: white;
    flex: 1;
    min-width: 0;
    padding: 8px 2px;
    line-height: 1.4;

    text-decoration: ${props => props.textDecoration};
`;
