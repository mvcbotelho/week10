import React from "react";
import Aside from "../components/Aside";
import * as G from "../global";
import * as S from "./styled";

function App() {
  return (
    <S.AppWrapper>
      <G.globalStyle />
      <Aside />
      <main>
        <h1>Teste</h1>
      </main>
    </S.AppWrapper>
  );
}

export default App;
