import Link from "next/link";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["600"] });

export default function Why () {
    return (
        <section id="why" className="bg-secondaryDark flex flex-col gap-4 text-white md:py-40 py-20 px-10 md:px-20">
            {/* Heading and CTA */}
            <article className="md:flex md:justify-between grid gap-2 items-center">
                <h3 className={`${montserrat.className} text-2xl`}>Why choose GroundUpMvp for <br className="hidden md:block" /> your project ?</h3>

                <article className="grid gap-1">
                    <p className="text-white md:text-lg">70% of software projects fail due to lack of focus - we're <br className="hidden md:block" />here to change that</p>
                    <Link target="_blank" href="https://calendly.com/admin-groundupmvp/project" className="bg-white w-fit transition-all duration-300 hover:bg-primaryLight hover:text-primaryDark rounded-full font-semibold px-8 py-2 text-secondaryDark">
                        Book a call
                    </Link>
                </article>
            </article>

            {/* Reasons */}
            <article className="md:flex grid gap-4">
                <article className="rounded-xl flex flex-col px-8 py-4 bg-primaryLight text-charcoal">
                    <h2 className={`${montserrat.className} capitalize text-xl font-semubold`}>Expertise you can trust</h2>
                    <p>We are experts in software development having developed software for over 4 years ! Be it mobile apps, web apps or windows app, we can do it all !</p>
                </article>
                <article className="rounded-xl flex flex-col px-8 py-4 bg-white text-charcoal">
                    <h2 className={`${montserrat.className} capitalize text-xl font-semubold`}>Tailored to your needs</h2>
                    <p>Your business is unique, and so is your MVP ! We create solutions designed around
                        your goals, audience and challenged. Whether it's a web or mobile app..it's crafted for maximum impact and personalisation
                    </p>
                </article>
            </article>
            <article className="rounded-xl flex flex-col px-8 py-4 bg-white text-charcoal">
                <h2 className={`${montserrat.className} capitalize text-xl font-semibold`}>Transparent Pricing</h2>
                <p>
                    We understand startups need clarity. Our pricing is straightforward, with no hidden fees or surprises. Choose from tiered plans that suit 
                    your budget while ensuring premium results. From basic MVPs to advanced business solutions, you&apos;ll always know what you&apos;re paying for—and 
                    what you&apos;re getting. Transparency builds trust, and that&apos;s what we value most.
                </p>

                <article className="flex md:gap-8 gap-4 items-center my-4">
                    <article className="flex text-center flex-col items-center justify-center">
                        <h3 className="text-3xl font-semibold text-center">100%</h3>
                        <p className="text-charcoal font-semibold">Step-by-step guidance</p>
                    </article>
                    <article className="flex  text-center flex-col items-center justify-center">
                        <h3 className="text-3xl font-semibold text-center">21 Days</h3>
                        <p className="text-charcoal font-semibold">Design to Deployment</p>
                    </article>
                    <article className="flex  text-center flex-col items-center justify-center">
                        <h3 className="text-3xl font-semibold text-center">50 hrs</h3>
                        <p className="text-charcoal font-semibold">Free Support </p>
                    </article>
                </article>
            </article>
            <article className="md:flex grid gap-4">
                <article className="rounded-xl flex flex-col px-8 py-4 bg-white text-charcoal">
                    <h2 className={`${montserrat.className} capitalize text-xl font-semubold`}>Ongoing Support</h2>
                    <p>Launching your MVP is just the beginning. We provide extensive free post-launch support and affordable options for continued maintainance</p>
                </article>
                <article className="rounded-xl flex flex-col px-8 py-4 bg-primaryLight text-charcoal">
                    <h2 className={`${montserrat.className} capitalize text-xl font-semubold`}>Fast Delivery</h2>
                    <p>
                        Planning, Designing, Developing and Deploying your project in 21 days or less. We guarantee to have your project up and running in record time. 
                        It no longer takes 2 years to build an awesome software, we can do it much faster, for much less
                    </p>
                </article>
            </article>
        </section>
    )
}