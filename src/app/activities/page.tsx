import { Metadata } from "next";
import thumbnailSrc from 'public/images/activities.png'
import Image from 'next/image'

export const metadata: Metadata = {
    title: 'Our activities',
};

const Subsection = (even: boolean, title: string, content: string) => {
    return (
        <div className={`text-base subsection px-4 py-6 md:text-xl lg:px-16 ${even == true ? "bg-[#f5f5f5]" : ""}`} id={title}>
            <h3 className='font-extrabold lg:text-3xl'>{title}</h3>
            <h3 className='font-normal lg:text-2xl'>{content}</h3>
        </div>
    )
}

export default function Activities() {
    return (
        <div className="activities">
            <div className="global-style-page-thumbnail">
                <Image src={thumbnailSrc}
                    alt="Our Activities"
                    width='0'
                    height='0'
                    className='w-full h-full'
                    priority
                    />
                <div className="global-style-page-intro">
                    <h2 className='global-style-page-intro-title'>our activities</h2>
                </div>
            </div>

            <div className='mt-6 grid gap-0 md:gap-4 lg:gap-1'>
                    {Subsection(false, "Market screening", "Via our strong network and deep knowledge of Asia, we help to identify tailor-made opportunities for our customers.")}
                    {Subsection(true, "Transaction Services", "We assist our customers in buying and/or selling assets. From the assessment until the closing of the transaction, we are present at each stage of the process.")}
                    {Subsection(false, "Strategic Partnerships", "We assist you for your distribution and licensing deals in each territory you may consider. From the selection of opportunities to the agreement, we provide you the best service.")}
                </div>
        </div>
    )
}
