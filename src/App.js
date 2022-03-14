import { useState } from 'react';
import Splash from './components/SplashScreen';
import { ThemeProvider } from 'styled-components';

import './App.css';

const LigthTheme = {
  pageBackground : "white",
  titleColor : "#dc658b",
  tagLineColor : "black"
};

const DarkTheme = {
  pageBackground : "#282c36",
  titleColor : "#lightpink",
  tagLineColor : "lavender"
};

const themes = {
  light : LigthTheme,
  dark : DarkTheme,
}


function App() {
  const [theme,setTheme] = useState ("light");

  return (
    <ThemeProvider theme = {themes[theme]}>
      <Splash theme = {theme} setTheme = {setTheme} />
    </ThemeProvider>
  );
}

export default App;
