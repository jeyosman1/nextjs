import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <header>
        <nav>
            <Link href="/" className='logo'>
              <Image src="/icons/logo.png" alt="Vercel Logo" width={24} height={24} />
              <p>DevEvent</p>
            </Link>
            <ul className='list-none'>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/events">Events</Link>
              </li>
              <li>
                <Link href="/about">Create Event</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>     
            </ul>
        </nav>
    </header>
  )
}

export default Navbar
