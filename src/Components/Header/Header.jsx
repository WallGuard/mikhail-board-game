import React from "react";
import { HeaderWrapper, Logo, LogoDiv, ThemeTogglerWrapper } from "./styled";
import fusionLogo from "../../../assets/logo-example.svg";
import ToggleComponent from "../Buttons/ToggleComponent";

const Header = (props) => {
  return (
    <HeaderWrapper>
      <LogoDiv>
        <Logo src={fusionLogo} alt="Fusion Logo" />
      </LogoDiv>
      <ThemeTogglerWrapper>
        <ToggleComponent onChange={props.switchTheme} isToggled={props.isToggled} />
      </ThemeTogglerWrapper>
    </HeaderWrapper>
  );
};

export default Header;
