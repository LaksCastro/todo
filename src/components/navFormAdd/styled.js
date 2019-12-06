import styled from "styled-components";
import { Form, Input } from "@rocketseat/unform";

export const NavFormUnform = styled(Form)`
    width: 100%;
    display: flex;

    align-items: center;
    border: 3px solid #1c1b1e;

    border-radius: 8px;
    overflow: hidden;
`;
export const InputUnform = styled(Input)`
    flex: 1;
    padding: 0.8rem 1.2rem;
    min-width: 0;

    color: white;

    transition: var(--transition);

    &:hover,
    &:focus {
        background: rgba(28, 27, 30, 0.5);
    }
`;
export const ButtonUnformContainer = styled.button`
    display: flex;
    justify-content: center;
    width: 90px;
    background: #79b538;
    min-width: 49px;

    transition: var(--transition);
    &:hover {
        background: #68a427;
    }
`;
export const ButtonUnform = styled.div`
    color: white;

    height: 40px;
    width: 40px;

    padding: 8px;
`;
