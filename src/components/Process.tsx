import { Montserrat } from "next/font/google";
import { steps, Step } from "@/data/steps";
import Link from "next/link";
import { ArrowRight, Palette, PenTool, Ruler, Workflow } from "lucide-react";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["600"] });

export default function Process() {
    return (
        <section className="flex flex-col justify-center items-center py-12 gap-4 px-10">
            <h2 className={`${montserrat.className} text-2xl text-center`}>Our 4 step process to build your MVP</h2>

            {/* Steps flex container */}
            <article className="md:flex gap-4 items-center justify-center grid">

                {
                    steps.map((step: Step) => {
                        const { title, description, imageUrl } = step;
                        if(step.title === "Design Phase") {
                            return (
                                <article className="bg-charcoal border-3 border-primaryLight shadow-xl shadow-primaryLight p-8 rounded-xl gap-2 text-white">
                                    <h2 className="text-2xl font-semibold">{title}</h2>
                                    <p className="text-[#c4c4c4]">{description}</p>

                                    {/* CTA */}
                                    <Link className="text-primaryLight flex gap-2 items-center" href="https://calendly.com/admin-groundupmvp/project">
                                        Let's discuss your project
                                        <ArrowRight size={16} />
                                    </Link>

                                    {/* Figma, creatie icon */}
                                    <article className="flex gap-2 items-center mt-2">
                                        <PenTool size={20} />
                                        <Ruler size={20} />
                                        <Palette size={20} />
                                    </article>
                                </article>
                            )
                        } else {
                            return (
                                <article className="bg-white shadowe-xl border border-2 border-charcoal p-8 rounded-xl gap-2">
                                    <h2 className="text-2xl font-semibold text-charcoal">{title}</h2>
                                    <p className="text-charcoal">{description}</p>

                                    {/* CTA */}
                                    <Link className="text-secondaryDark flex gap-2 items-center" href="https://calendly.com/admin-groundupmvp/project">
                                        Learn more
                                        <ArrowRight size={16} />
                                    </Link>
                                </article>
                            )
                        }
                    })
                }
            </article>
        </section>
    )
}