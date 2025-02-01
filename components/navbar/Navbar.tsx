import Link from 'next/link'
import React from 'react'

export const Navbar = () => {
  return (
    <nav className='flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded'>
      <Link href={'/'}>Home</Link>
      <span className='felx flex-1'></span>
      <Link className='mr-2' href={'/contact'}>contact</Link>
      <Link className='mr-2' href={'/about'}>about</Link>
    </nav>
  )
}

export default Navbar
