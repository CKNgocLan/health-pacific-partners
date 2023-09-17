import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
    title: 'Homepage',
};

export default function Homepage() {
    redirect('/about')
    // return (
    //     <div className="homepage font-bold text-xl text-black text-center py-16 md:text-2xl lg:text-4xl">
    //         Homepage is <span className="uppercase ">under construction</span>.
    //     </div>
    // )
}