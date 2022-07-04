import { Header } from 'Components';
import { Home } from 'Pages';
import { useState } from 'react';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme, GlobalStyles } from '../utils/theme';
import './App.css';

const DARK_THEME = 'DARK';
const LIGHT_THEME = 'LIGHT';

const Hello = () => {
  return <div></div>;
};

export default function App() {
  const [theme, setTheme] = useState(DARK_THEME);

  const switchTheme = () => {
    theme === DARK_THEME ? setTheme(LIGHT_THEME) : setTheme(DARK_THEME);
  };
  return (
    <Router>
      <ThemeProvider theme={theme === DARK_THEME ? darkTheme : lightTheme}>
        <GlobalStyles />
          <Header
            switchTheme={switchTheme}
            isToggled={theme === DARK_THEME ? false : true}
          />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
      </ThemeProvider>
    </Router>
  );
}
