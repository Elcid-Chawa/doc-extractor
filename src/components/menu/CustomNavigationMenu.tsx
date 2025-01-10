"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

export function CustomNavigationMenu() {
  return (
    <NavigationMenu className="flex gap-4 h-full shadow-md  py-2 mb-3">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink
            className="h-full text-gray-100 font-bold px-2 rounded-md hover:text-gray-200"
            href="/"
          >
            Home
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            href="/invoice"
            className="h-full text-gray-100 font-bold px-2 rounded-md hover:text-gray-200"
          >
            Invoice
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link
            href="/viewer"
            className="h-full text-gray-100 font-bold px-2 rounded-md hover:text-gray-200"
          >
            {/* <NavigationMenuLink className={navigationMenuTriggerStyle()}> */}
            Viewer
            {/* </NavigationMenuLink> */}
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
