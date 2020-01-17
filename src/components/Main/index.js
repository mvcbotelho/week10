import React from "react";
import DevCard from "../DevCard";
import * as S from "./styled";

const Main = () => (
  <S.MainWrapper>
    <S.DevList>
      <DevCard />
      <DevCard />
      <DevCard />
      <DevCard />
    </S.DevList>
  </S.MainWrapper>
);

export default Main;
