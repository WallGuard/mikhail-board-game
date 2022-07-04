import styled from "styled-components";

export const HeaderWrapper = styled.header`
  position: sticky;
  top: 0;
  z-index: 1000;
  display: grid;
  justify-content: space-between;
  align-content: center;
  height: 54px;
  width: 100%;
  grid-auto-flow: column;

  background-color: #4f4f4f;
  box-shadow: 0px 1px 5px 2px #afafaf;
`;

export const LogoDiv = styled.div`
  margin-left: 12px;
`;

export const Logo = styled.img`
  width: 70%;
  height: 48px;
`;

export const ThemeTogglerWrapper = styled.div`
  align-self: center;
`;
