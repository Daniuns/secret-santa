import React from "react";
import { Navbar, NavbarBrand } from "@nextui-org/react";
import NavLinks from "./navLinks";
import NavBarMenu from "./NavBarMenu";
import Image from "next/image";
import logo from "public/assets/Icons/images/logo-secret-santa.jpg";
// import Link from "next/link";

export default function NavBar() {
  return (
    <Navbar isBordered>
      <NavBarMenu />
      <NavbarBrand>
        <p className="font-bold text-inherit flex items-center">
          <Image width={60} alt="logo" src={logo} /> <span>Secret Santa</span>
        </p>
      </NavbarBrand>
      <NavLinks />
    </Navbar>
  );
}
