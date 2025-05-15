import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { SpecialistsSection } from "@/components/specialists-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { LocationSection } from "@/components/location-section"
import { SiteFooter } from "@/components/site-footer"
import { WhatsappButton } from "@/components/whatsapp-button"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <SpecialistsSection />
        <TestimonialsSection />
        <LocationSection />
      </main>
      <SiteFooter />
      <WhatsappButton />
    </div>
  )
}
