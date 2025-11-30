import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { ExperienceSection } from "@/components/experience-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen modern-bg">
      <Header />
      <HeroSection />
      <ServicesSection />
      <ExperienceSection />
      <CTASection />
      <Footer />
    </main>
  )
}
