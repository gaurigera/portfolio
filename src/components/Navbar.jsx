import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Logo } from "./icons/Logo";
import { Link } from "react-router-dom";
import { GithubIcon } from "./icons/Github";

export function Nav() {
  return (
    <Navbar className="bg-transparent rounded-3xl">
      <NavbarContent>
        <Link to={`https://github.com/gaurigera`} target="_blank">
          <GithubIcon />
        </Link>
      </NavbarContent>
      <NavbarContent justify="center">
        <NavbarBrand>
          <Logo />
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent justify="end"></NavbarContent>
    </Navbar>
  );
}
