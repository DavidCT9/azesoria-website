import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { ExperienceSection } from "@/components/experience-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "A-ZESORIA",
  url: "https://a-zesoria.com",
  email: "clientes@a-zesoria.com",
  description:
    "Consultoría industrial para diagnóstico operacional, localización de plantas y CEDIS e implementación de mejoras con inteligencia artificial.",
  areaServed: "MX",
  serviceType: [
    "Consultoría industrial",
    "Diagnóstico operacional con inteligencia artificial",
    "Localización estratégica de plantas",
    "Implementación de CEDIS",
  ],
}

export default function Home() {
  return (
    <main className="min-h-screen modern-bg">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <Header />
      <HeroSection />
      <ServicesSection />
      <ExperienceSection />
      <CTASection />
      <Footer />
    </main>
  )
}
