import React from "react";
import { Navbar, NavbarBrand } from "@nextui-org/react";
import NavLinks from "./navLinks";
import NavBarMenu from "./NavBarMenu";
// import Link from "next/link";

export default function NavBar() {
  return (
    <Navbar isBordered>
      <NavBarMenu />
      <NavbarBrand>
        <p className="font-bold text-inherit">Secret Santa</p>
      </NavbarBrand>
      <NavLinks />
    </Navbar>
  );
}
