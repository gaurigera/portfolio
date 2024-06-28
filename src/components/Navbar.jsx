import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Logo } from "./icons/Logo";
import { Link } from "react-router-dom";
import { GithubIcon } from "./icons/Github";
import { ThemeToggle } from "./ThemeToggle";
import { useTheme } from "next-themes";

export function Nav() {
  const { theme } = useTheme();
  return (
    <Navbar
      isBlurred
      className="bg-white/5 rounded-3xl max-w-screen-md mx-auto"
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
        <Link to={"#"} target="_blank">
          <span className="font-munro text-lg">Resume</span>
        </Link>
      </NavbarContent>
    </Navbar>
  );
}
