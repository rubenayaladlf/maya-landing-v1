import type React from "react"
import Header from "./Header"
import Hero from "./Hero"
import Stats from "./Stats"
import Process from "./Process"
import Testimonial from "./Testimonial"
import FAQ from "./FAQ"
import Blog from "./Blog"
import ContactForm from "./ContactForm"
import Footer from "./Footer"

const LandingPage: React.FC = () => {
  return (
    <div className="flex overflow-hidden flex-col items-center max-sm:hidden">
      <Header />
      <Hero />
      <Stats />
      <div className="w-full max-w-[1439px] min-h-[1938px] flex-shrink-0 rounded-[16px] bg-[#F1F1F1] flex flex-col items-center justify-start py-20 px-4 gap-20">
        <Process />
        <Testimonial />
      </div>
      <FAQ />
      <Blog />
      <div className="w-full bg-[#FF712B]">
        <ContactForm />
        <Footer />
      </div>
    </div>
  )
}

export default LandingPage

