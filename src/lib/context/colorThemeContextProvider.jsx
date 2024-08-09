import { useState } from "react";
import ColorThemeContext from "./colorThemeContext";


const ColorThemeContextProvider = ({ children }) => {
  const [colorTheme, setColorTheme] = useState("purple");

  return (
    <ColorThemeContext.Provider value={{ colorTheme, setColorTheme }}>
      {children}
    </ColorThemeContext.Provider>
  );
};

export default ColorThemeContextProvider;
