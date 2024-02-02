"use client";
import {
  NavbarContent,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import Link from "next/link";
import { useState } from "react";

const NavBarMenu = ({ setIsMenuOpen }: { setIsMenuOpen: any }) => {
  const menuItems = [
    { name: "Home", href: "" },
    { name: "Grupos", href: "grupos" },
  ];

  const onClickItem = () => {
    setIsMenuOpen((current: boolean) => !current);
  };

  return (
    <>
      <NavbarContent className="md:hidden" justify="start">
        <NavbarMenuToggle onChange={onClickItem} />
      </NavbarContent>
      <NavbarMenu className="dark text-foreground bg-background">
        {menuItems.map((route, index) => (
          <NavbarMenuItem key={`${route}-${index}`}>
            <Link
              onClick={onClickItem}
              className="dark w-full"
              color="foreground"
              href={`/${route.href}`}
            >
              {route.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </>
  );
};

export default NavBarMenu;
