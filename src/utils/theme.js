import { createGlobalStyle } from 'styled-components';

const commonStyles = {
  fusion_1: '#bb72ff',
  fusion_2: '#a072ff',
  fusion_3: '#8472ff',
  fusion_4: '#7886ff',
  fusion_5: '#76a6ff',
  fusion_6: '#73c7ff',
};

export const darkTheme = {
  fusion_bg_1: '#bb72ff',
  fusion_bg_2: '#8472ff',
  fusion_bg_3: '#76a6ff',
  body: '#000',
  textColor: '#979899',
  textColorBig: '#73c7ff',
  textColorBigReverse: '#bb72ff',
  headingColor: '#a4a5a6',
  background_1: '#2b2c2c',
  background_2: '#2d2e2e',
  background_3: '#292a2a',
  background_4: '#2c2d2c',
  textcolor_1: '#404242',
  menu_background: '#292a2a',
  ...commonStyles,
};

export const lightTheme = {
  fusion_bg_1: '#a072ff',
  fusion_bg_2: '#7886ff',
  fusion_bg_3: '#73c7ff',
  body: '#fff',
  textColor: '#939393',
  textColorBig: '#bb72ff',
  textColorBigReverse: '#73c7ff',
  headingColor: '#727272',
  background_1: '#fbfbfb',
  background_2: '#fff',
  background_3: '#f8f8f8',
  background_4: '#fcfcfc',
  textcolor_1: '#ececec',
  menu_background: '#2d2d2d',
  ...commonStyles,
};

export const GlobalStyles = createGlobalStyle`
  * {
    transition: 0.3s ease;
  }
  body {
    margin: 0;
    padding: 0;
    height: 100vh;
    background: linear-gradient(
    200.96deg,
    ${(props) => props.theme.fusion_bg_1} -29.09%,
    ${(props) => props.theme.fusion_bg_2} 51.77%,
    ${(props) => props.theme.fusion_bg_3} 129.35%
    );
    overflow-y: hidden;

    /* background: ${(props) => props.theme.body}; */
    color: ${(props) => props.theme.textColor};
    box-sizing: border-box;
    transition: 0.3s ease;
    font-family: Montserrat, sans-serif, "Helvetica Neue", Helvetica, Arial, sans-serif;
  }

  span {color: ${(props) => props.theme.textcolor_1}}

  h2{
    color: ${(props) => props.theme.headingColor};
  }
`;
