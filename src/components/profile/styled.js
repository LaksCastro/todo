import styled from "styled-components";
import { Link } from "react-router-dom";
import { Form, Input } from "@rocketseat/unform";

export const FileForm = styled.div`
  width: 100%;

  padding: 16px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const FileContainer = styled.div`
  position: relative;
  width: 130px;
  height: 130px;
  max-width: 180px;

  border-radius: 100%;

  border: 3px solid #79b538;

  transition: var(--transition);
  cursor: pointer;
  &:hover {
    border: 3px solid rgb(101, 161, 36);
  }
`;
export const File = styled.img`
  top: 0;
  right: 0;

  border-radius: 100%;

  width: 100%;
  height: 100%;

  object-fit: cover;
  object-position: center;

  position: absolute;

  z-index: 50;
`;
export const FileIconBox = styled.div`
  border-radius: 100%;
  top: 0;
  right: 0;

  transition: var(--transition);

  position: absolute;

  z-index: 100;

  width: 36px;
  height: 36px;
  background: #79b538;

  padding: 9px;

  color: white;

  transition: var(--transition);
  cursor: pointer;
`;

export const FileLoadingContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  background: rgba(0, 0, 0, 0.5);

  z-index: 85;
`;
export const FileLoadingImg = styled.img`
  top: 0;
  right: 0;

  border-radius: 100%;

  width: 100%;
  height: 100%;

  object-fit: cover;
  object-position: center;

  position: absolute;
`;

export const FileInputUnform = styled.input`
  display: none;
`;

export const FormUnform = styled(Form)`
  width: 100%;

  max-width: 550px;

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
  &[readonly] {
    cursor: not-allowed;
    background: #0b0a0d;
    color: #44434b;
    border: 3px solid #25242c;
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

  background: ${(props) => props.background || "#79b538"};

  font-weight: bolder;
  padding: 12px 1.5rem;

  max-width: 200px;

  transition: var(--transition);

  color: ${(props) => props.color || "#0B0A0D"};

  &:hover {
    filter: grayscale(20%);
  }

  &[disabled] {
    background: gray;
    cursor: not-allowed;
  }
`;
export const IndexLink = styled(Link)`
  color: lightgrey;
  padding: 2rem;
`;
