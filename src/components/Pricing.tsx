import { tiers } from "@/data/pricing-tiers";
import { Montserrat } from "next/font/google";
import PricingTier from "./ui/pricing-tier";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["600"] });

export default function Pricing () {
    return (
        <section id="pricing" className="flex flex-col justify-center items-center py-12 gap-4 px-10">
            <h2 className={`${montserrat.className} text-2xl text-center`}>Find the right plan for you</h2>

            {/* Prices flex container */}
            <article className="md:flex grid items-center justify-center gap-4">
                {
                    tiers.map(tier => (
                        <PricingTier key={tier.title} {...tier} />
                    ))
                }
            </article>
        </section>
    )
}