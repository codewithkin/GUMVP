"use client";
import { Montserrat } from "next/font/google";
import Link from "next/link";
import { questionsAndAnswers } from "@/data/questions-and-answers";
import QA from "./ui/QA";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["600"] });

export default function FAQ () {
    return (
        <section id="faq" className="flex flex-col justify-center items-center py-12 gap-4 px-10 bg-secondaryDark text-white">
            <article className="flex flex-col justify-center items-center gap-2 text-center">
                <article>
                    <h2 className={`${montserrat.className} text-2xl text-center`}>Frequently Asked Questions</h2>
                    <p className="text-md text-dull">Quick and digestable answers to your most pressing questions, we reply within 24 hours.</p>
                </article>
                <Link href="" className="bg-charcoal text-white rounded-full px-8 py-2 flex justify-center items-center border border-primaryLight w-fit">Book a call</Link>
            </article>

            {/* Questions */}
            <article className="grid gap-2 w-full sm:px-10 md:px-20 lg:px-32">
                {
                    questionsAndAnswers.map((qa, index) => (
                        <QA key={index} question={qa.question} answer={qa.answer} />
                    ))
                }
            </article>
        </section>
    )
}