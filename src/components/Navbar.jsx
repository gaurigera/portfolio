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

export function Nav() {
  return (
    <Navbar className="bg-transparent rounded-3xl sticky max-w-screen-md">
      <NavbarContent justify="start">
        <ThemeToggle />
        <Link to={`https://github.com/gaurigera`} target="_blank">
          <GithubIcon />
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