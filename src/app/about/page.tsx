import { Metadata } from 'next'
import thumbnailSrc from 'public/images/about.png'
import Image from 'next/image'

export const metadata: Metadata = {
    title: 'About us',
}

const Subsection = (title: string, content: string) => {
    return (
        <div className='subsection text-base mx-[3vh] md:font-light md:text-xl lg:text-2xl' id={title}>
            <h3 className='font-bold'>{title}</h3>
            <h3 className='ml-[2vh] mt-2'>{content}</h3>
        </div>
    )
}

export default function About() {
    const articleAlignClasses = "sm:mx-2 md:mx-4 lg:px-6"
    return (
        <div className="about">
            <div className="global-style-page-thumbnail">
                <Image
                    src={thumbnailSrc}
                    alt="About"
                    width='0'
                    height='0'
                    className='w-full h-full'
                    priority
                    />
                <div className="global-style-page-intro">
                    <h2 className='global-style-page-intro-title'>About Us</h2>
                    <h3 className='global-style-page-intro-brief'>Health Pacific Partners provides you a complete advisory for your mergers & acquisitions and strategic partnerships in Asia</h3>
                </div>
            </div>

            <div className='grid justify-items-center mt-10'>
                <div className='w-4/5 text-center grid gap-6 mx-4'>
                    <h3 className='text-base font-medium md:text-xl lg:text-2xl'>Health Pacific Partners advises clients on mergers & acquisitions (M&A), strategic partnerships in Asia and other regions by serving clients in a professional and transparent way.</h3>
                    <h3 className='text-base font-medium md:text-xl lg:text-2xl'>Completely dedicated to life sciences, we have a thorough expertise and knowledge in pharmaceutical and animal health sectors.</h3>
                    <h3 className='text-base font-medium md:text-xl lg:text-2xl'>Based in Ho-Chi-Minh-City, we cover all countries in Asia and connect our customers to other regions across the world via an extensive network.</h3>
                </div>
            </div>

            <div className='mx-0'>
                <div className="mt-8 py-8 bg-[#f5f5f5] lg:py-12">
                    <h1 className={`text-3xl font-bold uppercase mx-4 text-center lg:text-4xl ${articleAlignClasses}`}>our advantages</h1>
                    <div className={`grid gap-4 mt-4 lg:gap-6 ${articleAlignClasses}`}>
                        {Subsection("Professionalism", "We are a team of experts of the Life Science industry, with international background and significant credentials in M&A and Licensing")}
                        {Subsection("Reliable", "We maintain consistently high performance when we deliver")}
                        {Subsection("Management of projects in Emerging Markets", "We manage licensing/M&A deals in complex Emerging countries environment")}
                        {Subsection("Decentralized business model", "Our multicultural team is split into different countries allowing us to manage more efficiently the mandates and identify on field local opportunities")}
                    </div>
                </div>

                <div className='mt-12 pb-6 -mb-6 lg:gap-6'>
                    <h1 className={`text-3xl font-bold uppercase mx-4 text-center lg:text-4xl ${articleAlignClasses}`}>our values</h1>
                    <div className={`grid gap-4 mt-4 lg:gap-6 ${articleAlignClasses}`}>
                        {Subsection("Integrity and Independency", "We work in a complete transparency with our customers and the potential targets")}
                        {Subsection("Value-adding", "We constantly strive to add value to our clients’ business")}
                        {Subsection("Customers focus", "Our approach is only based on the needs of our clients")}
                        {Subsection("Result-oriented", "We are 100% dedicated to the sucess of the projects we manage for our customers")}
                    </div>
                </div>
            </div>
        </div>
    )
}
