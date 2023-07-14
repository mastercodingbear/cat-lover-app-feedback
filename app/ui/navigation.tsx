'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

import { NavLink } from '@/model/app.model'

type Props = {
  navLinks: NavLink[]
}

export function Navigation(props: Props) {
  const pathname = usePathname()

  return (
    <>
      {props.navLinks.map((link: NavLink) => {
        const isActive = pathname.startsWith(link.href)

        return (
          <Link
            className={
              'underline-offset-8 decoration-2 decoration-blue-600 py-2 ' +
              (isActive
                ? 'underline text-white'
                : 'text-slate-300 hover:underline')
            }
            href={link.href}
            key={link.name}
          >
            {link.name}
          </Link>
        )
      })}
    </>
  )
}
