"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: "Home", href: "/" },
  {
    name: "Grupos",
    href: "/grupos",
  },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {links.map((link) => {
          // const LinkIcon = link.icon;
          return (
            <NavbarItem key={link.name}>
              <Link color="foreground" href={link.href}>
                <p className="hidden md:block">{link.name}</p>
              </Link>
            </NavbarItem>
          );
        })}
      </NavbarContent>
      <NavbarContent justify="end">
        <Dropdown
          className="dark text-foreground bg-background border-1 border-gray-800"
          placement="bottom-end"
        >
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">zoey@example.com</p>
            </DropdownItem>
            <DropdownItem key="settings">My Settings</DropdownItem>
            <DropdownItem key="logout" color="danger">
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        {/* <Avatar
          isBordered
          radius="lg"
          src="https://i.pravatar.cc/150?u=a04258114e29026302d"
        /> */}
        {/* <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem> */}
      </NavbarContent>
    </>
  );
}
