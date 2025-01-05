import { CircleCheck } from "lucide-react";
import { Montserrat, Roboto } from "next/font/google"
import Link from "next/link";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["600"] });
const roboto = Roboto({ subsets: ["latin"], weight: ["900"] });

export type props = {
    title: string,
    price: number,
    features: Array<string>,
    normalPrice: number,
    imageUrl?: string
}

export default function PricingTier ({ title, price, features, normalPrice, imageUrl }: props) {
    return (
        <article className={`${montserrat.className} ${title === 'Standard' && 'bg-secondaryDark text-white'} border border-2 border-secondaryDark rounded-xl p-4`}>
            <h2 className={`text-2xl mb-4`}>{title}</h2>

            {/* Pricing */}
            <article className={`${roboto.className} grid`}>
                <h3 className={`text-md text-dull line-through`}>${normalPrice}</h3>
                <h2 className={`text-4xl`}>${price}</h2>
            </article>

            {/* CTA */}
            <Link 
            className={`${title === "Standard" && "bg-white text-primaryDark"} transition-all duration-300 hover:bg-primaryDark hover:text-white bg-secondaryDark text-secondaryLight rounded-full py-2 w-full flex justify-center items-center my-4 text-white`}
            target="_blank" href="#">
                Let's talk
            </Link>

            {/* Features */}
            <article className="gap-2 flex flex-col">
                {
                    features.map(feature => (
                        <article key={feature} className={`${title === "Standard" ? 'text-white' : 'text-[#9a9a9a]'} flex gap-2  items-center`}>
                            <CircleCheck size={20} />
                            {feature}
                        </article>
                    ))
                }
            </article>
        </article>
    )
}