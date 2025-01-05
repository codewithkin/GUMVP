import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function Header() {
  return (
    <header className="md:p-40 py-20 px-8 flex flex-col gap-4 justify-center items-center bg-gradient-to-tr from-secondaryDark to-secondaryLight">
        {/* Copy */}
        <article className="flex flex-col justify-center items-center">
            {/* Early bird promo banner */}
            <article className="rounded-full transition-all duration-500 hover:shadow-xl shadow-white hover:cursor-pointer text-sm md:text-md px-4 text-white gap-2 py-2 bg-secondaryDark flex justify-center items-center font-semibold">
                {/* Sale chip */}
                <article className="rounded-full flex justify-center bg-primaryLight py-2 px-4 text-secondaryDark text-sm">
                    SALE
                </article>
                Early bird promotion ends on February 5th
            </article>

            {/* Heading */}
            <h2 className="text-6xl md:text-7xl text-center font-bold text-white">
                We can help you go from zero to MVP in 21 days
            </h2>
        </article>

        {/* CTA */}
        <article className="grid md:flex gap-2">
            <Link target="_blank" className="text-secondaryDark transition-all duration-400 hover:shadow-xl hover:bg-secondaryLight text-md flex items-center gap-2 font-semibold bg-white justify-center items-center py-4 px-8 md:px-4 md:py-2 rounded-full" href="https://calendly.com/admin-groundupmvp/project">
                Let's talk about your project
                <article className="flex flex-col justify-center items-center text-white bg-secondaryDark rounded-full">
                    <ChevronRight size={20} />
                </article>
            </Link>
            <Link target="_blank" className="text-white rounded-full flex justify-center items-center p-4 md:px-4 md:py-2 border-2 font-semibold border-white" href="mailto:admin@groundupmvp.com">
                Learn more
            </Link>
        </article>
    </header>
  )
}
