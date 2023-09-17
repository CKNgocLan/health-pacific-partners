import { Roboto } from 'next/font/google'
import Content from '../components/content'
import Footer from '../components/footer'
import Navbar from '../components/navbar'

import './main.scss'
import { Metadata } from 'next'

const roboto = Roboto({
    weight: '500',
    subsets: ['latin', 'vietnamese'],
})

export const metadata: Metadata = {
    viewport: {
        width: 'device-width',
        initialScale: 1,
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang='en' className={roboto.className}>
            <head>
                <link rel="icon" href="/images/favicon.ico" sizes="any" />
            </head>
            <body>
                <Navbar />
                <Content>{children}</Content>
                <Footer />
            </body>
        </html>
    )
}
