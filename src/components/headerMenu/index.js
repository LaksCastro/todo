import React from "react";

import { LeftArrowAlt as Back } from 'styled-icons/boxicons-regular/LeftArrowAlt';

import * as S from "./styled";

export default function HeaderMenu({ userData, renderBackButton }) {
    return (
        <S.ProfileWrapper>
            <S.ProfileContainer>
                <S.ProfileLink to="/profile">
                    <S.ProfileImgContainer>
                        <S.ProfileImg
                            alt={`${userData.name} profile image`}
                            title={`${userData.name} - ${userData.email}`}
                            src={userData.photoURL}
                        />
                    </S.ProfileImgContainer>
                    <S.DisplayName>{userData.name}</S.DisplayName>
                </S.ProfileLink>
                {renderBackButton && 
                <S.ButtonBackWrapper to="/dashboard">
                    <S.BackIconBox>
                        <Back />
                    </S.BackIconBox>
                    <S.BackLabel>Back</S.BackLabel>
                </S.ButtonBackWrapper>}
            </S.ProfileContainer>
        </S.ProfileWrapper>
    );
}
