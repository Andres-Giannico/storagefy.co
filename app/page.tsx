import Hero from '@/components/sections/Hero'
import Features from '@/components/sections/Features'
import UseCases from '@/components/sections/UseCases'
import Testimonials from '@/components/sections/Testimonials'
import Pricing from '@/components/sections/Pricing'
import FinalCTA from '@/components/sections/FinalCTA'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <UseCases />
      <Testimonials />
      <Pricing />
      <FinalCTA />
    </div>
  )
}

