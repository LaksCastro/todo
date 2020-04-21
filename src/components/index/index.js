import React from "react";

import FullScreenGlitch from "../FullScreenGlitch/index";

import * as S from "./styled";

export default () => (
  <>
    <S.EmblaReact>
      <S.EmblaReactContainer>
        <S.EmblaReactSlide>
          <FullScreenGlitch
            glitchText="Simple"
            text="Click here and use or swipe left for more information"
            linkTo="dashboard"
          />
        </S.EmblaReactSlide>
        <S.EmblaReactSlide>
          <FullScreenGlitch
            glitchText="I wear..."
            text="This app is using React Js next to a BaaS, Firestore. Download App for best performance and experience"
            linkTo="dashboard"
          />
        </S.EmblaReactSlide>
        <S.EmblaReactSlide>
          <FullScreenGlitch
            glitchText="?"
            text="I created this simple platform for fun and experience, feel free to use it and see your code on Github, thank you :)"
            linkTo="dashboard"
          />
        </S.EmblaReactSlide>
      </S.EmblaReactContainer>
    </S.EmblaReact>

    <S.FooterContainer>
      <S.FooterLink
        href="https://github.com/LaksCastro"
        target="_blank"
        rel="noreferrer noopener"
      >
        Github
      </S.FooterLink>
      <S.FooterLink
        href="https://github.com/LaksCastro/todo"
        target="_blank"
        rel="noreferrer noopener"
      >
        Repository
      </S.FooterLink>
    </S.FooterContainer>
  </>
);
