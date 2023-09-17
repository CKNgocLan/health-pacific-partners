import { PropsWithChildren } from 'react'

export default function Content({ children }: PropsWithChildren) {
    return <main className='min-h-[61.25vh] sm:min-h-[69.2vh] md:min-h-[81vh] lg:min-h-[82vh]'>
        {children}
    </main>
}
