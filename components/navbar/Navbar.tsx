import Link from 'next/link'
import { HomeIcon } from '@primer/octicons-react'
import { ActiveLink } from '@/components'

const navItems = [
  { path: '/activities', text: 'Activities' },
  { path: '/contact', text: 'Contact' },
  { path: '/about', text: 'About' },
]

export const Navbar = () => {
  return (
    <nav className='flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded'>
      <Link href={'/'}>
        <HomeIcon size={24} />
      </Link>
      <span className='felx flex-1'></span>

      {
        navItems.map(item => (
          <ActiveLink key={item.path} {...item} />
        ))
      }
    </nav>
  )
}

