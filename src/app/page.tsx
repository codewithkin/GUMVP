import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Pricing from "@/components/Pricing";
import Process from "@/components/Process";
import Why from "@/components/Why";

export default async function Home () {

  return (
    <section>
      <Header />
      <Process />
      <Why />
      <Pricing />
      <FAQ />
      <Footer />
    </section>
  )
}