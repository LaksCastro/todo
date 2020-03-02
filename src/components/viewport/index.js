import React from "react";

import styled from "styled-components";

const Viewport = styled.div`
    width: 100%;

    display: flex;
    justify-content: center;
    min-height: 100vh;

    background: #0b0a0d;
`;
const Wrapper = styled.div`
    width: 100%;

    max-width: 960px;

    display: flex;
    flex-direction: column;
    align-items: center;


    padding-bottom: 75px;
`;

export default function ViewportComponent({ children }) {
    return (
        <Viewport>
            <Wrapper>{children}</Wrapper>
        </Viewport>
    );
}
