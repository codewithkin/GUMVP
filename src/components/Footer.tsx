import { Montserrat, Poppins } from "next/font/google";
import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["600"] });
const poppins = Poppins({ subsets: ["latin"], weight: "400" });

export default function Footer() {
    return (
        <footer className="flex items-center justify-between py-4 px-10">
            <h2 className={`${montserrat.className} text-2xl text-center`}>GroundUp<span className={poppins.className}>MVP</span></h2>
        
            <Link href="https://x.com/groundupmvp" target="_blank">
                <FaXTwitter size={24} />
            </Link>
        </footer>
    )
}