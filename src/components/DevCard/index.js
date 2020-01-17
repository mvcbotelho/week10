import React from "react";
import * as S from "./styled";

const DevCard = () => (
  <S.CardWrapper>
    <S.Header>
      <img
        src="https://avatars1.githubusercontent.com/u/7614138?v=4"
        alt="Marcus Botelho"
      />
      <S.DevInfo>
        <strong>Marcus Botelho</strong>
        <span>ReactJs, React Native e NodeJs</span>
      </S.DevInfo>
    </S.Header>
    <S.DevBio>Bio do dev</S.DevBio>
    <S.Link href="https://github.com/mvcbotelho">Acessar o Github</S.Link>
  </S.CardWrapper>
);

export default DevCard;
