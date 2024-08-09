import { useState } from "react";

export const useColorVariant = () => {
  const [colorTheme, useColorTheme] = useState("purple");

  return { colorTheme, useColorTheme };
};
