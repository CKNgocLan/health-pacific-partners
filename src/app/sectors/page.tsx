import { Metadata } from "next";
import Image from "next/image";
import thumbnailSrc from 'public/images/our-sectors.jpg'
import figurePigSrc from "public/images/figure-pig.png"
import figureChickenSrc from "public/images/figure-chicken.png"
import figureDogCatSrc from "public/images/figure-dog_cat.png"
import figureCowSrc from "public/images/figure-cow.png"
import figureSheepSrc from "public/images/figure-sheep.png"
import figureFishSrc from "public/images/figure-fish.png"
import figureSectorsDomain from "public/images/sector-domains.png"

export const metadata: Metadata = {
    title: 'Our sectors',
};

export default function Sector() {
    const horizontalLineStyle = "flex-grow h-0.5 mx-1.5 bg-black sm:mx-3 md:mx-4 lg:mx-5"
    const domainNameStyle = "flex-shrink font-black uppercase italics text-black text-xs sm:text-sm md:text-xl lg:text-3xl"
    const sectorFieldStyle = "w-full flex justify-center mt-6 h-2/3 md:h-5/6"
    return (
        <div className="our-sectors">
            <div className="global-style-page-thumbnail">
                <Image src={thumbnailSrc}
                    alt="Our Sectors"
                    width={0}
                    height={0}
                    className='w-full h-full'
                    priority
                    />
                <div className="global-style-page-intro">
                    <h2 className='global-style-page-intro-title'>our sectors</h2>
                    <h3 className='global-style-page-intro-brief'>Health Pacific Partners is 100% dedicated to human and animal health sectors</h3>
                </div>
            </div>

            <div className="mt-6 grid grid-flow-row-dense gap-2 sm:gap-3 md:gap-5 md:mt-8 lg:gap-9">
                {/* <div>
                    <h3 className='text-2xl font-bold text-center uppercase sm:text-xl md:text-3xl lg:text-5xl'>
                        HEALTH PACIFIC PARTNERS
                    </h3>
                </div> */}
                <div>
                    <h3 className='text-xl font-bold text-center sm:text-xl md:text-3xl lg:text-5xl'>
                        A network of 450 companies dedicated to animal health
                    </h3>
                </div>
                <div>
                    <h3 className='text-xl font-medium text-center italic md:text-2xl lg:text-3xl'>
                        Adjusted targeting based on the type of company you search for…
                    </h3>
                </div>
            </div>
            <div className="-mb-6 pb-6">
                {/* Domains */}
                <div className="flex items-center pb-4 pt-6 mt-8 md:mt-8 lg:mt-10">
                    <div className={horizontalLineStyle}></div>
                    <span className={domainNameStyle}>feeds</span>
                    <div className={horizontalLineStyle}></div>
                    <span className={domainNameStyle}>generics</span>
                    <div className={horizontalLineStyle}></div>
                    <span className={domainNameStyle}>pet care</span>
                    <div className={horizontalLineStyle}></div>
                    <span className={domainNameStyle}>biotechs</span>
                    <div className={horizontalLineStyle}></div>
                    <span className={domainNameStyle}>biologics</span>
                    <div className={horizontalLineStyle}></div>
                </div>
                {/* Domain Figures */}
                <div className="grid grid-flow-col-dense gap-4 h-1/5 mx-6 mt-1 sm:mx-10 lg:mx-20">
                    <div className={`${sectorFieldStyle}`}>
                        <Image className="h-full" alt="Pig" src={figurePigSrc} />
                    </div>
                    <div className={sectorFieldStyle}>
                        <Image className="h-full" alt="Chicken" src={figureChickenSrc} />
                    </div>
                    <div className={sectorFieldStyle}>
                        <Image className="h-full" alt="Dog & Cat" src={figureDogCatSrc} />
                    </div>
                    <div className={sectorFieldStyle}>
                        <Image className="h-full" alt="Cow" src={figureCowSrc} />
                    </div>
                    <div className={sectorFieldStyle}>
                        <Image className="h-full" alt="Sheep" src={figureSheepSrc} />
                    </div>
                    <div className={sectorFieldStyle}>
                        <Image className="h-full" alt="Fish" src={figureFishSrc} />
                    </div>
                </div>
            </div>
            <div className="mt-10 grid grid-flow-row-dense gap-2 bg-[#f5f5f5] pt-4 sm:gap-3 md:gap-5 md:mt-12 lg:mt-16 lg:mb-12 lg:gap-9">
                <div>
                    <h3 className='text-xl font-bold text-center italic md:text-3xl lg:text-5xl lg:pt-6'>
                        A large network of 2000 companies in human health
                    </h3>
                </div>
                <div>
                    <h3 className='text-xl font-medium text-center italic md:text-2xl lg:text-3xl'>
                        An expertise dedicated to several sectors...
                    </h3>
                </div>
                <div className="flex items-center py-6 mt-8 md:mt-8 lg:mt-2">
                    <div className={horizontalLineStyle}></div>
                    <span className={domainNameStyle}>rx drugs</span>
                    <div className={horizontalLineStyle}></div>
                    <span className={domainNameStyle}>medical devices</span>
                    <div className={horizontalLineStyle}></div>
                    <span className={domainNameStyle}>otc</span>
                    <div className={horizontalLineStyle}></div>
                    <span className={domainNameStyle}>cosmetics</span>
                    <div className={horizontalLineStyle}></div>
                </div>
            </div>
        </div>
    )
}
