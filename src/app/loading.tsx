import { Montserrat, Poppins } from "next/font/google"
const montserrat = Montserrat({subsets: ['latin'], weight: ["700", "500"]})
const poppins = Poppins({subsets: ['latin'], weight: "500"})

export default function LoadingPage() {
    return (
        <section className="flex flex-col items-center justify-center text-center h-screen w-screen">
            <h2 className={`${montserrat.className} text-md font-semibold`}>GroundUp<span className={poppins.className}>MVP</span></h2>
            <h3 className={`${montserrat.className} text-3xl`}>Please wait...</h3>
        </section>
    )
}