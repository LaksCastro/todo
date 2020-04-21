import styled from "styled-components";

export const UpdateContainer = styled.div`
  transition: var(--transition);
  opacity: ${(props) => (props.visible ? "1" : "0")};
  visibility: ${(props) => (props.visible ? "visible" : "hidden")};

  position: fixed;

  top: 2rem;

  border-radius: 4px;
  padding: 4px;
  background: #0b0a0d;

  width: 100%;
  max-width: 375px;

  display: flex;
  flex-direction: column;
  border: 3px solid #1c1b1e;

  z-index: 1000;

  textarea {
    flex: 1;
    padding: 0.8rem 1.2rem;
    min-width: 0;

    background: rgba(28, 27, 30, 0.5);

    margin: 4px;

    color: white;
    border-radius: 8px;

    transition: var(--transition);

    &:hover,
    &:focus {
      background: rgba(48, 47, 50, 0.5);
    }
  }
`;
export const UpdateFlexButton = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const UpdateButton = styled.button`
  border-radius: 8px;
  flex: 1;
  padding: 0.8rem 1.2rem;
  background: ${(props) => props.background || "white"};
  transition: var(--transition);
  &:hover {
    filter: grayscale(20%);
  }
  margin: 4px;
`;

export const UpdateClose = styled.div`
  opacity: ${(props) => (props.visible ? "1" : "0")};
  visibility: ${(props) => (props.visible ? "visible" : "hidden")};

  transition: var(--transition);
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: fixed;

  background: rgb(0, 0, 0, 0.5);
  z-index: 995;
`;
