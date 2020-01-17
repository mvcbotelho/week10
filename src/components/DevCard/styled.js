import styled from "styled-components";

export const CardWrapper = styled.li`
  min-width: 320px;
  background: #ffffff;
  box-shadow: 0 0 14px 0 rgba(0, 0, 0, 0.02);
  border-radius: 2px;
  padding: 20px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;

  img {
    width: 54px;
    height: 54px;
    border-radius: 50%;
  }
`;

export const DevInfo = styled.div`
  margin-left: 10px;

  strong {
    display: block;
    font-size: 16px;
    color: #333;
  }

  span {
    font-size: 13px;
    color: #999;
    margin-top: 2px;
  }
`;

export const DevBio = styled.p`
  color: #666;
  font-size: 14px;
  line-height: 20px;
  margin: 10px 0;
`;

export const Link = styled.a`
  color: #8e4dff;
  font-size: 14px;
  text-decoration: none;

  transition: color 0.5s;

  &:hover {
    color: #5a2ea6;
  }
`;
