import React from "react";
import * as S from "./styled";

const Aside = () => (
  <S.AsideWrapper>
    <strong>Cadastrar</strong>
    <form>
      <S.InputBlock>
        <label htmlFor="github_username">Usuário do Github</label>
        <input name="github_username" id="github_username" required />
      </S.InputBlock>
      <S.InputBlock>
        <label htmlFor="techs">Tecnologias</label>
        <input name="techs" id="techs" required />
      </S.InputBlock>
      <S.InputGroup>
        <S.InputBlock>
          <label htmlFor="lat">Latitude</label>
          <input name="lat" id="lat" required />
        </S.InputBlock>
        <S.InputBlock>
          <label htmlFor="long">Longitude</label>
          <input name="long" id="long" required />
        </S.InputBlock>
      </S.InputGroup>

      <S.Button>Cadastrar</S.Button>
    </form>
  </S.AsideWrapper>
);

export default Aside;
