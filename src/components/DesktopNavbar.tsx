import { TrendingUp } from "lucide-react";
import { Montserrat, Poppins } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"], weight: "700" });
const poppins = Poppins({ subsets: ["latin"], weight: "500" });
import { Calendar } from "lucide-react";
import Link from "next/link";

export default function DesktopNavbar() {
  return (
    <nav className="flex justify-between items-center p-4">
        <article className="flex gap-2 items-center">
            <TrendingUp size={32} />
            <h1 className={`${montserrat.className} text-xl`}>
                GroundUp<span className={poppins.className}>MVP</span>
            </h1>
        </article>

        <ul className="flex items-center justify-center gap-8 shadow-xl rounded-full bg-white text-charcoal font-semibold capitalize">
            <li className="bg-gradient-to-r flex items-center gap-2 from-secondaryDark to-secondaryLight text-white px-4 py-2 rounded-full">
                {/* Small Circle */}
                <article className="bg-white rounded-full w-3 h-3"></article>
                <Link href="/">Home</Link>
            </li>
            <li className="hover:text-secondaryDark transition-all duration-300">
                <Link href="/features">Features</Link>
            </li>
            <li className="hover:text-secondaryDark transition-all duration-300">
                <Link href="/pricing">Pricing</Link>
            </li>
            <li className="hover:text-secondaryDark transition-all duration-300">
                <Link href="/how-it-works">How It Works</Link>
            </li>
            <li className="pr-4 hover:text-secondaryDark transition-all duration-300">
                <Link href="/contact-us">Contact Us</Link>
            </li>
        </ul>

        <Link 
        className="bg-charcoal flex gap-2 items-center font-semibold text-white px-4 py-2 rounded-full border-3 border-primaryLight hover:bg-primaryLight hover:text-charcoal transition-all duration-300"
        href="https://calendly.com/admin-groundupmvp/project">
            <Calendar size={20} />
            Book A Call
        </Link>
    </nav>
  )
}