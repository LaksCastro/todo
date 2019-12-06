import styled from "styled-components";
import { Link } from "react-router-dom";
import { Form, Input } from "@rocketseat/unform";

export const AuthWrapper = styled.div`
  width: 100%;
  height: 100vh;

  min-height: 720px;

  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0B0A0D;
`;
export const LabelAction = styled.h1`
  font-size: 2.5em;
  color: #79B538;
  margin: 2rem 0;
`;
export const AppLogo = styled.img`
  margin-bottom: 1rem;
`;
export const ProvidersContainer = styled.div`
  width: 100%;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
export const ButtonProvider = styled.button`
  padding: 12px;

  background: #19181f;

  border-radius: 4px;

  flex: 1;
  min-width: 100px;

  margin: 8px;

  display: flex;
  justify-content: center;
  border: 3px solid #25242c;

  transition: var(--transition);
  img {
    transition: var(--transition);
    filter: brightness(0.4) contrast(200%) grayscale(50%) invert(75%)
      opacity(25%) saturate(30%) sepia(60%);
  }
  &:hover {
    background: #25242c;

    border: 3px solid #79b538;

    img {
      filter: none;
    }
  }
`;

export const FormUnform = styled(Form)`
  width: 100%;

  max-width: 720px;

  padding: 24px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const EmailInputContainer = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
export const Label = styled.label`
  display: none;
`;
export const InputUnform = styled(Input)`
  border-radius: 4px;

  margin: 8px;

  flex: 1;
  background: #19181f;

  border: 3px solid #25242c;

  padding: 1rem 1.5rem;

  color: white;

  transition: var(--transition);

  &:hover,
  &:focus {
    border: 3px solid #79b538;
    background: #29292a;
  }
`;

export const SubmitContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ButtonForm = styled.button`
  border-radius: 4px;

  margin: 8px;
  width: 100%;

  height: 54px;

  background: #79b538;

  font-weight: bolder;
  padding: 12px 1.5rem;

  max-width: 200px;

  transition: var(--transition);

  &:hover {
    background: #67a326;
  }

  &[disabled] {
    background: gray;
    cursor: not-allowed;
  }
`;

export const LinkForm = styled(Link)`
  margin: 8px;

  font-weight: bolder;
  padding: 1rem 0.3rem;
  text-align: center;

  transition: var(--transition);

  border-bottom: 2px solid #79b538;
  color: #79b538;

  &[disabled] {
    background: gray;
    cursor: not-allowed;
  }

  text-decoration: none;

  &:hover {
    color: #67a326;
    border-bottom: 2px solid #67a326;
  }
`;