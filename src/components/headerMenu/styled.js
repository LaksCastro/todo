import styled from "styled-components";
import { Link } from "react-router-dom";

export const ProfileWrapper = styled.div`
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    padding: 12px;
`;
export const ProfileContainer = styled.div`
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;
    
    max-width: 960px;
    margin: 0 8px;
`;
export const ProfileLink = styled(Link)`
    flex: 1;
    margin-right: 12px;
    text-decoration: none;
    display: flex;
    align-items: center;
`;
export const ProfileImgContainer = styled.div`
    width: 45px;
    height: 45px;
`;
export const ProfileImg = styled.img`
    width: 100%;
    height: 100%;

    border-radius: 8px;

    object-fit: cover;
    object-position: center;
`;
export const DisplayName = styled.h1`
    color: lightgrey;
    margin: 0 1rem;
`;
export const ButtonBackWrapper = styled(Link)`
    flex: 1;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    color: white;
`;
export const BackIconBox = styled.div`
    width: 25px;
    height: 25px;

    color: white;
`;
export const BackLabel = styled.p``;
