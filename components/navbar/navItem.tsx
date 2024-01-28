import Link from 'next/link'
import React from 'react'

export const NavItem = ({ children, href, target }: { children : React.ReactNode, href : string, target : string}) => {
  return (
    <div>
      <Link target={target} href={href}>
        <span className='cursor-pointer text-xs lg:text-sm text-foreground/80 hover:text-foreground transition-all'>
          {children}
        </span>
      </Link>
    </div>
  )
}
