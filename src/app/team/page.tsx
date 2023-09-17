import { Metadata } from "next";
import styles from "./team.module.scss"
import Image from "next/image";
import ceoSrc from 'public/images/GuillaumeClayeux.png'
import thumbnailSrc from 'public/images/our-team.png'

export const metadata: Metadata = {
    title: 'Our team',
};

const Subsection = (even: boolean, title: string, content: string) => {
    return (
        <div className={`subsection py-5 pl-6 pr-2 sm:text-xl ${even == true ? "bg-[#f5f5f5]" : ""}`} id={title}>
            <span className='text-sx font-bold lg:text-3xl'>{title}</span>
            <span className="text-sx font-medium lg:text-2xl"> {content}</span>
        </div>
    )
}

export default function Team() {
    return (
        <div className="our-team-container">
            <div className="global-style-page-thumbnail">
                <Image src={thumbnailSrc}
                    alt="Our Sectors"
                    width={0}
                    height={0}
                    className='w-full h-full'
                    priority
                    />
                <div className="global-style-page-intro">
                    <h2 className='global-style-page-intro-title'>our team</h2>
                </div>
            </div>

            <div className={`${styles.teamContent} grid justify-items-center my-12 font-semibold `}>
                <div className={`${styles.ceoAvatar} w-2/5 sm:w-4/5 md:mt-6 lg:contents`}>
                    <Image src={ceoSrc}
                        alt='Guillaume Clayeux'
                        width='0'
                        height='0'
                        className="sm:mt-8"
                        priority
                        />
                </div>
                <div className={`${styles.teamBrief} text-left mt-12 -mb-6 grid gap-2 sm:mx-0 sm:mt-0 lg:gap-3`}>
                    {Subsection(false, "Guillaume CLAYEUX", "is the founder of Health Pacific Partners, a M&A and licensing advisory company dedicated to human and animal health.")}
                    {Subsection(true, "Background:", "More than 15 years of experience in the human and animal health industry (Sanofi, Urgo, Virbac) in various sectors: OTC, Biotech, Biologicals, Generics…")}
                    {Subsection(false, "Network:", "More than 2500 contacts in both Human and Animal health sector thanks to a strong experience in Business Development and Licensing across Europe and Asia.")}
                    {Subsection(true, "Education:", "Master in Economics at the IEP of Aix-en-Provence - Master in Pharmaceutical Management at ESCP Business School of Paris – Master in Public Affairs at the Catholic Institute of Paris")}
                    <div className="pt-4 pb-6">
                        <span className='font-bold text-sx py-6 pl-4 sm:text-xl lg:text-3xl'>Core competencies: Distribution - Acquisitions - Licensing in & out</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
