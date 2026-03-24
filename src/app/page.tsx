import { Navbar } from '@/components/sections/Navbar'
import { Hero } from '@/components/sections/Hero'
import { TrustBar } from '@/components/sections/TrustBar'
import { FeaturedTestimonial } from '@/components/sections/FeaturedTestimonial'
import { HowItWorks } from '@/components/sections/HowItWorks'
import { Services } from '@/components/sections/Services'
import { Gallery } from '@/components/sections/Gallery'
import { Testimonials } from '@/components/sections/Testimonials'
import { About } from '@/components/sections/About'
import { Contact } from '@/components/sections/Contact'
import { Footer } from '@/components/sections/Footer'
import { StickyMobileCta } from '@/components/sections/StickyMobileCta'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pb-16 sm:pb-0">
        <Hero />
        <TrustBar />
        <FeaturedTestimonial />
        <HowItWorks />
        <Services />
        <Gallery />
        <Testimonials />
        <About />
        <Contact />
      </main>
      <Footer />
      <StickyMobileCta />
    </>
  )
}
