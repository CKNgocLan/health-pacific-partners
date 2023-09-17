import dynamic from 'next/dynamic'

import thumbnailSrc from 'public/images/our-contact.jpg'

// Google Map Implementation
import {
    LinkedInIcon,
    MailOutlineIcon,
    PhoneInTalkIcon,
} from '@/components/icon'
import type { Metadata } from 'next'
import styles from './contact.module.scss'
import { GOOGLE_MAP_URL } from '@/components/map/map.util'

const Image = dynamic(() => import('next/image'))
const Map = dynamic(() => import('@/components/map'))

export const metadata: Metadata = {
    title: 'Contact us',
}

export default function Contact() {
    return (
        <div className='our-contact'>
            <div className='global-style-page-thumbnail'>
                <Image
                    src={thumbnailSrc}
                    alt='Our Activities'
                    width='0'
                    height='0'
                    className='w-full h-full'
                    priority
                />
                <div className='global-style-page-intro'>
                    <h2 className='global-style-page-intro-title'>
                        our contact
                    </h2>
                    <h3 className='global-style-page-intro-brief'>
                        Health Pacific Partners is 100% dedicated to human and
                        animal health sectors
                    </h3>
                </div>
            </div>

            <div className='grid grid-flow-col-dense justify-items-center text-center mt-10'>
                <div className='px-[3vh] md:w-2/3 lg:w-1/3 lg:text-left'>
                    <h3 className='font-bold uppercase mt-8 mx-auto text-xl lg:text-4xl'>
                        To contact With Our Team
                    </h3>
                    <p className='mt-7 font-medium text-xl'>
                        For general enquiry
                    </p>
                    <div className='bg-[#f5f5f5] pt-5 pb-8 mt-3 grid grid-flow-row-dense gap-3'>
                        <div className={`${styles.contactInfoRow} grid gap-3 md:gap-4`} >
                            <div className={`${styles.contactInfoIcon} text-[#9fb6dd] text-center`} >
                                <PhoneInTalkIcon className='text-3xl lg:text-5xl'></PhoneInTalkIcon>
                            </div>
                            <div className={styles.contactInfoValue}>
                                <p className='text-base font-bold lg:text-2xl'>
                                    +33 (0)6 50 00 15 29
                                </p>
                            </div>
                        </div>
                        <div className={`${styles.contactInfoRow} grid gap-3 md:gap-6`} >
                            <div className={`${styles.contactInfoIcon} text-[#9fb6dd] text-center`} >
                                <MailOutlineIcon className='text-3xl lg:text-5xl'></MailOutlineIcon>
                            </div>
                            <div className={styles.contactInfoValue}>
                                <a
                                    href='mailto:guillaume.clayeux@hpp.com.vn'
                                    className='font-medium text-[#d18416] dark:text-[#d18416] hover:underline hover:text-[#337ab7]'
                                >
                                    guillaume.clayeux@hpp.com.vn
                                </a>
                            </div>
                        </div>
                        <div className={`${styles.contactInfoRow} grid gap-3 md:gap-6`} >
                            <div className={`${styles.contactInfoIcon} text-[#0d77b4] text-center`} >
                                <LinkedInIcon className='text-3xl lg:text-5xl'></LinkedInIcon>
                            </div>
                            <div className={styles.contactInfoValue}>
                                <div>
                                    Follow us on{' '}
                                    <a
                                        href='https://www.linkedin.com/in/guillaume-clayeux-6bb50122/'
                                        className='font-medium text-[#d18416] dark:text-[#d18416] hover:underline hover:text-[#337ab7]'
                                        target='_blank'
                                    >
                                        LinkedIn®
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id='map-contact' className='mt-14 mx-1'>
                <Map
                    googleMapURL={GOOGLE_MAP_URL}
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `420px` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                />
            </div>
        </div>
    )
}
