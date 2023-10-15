'use client'

import React from "react";
import Box from '@mui/material/Box';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import TemporaryDrawer from "./drawer";
import Logo from '../../public/Logo.png'
import Image from "next/image";
import Link from "next/link";


export const Navbar = () => {
  return (
    <>
    <div className="fixed flex w-full z-10  justify-between items-center p-3  bg-gradient-to-r from-yellow-400 to-pink-200">
      <NavigationMenu >
        <NavigationMenuList className="max-lg:hidden" >
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-gray-600">Recent</NavigationMenuTrigger>
            <NavigationMenuContent className=" flex flex-col gap-3 p-4  ">
              <NavigationMenuLink>Today</NavigationMenuLink>
              <NavigationMenuLink>Yesterday</NavigationMenuLink>
              <NavigationMenuLink>Last Week</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger  className="bg-gradient-to-r from-gray-400 to-pink-200">All Images</NavigationMenuTrigger>
            <NavigationMenuContent></NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem >
            <NavigationMenuTrigger className="bg-gradient-to-r from-gray-400 to-pink-200">Groups</NavigationMenuTrigger>
            <NavigationMenuContent  className=" flex flex-col gap-3 p-4">
              <NavigationMenuLink>Animals Images</NavigationMenuLink>
              <NavigationMenuLink>Nature Images</NavigationMenuLink>
              <NavigationMenuLink>Birds Images</NavigationMenuLink>
              <NavigationMenuLink>Fruit Images</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
        <Avatar className="hidden max-lg:block">
        <Link href={'/'}>

        <Image src={Logo} alt="Logo"/>
        <AvatarFallback>DA</AvatarFallback>
        </Link>
      </Avatar>
      </NavigationMenu>
      <Box className="hidden max-lg:block" >
        
    <TemporaryDrawer />
      </Box>
      <Avatar className="max-lg:hidden">
       <Link href={'/'}>
        <Image src={Logo} alt="Logo" height={90} width={90}  />
        
       </Link>
      </Avatar>
    </div>
   
  </>
  );
};
