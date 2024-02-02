"use client";

import React from "react";
import { Navbar, NavbarBrand } from "@nextui-org/react";
import NavLinks from "./navLinks";
import NavBarMenu from "./NavBarMenu";
import Image from "next/image";
import logo from "public/assets/Icons/images/logo-secret-santa.jpg";
import Link from "next/link";
// import Link from "next/link";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Navbar isBordered isMenuOpen={isMenuOpen}>
      <NavBarMenu setIsMenuOpen={setIsMenuOpen} />
      <NavbarBrand>
        <Link color="foreground" href={`/`}>
          <p className="font-bold text-inherit flex items-center">
            <Image width={60} alt="logo" src={logo} />{" "}
            <span className={"hidden md:block"}>Secret Santa</span>
          </p>
        </Link>
      </NavbarBrand>
      <NavLinks />
    </Navbar>
  );
}
