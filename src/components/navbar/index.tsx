'use client'

import { HOME_ROUTE, OTHERS_ROUTES } from '@/constants'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import logoSrc from 'public/images/Original.png'

const Sidebar = dynamic(() => import('./sidebar'))

export default function Navbar() {
    const pathname = usePathname()

    return (
        <nav className='px-4 py-2 flex items-center justify-start shadow-md md:shadow-lg z-10 sticky top-0 bg-white'>
            <Sidebar />
            <div className='w-7/8 sm:w-1/4 md:w-1/4 lg:w-1/8 '>
                <Link href={HOME_ROUTE}>
                    <Image
                        src={logoSrc}
                        alt='logo'
                        width={150}
                        height={20}
                        className='w-full hover:opacity-90'
                        priority
                    />
                </Link>
            </div>

            <div className='hidden w-1/2 sm:w-1/4 md:block md:visible md:w-4/5'>
                <div className='text-center grid grid-flow-row px-1 md:gap-9 md:grid-flow-col-dense' id='navbar-items'>
                    {OTHERS_ROUTES.map((route, index) => (
                        <div key={index} className=''>
                            <Link href={route.path}
                                className='tracking-normal px-3 text-xs hover:font-bold hover:underline hover:shadow-gray-400 sm:text-sm md:text-sm lg:text-xl lg:font-light'>
                                {route.name}
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </nav>
    )
}
