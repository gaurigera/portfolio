import {
  Navbar,
  NavbarBrand,
  NavbarContent,
} from "@nextui-org/navbar";
import { Logo } from "./icons/Logo";
import { Link } from "react-router-dom";
import { GithubIcon } from "./icons/Github";
import { ThemeToggle } from "./ThemeToggle";
import { useTheme } from "next-themes";
import { ColorVariants } from "../lib/colorVariants";
import { useContext } from "react";
import ColorThemeContext from "../lib/context/colorThemeContext";

export function Nav() {
  const { theme } = useTheme();
  const { colorTheme } = useContext(ColorThemeContext);

  return (
    <Navbar
      isBlurred
      className="bg-white/5 rounded-3xl max-w-screen-lg mx-auto"
    >
      <NavbarContent justify="start">
        <ThemeToggle />
        <Link to={`https://github.com/gaurigera`} target="_blank">
          <GithubIcon fill={theme === "dark" ? "white" : "black"} />
        </Link>
      </NavbarContent>
      <NavbarContent justify="center">
        <NavbarBrand>
          <Logo />
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent justify="end">
        <Link
          to={`https://drive.google.com/file/d/1nqkWgxUJz6QFACdPE2tS1SgEbIXZwFKs/view?usp=sharing`}
          target="_blank"
        >
          <span className={`font-munro text-lg ${ColorVariants[colorTheme][theme]["text"]}`}>Resume</span>
        </Link>
      </NavbarContent>
    </Navbar>
  );
}
