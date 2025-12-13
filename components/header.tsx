"use client"

import * as React from "react"
import Link from "next/link";
import Image from "next/image";
import { components } from "@/lib/constants/components";
import ModeToggle from "./ModeToggle"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Button } from "./ui/button";


function Header() {
    return (
         <header className="h-[60px] border-b shadow-sm">
            <div className="flex justify-between p-2">
                <div className="flex items-center gap-2">
                    <Image src="/logo.png" alt="Logo" width={40} height={40} />
                    <h2>NextJs</h2>
                </div>
                {/* Navigation Menu    */}
                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Components</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid grid-cols-2 gap-2 w-[500px]">
                                        
                                        {components.map((item )=> (
                                                <li key={item.title}>
                                                    <h2 className="text-3xl">{item.title}</h2>
                                                    <p className="text-sm">{item.description}</p>
                                                </li>
                                        ))}                             
                                    </ul>    
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                    </NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuLink asChild>
                            <Link href="/projects">Projects</Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink asChild>
                            <Link href="/price">Price</Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink asChild>
                            <Link href="/contactus">Contact Us</Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                </NavigationMenu> 
                <ModeToggle />
            <Button
                    variant="destructive"
                    className="h-auto px-8 py-3 text-xl font-bold leading-none"
                >
                    SignUp
            </Button>
            
            </div>    
        </header>
    );
}

export default Header;






