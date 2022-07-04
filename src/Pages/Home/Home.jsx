import React from 'react';
import {
  StyledNavLink,
  HomeMenuOption,
  HomeOptions,
  HomeSectionWindow,
  HomeTitle,
  HomeWrapper,
} from './styled';

const Home = (props) => {

  return (
    <HomeWrapper>
      <HomeSectionWindow>
        <HomeTitle>МЕНЮ</HomeTitle>
        <HomeOptions>
          <HomeMenuOption>
            <StyledNavLink to="/">- New Game</StyledNavLink>
          </HomeMenuOption>
          <HomeMenuOption>- Load Game</HomeMenuOption>
          <HomeMenuOption>- Exit</HomeMenuOption>
        </HomeOptions>
      </HomeSectionWindow>
    </HomeWrapper>
  );
};

export default Home;
