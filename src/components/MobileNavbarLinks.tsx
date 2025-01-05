import { motion } from "framer-motion";
import Link from "next/link";
import { Home, Workflow, DollarSign, PencilRuler, MessageSquare } from "lucide-react";

export default function MobileNavbarLinks() {
    return (
        <motion.ul initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} exit={{ opacity: 0, x: -100 }} className="grid gap-4 font-medium text-xl text-charcoal py-4">
                {/* Add Icons to each link */}
                <li>
                    <Link className="flex gap-2 items-center" href="/">
                        <Home size={20} />
                        Home
                    </Link>
                </li>
                <li>
                    <Link className="flex gap-2 items-center" href="/features">
                        <Workflow size={20} />
                        Features
                    </Link>
                </li>
                <li>
                    <Link className="flex gap-2 items-center" href="/pricing">
                        <DollarSign size={20} />
                        Pricing
                    </Link>
                </li>
                <li>
                    <Link className="flex gap-2 items-center" href="/pricing">
                        <PencilRuler size={20} />
                        How it work
                    </Link>
                </li>
                <li>
                    <Link className="flex gap-2 items-center" href="emailto:admin@groundupmvp.com">
                        <MessageSquare size={20} />
                        Contact Us
                    </Link>
                </li>
            </motion.ul>
    )
}