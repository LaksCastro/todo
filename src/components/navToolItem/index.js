import React from "react";

import styled from "styled-components";

export const IconBox = styled.button`
    margin-top: 12px;
    height: 28px;
    width: 28px;

    color: dimgrey;

    transition: var(--transition);
    &:hover {
        color: #79b538;
    }
`;

const NavToolItem = ({ clickEvent, Icon, title }) => (
    <IconBox
        type="button"
        onClick={clickEvent}
        title={title}
    >
        <Icon />
    </IconBox>
);

export default NavToolItem;
