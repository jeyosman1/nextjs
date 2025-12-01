import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

function Hero() {
  return (
    <div className='w-full relative h-screen overflow-hidden'>
      <Image src={"/hero.gif"} alt="Hero" fill
        className='object-cover z-0' priority />   
      <div className='absolute inset-0 flex flex-col justify-center items-center gap-4 z-10'>
        <h2 className='text-7xl font-bold text-white font-game text-center px-4'>
          Start Your
        </h2>
        <h2 className='font-bold text-8xl font-game text-yellow-400 text-center px-4 [text-shadow:_2px_2px_0_#000,_-2px_-2px_0_#000,_2px_-2px_0_#000,_-2px_2px_0_#000]'>
          Coding Adventure
        </h2>
        <h2 className='mt-5 font-game text-3xl text-white'>Beginner Friendly coding courses and projects</h2>
        <Button className='font-game text-3xl px-6 py-2 mt-5' variant={'pixel'}>GET STARTED</Button>
      </div>
    </div>
  )
}

export default Hero