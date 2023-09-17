import { HOME_ROUTE, OTHERS_ROUTES } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import logoSrc from 'public/images/logo-svg.svg'
import transparentLogoSrc from 'public/images/Original-on-Transparent.png'
import styles from './footer.module.scss'
import React from 'react'

export default function Footer() {
    return (
        <footer className={`${styles.footerContainer} mt-6 mb-0 relative grid p-3 justify-items-center`}>
                <div className={`${styles.footerLabels} grid grid-flow-row text-center gap-1 sm:grid-flow-col sm:gap-5 md:gap-6 md:content-center lg:w-2/3`} >
                    {OTHERS_ROUTES.map((route, index) => (
                        <div className='text-xs justify-items-start md:text-sx md:justify-items-center lg:text-base' key={index}>
                            <Link href={route.path}>{route.name}</Link>
                        </div>
                    ))}
                </div>

                <div className={`${styles.footerCopyright} mt-2 text-sm`}>
                    Copyright © 2023 All Rights Reserved
                </div>

                <div className={`${styles.footerLogo} hidden right-0 relative mt-3 items-center sm:mt-0 sm:ml-auto sm:mr-0 sm:block md:grid md:justify-items-center lg:w-5/6`}>
                    <Link href={HOME_ROUTE} >
                        <Image
                            src={transparentLogoSrc}
                            alt='logo'
                            width={1920}
                            height={1080}
                            className='hover:opacity-50 h-auto max-w-full'
                            priority
                        />
                    </Link>
                </div>
        </footer>
    )
}
