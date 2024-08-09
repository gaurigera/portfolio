import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import React from "react";
import ColorThemeContextProvider from "./lib/context/colorThemeContextProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ColorThemeContextProvider>
      <NextUIProvider>
        <NextThemesProvider attribute="class" defaultTheme="dark">
          <App />
        </NextThemesProvider>
      </NextUIProvider>
    </ColorThemeContextProvider>
  </React.StrictMode>
);
