import { useTheme } from "next-themes";
import { Moon } from "./icons/Moon";
import { Sun } from "./icons/Sun";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      {theme === "light" ? <Moon /> : <Sun />}
    </div>
  );
}
