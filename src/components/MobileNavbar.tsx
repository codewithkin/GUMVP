'use client';
import { Calendar, X, Menu} from "lucide-react";
import { Montserrat, Poppins } from "next/font/google";
import Link from "next/link";
import { useState } from "react";
import MobileNavbarLinks from "./MobileNavbarLinks";

const montserrat = Montserrat({ subsets: ["latin"], weight: "700" });
const poppins = Poppins({ subsets: ["latin"], weight: "500" });

export default function MobileNavbar () {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="md:hidden grid p-4">
            <article className="flex justify-between items-center">
                {/* Menu and heading */}
                <article className="flex gap-2 items-center">
                    {
                        isOpen ? (
                            <X size={24} onClick={() => setIsOpen(false)} />
                        ) : (
                            <Menu size={24} onClick={() => setIsOpen(true)} />
                        )
                    }
                    <h1 className={`${montserrat.className} text-xl`}>
                        GroundUp<span className={poppins.className}>MVP</span>
                    </h1>
                </article>

                <Link 
                    target="_blank"
                    className="bg-charcoal flex gap-2 items-center font-semibold text-white px-4 py-2 rounded-full border-3 border-primaryLight hover:bg-primaryLight hover:text-charcoal transition-all duration-300"
                    href="https://calendly.com/admin-groundupmvp/project">
                    <Calendar size={20} />
                    Book A Call
                 </Link>
            </article>

            {isOpen && <MobileNavbarLinks />}
        </nav>
    )
}