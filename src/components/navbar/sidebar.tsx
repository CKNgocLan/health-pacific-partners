import { HOME_ROUTE, OTHERS_ROUTES } from '@/constants'
import dynamic from 'next/dynamic'
import logoSrc from 'public/images/Original.png'
import { useState } from 'react'

const MenuIcon = dynamic(() => import('@mui/icons-material/Menu'))
const SwipeableDrawer = dynamic(() => import('@mui/material/SwipeableDrawer'))
const Link = dynamic(() => import('next/link'))
const Image = dynamic(() => import('next/image'))

type Anchor = 'left'

export default function Sidebar() {
    const [isToggle, setToggle] = useState({
        left: false,
    })

    const toggleDrawer =
        (anchor: Anchor, open: boolean) =>
            (event: React.KeyboardEvent | React.MouseEvent) => {
                if (
                    event &&
                    event.type === 'keydown' &&
                    ((event as React.KeyboardEvent).key === 'Tab' ||
                        (event as React.KeyboardEvent).key === 'Shift')
                ) {
                    return
                }

                setToggle({ ...isToggle, [anchor]: open })
            }
    return (
        <>
            <div
                className='w-1/8 flex justify-start items-center md:hidden'
                onClick={toggleDrawer('left', true)}
                onKeyDown={toggleDrawer('left', true)}
            >
                <MenuIcon fontSize='large' />
            </div>

            <SwipeableDrawer
                sx={{ width: 300 }}
                anchor={'left'}
                open={isToggle['left']}
                onClose={toggleDrawer('left', false)}
                onOpen={toggleDrawer('left', true)}
                disableBackdropTransition
            >
                <ul className='bg-white'>
                    <li className='p-4' onClick={toggleDrawer('left', false)}>
                        <Link href={HOME_ROUTE}>
                            <Image
                                src={logoSrc}
                                alt='logo'
                                width={300}
                                height={24}
                                className='hover:opacity-90'
                                priority
                            />
                        </Link>
                    </li>
                    <li
                        className='pb-4 px-8'
                        onClick={toggleDrawer('left', false)}
                    >
                        <Link href={HOME_ROUTE}>HOME</Link>
                    </li>
                    {OTHERS_ROUTES.map((route, index) => (
                        <li
                            key={index}
                            className='py-4 px-8'
                            onClick={toggleDrawer('left', false)}
                        >
                            <Link href={route.path}>{route.name}</Link>
                        </li>
                    ))}
                </ul>
            </SwipeableDrawer>
        </>
    )
}
