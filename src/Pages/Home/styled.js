import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HomeWrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HomeSectionWindow = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 330px;
  min-height: 330px;
  background: linear-gradient(
    220.96deg,
    ${(props) => props.theme.fusion_bg_1} -29.09%,
    ${(props) => props.theme.menu_background} 51.77%,
    ${(props) => props.theme.fusion_bg_2} 129.35%
    );
  border-radius: 100%;
`;

export const HomeTitle = styled.div`
  margin: 12px 0;
  /* align-self: flex-start; */
`;

export const HomeOptions = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: left; */
  /* width: 80%; */
  /* height: 60%; */
`
export const HomeMenuOption = styled.div`
  text-decoration: none;
`
export StyledNavLink = styled(NavLink)`
  text-decoration: none;
`