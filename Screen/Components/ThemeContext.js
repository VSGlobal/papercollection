import React, { createContext, useContext, useState } from 'react';

export const LightTheme = {
  bg: '#e8ecf9',
  bgI: '#ffffff',
  bgSI: '#c7d2f2',
  bgSG: '#008000',
  bgSB: "#7a7fff",
  bgSBD: "#363df5",
  t:'#000000',
  ts:'#828399',
};

export const DarkTheme = {
  bg: '#232330',
  bgI: '#000000',
  bgSI: '#828ead',
  bgSG: '#008000',
  bgSB: "#7a7fff",
  bgSBD: "#363df5",
  t:'white',
  ts:'#828399',
};

const ThemeContext = createContext();

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(LightTheme);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === LightTheme ? DarkTheme : LightTheme));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
