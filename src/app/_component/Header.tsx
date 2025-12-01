import Image from 'next/image'
import React from 'react'
import { Button } from '@/components/ui/button'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import Link from 'next/link'
import { courses } from '../_constants/courses'


function Header() {
  return (
    <div className='p-2 max-w-7xl flex justify-between items-center w-full'>
      <div className="flex items-center gap-2">
        <Image src="/logo.png" alt="Logo" width={40} height={40} />
        <h2 className="text-3xl font-bold font-game">NextJs</h2>
      </div>

      <NavigationMenu>
  <NavigationMenuList className='gap-8'>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Courses</NavigationMenuTrigger>
      <NavigationMenuContent>

       <ul className='grid md:grid-cols-2 gap-2
        sm:w-[400px] md:w-[500px] lg:w-[600px]'>
        {courses.map((course, index) => (
          <li key={index} className='p-2 hover:bg-accent rounded-2xl cursor-pointer'>
            <h2 className='font-medium'>{course.name}</h2>
            <p className='text-sm text-gray-500'>{course.desc}</p>
          </li>
         ))}
       </ul>

      </NavigationMenuContent>
    </NavigationMenuItem>
    <NavigationMenuItem>
       <NavigationMenuLink>
        <Link href={"/projects"}>Projects</Link>
      </NavigationMenuLink>
    </NavigationMenuItem>
    <NavigationMenuItem>
       <NavigationMenuLink>
        <Link href={"/pricing"}>Pricing</Link>
      </NavigationMenuLink>
    </NavigationMenuItem>
    <NavigationMenuItem>
       <NavigationMenuLink>
        <Link href={"/contact-us"}>Contact Us</Link>
      </NavigationMenuLink>
    </NavigationMenuItem>
    
  </NavigationMenuList>
      </NavigationMenu>

     <Button variant={"pixel"} className='text-xl font-game'>Signup</Button>
    </div>
  )
}

export default Header
