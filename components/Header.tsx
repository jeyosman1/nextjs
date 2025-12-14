import Image from 'next/image'
import React from 'react'
import { Search } from 'lucide-react';
import { Button } from './ui/button'

const Header = () => {
  return (
    <header className='absolute h-[60px] shadow-md z-[100] w-full'>
      <div className='flex items-center justify-between h-full px-4'>
            <div className='flex items-center gap-2 text-gray-400'>
               <Image src="/icons/logo.png" alt="Vercel Logo" width={24} height={24} />
               <h3>DevEvent</h3>
            </div>
            <div className='flex items-center gap-2 bg-gray-600 px-4 py-2 rounded-full w-[300px]'>
              <Search />
              <input
                type="text"
                placeholder='Enter type'
                aria-label='Search events'
                className='bg-transparent text-white placeholder:text-gray-300 outline-none flex-1'
              />
            </div>
            <div>
                <Button variant={"outline"}>Sign in</Button>
            </div>
        </div>
    </header>
  )
}

export default Header
