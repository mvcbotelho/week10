import styled from "styled-components";

export const AsideWrapper = styled.aside`
  width: 320px;
  background: #ffffff;
  box-shadow: 0 0 14px 0 rgba(0, 0, 0, 0.02);
  border-radius: 2px;
  padding: 30px 20px;

  strong {
    font-size: 20px;
    text-align: center;
    display: block;
    color: #333;
  }

  form {
    margin-top: 30px;
  }
`;

export const InputBlock = styled.div`
  label {
    color: #acacac;
    font-size: 14px;
    font-weight: bold;
    display: block;
  }

  input {
    width: 100%;
    height: 32px;
    font-size: 14px;
    color: #666;
    border: 0;
    border-bottom: 1px solid #eee;

    margin-bottom: 20px;
  }
`;
export const InputGroup = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr 1fr;
`;
export const Button = styled.button.attrs({ type: "submit" })`
  width: 100%;
  border: 0;
  margin-top: 10px;
  background: #7d40e7;
  border-radius: 2px;
  padding: 15px 20px;

  font-weight: bold;
  color: #fff;
  cursor: pointer;

  transition: background 0.5s;

  &:hover {
    background: #6931ca;
  }
`;
