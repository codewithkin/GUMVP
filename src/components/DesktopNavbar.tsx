import { DollarSign, MessagesSquareIcon, PencilRuler, TrendingUp, Workflow } from "lucide-react";
import { Montserrat, Poppins } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"], weight: "700" });
const poppins = Poppins({ subsets: ["latin"], weight: "500" });
import { Calendar } from "lucide-react";
import Link from "next/link";

export default function DesktopNavbar() {
  return (
    <nav className="md:flex justify-between shadow-secondaryLight items-center p-4 hidden">
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
                <Link className="flex gap-2 items-center" href="#why">
                    <Workflow size={20} />
                    Features
                </Link>
            </li>
            <li className="hover:text-secondaryDark transition-all duration-300">
                <Link className="flex gap-2 items-center" href="#pricing">
                    <DollarSign size={20} />
                    Pricing
                </Link>
            </li>
            <li className="hover:text-secondaryDark transition-all duration-300">
                <Link className="flex gap-2 items-center" href="#process">
                    <PencilRuler size={20} />
                    How It Works
                </Link>
            </li>
            <li className="pr-4 hover:text-secondaryDark transition-all duration-300">
                <Link className="flex gap-2 items-center" href="emailto:admin@groundupmvp.com">
                    <MessagesSquareIcon size={20} />
                    Contact Us
                </Link>
            </li>
        </ul>

        <Link
            target="_blank" 
            className="bg-charcoal flex gap-2 items-center font-semibold text-white px-4 py-2 rounded-full border-3 border-primaryLight hover:bg-primaryLight hover:text-charcoal transition-all duration-300"
            href="https://calendly.com/admin-groundupmvp/project">
            <Calendar size={20} />
            Book A Call
        </Link>
    </nav>
  )
}