import React from "react";
import Aside from "../components/Aside";
import Main from "../components/Main";
import * as G from "../global";
import * as S from "./styled";

function App() {
  return (
    <S.AppWrapper>
      <G.globalStyle />
      <Aside />
      <Main />
    </S.AppWrapper>
  );
}

export default App;
