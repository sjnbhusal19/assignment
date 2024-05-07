'use client'
import {Navbar, NavbarBrand, NavbarContent, NavbarItem,Button} from "@nextui-org/react";
import Logo from "./logo";
import Link from "next/link";


const Cnavbar =() => {
  return (
    <Navbar>
      <NavbarBrand>
        <p className="font-bold text-inherit">      <Logo/> </p>
      </NavbarBrand>
      <NavbarContent className="flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}

export default Cnavbar;
