import styled from "styled-components";

export const MainWrapper = styled.main`
  flex: 1;
  margin-left: 30px;

  @media (max-width: 1000px) {
    margin-left: 0;
    margin-top: 30px;
    width: 100%;
  }
`;

export const DevList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  list-style: none;

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`;
