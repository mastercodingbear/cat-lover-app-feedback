import Link from 'next/link'
import Image from 'next/image'
import { Navigation } from '../ui/navigation'

const Navbar = () => {
  const navLinks = [
    { name: 'Images', href: '/cats' },
    { name: 'Breeds', href: '/breeds' },
    { name: 'Favourites', href: '/favourites' },
  ]

  return (
    <nav className="bg-indigo-800 h-16 flex items-center justify-center">
      <div className="w-full max-w-screen-xl flex items-center justify-between mx-auto">
        <div>
          <Link href="/">
            <Image src="/logo.png" alt="Cat lover app" width={64} height={64} />
          </Link>
        </div>
        <div className="flex space-x-6 font-medium">
          <Navigation navLinks={navLinks} />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
